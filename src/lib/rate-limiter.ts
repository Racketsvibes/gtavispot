interface ClientLimit {
  tokens: number;
  lastRefill: number;
}

class RateLimiter {
  private clients = new Map<string, ClientLimit>();
  private readonly capacity = 60; // Max 60 requests
  private readonly refillRate = 1; // Refill 1 token per second

  /**
   * Evaluates if a client is rate limited using a Token Bucket algorithm.
   */
  public check(ip: string): { limited: boolean; limit: number; remaining: number; reset: number } {
    const now = Date.now();
    let client = this.clients.get(ip);

    if (!client) {
      client = { tokens: this.capacity, lastRefill: now };
      this.clients.set(ip, client);
    } else {
      const deltaSeconds = (now - client.lastRefill) / 1000;
      client.tokens = Math.min(this.capacity, client.tokens + deltaSeconds * this.refillRate);
      client.lastRefill = now;
    }

    if (client.tokens >= 1) {
      client.tokens -= 1;
      return {
        limited: false,
        limit: this.capacity,
        remaining: Math.floor(client.tokens),
        reset: Math.ceil((this.capacity - client.tokens) / this.refillRate),
      };
    }

    return {
      limited: true,
      limit: this.capacity,
      remaining: 0,
      reset: Math.ceil((this.capacity - client.tokens) / this.refillRate),
    };
  }
}

export const rateLimiter = new RateLimiter();
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return '127.0.0.1';
}
