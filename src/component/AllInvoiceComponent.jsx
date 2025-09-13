import {
  ArrowLeft,
  Eye,
  FileText,
  Receipt,
  ShoppingCart,
  Trash2,
  View,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AllInvoiceComponent = () => {
  const [allItem, setAllItem] = useState();
  const [showInvoicePreview, setShowInvoicePreview] = useState();
  const [selectedInvoice, setSelectedInvoice] = useState();
  const navigate = useNavigate();
  const getAllInvoices = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/v1/sale/invoices",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        setAllItem(data?.data);
      }
    } catch (error) {
      console.error("Failed to load daily sales:", error);
    }
  };

  useEffect(() => {
    getAllInvoices();
  }, []);
  return (
    <div>
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div className=" px-4 sm:px-6 lg:px-8">
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
                    View Invoices
                  </h1>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    View pharmacy invoice
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Sales Card */}
          </div>
        </div>
      </div>{" "}
      {allItem?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  #InvoiceId
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Items
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Total Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allItem.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {item.invoiceId}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {item.customerName}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {item?.items?.length}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Rs {item.grandTotal?.toFixed(2)}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      className="p-2  hover:bg-red-50 rounded-lg transition-colors"
                      onClick={() => {
                        setShowInvoicePreview(true);
                        setSelectedInvoice(item);
                      }}
                      title="Remove item"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      //   onClick={() => openDeleteModal(index)}
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="px-6 py-16 text-center">
          <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No items added yet
          </h3>
          <p className="text-gray-500 mb-4">
            Search and add medicines to start building your invoice
          </p>
        </div>
      )}
      {showInvoicePreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Invoice Preview
                  </h3>
                  <p className="text-sm text-gray-600">
                    Review before printing
                  </p>
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
                    <h1 className="text-lg font-bold">
                      Siddiqui Medical Store
                    </h1>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>
                      <strong>53- Gulberg III Near Sui Gas Office</strong>
                    </p>
                    <p>Guru Mangat Road, Opposite SNGPL Office</p>
                    <p>Lahore, Pakistan</p>
                    <p>
                      <strong>Phone:</strong> 03364214916, 03114572734
                    </p>
                    <p>
                      <strong>License No:</strong> 05-352-0065-028168M
                    </p>
                  </div>
                </div>

                {/* Invoice Info */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>
                        <strong>Invoice #:</strong> {selectedInvoice?.invoiceId}
                      </p>
                      <p>
                        <strong>Date:</strong> <strong>Time:</strong>{" "}
                        {selectedInvoice?.date
                          ? new Date(selectedInvoice.date).toLocaleDateString()
                          : ""}
                      </p>
                      <p>
                        <strong>Time:</strong>{" "}
                        {selectedInvoice?.date
                          ? new Date(selectedInvoice.date).toLocaleTimeString()
                          : ""}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Customer:</strong>
                      </p>
                      <p className="uppercase font-semibold">
                        {selectedInvoice?.customerName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Items Table */}
                <div className="mb-4">
                  <table className="w-full border border-gray-300 text-xs">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">
                          Sr#
                        </th>
                        <th className="border border-gray-300 p-2 text-left">
                          Item
                        </th>
                        <th className="border border-gray-300 p-2 text-center">
                          Rate
                        </th>
                        <th className="border border-gray-300 p-2 text-center">
                          Qty
                        </th>
                        <th className="border border-gray-300 p-2 text-right">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInvoice?.items.map((item, i) => (
                        <tr key={i}>
                          <td className="border border-gray-300 p-2">
                            {i + 1}
                          </td>
                          <td className="border border-gray-300 p-2">
                            {item.name}
                            {item.dosage && (
                              <span className="text-gray-500">
                                {" "}
                                ({item.dosage})
                              </span>
                            )}
                          </td>
                          <td className="border border-gray-300 p-2 text-center">
                            Rs {item.rate?.toFixed(2)}
                          </td>
                          <td className="border border-gray-300 p-2 text-center">
                            {item.quantity}
                          </td>
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
                      <td className="p-3 text-right font-semibold">
                        Rs {selectedInvoice?.subTotal?.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="bg-blue-600 text-white">
                      <td className="p-3 text-left font-bold">GRAND TOTAL:</td>
                      <td className="p-3 text-right font-bold">
                        Rs {selectedInvoice?.grandTotal.toFixed(2)}
                      </td>
                    </tr>
                  </table>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-600 space-y-2">
                  <p>
                    <strong>IMPORTANT:</strong> Fridge items, inhalers & loose
                    medicines are non-returnable
                  </p>
                  <p className="mt-4">Thank you for your business!</p>
                  <p className="text-gray-500">
                    Software by ConsoleDot - Ph: 03321639988
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-sm text-gray-600">
                <p>
                  Items: <span className="font-semibold">{allItem.length}</span>
                </p>
                <p>
                  Total:{" "}
                  <span className="font-semibold text-blue-600">
                    Rs {selectedInvoice?.grandTotal?.toLocaleString()}
                  </span>
                </p>
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
                    // handlePrintInvoice();
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
