import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import Internships from "./pages/Internships";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/candidates" element={<Candidates />} />
            <Route path="/dashboard/internships" element={<Internships />} />
            <Route path="/dashboard/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
