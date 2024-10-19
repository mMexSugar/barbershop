import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BarbersPage from './pages/BarbersPage';
import PriceListPage from './pages/PriceListPage';
import HomePage from './pages/HomePage';
import './App.css'
import DefaultLayout from "./layouts/DefaultLayout";


const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="barbers" element={<BarbersPage />} />
        <Route path="pricelist" element={<PriceListPage />} />
      </Route>
    </Routes>
  </Router>
);

export default App
