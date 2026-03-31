import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { motion } from 'motion/react';

export function Directory() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[40px] bg-primary/5 p-12 md:p-20 border border-primary/10">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6 leading-[0.9]">
            PROFESSIONAL <br />
            <span className="text-primary">DIRECTORY</span>
          </h1>
          <p className="text-xl text-foreground/60 mb-8 leading-relaxed max-w-xl">
            Explore our curated catalog of escrow-protected services. Every professional listed here is verified and protected by the RIALO protocol.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/create" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
            >
              Start a Project
            </Link>
            <button className="bg-background border border-primary/20 text-foreground px-8 py-4 rounded-2xl font-bold hover:bg-primary/5 transition-colors">
              Learn How it Works
            </button>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </section>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center bg-background p-4 rounded-3xl border border-primary/10 shadow-xl shadow-primary/5">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={20} />
          <input 
            type="text" 
            placeholder="Search categories, services, or skills..." 
            className="w-full pl-12 pr-4 py-3 bg-primary/5 border border-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground placeholder:text-foreground/20"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary/5 border border-primary/10 rounded-2xl text-sm font-bold hover:bg-primary/10 transition-colors">
          <Filter size={18} />
          Filter Results
        </button>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link 
              to={`/category/${category.slug}`}
              className="group block h-full bg-background p-8 rounded-[32px] border border-primary/10 shadow-lg shadow-primary/5 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <category.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-foreground/40 text-sm leading-relaxed mb-6">
                {category.shortDescription}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                View Details
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-primary p-12 md:p-20 rounded-[40px] text-primary-foreground text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">READY TO GET STARTED?</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          Join thousands of professionals who use RIALO to secure their transactions and build trust globally.
        </p>
        <div className="pt-4">
          <Link 
            to="/create" 
            className="inline-block bg-primary-foreground text-primary px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            CREATE ESCROW NOW
          </Link>
        </div>
      </section>
    </div>
  );
}
