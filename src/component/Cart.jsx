import React, { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Invoice from "./Invoice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart({
  items,
  removeFromCart,
  checkout,
  getProduct,
  getDailySaleReports,
}) {
  const [showInvoice, setShowInvoice] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: "", phone: "" });
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const navigate = useNavigate();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (items.length === 0) return;
    setShowCustomerForm(true);
  };

  const handleCreateSale = (e) => {
    e.preventDefault();
    const result = items.map((item) => ({
      productId: item._id,
      quantity: item.quantity,
    }));

    const token = localStorage.getItem("token");
    e.preventDefault();
    fetch("http://localhost:5001/api/v1/sale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include Authorization header if required
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        products: result,
        customerName: customerInfo,
      }),
    })
      .then(async (response) => {
        if (response.status === 200 || response.status === 201) {
          return response.json(); // Parse JSON if the status is 200 or 201
        } else if (response.status === 401) {
          localStorage.clear();
          navigate(`/`);
        } else {
          const error = await response.json();
          toast.error(error.message); // Wait for the error response
          throw new Error(error.message || "An unexpected error occurred");
        }
      })
      .then((data) => {
        getProduct();
        getDailySaleReports();
        setShowCustomerForm(false);
        setShowInvoice(true);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const finalizeCheckout = () => {
    checkout();
    setShowInvoice(false);
    setCustomerInfo({ name: "", phone: "" });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
      return;
    }
    const updatedItems = items.map((item) =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );
    // Update the parent component's state
    checkout(updatedItems, false); // false flag to indicate this is not a final checkout
  };

  if (showInvoice) {
    return (
      <Invoice
        items={items}
        total={total}
        customerInfo={customerInfo}
        onClose={finalizeCheckout}
        invoiceNumber={`INV-${Date.now().toString().slice(-6)}`}
      />
    );
  }

  if (showCustomerForm) {
    return (
      <div className="bg-white p-4 rounded-lg shadow w-[50%]">
        <h2 className="text-xl font-bold mb-4">Customer Information</h2>
        <form onSubmit={handleCreateSale}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              type="text"
              required
              value={customerInfo.name}
              onChange={(e) =>
                setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={customerInfo.phone}
              onChange={(e) =>
                setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Generate Invoice
            </button>
            <button
              type="button"
              onClick={() => setShowCustomerForm(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      <h2 className="text-xl font-bold mb-4">Total Item In Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          <div className="max-h-52 overflow-y-auto mb-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2 p-2 hover:bg-gray-50 rounded"
              >
                <div className="flex-1">
                  <div className="font-medium">
                    {item.name} <span>({item.dosage || "0mg"})</span>
                  </div>
                  {/* <div className="text-sm text-gray-600">
                    {item.price.toFixed(2)} each
                  </div> */}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity - 1)
                      }
                      className="p-1 rounded-full hover:bg-gray-200"
                    >
                      <FaMinus size={12} />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value) || 1;
                        updateQuantity(item._id, value);
                      }}
                      className="w-16 text-center border rounded px-2 py-1"
                    />
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="p-1 rounded-full hover:bg-gray-200"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  <span className="font-medium w-24 text-right">
                    {(item.price * item.quantity).toFixed(2)} Rs
                  </span>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-600 p-1"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span>{total.toFixed(2)} Rs</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
