import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Heading from "./components/Heading";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney.jsx";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/" element={<Heading label="Welcome!" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
