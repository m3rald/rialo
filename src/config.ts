import { Coins, LucideIcon } from 'lucide-react';

export interface AppConfig {
  name: string;
  shortName: string;
  primaryColor: string;
  LogoIcon: LucideIcon;
  description: string;
}

export const CONFIG: AppConfig = {
  name: "RIALO ESCROW",
  shortName: "RIALO",
  primaryColor: "#a9ddd3", // Mint Accent
  LogoIcon: Coins,        // Changed to Coins icon
  description: "Secure Decentralized Escrow Platform",
};
