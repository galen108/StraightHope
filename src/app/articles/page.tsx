'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ARTICLES } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticlesPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-20 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-serif font-bold tracking-tight sm:text-6xl text-foreground">Newsletter Articles</h1>
          <div className="mt-6 h-1.5 w-24 bg-accent mx-auto rounded-full" />
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
            Insights and stories from the November 2026 edition of Straight Hope.
            Experience the journey of recovery through the eyes of our community.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full border-none bg-secondary/20 hover:bg-secondary/40 transition-all shadow-sm hover:shadow-xl hover:scale-[1.02] group overflow-hidden">
                {article.imageUrl && (
                  <div className={`relative w-full overflow-hidden ${article.id === '2' || article.id === '3' ? 'flex items-center justify-center bg-secondary/10 h-56' : 'h-56'}`}>
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className={`${article.id === '2' || article.id === '3' ? 'rotate-90 object-contain' : 'object-cover'}`}
                    />
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {article.category}
                  </div>
                  <CardTitle className="text-3xl font-serif group-hover:text-primary transition-colors">{article.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-muted-foreground/80">{article.date} • By {article.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-2">
                  <p className="text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-6 border-t border-border/50">
                  <Button variant="outline" className="w-full py-6 text-lg rounded-xl font-bold bg-background/50 hover:bg-primary hover:text-primary-foreground border-primary/20 transition-all group/btn" asChild>
                    <Link href={`/articles/${article.slug}`}>
                      Read Article <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
