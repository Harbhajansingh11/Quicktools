import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing — QuickTools',
  description: 'Simple, transparent pricing. Use all essential tools 100% free forever, or upgrade for higher limits.',
};

export default function PricingPage() {
  const freeFeatures = [
    'Unlimited access to all essential tools',
    'Up to 50MB file size per conversion',
    '100% private in-browser processing',
    'Zero watermarks on any files',
    'No account registration needed',
    'Fast processing speeds',
  ];

  const proFeatures = [
    'Everything in Free',
    'Up to 1GB file size per operation',
    'Batch process up to 50 files simultaneously',
    'Dedicated priority processing engine',
    'Early access to new tools & beta features',
    'Custom branding & QR template save',
    'Priority email support',
  ];

  const faqs = [
    {
      q: 'Are the tools really free?',
      a: 'Yes! All core tools on QuickTools are completely free to use with generous file limits and zero watermarks. You do not even need to create an account.',
    },
    {
      q: 'What happens to my uploaded files?',
      a: 'Your privacy is our highest priority. The majority of our tools run entirely client-side inside your own browser using modern WebAssembly. Files never touch a remote server.',
    },
    {
      q: 'Can I cancel my Pro subscription anytime?',
      a: 'Yes, you can cancel your subscription at any time with one click from your billing portal without hidden cancellation fees.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-14 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Pricing
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Simple tools. Fair pricing.
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Start for free without signing up, or upgrade for extreme file sizes and batch workflows.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
        {/* Free Plan */}
        <div className="flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Starter</h3>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Free Forever
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Ideal for everyday tasks, quick conversions, and utilities.
            </p>

            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">$0</span>
              <span className="text-slate-400 text-xs ml-1.5">/ month</span>
            </div>

            <ul className="space-y-2.5 pt-5 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm">
              {freeFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Link
              href="/tools"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors"
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col justify-between p-6 sm:p-8 bg-slate-900 dark:bg-slate-900 text-white rounded-2xl border border-blue-500/40 shadow-xs relative">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white">Pro</h3>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Recommended
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              For power users and teams processing large files and batches.
            </p>

            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">$6</span>
              <span className="text-slate-400 text-xs ml-1.5">/ month, billed annually</span>
            </div>

            <ul className="space-y-2.5 pt-5 border-t border-slate-800 text-xs sm:text-sm">
              {proFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-slate-200">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Link
              href="/tools"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-semibold transition-colors"
            >
              Get Started with Pro
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="pt-8 max-w-2xl mx-auto space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
