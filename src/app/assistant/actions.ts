'use server';

import { knowledgeEngine } from '@/backend/knowledge/engine';

export async function askAssistant(question: string) {
  try {
    const result = await knowledgeEngine.ask(question);

    if (!result || result.confidenceScore === 0) {
      return {
        success: true,
        answer: 'No official Rockstar information is currently available.',
        confidenceScore: 0,
        citations: [],
        relatedEntities: [],
      };
    }

    return {
      success: true,
      answer: result.answer,
      confidenceScore: result.confidenceScore,
      citations: result.citations || [],
      relatedEntities: result.relatedEntities || [],
    };
  } catch (err: any) {
    console.error('AI Assistant Query Error:', err);
    return {
      success: false,
      answer: 'Failed to retrieve assistant facts. Leonida database connection error.',
      confidenceScore: 0,
      citations: [],
      relatedEntities: [],
    };
  }
}
