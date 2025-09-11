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
import { AllInvoiceComponent } from "./component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/generateInvoice" element={<GenerateInvoice />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/return-inventory" element={<RetrunInventaoryPage />} />
        <Route path="/sales-report" element={<SalesReportPage />} />
        <Route path="/invoices" element={<AllInvoiceComponent />} />
        <Route path="/create-user" element={<CreateUserPage />} />
      </Routes>
    </>
  );
}

export default App;
