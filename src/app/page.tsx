'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ARTICLES } from "@/lib/content";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredArticles = ARTICLES.slice(0, 3);
  const heroArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];

  return (
    <div className="flex flex-col overflow-hidden">
      <main className="flex-1">
        <section className="relative bg-secondary/30 py-24 md:py-36 overflow-hidden">
          {heroArticle.imageUrl && (
            <div className="absolute inset-0 z-0 opacity-20">
              <Image 
                src={heroArticle.imageUrl}
                alt="Background"
                fill
                className="object-cover blur-sm scale-105"
                priority
              />
            </div>
          )}
          <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,var(--color-primary),transparent)]" />
          <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl font-serif font-bold tracking-tight sm:text-7xl md:text-8xl text-foreground"
            >
              Straight Hope
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 mx-auto max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed font-sans"
            >
              The virtual recovery newsletter of the Montgomery Area of Narcotics Anonymous. 
              Grounded in hope, growing in unity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              <Button size="lg" className="rounded-full px-10 py-7 text-lg shadow-lg hover:shadow-primary/20 transition-all" asChild>
                <Link href="/articles">Read Latest Issue</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg bg-background/50 backdrop-blur-sm" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="articles" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Featured Articles</h2>
                <div className="mt-4 h-1 w-20 bg-accent rounded-full" />
                <p className="mt-6 text-xl text-muted-foreground">Insights and stories from the November 2026 edition.</p>
              </div>
              <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary/80 group" asChild>
                <Link href="/articles">
                  View all articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full flex flex-col border-none bg-secondary/20 transition-all hover:bg-secondary/40 hover:scale-[1.02] shadow-sm hover:shadow-xl overflow-hidden">
                    {article.imageUrl && (
                      <div className="relative w-full overflow-hidden h-64">
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-4">
                      <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                        {article.category}
                      </div>
                      <CardTitle className="text-3xl font-serif leading-tight group-hover:text-primary transition-colors">{article.title}</CardTitle>
                      <CardDescription className="font-medium text-muted-foreground/80">{article.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-6 border-t border-border/50">
                      <Button variant="link" size="sm" className="px-0 text-lg font-bold text-primary hover:no-underline group/btn" asChild>
                        <Link href={`/articles/${article.slug}`}>
                          Read More <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center md:hidden">
              <Button variant="outline" className="w-full py-6 text-lg rounded-xl" asChild>
                <Link href="/articles">View all articles <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-primary" />
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center text-primary-foreground">
            <h2 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl">Stay Connected</h2>
            <p className="mt-6 text-xl text-primary-foreground/90 max-w-xl mx-auto font-sans leading-relaxed">
              Join our mailing list to receive the Straight Hope newsletter directly in your inbox.
            </p>
            <form className="mt-12 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-14 w-full rounded-xl border-none bg-background px-6 py-2 text-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent outline-none"
                aria-label="Email address"
                required
              />
              <Button size="lg" className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl font-bold text-lg shadow-lg">
                <Mail className="mr-2 h-5 w-5" /> Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
