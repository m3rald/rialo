import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, CheckCircle2, AlertCircle, History, User } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '../lib/utils';
import { Escrow } from '../types';

interface EscrowCardProps {
  escrow: Escrow;
}

export const EscrowCard: React.FC<EscrowCardProps> = ({ escrow }) => {
  return (
    <Link to={`/escrow/${escrow.id}`}>
      <motion.div 
        layout
        className="bg-background p-6 rounded-2xl border border-primary/10 shadow-lg shadow-primary/5 hover:border-primary/30 transition-all cursor-pointer group relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
              escrow.status === 'LOCKED' ? "bg-blue-500/10 text-blue-400" :
              escrow.status === 'RELEASED' ? "bg-green-500/10 text-green-400" :
              escrow.status === 'DISPUTED' ? "bg-red-500/10 text-red-400" :
              "bg-primary/10 text-primary"
            )}>
              {escrow.status === 'LOCKED' ? <Lock size={24} /> :
               escrow.status === 'RELEASED' ? <CheckCircle2 size={24} /> :
               escrow.status === 'DISPUTED' ? <AlertCircle size={24} /> :
               <History size={24} />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-foreground/20 uppercase tracking-widest">ID: {escrow.id}</span>
                <span className={cn(
                  "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                  escrow.status === 'LOCKED' ? "bg-blue-500/20 text-blue-400" :
                  escrow.status === 'RELEASED' ? "bg-green-500/20 text-green-400" :
                  escrow.status === 'DISPUTED' ? "bg-red-500/20 text-red-400" :
                  "bg-primary/20 text-primary"
                )}>
                  {escrow.status}
                </span>
              </div>
              <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">{escrow.description}</h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-foreground/40">
                <span className="flex items-center gap-1"><User size={14} /> {escrow.seller}</span>
                <span>•</span>
                <span>{format(escrow.createdAt, 'MMM d, yyyy')}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black tracking-tighter">{escrow.amount}</div>
            <div className="text-xs text-foreground/20 font-medium">Locked in Contract</div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
