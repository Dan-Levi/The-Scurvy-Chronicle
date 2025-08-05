import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { TopStrap } from "./components/layout/TopStrap";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";



export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F2E2CE] font-serif text-[#0D0D0D] antialiased">
        <TopStrap />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
