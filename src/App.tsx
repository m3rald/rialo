import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EscrowProvider } from './context/EscrowContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Directory } from './pages/Directory';
import { CategoryPage } from './pages/CategoryPage';
import { CreateEscrow } from './pages/CreateEscrow';
import { EscrowDetails } from './pages/EscrowDetails';
import { MyPurchases } from './pages/MyPurchases';
import { MySales } from './pages/MySales';
import { Disputes } from './pages/Disputes';

export default function App() {
  return (
    <EscrowProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Directory />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/escrows" element={<Home />} />
            <Route path="/create" element={<CreateEscrow />} />
            <Route path="/escrow/:id" element={<EscrowDetails />} />
            <Route path="/my-purchases" element={<MyPurchases />} />
            <Route path="/my-sales" element={<MySales />} />
            <Route path="/disputes" element={<Disputes />} />
          </Routes>
        </Layout>
      </Router>
    </EscrowProvider>
  );
}
