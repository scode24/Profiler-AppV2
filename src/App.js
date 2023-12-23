import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import AboutPage from "./pages/AboutPage";
import DocumentationPage from "./pages/DocumentationPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
