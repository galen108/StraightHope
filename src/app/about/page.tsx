'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Share2, Mail, ExternalLink, Heart, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-5xl px-4 py-20 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl font-serif font-bold tracking-tight sm:text-7xl mb-8 text-foreground">About Straight Hope</h1>
          <div className="mt-6 h-1.5 w-32 bg-accent mx-auto rounded-full" />
          <p className="mt-10 text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The virtual newsletter of the Montgomery Area of Narcotics Anonymous, serving the Chesapeake & Potomac Region.
          </p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-8 text-foreground flex items-center gap-4">
              <Heart className="text-primary h-8 w-8" /> Our Purpose
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                Straight Hope is dedicated to carrying the message of recovery to the addict who still suffers. Through personal stories, service announcements, and informational articles, we aim to provide hope and inspiration to our community.
              </p>
              <p>
                In our digital format, we strive to make this information accessible to everyone, ensuring that no one is left behind in their journey of recovery.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-primary/5">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Safe Space</h3>
                <p className="text-sm text-muted-foreground">A place for sharing experience, strength, and hope.</p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30 border border-primary/5">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Connecting addicts across the Montgomery Area.</p>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-secondary/40 p-10 rounded-3xl border border-primary/10 shadow-xl"
          >
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We are always looking for contributions, whether it's your personal story of recovery, a poem, or information about an upcoming event.
            </p>
            <div className="space-y-4">
              <Button className="w-full justify-start py-7 text-lg rounded-xl font-bold transition-all hover:translate-x-1" variant="outline" asChild>
                <a href="mailto:straighthope@cprna.org">
                  <Mail className="mr-4 h-6 w-6 text-primary" /> Email the Editor
                </a>
              </Button>
              <Button className="w-full justify-start py-7 text-lg rounded-xl font-bold transition-all hover:translate-x-1" variant="outline" asChild>
                <a href="https://www.cprna.org/our-areas/info/montgomery" target="_blank" rel="noopener noreferrer">
                  <Share2 className="mr-4 h-6 w-6 text-primary" /> Montgomery Area Website
                </a>
              </Button>
              <Button className="w-full justify-start py-7 text-lg rounded-xl font-bold transition-all hover:translate-x-1" variant="outline" asChild>
                <a href="https://www.cprna.org/straight-hope" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-4 h-6 w-6 text-primary" /> Newsletter Archive
                </a>
              </Button>
            </div>
          </motion.section>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center border-t border-border/50 pt-20"
        >
          <h2 className="text-4xl font-serif font-bold mb-12 text-foreground">Part of a Larger Fellowship</h2>
          <div className="flex flex-wrap justify-center gap-12 text-xl text-muted-foreground font-bold italic">
            <a href="https://www.cprna.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:no-underline">C&P Region</a>
            <a href="https://www.na.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:no-underline">NA World Services</a>
            <a href="https://www.cprna.org/meetings" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:no-underline">Find a Meeting</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
