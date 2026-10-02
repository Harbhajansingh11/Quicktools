import React from 'react';
import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — QuickTools',
  description: 'Review the QuickTools Terms of Service and acceptable use policies.',
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16 max-w-3xl mx-auto space-y-10">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Legal Agreement
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using QuickTools (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Acceptable Use</h2>
          <p>
            You agree to use QuickTools solely for lawful purposes. You must not attempt to upload malicious software, viruses, exploit automated tool execution to launch denial-of-service attacks, or process unauthorized intellectual property.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Intellectual Property Ownership</h2>
          <p>
            You retain 100% full ownership, rights, and title to all documents, images, and text processed through QuickTools. QuickTools claims no ownership or license over your user data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. Service Availability & Disclaimers</h2>
          <p>
            QuickTools is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind. While we strive for 99.9% uptime and accurate results, we make no guarantees that the service will meet your specific business requirements or operate without interruption.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, QuickTools and its maintainers shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform.
          </p>
        </section>
      </div>
    </div>
  );
}
