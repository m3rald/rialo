import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEscrows } from '../context/EscrowContext';
import { 
  Lock, 
  Unlock, 
  AlertCircle, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  Scale,
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';
import { CONFIG } from '../config';

export function EscrowDetails() {
  const { id } = useParams<{ id: string }>();
  const { escrows, updateEscrowStatus } = useEscrows();
  const navigate = useNavigate();

  const escrow = escrows.find(e => e.id === id);

  if (!escrow) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Escrow not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-primary hover:underline">Go back home</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-background rounded-3xl shadow-2xl overflow-hidden border border-primary/10">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                <CONFIG.LogoIcon className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">Transaction Details</h2>
                <p className="text-xs text-foreground/20 font-mono">ID: {escrow.id}</p>
              </div>
            </div>
            <button onClick={() => navigate(-1)} className="text-foreground/40 hover:text-primary">
              <Plus className="rotate-45" size={24} />
            </button>
          </div>

          <div className="space-y-8">
            {/* Status Banner */}
            <div className={cn(
              "p-4 rounded-2xl flex items-center gap-3 border",
              escrow.status === 'LOCKED' ? "bg-blue-500/10 border-blue-500/20 text-blue-400" :
              escrow.status === 'RELEASED' ? "bg-green-500/10 border-green-500/20 text-green-400" :
              escrow.status === 'DISPUTED' ? "bg-red-500/10 border-red-500/20 text-red-400" :
              "bg-primary/10 border-primary/20 text-primary"
            )}>
              {escrow.status === 'LOCKED' ? <Lock size={20} /> :
               escrow.status === 'RELEASED' ? <CheckCircle2 size={20} /> :
               <AlertCircle size={20} />}
              <span className="font-bold uppercase tracking-wider text-sm">Status: {escrow.status}</span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                <span className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest block mb-1">Buyer</span>
                <span className="text-sm font-mono font-medium truncate block">{escrow.buyer}</span>
              </div>
              <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                <span className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest block mb-1">Seller</span>
                <span className="text-sm font-mono font-medium truncate block">{escrow.seller}</span>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <span className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest block mb-2">Description</span>
              <p className="text-foreground/80 leading-relaxed">{escrow.description}</p>
              <div className="mt-6 pt-6 border-t border-primary/10 flex items-center justify-between">
                <span className="text-sm font-bold text-foreground/40">Escrow Amount</span>
                <span className="text-2xl font-black text-primary">{escrow.amount}</span>
              </div>
            </div>

            {/* Proof Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/40 flex items-center gap-2">
                <FileText size={16} />
                Proof of Transaction
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {/* Seller Proof */}
                <div className="bg-background p-4 rounded-2xl border border-primary/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Seller Proof</span>
                    {escrow.sellerProof ? (
                      <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-bold">SUBMITTED</span>
                    ) : (
                      <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-bold">AWAITING</span>
                    )}
                  </div>
                  {escrow.sellerProof ? (
                    <div className="text-sm text-foreground/60 bg-primary/5 p-3 rounded-xl border border-primary/10 flex items-center justify-between">
                      <span className="truncate">{escrow.sellerProof}</span>
                      <ExternalLink size={14} className="shrink-0 text-foreground/20" />
                    </div>
                  ) : (
                    <button 
                      onClick={() => updateEscrowStatus(escrow.id, 'LOCKED', { type: 'seller', value: 'https://ipfs.io/ipfs/QmProof' })}
                      className="w-full py-2 border-2 border-dashed border-primary/10 rounded-xl text-xs font-bold text-foreground/20 hover:border-primary hover:text-primary transition-all"
                    >
                      Submit Proof of Delivery
                    </button>
                  )}
                </div>

                {/* Buyer Proof */}
                <div className="bg-background p-4 rounded-2xl border border-primary/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Buyer Proof</span>
                    {escrow.buyerProof ? (
                      <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-bold">SUBMITTED</span>
                    ) : (
                      <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-bold">AWAITING</span>
                    )}
                  </div>
                  {escrow.buyerProof ? (
                    <div className="text-sm text-foreground/60 bg-primary/5 p-3 rounded-xl border border-primary/10 flex items-center justify-between">
                      <span className="truncate">{escrow.buyerProof}</span>
                      <ExternalLink size={14} className="shrink-0 text-foreground/20" />
                    </div>
                  ) : (
                    <button 
                      onClick={() => updateEscrowStatus(escrow.id, 'LOCKED', { type: 'buyer', value: 'Goods received and verified.' })}
                      className="w-full py-2 border-2 border-dashed border-primary/10 rounded-xl text-xs font-bold text-foreground/20 hover:border-primary hover:text-primary transition-all"
                    >
                      Submit Proof of Receipt
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-primary/10 space-y-3">
              {escrow.status === 'LOCKED' && escrow.sellerProof && escrow.buyerProof && (
                <button 
                  onClick={() => updateEscrowStatus(escrow.id, 'RELEASED')}
                  className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-600/20 hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                >
                  <Unlock size={20} />
                  Release Funds to Seller
                </button>
              )}
              
              {escrow.status === 'LOCKED' && (
                <button 
                  onClick={() => updateEscrowStatus(escrow.id, 'DISPUTED')}
                  className="w-full bg-background border-2 border-red-500/20 text-red-400 py-4 rounded-2xl font-bold hover:bg-red-500/10 transition-all flex items-center justify-center gap-2"
                >
                  <Scale size={20} />
                  Initiate Dispute
                </button>
              )}

              {escrow.status === 'DISPUTED' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                  <p className="text-xs text-red-400 font-medium text-center">
                    This transaction is under review by {CONFIG.shortName} Customer Service. 
                    Arbitrators will verify proofs and resolve the dispute within 24-48 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
