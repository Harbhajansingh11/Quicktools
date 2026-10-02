import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Lock, EyeOff, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — QuickTools',
  description: 'Learn how QuickTools protects your data and privacy with client-side in-browser file processing.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 max-w-3xl mx-auto space-y-10">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Legal & Privacy
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
          <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mb-2" />
          <h2 className="text-xs font-bold text-slate-900 dark:text-white">Local Processing</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Files are computed in your browser using WebAssembly.</p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
          <EyeOff className="w-4 h-4 text-blue-600 dark:text-blue-400 mb-2" />
          <h2 className="text-xs font-bold text-slate-900 dark:text-white">Zero File Inspection</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">We never inspect, retain, or train models on user files.</p>
        </div>
        <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
          <Server className="w-4 h-4 text-purple-600 dark:text-purple-400 mb-2" />
          <h2 className="text-xs font-bold text-slate-900 dark:text-white">No Permanent Storage</h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">No uploads are preserved on any remote disk.</p>
        </div>
      </div>

      <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Information We Do Not Collect</h2>
          <p>
            QuickTools is built to minimize data collection. Unlike typical file conversion sites, we do not require user accounts for core utilities and do not harvest personal information. When you use tools such as our Image Resizer, QR Generator, or PDF utilities, the processing takes place locally on your computer or mobile device.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. How File Processing Works</h2>
          <p>
            Whenever technologically possible, your documents, images, and text never leave your browser sandbox. When server-side processing is necessary for complex formats, files are transmitted through encrypted HTTPS channels, held in isolated temporary memory, and permanently discarded immediately after processing is complete.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Analytics and Performance</h2>
          <p>
            We collect anonymized, aggregated telemetry to understand which utilities are popular and detect operational failures (e.g., error rates, page load speeds). We do not correlate your IP address or session with your file contents.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. Third-Party Sharing</h2>
          <p>
            We will never sell, lease, or monetize your documents or personal data to advertisers, data brokers, or third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">5. Contact Our Privacy Team</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to inquire about our data practices, contact us at <a href="mailto:privacy@quicktools.dev" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@quicktools.dev</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
