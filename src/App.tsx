import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { TopStrap } from "./components/layout/TopStrap";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";

/**
 * Color Palette:
 * red:    #F23054
 * yellow: #F2C12E
 * orange: #F27F1B
 * brown:  #734319
 * black:  #0D0D0D
 * cream:  #FFF8E7
 */

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF8E7] font-serif text-[#0D0D0D] antialiased">
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
