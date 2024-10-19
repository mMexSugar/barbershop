import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { Outlet } from "react-router-dom";
import '../styles//DefaultLayout.css';

const DefaultLayout: React.FC = () => (
  <main className="main-layout">
    <Header />
    <div className="content-container">
      <Outlet />
    </div>
    <Footer />
  </main>
);

export default DefaultLayout;