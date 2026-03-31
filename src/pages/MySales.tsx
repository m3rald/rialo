import React from 'react';
import { useEscrows } from '../context/EscrowContext';
import { EscrowCard } from '../components/EscrowCard';
import { useAccount } from 'wagmi';
import { Search } from 'lucide-react';

export function MySales() {
  const { escrows } = useEscrows();
  const { address } = useAccount();

  const userDisplayAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'You';

  const filteredEscrows = escrows.filter(e => e.seller === userDisplayAddress || e.seller === 'You');

  return (
    <div className="space-y-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">My Sales</h1>
        <p className="text-foreground/60 max-w-2xl">
          Transactions where you are the seller and funds are currently locked in escrow.
        </p>
      </div>

      <div className="space-y-4">
        {filteredEscrows.length === 0 ? (
          <div className="bg-background p-20 rounded-3xl border border-primary/10 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-foreground/20">
              <Search size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold">No sales found</h3>
              <p className="text-foreground/40">You haven't been listed as a seller in any escrow transactions yet.</p>
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
