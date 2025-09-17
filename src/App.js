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
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/generateInvoice"
        element={
          <ProtectedRoute>
            <GenerateInvoice />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventory"
        element={
          <ProtectedRoute>
            <InventoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/return-inventory"
        element={
          <ProtectedRoute>
            <RetrunInventaoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sales-report"
        element={
          <ProtectedRoute>
            <SalesReportPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/invoices"
        element={
          <ProtectedRoute>
            <AllInvoiceComponent />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-user"
        element={
          <ProtectedRoute>
            <CreateUserPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
