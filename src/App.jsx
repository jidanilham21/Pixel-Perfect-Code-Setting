import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/ContactUsPage";
import SettingAccountPage from "./pages/SettingAccountPage";
import AccountPage from "./pages/AccountPage";
import CatatanKeuanganPage from "./pages/CatatanKeuanganPage";
import CatatanTabunganPage from "./pages/CatatanTabunganPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactUsPage />}></Route>
        <Route path="/settingAccount" element={<SettingAccountPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/catatanKeuangan" element={<CatatanKeuanganPage />}></Route>
        <Route path="/catatanTabungan" element={<CatatanTabunganPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
