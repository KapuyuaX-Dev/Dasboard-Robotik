import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./Pages/Loginpage";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
