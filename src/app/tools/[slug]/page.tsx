import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { TOOLS, getToolBySlug } from '@/data/tools';
import { ToolPlaceholder } from '@/components/tools/ToolPlaceholder';

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found — QuickTools',
      description: 'The requested utility could not be found on QuickTools.',
    };
  }

  return {
    title: `${tool.name} — QuickTools`,
    description: tool.shortDescription,
    openGraph: {
      title: `${tool.name} — QuickTools`,
      description: tool.shortDescription,
      type: 'website',
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return <ToolPlaceholder tool={tool} />;
}
