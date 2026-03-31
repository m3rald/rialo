import React from 'react';
import { useEscrows } from '../context/EscrowContext';
import { EscrowCard } from '../components/EscrowCard';
import { Search } from 'lucide-react';

export function Disputes() {
  const { escrows } = useEscrows();

  const filteredEscrows = escrows.filter(e => e.status === 'DISPUTED');

  return (
    <div className="space-y-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Disputes</h1>
        <p className="text-foreground/60 max-w-2xl">
          Transactions currently under review by our arbitration team.
        </p>
      </div>

      <div className="space-y-4">
        {filteredEscrows.length === 0 ? (
          <div className="bg-background p-20 rounded-3xl border border-primary/10 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-foreground/20">
              <Search size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold">No disputes found</h3>
              <p className="text-foreground/40">Everything is running smoothly! No active disputes at this time.</p>
            </div>
          </div>
        ) : (
          filteredEscrows.map((escrow) => (
            <EscrowCard key={escrow.id} escrow={escrow} />
          ))
        )}
      </div>
    </div>
  );
}
