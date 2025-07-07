"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { analyzePortfolio, type AnalyzePortfolioOutput } from "@/ai/flows/portfolio-analysis";
import { useToast } from "@/hooks/use-toast";

import { SectionHeader } from "../section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { PolarGrid, RadialBar, RadialBarChart } from "recharts";
import { Wand2, BrainCircuit, PencilRuler, SearchCheck, Loader2 } from "lucide-react";
import { MotionWrapper } from "../motion-wrapper";

const formSchema = z.object({
  websiteUrl: z.string().url({ message: "Please enter a valid URL." }),
});

const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export default function AiInsightsSection() {
  const [analysis, setAnalysis] = useState<AnalyzePortfolioOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzePortfolio(values);
      setAnalysis(result);
    } catch (error) {
      console.error("Analysis failed:", error);
      toast({
        title: "Analysis Failed",
        description: "Could not analyze the website. Please try another URL.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-insights" className="py-24 sm:py-32 bg-background/50">
      <div className="container">
        <SectionHeader
          title="AI-Powered Portfolio Analysis"
          subtitle="Get instant, personalized feedback on your own portfolio. See how it stacks up against best practices in design, SEO, and copywriting."
          className="mb-16"
        />
        <MotionWrapper>
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="text-accent" />
                <span>Portfolio Analyzer</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="websiteUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Website URL</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input placeholder="https://your-portfolio.com" {...field} />
                          </FormControl>
                          <Button type="submit" disabled={isLoading}>
                            {isLoading ? (
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                              "Analyze"
                            )}
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>

              {isLoading && (
                 <div className="mt-8 text-center">
                    <Loader2 className="mx-auto h-8 w-8 animate-spin text-accent" />
                    <p className="mt-2 text-muted-foreground">Analyzing your website... this may take a moment.</p>
                 </div>
              )}

              {analysis && (
                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Overall Score</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer
                                config={chartConfig}
                                className="mx-auto aspect-square h-[200px]"
                            >
                                <RadialBarChart
                                    data={[{ name: 'score', value: analysis.overallScore, fill: 'var(--color-score)' }]}
                                    startAngle={90}
                                    endAngle={-270}
                                    innerRadius="70%"
                                    outerRadius="90%"
                                >
                                    <PolarGrid
                                        gridType="circle"
                                        radialLines={false}
                                        stroke="none"
                                        className="fill-muted"
                                    />
                                    <RadialBar dataKey="value" background cornerRadius={10} />
                                </RadialBarChart>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-foreground">{analysis.overallScore}</span>
                                </div>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                  </div>
                  <div className="md:col-span-2">
                    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg"><PencilRuler className="mr-2 h-5 w-5 text-primary"/>Design Insights</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{analysis.designInsights}</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg"><SearchCheck className="mr-2 h-5 w-5 text-primary"/>SEO Insights</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{analysis.seoInsights}</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg"><BrainCircuit className="mr-2 h-5 w-5 text-primary"/>Copywriting Insights</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{analysis.copywritingInsights}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
}
