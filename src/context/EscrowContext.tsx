import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Escrow } from '../types';

interface EscrowContextType {
  escrows: Escrow[];
  addEscrow: (escrow: Escrow) => void;
  updateEscrowStatus: (id: string, status: Escrow['status'], proof?: { type: 'buyer' | 'seller', value: string }) => void;
}

const INITIAL_ESCROWS: Escrow[] = [
  {
    id: '1',
    buyer: '0x1234...5678',
    seller: '0x8765...4321',
    amount: '500 RIALO',
    status: 'LOCKED',
    description: 'UI Design for E-commerce App',
    createdAt: Date.now() - 86400000 * 2,
    sellerProof: 'https://ipfs.io/ipfs/Qm...',
  },
  {
    id: '2',
    buyer: '0xABCD...EFGH',
    seller: '0x1234...5678',
    amount: '1200 RIALO',
    status: 'PENDING',
    description: 'Smart Contract Audit - Phase 1',
    createdAt: Date.now() - 3600000 * 5,
  },
  {
    id: '3',
    buyer: '0x9999...0000',
    seller: '0x8888...1111',
    amount: '300 RIALO',
    status: 'DISPUTED',
    description: 'Logo Animation',
    createdAt: Date.now() - 86400000 * 5,
    sellerProof: 'Proof of delivery sent via email.',
  }
];

const EscrowContext = createContext<EscrowContextType | undefined>(undefined);

export function EscrowProvider({ children }: { children: ReactNode }) {
  const [escrows, setEscrows] = useState<Escrow[]>(INITIAL_ESCROWS);

  const addEscrow = (escrow: Escrow) => {
    setEscrows(prev => [escrow, ...prev]);
  };

  const updateEscrowStatus = (id: string, status: Escrow['status'], proof?: { type: 'buyer' | 'seller', value: string }) => {
    setEscrows(prev => prev.map(escrow => {
      if (escrow.id === id) {
        const updated = { ...escrow, status };
        if (proof?.type === 'buyer') updated.buyerProof = proof.value;
        if (proof?.type === 'seller') updated.sellerProof = proof.value;
        return updated;
      }
      return escrow;
    }));
  };

  return (
    <EscrowContext.Provider value={{ escrows, addEscrow, updateEscrowStatus }}>
      {children}
    </EscrowContext.Provider>
  );
}

export function useEscrows() {
  const context = useContext(EscrowContext);
  if (context === undefined) {
    throw new Error('useEscrows must be used within an EscrowProvider');
  }
  return context;
}
