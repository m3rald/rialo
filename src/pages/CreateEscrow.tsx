import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEscrows } from '../context/EscrowContext';
import { useAccount } from 'wagmi';
import { Lock, Plus } from 'lucide-react';
import { Escrow } from '../types';

export function CreateEscrow() {
  const { addEscrow } = useEscrows();
  const { address } = useAccount();
  const navigate = useNavigate();

  const handleCreateEscrow = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newEscrow: Escrow = {
      id: Math.random().toString(36).substr(2, 9),
      buyer: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'You',
      seller: formData.get('seller') as string,
      amount: `${formData.get('amount')} RIALO`,
      status: 'PENDING',
      description: formData.get('description') as string,
      createdAt: Date.now(),
    };
    addEscrow(newEscrow);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-background p-8 rounded-3xl shadow-2xl border border-primary/10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Create New Escrow</h2>
          <button onClick={() => navigate(-1)} className="text-foreground/40 hover:text-primary">
            <Plus className="rotate-45" size={24} />
          </button>
        </div>
        <form onSubmit={handleCreateEscrow} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-foreground/40">Seller Address</label>
            <input 
              name="seller"
              required
              placeholder="0x..." 
              className="w-full px-4 py-3 bg-primary/5 border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-foreground/40">Amount (RIALO)</label>
            <input 
              name="amount"
              type="number"
              required
              placeholder="0.00" 
              className="w-full px-4 py-3 bg-primary/5 border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-foreground/40">Description</label>
            <textarea 
              name="description"
              required
              rows={3}
              placeholder="Describe the goods or services..." 
              className="w-full px-4 py-3 bg-primary/5 border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold shadow-lg shadow-primary/30 hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <Lock size={20} />
            Deposit & Lock Funds
          </button>
        </form>
      </div>
    </div>
  );
}
