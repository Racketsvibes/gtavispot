import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // 1. Try to add to Resend Audience if Audience ID is set
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    let addedToAudience = false;

    if (audienceId) {
      try {
        const audResponse = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            email: email,
            unsubscribed: false,
          }),
        });

        if (audResponse.ok) {
          addedToAudience = true;
        } else {
          const audData = await audResponse.json();
          console.warn('Failed to add to Resend Audience:', audData);
        }
      } catch (err) {
        console.error('Error adding to Resend Audience list:', err);
      }
    }

    // 2. Send email notification to gtavispot@gmail.com
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'GTA Vi Spot Newsletter <onboarding@resend.dev>',
        to: 'gtavispot@gmail.com',
        subject: `[Newsletter] New Subscriber - ${email}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #d6246e; margin-top: 0;">New Newsletter Subscription</h2>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p>You have a new subscriber for the GTA Vi Spot newsletter!</p>
            <p><strong>Subscriber Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Added to Resend Audience:</strong> ${addedToAudience ? 'Yes' : 'No (Audience ID not configured or verified)'}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 0.8rem; color: #777; margin-bottom: 0;">Sent via GTA Vi Spot newsletter form.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API Error:', data);
      return NextResponse.json(
        { error: data.message || 'Failed to register subscription' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, addedToAudience });
  } catch (error: any) {
    console.error('Newsletter Route Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
