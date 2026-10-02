import type { Metadata } from 'next';
import { ToolsCatalog } from '@/components/tools/ToolsCatalog';

export const metadata: Metadata = {
  title: 'All Tools — QuickTools',
  description: 'Explore the full directory of fast, free online tools for PDFs, images, documents, QR codes, and developer utilities.',
};

export default function ToolsPage() {
  return <ToolsCatalog />;
}
