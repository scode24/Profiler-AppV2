import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import AboutPage from "./pages/AboutPage";
import CreateProfilePage from "./pages/CreateProfilePage";
import ProfileDataPage from "./pages/ProfileDataPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/createProfile" element={<CreateProfilePage />} />
          <Route path="/profileData" element={<ProfileDataPage />} />
          <Route path="/resetPassword" element={<ResetPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
