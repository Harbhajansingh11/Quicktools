import React from 'react';
import {
  FileText,
  Image,
  Files,
  QrCode,
  Code,
  Wrench,
  Minimize2,
  FilePlus2,
  Split,
  FileType,
  FileDown,
  RefreshCw,
  Zap,
  MousePointerClick,
  Shield,
  Laptop,
  Search,
  UploadCloud,
  Download,
  FileImage,
  Layers,
  Code2,
  Binary,
  ShieldCheck,
  Scale,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Maximize2,
  LucideProps,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  FileText,
  Image,
  Files,
  QrCode,
  Code,
  Wrench,
  Minimize2,
  FilePlus2,
  Split,
  FileType,
  FileDown,
  RefreshCw,
  Zap,
  MousePointerClick,
  Shield,
  Laptop,
  Search,
  UploadCloud,
  Download,
  FileImage,
  Layers,
  Code2,
  Binary,
  ShieldCheck,
  Scale,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Maximize2,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = ICON_MAP[name] || Sparkles;
  return <IconComponent {...props} />;
}
