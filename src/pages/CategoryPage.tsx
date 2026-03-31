import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layout, 
  Plus 
} from 'lucide-react';
import { motion } from 'motion/react';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const category = CATEGORIES.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Category not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-primary hover:underline">Go back home</button>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] rounded-[40px] overflow-hidden border border-primary/10 shadow-2xl">
        <img 
          src={category.heroImage} 
          alt={category.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-8 hover:-translate-x-1 transition-transform"
          >
            <ArrowLeft size={16} />
            Back to Directory
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20">
              <category.icon size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
              {category.title.toUpperCase()}
            </h1>
          </div>
          <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed">
            {category.fullDescription}
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
              <Layout className="text-primary" size={28} />
              KEY SERVICES & FEATURES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.features.map((feature, i) => (
                <div key={i} className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex items-center gap-4 group hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Zap size={20} />
                  </div>
                  <span className="font-bold text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="space-y-6">
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
              <ShieldCheck className="text-primary" size={28} />
              COMMON USE CASES
            </h2>
            <div className="space-y-4">
              {category.useCases.map((useCase, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-primary/10">
                  <CheckCircle2 className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{useCase}</h4>
                    <p className="text-foreground/40 text-sm">
                      Securely manage payments for {useCase.toLowerCase()} projects with verified milestones and proof of delivery.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/10 sticky top-24">
            <h3 className="text-xl font-black tracking-tight mb-6 uppercase">Benefits of RIALO</h3>
            <ul className="space-y-4 mb-8">
              {category.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/60">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link 
              to="/create" 
              className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black text-center flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
            >
              <Plus size={20} />
              START PROJECT NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery / Visual Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black tracking-tight">VISUAL PORTFOLIO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video rounded-3xl overflow-hidden border border-primary/10 group">
              <img 
                src={`https://picsum.photos/seed/${category.slug}-${i}/800/600`} 
                alt="Portfolio" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
