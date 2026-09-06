import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import OrderCard from './pages/OrderCard';
import Transfer from './pages/Transfer';
import Loan from './pages/Loan';
import Invest from './pages/Invest';
import WorkerDashboard from './pages/WorkerDashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/support" element={<Support />} />
      <Route path="/order-card" element={<OrderCard />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/loan" element={<Loan />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/worker-dashboard" element={<WorkerDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;