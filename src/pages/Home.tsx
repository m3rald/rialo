import React from 'react';
import { useEscrows } from '../context/EscrowContext';
import { EscrowCard } from '../components/EscrowCard';
import { Search, Filter } from 'lucide-react';
import { CONFIG } from '../config';

export function Home() {
  const { escrows } = useEscrows();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Secure Trading Platform</h1>
        <p className="text-foreground/60 max-w-2xl">
          {CONFIG.description}. Your funds are locked in smart contracts until both parties provide proof of transaction.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center bg-background p-4 rounded-2xl border border-primary/10 shadow-xl shadow-primary/5">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
          <input 
            type="text" 
            placeholder="Search by ID, description or address..." 
            className="w-full pl-10 pr-4 py-2 bg-primary/5 border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground placeholder:text-foreground/20"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-xl text-sm font-medium hover:bg-primary/10">
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* Escrow List */}
      <div className="space-y-4">
        {escrows.length === 0 ? (
          <div className="bg-background p-20 rounded-3xl border border-primary/10 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-foreground/20">
              <Search size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold">No transactions found</h3>
              <p className="text-foreground/40">Try adjusting your filters or create a new escrow.</p>
            </div>
          </div>
        ) : (
          escrows.map((escrow) => (
            <EscrowCard key={escrow.id} escrow={escrow} />
          ))
        )}
      </div>
    </div>
  );
}
