'use client';

import * as React from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ARTICLES } from "@/lib/content";
import { ChevronLeft, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 font-bold group" asChild>
            <Link href="/articles">
              <ChevronLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" /> Back to Articles
            </Link>
          </Button>
        </motion.div>

        <article>
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary">
              {article.category}
            </div>
            <h1 className="mb-8 text-5xl font-serif font-bold tracking-tight sm:text-7xl text-foreground leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-lg font-medium text-muted-foreground/80">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/50">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/50">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <span>By {article.author}</span>
              </div>
            </div>
            <div className="mt-10 h-1.5 w-32 bg-accent rounded-full" />
          </motion.header>

            {article.imageUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative w-full mb-16 rounded-3xl overflow-hidden bg-secondary/5 aspect-video"
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg prose-slate dark:prose-invert max-w-none"
          >
            <div className="text-2xl font-serif text-foreground leading-relaxed mb-12 border-l-4 border-accent pl-8 py-2 italic bg-secondary/10">
              {article.excerpt}
            </div>
            <div className="text-xl leading-relaxed space-y-8 text-muted-foreground">
              {article.content.split('\n').map((paragraph, index) => {
                if (!paragraph.trim()) return null;
                
                // Simple linkification for URLs and Emails
                const parts = paragraph.split(/(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g);
                return (
                  <p key={index} className="first-letter:text-4xl first-letter:font-serif first-letter:text-primary first-letter:mr-1 break-words">
                    {parts.map((part, i) => {
                      if (i % 2 === 1) {
                        const isEmail = part.includes('@') && !part.startsWith('http');
                        return (
                          <a 
                            key={i} 
                            href={isEmail ? `mailto:${part}` : part} 
                            target={isEmail ? undefined : "_blank"}
                            rel={isEmail ? undefined : "noopener noreferrer"} 
                            className="text-primary underline hover:text-primary/80 break-all"
                          >
                            {part}
                          </a>
                        );
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>

            {/* Additional Images Section */}
            {article.id === '1' && (
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-2xl shadow-sm border border-border/50 aspect-video">
                  <Image 
                    src="/images/newsletter/nov2026/image7.png" 
                    alt="Fellowship" 
                    fill
                    className="object-contain" 
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-sm border border-border/50 aspect-video">
                  <Image 
                    src="/images/newsletter/nov2026/image18.png" 
                    alt="Newsletter Section" 
                    fill
                    className="object-contain" 
                  />
                </div>
              </div>
            )}

            {article.id === '5' && (
              <div className="mt-16 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-sm border border-border/50 aspect-video">
                    <Image 
                      src="/images/newsletter/nov2026/image3.jpg" 
                      alt="Event 1" 
                      fill
                      className="object-contain" 
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-sm border border-border/50 aspect-video">
                    <Image 
                      src="/images/newsletter/nov2026/image9.jpg" 
                      alt="Event 2" 
                      fill
                      className="object-contain" 
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </article>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-border/50 pt-16"
        >
          <div className="bg-secondary/20 p-10 rounded-3xl border border-primary/10">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">About Straight Hope</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Straight Hope is a newsletter of the Montgomery Area of Narcotics Anonymous, serving the Chesapeake & Potomac Region. It provides a platform for addicts to share their experience, strength, and hope.
            </p>
            <Button size="lg" className="rounded-xl px-8 py-6 text-lg font-bold shadow-lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
