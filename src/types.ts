export interface Escrow {
  id: string;
  buyer: string;
  seller: string;
  amount: string;
  status: 'PENDING' | 'LOCKED' | 'RELEASED' | 'DISPUTED' | 'CANCELLED';
  buyerProof?: string;
  sellerProof?: string;
  createdAt: number;
  description: string;
}

export const RIALO_ABI = [
  // Simplified Escrow ABI
  "function createEscrow(address seller, uint256 amount, string description) external returns (uint256)",
  "function deposit(uint256 escrowId) external payable",
  "function submitProof(uint256 escrowId, string proofHash) external",
  "function releaseFunds(uint256 escrowId) external",
  "function initiateDispute(uint256 escrowId) external",
  "function resolveDispute(uint256 escrowId, address recipient) external",
  "event EscrowCreated(uint256 indexed escrowId, address buyer, address seller, uint256 amount)",
  "event FundsReleased(uint256 indexed escrowId, address recipient)",
  "event ProofSubmitted(uint256 indexed escrowId, address submitter, string proofHash)"
];
