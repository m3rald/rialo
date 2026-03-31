import { 
  Code, 
  Palette, 
  PenTool, 
  Megaphone, 
  Scale, 
  ShoppingCart, 
  Cpu, 
  Video,
  Globe,
  ShieldCheck
} from 'lucide-react';

export interface Category {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  heroImage: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: '1',
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Secure escrow for full-stack, frontend, and backend development projects.',
    fullDescription: 'Our Web Development directory connects businesses with top-tier developers. Every project is protected by RIALO Escrow, ensuring that milestones are met and code is delivered before funds are released.',
    icon: Code,
    heroImage: 'https://picsum.photos/seed/webdev/1200/600',
    features: [
      'Custom React/Next.js Development',
      'API Integration & Backend Systems',
      'E-commerce Platform Building',
      'Performance Optimization',
      'Progressive Web Apps (PWA)'
    ],
    benefits: [
      'Milestone-based payments',
      'Code review verification before release',
      'Protection against scope creep',
      'Secure source code handover'
    ],
    useCases: [
      'SaaS Startups',
      'Corporate Portals',
      'Online Marketplaces'
    ]
  },
  {
    id: '2',
    slug: 'graphic-design',
    title: 'Graphic Design',
    shortDescription: 'Professional branding, logo design, and UI/UX creative services.',
    fullDescription: 'Visual identity is the heart of your brand. Our designers provide everything from logo creation to complete UI/UX overhauls, all backed by a secure payment process that protects your creative investment.',
    icon: Palette,
    heroImage: 'https://picsum.photos/seed/design/1200/600',
    features: [
      'Logo & Brand Identity',
      'UI/UX Design for Mobile & Web',
      'Marketing Collateral',
      'Social Media Graphics',
      '3D Illustration & Rendering'
    ],
    benefits: [
      'Copyright transfer verification',
      'Revision cycle protection',
      'High-resolution asset delivery',
      'Direct communication with creators'
    ],
    useCases: [
      'Brand Re-launch',
      'App Interface Design',
      'Advertising Campaigns'
    ]
  },
  {
    id: '3',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'SEO, SEM, and social media strategy with guaranteed results.',
    fullDescription: 'Grow your online presence with data-driven marketing strategies. Our experts handle SEO, PPC, and social media management, with escrow protection ensuring that your marketing budget translates into real growth.',
    icon: Megaphone,
    heroImage: 'https://picsum.photos/seed/marketing/1200/600',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Management',
      'Content Marketing Strategy',
      'Email Marketing Automation',
      'Analytics & Reporting'
    ],
    benefits: [
      'Performance-based release',
      'Transparent ad spend tracking',
      'Verified lead generation',
      'Strategic alignment'
    ],
    useCases: [
      'Product Launches',
      'Lead Generation',
      'Brand Awareness'
    ]
  },
  {
    id: '4',
    slug: 'blockchain-dev',
    title: 'Blockchain Solutions',
    shortDescription: 'Smart contract audits, DApp development, and Web3 integration.',
    fullDescription: 'The future is decentralized. Hire experts for smart contract development, security audits, and full Web3 stack integration with the peace of mind that only RIALO Escrow can provide.',
    icon: ShieldCheck,
    heroImage: 'https://picsum.photos/seed/blockchain/1200/600',
    features: [
      'Solidity Smart Contracts',
      'DeFi Protocol Development',
      'NFT Marketplace Creation',
      'Security Audits',
      'Tokenomics Design'
    ],
    benefits: [
      'Audit report verification',
      'Mainnet deployment security',
      'On-chain milestone tracking',
      'Expert technical vetting'
    ],
    useCases: [
      'DeFi Startups',
      'NFT Projects',
      'DAO Governance'
    ]
  },
  {
    id: '5',
    slug: 'content-writing',
    title: 'Content Writing',
    shortDescription: 'High-quality copywriting, technical writing, and SEO articles.',
    icon: PenTool,
    fullDescription: 'Words that sell. Our writers specialize in technical documentation, blog posts, and high-converting sales copy.',
    heroImage: 'https://picsum.photos/seed/writing/1200/600',
    features: ['Technical Docs', 'SEO Articles', 'Sales Copy'],
    benefits: ['Plagiarism checks', 'Tone matching', 'SEO optimization'],
    useCases: ['Tech Blogs', 'Whitepapers', 'Landing Pages']
  },
  {
    id: '6',
    slug: 'legal-consulting',
    title: 'Legal Consulting',
    shortDescription: 'Contract review, compliance advice, and intellectual property.',
    icon: Scale,
    fullDescription: 'Navigate the legal landscape with expert advice on contracts, IP, and regulatory compliance.',
    heroImage: 'https://picsum.photos/seed/legal/1200/600',
    features: ['Contract Review', 'IP Protection', 'Compliance'],
    benefits: ['Expert vetting', 'Confidentiality', 'Fixed-fee clarity'],
    useCases: ['Startups', 'M&A', 'Licensing']
  },
  {
    id: '7',
    slug: 'ecommerce-goods',
    title: 'E-commerce Goods',
    shortDescription: 'Secure escrow for wholesale and high-value physical products.',
    icon: ShoppingCart,
    fullDescription: 'Trade physical goods globally with confidence. Funds are held until shipping is verified.',
    heroImage: 'https://picsum.photos/seed/goods/1200/600',
    features: ['Wholesale Bulk', 'Luxury Items', 'Electronics'],
    benefits: ['Shipping verification', 'Quality inspection', 'Fraud protection'],
    useCases: ['B2B Trade', 'Dropshipping', 'Collectibles']
  },
  {
    id: '8',
    slug: 'video-production',
    title: 'Video Production',
    shortDescription: 'Professional video editing, animation, and motion graphics.',
    icon: Video,
    fullDescription: 'Cinematic quality for your brand. From social media clips to full-length documentaries.',
    heroImage: 'https://picsum.photos/seed/video/1200/600',
    features: ['Video Editing', 'Motion Graphics', 'Color Grading'],
    benefits: ['Render verification', 'Asset handover', 'Revision cycles'],
    useCases: ['Adverts', 'YouTube', 'Internal Comms']
  }
];
