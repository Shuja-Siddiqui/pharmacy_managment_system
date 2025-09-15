
import {
  ArrowLeft,
  Eye,
  FileText,
  Receipt,
  ShoppingCart,
  Trash2,
  X,
  Search,
  Calendar,
  DollarSign,
  TrendingUp,
  Package,
  Users,
  Filter,
  Download,
  AlertTriangle,
  Printer
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from "../api/config";
const BASE_URL = config.BASE_URL;
export const AllInvoiceComponent = () => {
  const [allItem, setAllItem] = useState([]);
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    totalInvoices: 0,
    totalRevenue: 0,
    totalItems: 0,
    avgOrderValue: 0
  });
  const navigate = useNavigate();

  const getAllInvoices = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/sale/invoices`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        const invoices = data?.data || [];
        setAllItem(invoices);
        
        // Calculate stats
        const totalInvoices = invoices.length;
        const totalRevenue = invoices.reduce((sum, invoice) => sum + (invoice.grandTotal || 0), 0);
        const totalItems = invoices.reduce((sum, invoice) => sum + (invoice.items?.length || 0), 0);
        const avgOrderValue = totalInvoices > 0 ? totalRevenue / totalInvoices : 0;
        
        setStats({ totalInvoices, totalRevenue, totalItems, avgOrderValue });
      } else {
        throw new Error("Failed to fetch invoices");
      }
    } catch (error) {
      console.error("Failed to load invoices:", error);
      toast.error("Failed to load invoices");
    } finally {
      setIsLoading(false);
    }
  };


  const handlePrintInvoice = (invoice) => {
    const printWindow = window.open("", "", "width=600,height=800");
    printWindow.document.write(`
    <html>
      <head>
        <title>POS Pharmacy Invoice</title>
        <style>
          @page {
            size: 80mm 297mm;  
            margin: 5mm;
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.4;
            width: 75mm;
            margin: auto;
          }
          h1, h2, h3, p {
            margin: 4px 0;
          }
          .header {
            background: #1e40af;
            color: #fff;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            padding: 8px 0;
            border-radius: 4px;
          }
          .shop-info {
            font-size: 12px;
            margin: 15px 0;
            text-align: center;
            line-height: 1.3;
          }
          .customer {
            margin: 10px 0;
            font-size: 13px;
            font-weight: 600;
            background: #f8fafc;
            padding: 8px;
            border-radius: 4px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
            font-weight: 600;
            margin: 8px 0;
          }
          th, td {
            border: 1px solid #e2e8f0;
            padding: 6px 4px;
            text-align: center;
          }
          th {
            background: #f1f5f9;
            font-weight: 700;
          }
          .summary {
            margin-top: 15px;
            width: 100%;
            border: 2px solid #1e40af;
            font-size: 13px;
            font-weight: 600;
            border-radius: 4px;
          }
          .summary td {
            padding: 8px;
            text-align: right;
          }
          .total-row {
            background: #1e40af;
            color: white;
            font-weight: 700;
          }
          .footer {
            margin-top: 20px;
            font-size: 11px;
            text-align: center;
            font-weight: 500;
            color: #64748b;
          }
          .invoice-info {
            background: #f8fafc;
            padding: 8px;
            border-radius: 4px;
            margin: 10px 0;
          }
        </style>
      </head>
      <body>
        <div class="header">Siddiqui Medical Store</div>
        <div class="shop-info">
          <p><strong>53- Gulberg III Near Sui Gas Office</strong></p>
          <p>Guru Mangat Road, Opposite SNGPL Office</p>
          <p>Lahore, Pakistan</p>
          <p><strong>Phone:</strong> 03364214916, 03114572734</p>
          <p><strong>License No:</strong> 05-352-0065-028168M</p>
        </div>
        
        <div class="invoice-info">
          <table style="border: none; margin: 0;">
            <tr>
              <td style="border: none; text-align: left; padding: 2px 0;"><strong>Invoice #:</strong></td>
              <td style="border: none; text-align: right; padding: 2px 0;">${invoice.invoiceId}</td>
            </tr>
            <tr>
              <td style="border: none; text-align: left; padding: 2px 0;"><strong>Date:</strong></td>
              <td style="border: none; text-align: right; padding: 2px 0;">${invoice.date ? new Date(invoice.date).toLocaleDateString() : ''}</td>
            </tr>
            <tr>
              <td style="border: none; text-align: left; padding: 2px 0;"><strong>Time:</strong></td>
              <td style="border: none; text-align: right; padding: 2px 0;">${invoice.date ? new Date(invoice.date).toLocaleTimeString() : ''}</td>
            </tr>
          </table>
        </div>

        <div class="customer">
          <strong>Customer:</strong> ${invoice.customerName?.toUpperCase()}
        </div>
        
        <table>
          <thead>
            <tr>
              <th style="width: 8%;">Sr#</th>
              <th style="width: 40%;">Item</th>
              <th style="width: 17%;">Rate</th>
              <th style="width: 10%;">Qty</th>
              <th style="width: 25%;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${invoice.items?.map((item, i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td style="text-align:left; font-size: 11px;">${item.name}${item.dosage ? ` (${item.dosage})` : ''}</td>
                  <td>Rs ${item.rate?.toFixed(2)}</td>
                  <td>${item.quantity}</td>
                  <td><strong>Rs ${(item.rate * item.quantity)?.toFixed(2)}</strong></td>
                </tr>
              `).join("")}
          </tbody>
        </table>
        
        <table class="summary">
          <tr>
            <td style="text-align: left;"><strong>Subtotal:</strong></td>
            <td><strong>Rs ${invoice.subTotal?.toFixed(2)}</strong></td>
          </tr>
          <tr class="total-row">
            <td style="text-align: left;"><strong>GRAND TOTAL:</strong></td>
            <td><strong>Rs ${invoice.grandTotal?.toFixed(2)}</strong></td>
          </tr>
        </table>
        
        <div class="footer">
          <p><strong>IMPORTANT:</strong> Fridge items, inhalers & loose medicines are non-returnable</p>
          <p style="margin-top: 10px;">Thank you for your business!</p>
          <p style="margin-top: 8px; font-size: 10px;">Software by ConsoleDot - Ph: 03321639988</p>
        </div>
      </body>
    </html>
  `);

    printWindow.document.close();
    printWindow.print();
  };

  useEffect(() => {
    getAllInvoices();
  }, []);

  const filteredInvoices = allItem.filter(invoice =>
    invoice.invoiceId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.customerName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">Back</span>
              </button>

              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                  <Receipt className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                    All Invoices
                  </h1>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    View and manage pharmacy invoices
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Filter className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Download className="h-5 w-5" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Invoices</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalInvoices}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Receipt className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">Rs {stats.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Items Sold</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalItems}</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                <p className="text-2xl font-bold text-gray-900">Rs {stats.avgOrderValue.toFixed(0)}</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </div> */}
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Search invoices by ID or customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Invoices Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Invoice History</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {filteredInvoices.length} invoices
              </span>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading invoices...</span>
            </div>
          ) : filteredInvoices.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Invoice ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Items</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Total Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInvoices.map((invoice, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Receipt className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-900">{invoice.invoiceId}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{invoice.customerName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {invoice?.items?.length || 0} items
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-900">
                          Rs {invoice.grandTotal?.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {invoice.date ? new Date(invoice.date).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={() => {
                              setShowInvoicePreview(true);
                              setSelectedInvoice(invoice);
                            }}
                            title="View invoice"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            onClick={() => handlePrintInvoice(invoice)}
                            title="Print invoice"
                          >
                            <Printer className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-16 text-center">
              <Receipt className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No invoices found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm ? "Try adjusting your search terms" : "Start creating invoices to see them here"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Invoice Preview Modal */}
      {showInvoicePreview && selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Invoice Preview</h3>
                  <p className="text-sm text-gray-600">Invoice #{selectedInvoice.invoiceId}</p>
                </div>
              </div>
              <button
                onClick={() => setShowInvoicePreview(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Invoice Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="bg-white border border-gray-200 rounded-lg p-6 font-mono text-sm">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-4">
                    <h1 className="text-lg font-bold">Siddiqui Medical Store</h1>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p><strong>53- Gulberg III Near Sui Gas Office</strong></p>
                    <p>Guru Mangat Road, Opposite SNGPL Office</p>
                    <p>Lahore, Pakistan</p>
                    <p><strong>Phone:</strong> 03364214916, 03114572734</p>
                    <p><strong>License No:</strong> 05-352-0065-028168M</p>
                  </div>
                </div>

                {/* Invoice Info */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Invoice #:</strong> {selectedInvoice?.invoiceId}</p>
                      <p><strong>Date:</strong> {selectedInvoice?.date ? new Date(selectedInvoice.date).toLocaleDateString() : ""}</p>
                      <p><strong>Time:</strong> {selectedInvoice?.date ? new Date(selectedInvoice.date).toLocaleTimeString() : ""}</p>
                    </div>
                    <div>
                      <p><strong>Customer:</strong></p>
                      <p className="uppercase font-semibold">{selectedInvoice?.customerName}</p>
                    </div>
                  </div>
                </div>

                {/* Items Table */}
                <div className="mb-4">
                  <table className="w-full border border-gray-300 text-xs">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Sr#</th>
                        <th className="border border-gray-300 p-2 text-left">Item</th>
                        <th className="border border-gray-300 p-2 text-center">Rate</th>
                        <th className="border border-gray-300 p-2 text-center">Qty</th>
                        <th className="border border-gray-300 p-2 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInvoice?.items?.map((item, i) => (
                        <tr key={i}>
                          <td className="border border-gray-300 p-2">{i + 1}</td>
                          <td className="border border-gray-300 p-2">
                            {item.name}
                            {item.dosage && <span className="text-gray-500"> ({item.dosage})</span>}
                          </td>
                          <td className="border border-gray-300 p-2 text-center">Rs {item.rate?.toFixed(2)}</td>
                          <td className="border border-gray-300 p-2 text-center">{item.quantity}</td>
                          <td className="border border-gray-300 p-2 text-right font-semibold">
                            Rs {(item.rate * item.quantity)?.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Summary */}
                <div className="border-2 border-blue-600 rounded-lg overflow-hidden mb-4">
                  <table className="w-full text-sm">
                    <tr>
                      <td className="p-3 text-left font-semibold">Subtotal:</td>
                      <td className="p-3 text-right font-semibold">Rs {selectedInvoice?.subTotal?.toFixed(2)}</td>
                    </tr>
                    <tr className="bg-blue-600 text-white">
                      <td className="p-3 text-left font-bold">GRAND TOTAL:</td>
                      <td className="p-3 text-right font-bold">Rs {selectedInvoice?.grandTotal?.toFixed(2)}</td>
                    </tr>
                  </table>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-600 space-y-2">
                  <p><strong>IMPORTANT:</strong> Fridge items, inhalers & loose medicines are non-returnable</p>
                  <p className="mt-4">Thank you for your business!</p>
                  <p className="text-gray-500">Software by ConsoleDot - Ph: 03321639988</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-sm text-gray-600">
                <p>Items: <span className="font-semibold">{selectedInvoice?.items?.length || 0}</span></p>
                <p>Total: <span className="font-semibold text-blue-600">Rs {selectedInvoice?.grandTotal?.toLocaleString()}</span></p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowInvoicePreview(false)}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors font-medium"
                >
                  Close Preview
                </button>
                <button
                  onClick={() => {
                    setShowInvoicePreview(false);
                    handlePrintInvoice(selectedInvoice);
                  }}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium flex items-center gap-2"
                >
                  <Receipt className="h-4 w-4" />
                  Print Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};