import React from 'react';
import type { Metadata } from 'next';
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  Mail, 
  ArrowRight,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — QuickTools',
  description: 'Learn about QuickTools, our mission to provide fast, private, and simple online utilities for everyone.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Fast By Default',
      description: 'We believe you shouldn&apos;t have to wait for an ad-infested page to compress a simple document. Our utilities are engineered for instant execution.',
      icon: Zap,
    },
    {
      title: 'Absolute Privacy',
      description: 'QuickTools performs computations client-side in your own browser whenever possible. Files never touch a remote server without explicit request.',
      icon: Lock,
    },
    {
      title: 'Clean Craftsmanship',
      description: 'Zero deceptive download buttons, zero popups, and zero malicious redirects. We hold ourselves to modern SaaS design standards.',
      icon: ShieldCheck,
    },
    {
      title: 'Accessible to Everyone',
      description: 'Utilities should be free, open, and work on any modern device — desktop, tablet, and mobile with zero software installation.',
      icon: Globe,
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-14 max-w-3xl mx-auto">
      {/* Hero */}
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          About Us
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Simple tools. Powerful results.
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          QuickTools fixes the broken landscape of bloated, ad-cluttered online utilities with a modern, lightning-fast, and privacy-respecting product.
        </p>
      </div>

      {/* Values Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white text-center">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="p-8 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-center">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-2xs shadow-blue-500/20">
          <Mail className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 max-w-md mx-auto">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Have feedback or a tool suggestion?</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We are actively developing new tools and would love to hear what utilities would make your day easier.
          </p>
        </div>
        <div className="pt-2">
          <a
            href="mailto:support@quicktools.dev"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            support@quicktools.dev
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
