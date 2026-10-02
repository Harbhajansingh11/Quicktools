export type CategoryId = 
  | 'pdf'
  | 'image'
  | 'document'
  | 'qr'
  | 'developer'
  | 'utilities';

export interface ToolCategory {
  id: CategoryId;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  toolCount: number;
  featured?: boolean;
}

export interface ToolItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categoryId: CategoryId;
  categoryName: string;
  iconName: string;
  route: string;
  isPopular?: boolean;
  isNew?: boolean;
  status: 'available' | 'coming-soon' | 'beta';
  tags: string[];
  features?: string[];
  estimatedTime?: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}
