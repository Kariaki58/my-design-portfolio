'use server';

/**
 * @fileOverview Provides insights on how to improve a portfolio website's design, SEO, and copywriting.
 *
 * - analyzePortfolio - A function that analyzes a portfolio website and returns personalized feedback.
 * - AnalyzePortfolioInput - The input type for the analyzePortfolio function.
 * - AnalyzePortfolioOutput - The return type for the analyzePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePortfolioInputSchema = z.object({
  websiteUrl: z
    .string()
    .url()
    .describe('The URL of the portfolio website to analyze.'),
});
export type AnalyzePortfolioInput = z.infer<typeof AnalyzePortfolioInputSchema>;

const AnalyzePortfolioOutputSchema = z.object({
  designInsights: z.string().describe('Insights on how to improve the website design.'),
  seoInsights: z.string().describe('Insights on how to improve the website SEO.'),
  copywritingInsights: z.string().describe('Insights on how to improve the website copywriting.'),
  overallScore: z
    .number()
    .describe('An overall score of the website based on best practices (0-100).'),
});
export type AnalyzePortfolioOutput = z.infer<typeof AnalyzePortfolioOutputSchema>;

export async function analyzePortfolio(input: AnalyzePortfolioInput): Promise<AnalyzePortfolioOutput> {
  return analyzePortfolioFlow(input);
}

const analyzePortfolioPrompt = ai.definePrompt({
  name: 'analyzePortfolioPrompt',
  input: {schema: AnalyzePortfolioInputSchema},
  output: {schema: AnalyzePortfolioOutputSchema},
  prompt: `You are an expert web development portfolio analyst. Analyze the provided website URL and provide personalized feedback on how to improve the design, SEO, and copywriting based on web development portfolio best practices. Also, provide an overall score of the website based on these best practices (0-100).

Website URL: {{{websiteUrl}}}

Respond with the following JSON format:
{
  "designInsights": "Insights on how to improve the website design.",
  "seoInsights": "Insights on how to improve the website SEO.",
  "copywritingInsights": "Insights on how to improve the website copywriting.",
  "overallScore": 85
}`,
});

const analyzePortfolioFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioFlow',
    inputSchema: AnalyzePortfolioInputSchema,
    outputSchema: AnalyzePortfolioOutputSchema,
  },
  async input => {
    const {output} = await analyzePortfolioPrompt(input);
    return output!;
  }
);
