import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import { connectWithWebsocket } from "./utils/wssConnection";

function App() {
  useEffect(() => {
    connectWithWebsocket();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<>Not match</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
