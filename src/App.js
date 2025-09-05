import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  CreateUserPage,
  Dashboard,
  GenerateInvoice,
  InventoryPage,
  Login,
  RetrunInventaoryPage,
  SalesReportPage,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generateInvoice" element={<GenerateInvoice />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/retrun-inventory" element={<RetrunInventaoryPage />} />
        <Route path="/sales-report" element={<SalesReportPage />} />
        <Route path="/view-all-invoices" element={<SalesReportPage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
      </Routes>
    </>
  );
}

export default App;
