import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  History, 
  User, 
  ArrowRight, 
  Scale, 
  Plus,
  Search,
  Filter,
  Globe
} from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CONFIG } from '../config';
import { cn } from '../lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navItems = [
    { id: 'directory', label: 'Service Directory', icon: Globe, path: '/' },
    { id: 'all', label: 'Escrow Dashboard', icon: History, path: '/escrows' },
    { id: 'buyer', label: 'My Purchases', icon: User, path: '/my-purchases' },
    { id: 'seller', label: 'My Sales', icon: ArrowRight, path: '/my-sales' },
    { id: 'disputes', label: 'Disputes', icon: Scale, path: '/disputes' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              <CONFIG.LogoIcon size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">{CONFIG.shortName} <span className="text-primary">ESCROW</span></span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <ConnectButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-background p-6 rounded-2xl border border-primary/10 shadow-xl shadow-primary/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/40 mb-4">Navigation</h3>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      location.pathname === item.path 
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                        : "text-foreground/60 hover:bg-primary/5"
                    )}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <Link 
              to="/create"
              className="w-full bg-background border-2 border-dashed border-primary/20 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-foreground/40 hover:border-primary hover:text-primary transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10">
                <Plus size={24} />
              </div>
              <span className="font-bold">New Escrow</span>
            </Link>

            {/* Test Token Faucet */}
            <div className="bg-background p-6 rounded-2xl border border-primary/10 shadow-xl shadow-primary/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/40 mb-4">Testnet Faucet</h3>
              <p className="text-xs text-foreground/40 mb-4">Get free RIALO test tokens to test the platform.</p>
              <button 
                onClick={() => alert('1000 RIALO test tokens sent to your wallet!')}
                className="w-full bg-primary/10 text-primary py-2 rounded-xl text-sm font-bold hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
              >
                <ArrowRight size={16} />
                Mint 1000 RIALO
              </button>
            </div>
          </aside>

          {/* Page Content */}
          <div className="lg:col-span-9">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-primary/10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <CONFIG.LogoIcon size={20} />
            <span className="font-bold tracking-tight uppercase">{CONFIG.name}</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-foreground/40">
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Smart Contract</a>
            <a href="#" className="hover:text-primary">Support</a>
          </div>
          <div className="text-sm text-foreground/40">
            © 2026 {CONFIG.shortName} Protocol. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
