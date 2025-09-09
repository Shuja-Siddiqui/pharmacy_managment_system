// import React, { useEffect, useRef, useState } from "react";
// import { toast } from "react-toastify";
// import Cart from "./Cart";
// import ProductList from "./ProductList";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
// import { FaRegPenToSquare } from "react-icons/fa6";

// export const GenerateInvoiceComponent = () => {
//   const [product, setProduct] = useState([]);
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [discount, setDiscount] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [allItem, setAllItem] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [editableItemIndex, setEditableItemIndex] = useState(null);
//   const [customerName, setCustomerName] = useState("");
//   const [isModal, setIsModal] = useState(false);
//   const [searchTerm, setSearchTerm] = useState(""); // New state for search term
//   const [filteredProducts, setFilteredProducts] = useState([]); // New state for filtered products
//   const [isSearchModal, setIsSearchModal] = useState(false); // State for search modal
//   const editableRefs = useRef([]);
//   const navigate = useNavigate();

//   const getProduct = () => {
//     fetch("https://api-pharmacy-nu.vercel.app/api/v1/product", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200 || 201) {
//           return response.json();
//         } else {
//           throw new Error("Failed to get product");
//         }
//       })
//       .then((data) => {
//         setProduct(data?.data || []);
//       })
//       .catch((error) => {
//         toast.error(error?.message);
//       });
//   };

//   useEffect(() => {
//     getProduct();
//   }, []);

//   const handleSearchChange = (e) => {
//     const searchValue = e.target.value.toLowerCase();
//     setSearchTerm(searchValue);

//     if (searchValue) {
//       const filtered = product.filter((p) =>
//         p.name.toLowerCase().includes(searchValue)
//       );
//       setFilteredProducts(filtered);
//       setIsSearchModal(true);
//     } else {
//       setFilteredProducts([]);
//       setIsSearchModal(false);
//     }
//   };

//   const handleSelectProduct = (selectedProduct) => {
//     setName(selectedProduct.name);
//     setPrice(selectedProduct.price);
//     setIsSearchModal(false);
//     setSearchTerm("");
//   };

//   const addItem = () => {
//     if ((name && quantity > 0, customerName)) {
//       setAllItem((prev) => [
//         ...prev,
//         { name, quantity, price: parseFloat(price) },
//       ]);
//       setName("");
//       setPrice(0);
//       setQuantity(1);
//     } else {
//       toast("Please fill all input fields correctly", {
//         bodyClassName: "text-red-500",
//       });
//     }
//   };

//   useEffect(() => {
//     const total = allItem.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     setTotalPrice(total);
//   }, [allItem]);

//   const handleQuantityChange = (e, index) => {
//     const newQuantity = e.target?.value;
//     setAllItem((prev) =>
//       prev.map((item, i) =>
//         i === index ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const handleDeleteClick = (index) => {
//     setAllItem((prev) => prev.filter((_, i) => i !== index));
//     toast("Item deleted");
//     setIsModal(false);
//   };

//   const handleClick = () => {
//     setCustomerName("");
//     // Calculate total values
//     const subtotal = allItem.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//   };
//   const handleClicku = () => {
//     setCustomerName("");
//     // Calculate total values
//     const subtotal = allItem.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
// const printWindow = window.open("", "", "width=600,height=800");
// printWindow.document.write(`
//   <html>
//     <head>
//       <title>POS Pharmacy</title>
//       <style>
//         /* ✅ Paper size setup */
//         @page {
//           size: 80mm 210mm;
//           margin: 5mm;
//         }
//         body {
//           font-family: Arial, sans-serif;
//           font-size: 10px;
//           line-height: 1.3;
//           width: 72mm;
//           margin: auto;
//         }
//         h1, h2, h3, p {
//           margin: 2px 0;
//         }
//         .header {
//           background: #000;
//           color: #fff;
//           text-align: center;
//           font-size: 12px;
//           font-weight: bold;
//           padding: 2px 0;
//         }
//         .shop-info {
//           font-size: 9px;
//           margin-top: 4px;
//         }
//         .customer {
//           margin: 8px 0;
//           font-size: 10px;
//           font-weight: bold;
//         }
//         table {
//           width: 100%;
//           border-collapse: collapse;
//           font-size: 9px;
//         }
//         th, td {
//           border: 1px solid #000;
//           padding: 2px 3px;
//           text-align: center;
//         }
//         th {
//           background: #f1f1f1;
//         }
//         .summary {
//           margin-top: 6px;
//           width: 100%;
//           border: 1px solid #000;
//         }
//         .summary td {
//           padding: 4px;
//           text-align: right;
//           font-size: 10px;
//         }
//         .footer {
//           margin-top: 12px;
//           font-size: 9px;
//           text-align: center;
//           font-weight: bold;
//         }
//       </style>
//     </head>
//     <body>

//       <div class="header">Siddiqui Medical Store</div>

//       <div class="shop-info">
//         <p>53- Gulberg III Near Sui Gas Office Guru Mangat Road</p>
//         <p>Opposite SNGPL Office Lahore</p>
//         <p>Phone#: 03364214916, 03114572734</p>
//         <p>License No: 490-B/GT/10/2016</p>
//       </div>

//       <div class="customer">
//         Customer Name: <span style="text-transform: uppercase;">${customerName}</span>
//       </div>

//       <table>
//         <tr>
//           <td style="text-align:left;">Invoice #</td>
//           <td style="text-align:right;">#2</td>
//         </tr>
//         <tr>
//           <td style="text-align:left;">Date</td>
//           <td style="text-align:right;">${new Date().toLocaleDateString()}</td>
//         </tr>
//       </table>

//       <table style="margin-top:6px;">
//         <thead>
//           <tr>
//             <th>Sr#</th>
//             <th>Item</th>
//             <th>Unit Cost</th>
//             <th>Qty</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${allItem.map(
//             (item, i) => `
//               <tr>
//                 <td>${i + 1}</td>
//                 <td style="text-align:left;">${item.name}</td>
//                 <td>${item.price}</td>
//                 <td>${item.quantity}</td>
//                 <td>${item.price * item.quantity}</td>
//               </tr>
//             `
//           ).join("")}
//         </tbody>
//       </table>

//       <table class="summary">
//         <tr>
//           <td>Subtotal</td>
//           <td>${subtotal}</td>
//         </tr>
//         <tr>
//           <td><b>Grand Total</b></td>
//           <td><b>${subtotal}</b></td>
//         </tr>
//       </table>

//       <div class="footer">
//         <p>FRIDGE ITEM & INHALER & LOOSE MEDICINE NON RETURNABLE</p>
//         <p>(Computer Software Developed by ConsoleDot – Ph# 03321639988)</p>
//       </div>

//     </body>
//   </html>
// `);


//     printWindow.document.close();
//     printWindow.print();
//   };

//   return (
//     <div className="w-full h-screen  p-5 bg-[#FFFFFF]">
//       <button
//         className="bg-black py-2 px-3 flex justify-center items-center gap-2 text-white rounded-lg  hover:scale-105 hover:opacity-50 "
//         onClick={() => navigate(`/dashboard`)}
//       >
//         <FaArrowLeft />
//       </button>

//       <div className=" flex justify-between">
//         <h1 className="text-2xl font-bold">Generate Invoice</h1>
//       </div>
//       <div className="flex gap-5 w-full mt-5">
//         <div className="flex gap-2 w-1/2 items-center">
//           <h1 className="text-lg font-semibold">Search Product:</h1>
//           <input
//             type="text"
//             className="border border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg w-[70%]"
//             placeholder="Search Product"
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//         </div>
//       </div>

//       {isSearchModal && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-5 w-1/2">
//             <h1 className="text-lg font-bold mb-3">Search Results</h1>
//             <ul>
//               {filteredProducts.map((product) => (
//                 <li
//                   key={product.id}
//                   className="p-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleSelectProduct(product)}
//                 >
//                   {product.name} - ${product.price}
//                 </li>
//               ))}
//             </ul>
//             <button
//               className="mt-5 px-4 py-2 bg-red-500 text-white rounded-lg"
//               onClick={() => setIsSearchModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       <div className="flex gap-5 w-full">
//         <div className="flex gap-2 w-1/2 items-center mt-5">
//           <h1 className="text-lg font-semibold">Customer Name :</h1>
//           <input
//             type="text"
//             className="border border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg w-[70%]"
//             placeholder="Customer Name"
//             value={customerName}
//             onChange={(e) => setCustomerName(e.target.value)}
//           />
//         </div>
//         <div className="flex gap-2 w-1/2 items-center mt-5">
//           <h1 className="text-lg font-semibold">Discount:</h1>
//           <input
//             type="text"
//             className="border border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg w-[70%]"
//             placeholder="Customer Name"
//             value={discount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="w-full grid grid-cols-3 gap-5 mt-5">
//         <div className="flex flex-col gap-2">
//           <h1 className="font-semibold">Item</h1>
//           <input
//             type="text"
//             className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
//             placeholder="Medicine Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <h1 className="font-semibold">Quantity</h1>
//           <input
//             type="number"
//             className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
//             placeholder="Quantity"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <h1 className="font-semibold">price</h1>
//           <input
//             type="number"
//             className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
//             placeholder="Price"
//             value={[price]}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>
//       </div>
//       <button
//         className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
//         onClick={addItem}
//       >
//         + Add Item
//       </button>

//       <div className="w-full mt-10">
//         <div className="flex border-b border-[#E8E8E8]">
//           <div className="w-[20%] p-3">
//             <h1 className="font-semibold text-[#7A8085]">Medicine</h1>
//           </div>
//           <div className="w-[20%] p-3">
//             <h1 className="font-semibold text-[#7A8085]">Quantity</h1>
//           </div>
//           <div className="w-[20%] p-3">
//             <h1 className="font-semibold text-[#7A8085]">Price</h1>
//           </div>
//           <div className="w-[20%] p-3">
//             <h1 className="font-semibold text-[#7A8085]">Total</h1>
//           </div>
//           <div className="w-[20%] p-3">
//             <h1 className="font-semibold text-[#7A8085]">Action</h1>
//           </div>
//         </div>
//         {allItem.length > 0 ? (
//           allItem.map((item, index) => (
//             <div key={index} className="flex border-b border-[#E8E8E8]">
//               <div className="w-[20%] p-3 ">
//                 <div className="w-full">
//                   <h1 className="font-semibold w-full">{item.name}</h1>
//                 </div>
//               </div>
//               <div className="w-[20%] p-3">
//                 {editableItemIndex === index ? (
//                   <input
//                     ref={(el) => (editableRefs.current[index] = el)}
//                     type="number"
//                     className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
//                     value={item.quantity}
//                     onChange={(e) => handleQuantityChange(e, index)}
//                   />
//                 ) : (
//                   <h1 className="font-semibold">{item.quantity}</h1>
//                 )}
//               </div>
//               <div className="w-[20%] p-3">
//                 <h1 className="font-semibold">{item.price.toFixed(2)}</h1>
//               </div>
//               <div className="w-[20%] p-3">
//                 <h1 className="font-semibold">
//                   {(item.price * item.quantity).toFixed(2)}
//                 </h1>
//               </div>
//               <div className="w-[20%] p-3 flex gap-4">
//                 <FaRegPenToSquare
//                   className="cursor-pointer"
//                   onClick={() => handleQuantityChange(index)}
//                 />
//                 <FaTrashAlt
//                   className="cursor-pointer"
//                   onClick={() => setIsModal(true)}
//                 />
//               </div>
//               {isModal && (
//                 <div className="fixed flex w-full top-0 h-screen justify-center items-center">
//                   <div
//                     className="w-full h-screen right-0   fixed top-0 bg-black opacity-10"
//                     onClick={() => setIsModal(false)}
//                   ></div>
//                   <div className="absolute top-[40%] rounded-lg w-1/4 h-36 bg-white">
//                     <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
//                       <h1 className="text-2xl font-semibold">
//                         Are you sure<span>?</span>
//                       </h1>
//                       <div className="flex justify-center gap-4 w-full items-center">
//                         <button
//                           className="px-5 w-[30%] hover:opacity-90 hover:scale-105 py-2 bg-green-500 rounded-lg text-white"
//                           onClick={() => handleDeleteClick(index)}
//                         >
//                           Yes
//                         </button>
//                         <button
//                           className="px-5 w-[30%] hover:opacity-90 hover:scale-105 py-2 bg-red-500 rounded-lg text-white "
//                           onClick={() => setIsModal(false)}
//                         >
//                           No
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <h1 className="text-center mt-10 text-3xl text-[#7A8085]">
//             No Items
//           </h1>
//         )}
//       </div>

//       <div
//         className={`w-full flex items-center  mt-5
//           "justify-end"
//         `}
//       >
//         <h1 className="font-bold text-lg flex items-center gap-1">
//           Total: <span>Rs</span> <span>{totalPrice.toFixed(2)}</span>
//         </h1>
//       </div>

//       <div>
//         <button
//           className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
//           onClick={handleClicku}
//         >
//           Generate Invoice
//         </button>
//       </div>
//     </div>
//   );
// };
// export const GenerateInvoiceComponent = () => {
//   const [dailySales, setDailySales] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [sales, setSales] = useState([]);
//   const navigate = useNavigate();
//   // const [showSalesReport, setShowSalesReport] = useState(false);
//   const [medications, setMedications] = useState();
//   const getProduct = () => {
//     fetch("https://api-pharmacy-nu.vercel.app/api/v1/product", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200 || 201) {
//           return response.json();
//         } else {
//           throw new Error("Failed to get product");
//         }
//       })
//       .then((data) => {
//         setMedications(data?.data);
//       })
//       .catch((error) => {
//         toast.error(error?.message);
//       });
//   };
//   useEffect(() => {
//     getProduct();
//   }, []);

//   const getDailySaleReports = () => {
//     // API call to get daily sales report
//     fetch("https://api-pharmacy-nu.vercel.app/api/v1/sale/today", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200 || 201) {
//           return response.json();
//         } else {
//           throw new Error("Failed to get product");
//         }
//       })
//       .then((data) => {
//         setDailySales(data?.data);
//       })
//       .catch((error) => {
//         toast.error(error?.message);
//       });
//   };
//   useEffect(() => {
//     getDailySaleReports();
//   }, []);
//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item._id === product._id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item._id !== productId)
//     );
//   };

//   const checkout = (updatedItems, isFinal = true) => {
//     if (isFinal) {
//       if (cartItems.length === 0) return;

//       const total = cartItems.reduce(
//         (sum, item) => sum + item.price * item.quantity,
//         0
//       );
//       const sale = {
//         date: new Date().toISOString(),
//         items: [...cartItems],
//         total,
//       };

//       setSales((prevSales) => [...prevSales, sale]);
//       setCartItems([]);
//     } else {
//       // Update cart items without completing the sale
//       setCartItems(updatedItems);
//     }
//   };
//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className=" flex w-full">
//         <div
//           className="h-10 w-12 bg-black p-2 rounded-lg cursor-pointer"
//           onClick={() => navigate("/dashboard")}
//         >
//           {" "}
//           <FaArrowLeft className=" text-white  w-full h-full " />
//         </div>
//         <h1 className="text-3xl ml-[30%] font-bold text-center">
//           Pharmacy Inventory System
//         </h1>
//       </div>
//       <div className="max-w-7xl mt-10 mx-auto">
//         {/* <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Pharmacy Inventory System</h1>
//         </div> */}

//         <div className="flex flex-col w-full gap-4">
//           <div className=" flex flex-col gap-4 ">
//             <div className="">
//               <ProductList addToCart={addToCart} medications={medications} />
//             </div>
//             <Cart
//               items={cartItems}
//               removeFromCart={removeFromCart}
//               checkout={checkout}
//               getProduct={getProduct}
//               getDailySaleReports={getDailySaleReports}
//             />
//             <div className="bg-white p-6 fixed  right-4 bottom-4 rounded-lg shadow w-[30%] h-56">
//               <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//                 Today's Sale
//               </h2>
//               <div className="flex items-center justify-between">
//                 <p className="text-xl text-center text-gray-600 font-medium">
//                   Total Sales:
//                 </p>
//                 <p className="text-xl font-bold text-gray-800">
//                   <span className="text-5xl">{dailySales?.totalSales}</span> Rs
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// "use client"

// import { useEffect, useRef, useState } from "react"
// import { toast } from "react-toastify"
// import { useNavigate } from "react-router-dom"
// import { FaArrowLeft, FaTrashAlt, FaSearch, FaPlus } from "react-icons/fa"
// import { FaRegPenToSquare } from "react-icons/fa6"

// export const GenerateInvoiceComponent = () => {
//   const [product, setProduct] = useState([])
//   const [name, setName] = useState("")
//   const [quantity, setQuantity] = useState(1)
//   const [discount, setDiscount] = useState(0)
//   const [price, setPrice] = useState(0)
//   const [allItem, setAllItem] = useState([])
//   const [totalPrice, setTotalPrice] = useState(0)
//   const [editableItemIndex, setEditableItemIndex] = useState(null)
//   const [customerName, setCustomerName] = useState("")
//   const [isModal, setIsModal] = useState(false)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filteredProducts, setFilteredProducts] = useState([])
//   const [isSearchModal, setIsSearchModal] = useState(false)
//   const editableRefs = useRef([])
//   const navigate = useNavigate()

//   const getProduct = () => {
//     fetch("https://api-pharmacy-nu.vercel.app/api/v1/product", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200 || 201) {
//           return response.json()
//         } else {
//           throw new Error("Failed to get product")
//         }
//       })
//       .then((data) => {
//         setProduct(data?.data || [])
//       })
//       .catch((error) => {
//         toast.error(error?.message)
//       })
//   }

//   useEffect(() => {
//     getProduct()
//   }, [])

//   const handleSearchChange = (e) => {
//     const searchValue = e.target.value.toLowerCase()
//     setSearchTerm(searchValue)

//     if (searchValue) {
//       const filtered = product.filter((p) => p.name.toLowerCase().includes(searchValue))
//       setFilteredProducts(filtered)
//       setIsSearchModal(true)
//     } else {
//       setFilteredProducts([])
//       setIsSearchModal(false)
//     }
//   }

//   const handleSelectProduct = (selectedProduct) => {
//     setName(selectedProduct.name)
//     setPrice(selectedProduct.price)
//     setIsSearchModal(false)
//     setSearchTerm("")
//   }

//   const addItem = () => {
//     if ((name && quantity > 0, customerName)) {
//       setAllItem((prev) => [...prev, { name, quantity, price: Number.parseFloat(price) }])
//       setName("")
//       setPrice(0)
//       setQuantity(1)
//     } else {
//       toast("Please fill all input fields correctly", {
//         bodyClassName: "text-red-500",
//       })
//     }
//   }

//   useEffect(() => {
//     const total = allItem.reduce((sum, item) => sum + item.price * item.quantity, 0)
//     setTotalPrice(total)
//   }, [allItem])

//   const handleQuantityChange = (e, index) => {
//     const newQuantity = e.target?.value
//     setAllItem((prev) => prev.map((item, i) => (i === index ? { ...item, quantity: newQuantity } : item)))
//   }

//   const handleDeleteClick = (index) => {
//     setAllItem((prev) => prev.filter((_, i) => i !== index))
//     toast("Item deleted")
//     setIsModal(false)
//   }

//   const handleClick = () => {
//     setCustomerName("")
//     const subtotal = allItem.reduce((sum, item) => sum + item.price * item.quantity, 0)
//   }

//   const handleClicku = () => {
//     setCustomerName("")
//     const subtotal = allItem.reduce((sum, item) => sum + item.price * item.quantity, 0)
//     const printWindow = window.open("", "", "width=600,height=800")
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>POS Pharmacy</title>
//           <style>
//             @page {
//               size: 80mm 210mm;
//               margin: 5mm;
//             }
//             body {
//               font-family: Arial, sans-serif;
//               font-size: 10px;
//               line-height: 1.3;
//               width: 72mm;
//               margin: auto;
//             }
//             h1, h2, h3, p {
//               margin: 2px 0;
//             }
//             .header {
//               background: #000;
//               color: #fff;
//               text-align: center;
//               font-size: 12px;
//               font-weight: bold;
//               padding: 2px 0;
//             }
//             .shop-info {
//               font-size: 9px;
//               margin-top: 4px;
//             }
//             .customer {
//               margin: 8px 0;
//               font-size: 10px;
//               font-weight: bold;
//             }
//             table {
//               width: 100%;
//               border-collapse: collapse;
//               font-size: 9px;
//             }
//             th, td {
//               border: 1px solid #000;
//               padding: 2px 3px;
//               text-align: center;
//             }
//             th {
//               background: #f1f1f1;
//             }
//             .summary {
//               margin-top: 6px;
//               width: 100%;
//               border: 1px solid #000;
//             }
//             .summary td {
//               padding: 4px;
//               text-align: right;
//               font-size: 10px;
//             }
//             .footer {
//               margin-top: 12px;
//               font-size: 9px;
//               text-align: center;
//               font-weight: bold;
//             }
//           </style>
//         </head>
//         <body>
//           <div class="header">Siddiqui Medical Store</div>
//           <div class="shop-info">
//             <p>53- Gulberg III Near Sui Gas Office Guru Mangat Road</p>
//             <p>Opposite SNGPL Office Lahore</p>
//             <p>Phone#: 03364214916, 03114572734</p>
//             <p>License No: 490-B/GT/10/2016</p>
//           </div>
//           <div class="customer">
//             Customer Name: <span style="text-transform: uppercase;">${customerName}</span>
//           </div>
//           <table>
//             <tr>
//               <td style="text-align:left;">Invoice #</td>
//               <td style="text-align:right;">#2</td>
//             </tr>
//             <tr>
//               <td style="text-align:left;">Date</td>
//               <td style="text-align:right;">${new Date().toLocaleDateString()}</td>
//             </tr>
//           </table>
//           <table style="margin-top:6px;">
//             <thead>
//               <tr>
//                 <th>Sr#</th>
//                 <th>Item</th>
//                 <th>Unit Cost</th>
//                 <th>Qty</th>
//                 <th>Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${allItem
//                 .map(
//                   (item, i) => `
//                   <tr>
//                     <td>${i + 1}</td>
//                     <td style="text-align:left;">${item.name}</td>
//                     <td>${item.price}</td>
//                     <td>${item.quantity}</td>
//                     <td>${item.price * item.quantity}</td>
//                   </tr>
//                 `,
//                 )
//                 .join("")}
//             </tbody>
//           </table>
//           <table class="summary">
//             <tr>
//               <td>Subtotal</td>
//               <td>${subtotal}</td>
//             </tr>
//             <tr>
//               <td><b>Grand Total</b></td>
//               <td><b>${subtotal}</b></td>
//             </tr>
//           </table>
//           <div class="footer">
//             <p>FRIDGE ITEM & INHALER & LOOSE MEDICINE NON RETURNABLE</p>
//             <p>(Computer Software Developed by ConsoleDot – Ph# 03321639988)</p>
//           </div>
//         </body>
//       </html>
//     `)
//     printWindow.document.close()
//     printWindow.print()
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <button
//             className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
//             onClick={() => navigate(`/dashboard`)}
//           >
//             <FaArrowLeft className="w-4 h-4" />
//             <span className="font-medium">Back to Dashboard</span>
//           </button>

//           <div className="mt-6">
//             <h1 className="text-3xl font-bold text-slate-800 mb-2">Generate Invoice</h1>
//             <p className="text-slate-600">Create and manage pharmacy invoices</p>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-slate-700">Search Product</label>
//               <div className="relative">
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Search for products..."
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-slate-700">Customer Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 placeholder="Enter customer name"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* <div className="mt-6">
//             <label className="block text-sm font-semibold text-slate-700 mb-2">Discount (%)</label>
//             <input
//               type="number"
//               className="w-full max-w-xs px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//               placeholder="Enter discount percentage"
//               value={discount}
//               onChange={(e) => setDiscount(e.target.value)}
//             />
//           </div> */}
//         </div>

//         {isSearchModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
//               <h2 className="text-xl font-bold text-slate-800 mb-4">Search Results</h2>
//               <div className="max-h-64 overflow-y-auto">
//                 {filteredProducts.length > 0 ? (
//                   <ul className="space-y-2">
//                     {filteredProducts.map((product) => (
//                       <li
//                         key={product.id}
//                         className="p-3 hover:bg-slate-50 cursor-pointer rounded-lg border border-slate-200 transition-colors"
//                         onClick={() => handleSelectProduct(product)}
//                       >
//                         <div className="flex justify-between items-center">
//                           <span className="font-medium text-slate-800">{product.name}</span>
//                           <span className="text-blue-600 font-semibold">Rs {product.price}</span>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-slate-500 text-center py-8">No products found</p>
//                 )}
//               </div>
//               <button
//                 className="mt-4 w-full px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
//                 onClick={() => setIsSearchModal(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
//           <h3 className="text-lg font-semibold text-slate-800 mb-4">Add Item</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-slate-700">Item Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 placeholder="Medicine name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-slate-700">Quantity</label>
//               <input
//                 type="number"
//                 className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 placeholder="Quantity"
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//               />
//             </div>
//             <div className="space-y-2">
//               <label className="block text-sm font-semibold text-slate-700">Price (Rs)</label>
//               <input
//                 type="number"
//                 className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                 placeholder="Price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </div>
//           </div>
//           <button
//             className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
//             onClick={addItem}
//           >
//             <FaPlus className="w-4 h-4" />
//             Add Item
//           </button>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
//           <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
//             <h3 className="text-lg font-semibold text-slate-800">Invoice Items</h3>
//           </div>

//           {allItem.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-slate-50">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Medicine</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Quantity</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Unit Price</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Total</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-200">
//                   {allItem.map((item, index) => (
//                     <tr key={index} className="hover:bg-slate-50 transition-colors">
//                       <td className="px-6 py-4">
//                         <span className="font-medium text-slate-800">{item.name}</span>
//                       </td>
//                       <td className="px-6 py-4">
//                         {editableItemIndex === index ? (
//                           <input
//                             ref={(el) => (editableRefs.current[index] = el)}
//                             type="number"
//                             className="w-20 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                             value={item.quantity}
//                             onChange={(e) => handleQuantityChange(e, index)}
//                           />
//                         ) : (
//                           <span className="text-slate-700">{item.quantity}</span>
//                         )}
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className="text-slate-700">Rs {item.price.toFixed(2)}</span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className="font-semibold text-slate-800">
//                           Rs {(item.price * item.quantity).toFixed(2)}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex gap-3">
//                           <button
//                             className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                             onClick={() => setEditableItemIndex(editableItemIndex === index ? null : index)}
//                           >
//                             <FaRegPenToSquare className="w-4 h-4" />
//                           </button>
//                           <button
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                             onClick={() => setIsModal(true)}
//                           >
//                             <FaTrashAlt className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="px-6 py-12 text-center">
//               <p className="text-slate-500 text-lg">No items added yet</p>
//               <p className="text-slate-400 text-sm mt-1">Add items to start building your invoice</p>
//             </div>
//           )}
//         </div>

//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <div className="text-right">
//               <p className="text-sm text-slate-600 mb-1">Total Amount</p>
//               <p className="text-3xl font-bold text-slate-800">Rs {totalPrice.toFixed(2)}</p>
//             </div>
//             <button
//               className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//               onClick={handleClicku}
//               disabled={allItem.length === 0 || !customerName}
//             >
//               Generate Invoice
//             </button>
//           </div>
//         </div>

//         {isModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
//               <div className="text-center">
//                 <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
//                   <FaTrashAlt className="w-6 h-6 text-red-600" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-800 mb-2">Delete Item</h3>
//                 <p className="text-slate-600 mb-6">
//                   Are you sure you want to delete this item? This action cannot be undone.
//                 </p>
//                 <div className="flex gap-3 justify-center">
//                   <button
//                     className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition-colors"
//                     onClick={() => setIsModal(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
//                     onClick={() => handleDeleteClick(allItem.findIndex(() => true))}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft, FaTrashAlt, FaSearch, FaPlus, FaCheck, FaTimes } from "react-icons/fa"
import { FaRegPenToSquare } from "react-icons/fa6"

export const GenerateInvoiceComponent = () => {
  const [product, setProduct] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0)
  const [allItem, setAllItem] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [editableItemIndex, setEditableItemIndex] = useState(null)
  const [customerName, setCustomerName] = useState("")
  const [isModal, setIsModal] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isSearchModal, setIsSearchModal] = useState(false)
  const editableRefs = useRef([])
  const navigate = useNavigate()

  const getProduct = () => {
    fetch("https://api-pharmacy-nu.vercel.app/api/v1/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200 || 201) {
          return response.json()
        } else {
          throw new Error("Failed to get product")
        }
      })
      .then((data) => {
        setProduct(data?.data || [])
      })
      .catch((error) => {
        toast.error(error?.message)
      })
  }

  useEffect(() => {
    getProduct()
  }, [])

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase()
    setSearchTerm(searchValue)

    if (searchValue) {
      const filtered = product.filter((p) => p.name.toLowerCase().includes(searchValue))
      setFilteredProducts(filtered)
      setIsSearchModal(true)
    } else {
      setFilteredProducts([])
      setIsSearchModal(false)
    }
  }

  const handleSelectProduct = (selectedProduct) => {
    setName(selectedProduct.name)
    setPrice(selectedProduct.price)
    setIsSearchModal(false)
    setSearchTerm("")
  }

  const addItem = () => {
    if ((name && quantity > 0, customerName)) {
      setAllItem((prev) => [...prev, { name, quantity, price: Number.parseFloat(price) }])
      setName("")
      setPrice(0)
      setQuantity(1)
    } else {
      toast("Please fill all input fields correctly", {
        bodyClassName: "text-red-500",
      })
    }
  }

  useEffect(() => {
    const total = allItem.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotalPrice(total)
  }, [allItem])

  const handleQuantityChange = (e, index) => {
    const newQuantity = e.target?.value
    setAllItem((prev) => prev.map((item, i) => (i === index ? { ...item, quantity: newQuantity } : item)))
  }

  const handleDeleteClick = () => {
    if (itemToDelete !== null) {
      setAllItem((prev) => prev.filter((_, i) => i !== itemToDelete))
      toast("Item deleted")
      setIsModal(false)
      setItemToDelete(null)
    }
  }

  const openDeleteModal = (index) => {
    setItemToDelete(index)
    setIsModal(true)
  }

  const saveEditedItem = () => {
    setEditableItemIndex(null)
    toast("Item updated successfully")
  }

  const cancelEdit = () => {
    setEditableItemIndex(null)
  }

  const handleClick = () => {
    setCustomerName("")
    const subtotal = allItem.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const handleClicku = () => {
    setCustomerName("")
    const subtotal = allItem.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const printWindow = window.open("", "", "width=600,height=800")
    printWindow.document.write(`
      <html>
        <head>
          <title>POS Pharmacy</title>
          <style>
            @page {
              size: 80mm 210mm;
              margin: 5mm;
            }
            body {
              font-family: Arial, sans-serif;
              font-size: 10px;
              line-height: 1.3;
              width: 72mm;
              margin: auto;
            }
            h1, h2, h3, p {
              margin: 2px 0;
            }
            .header {
              background: #000;
              color: #fff;
              text-align: center;
              font-size: 12px;
              font-weight: bold;
              padding: 2px 0;
            }
            .shop-info {
              font-size: 9px;
              margin-top: 4px;
            }
            .customer {
              margin: 8px 0;
              font-size: 10px;
              font-weight: bold;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              font-size: 9px;
            }
            th, td {
              border: 1px solid #000;
              padding: 2px 3px;
              text-align: center;
            }
            th {
              background: #f1f1f1;
            }
            .summary {
              margin-top: 6px;
              width: 100%;
              border: 1px solid #000;
            }
            .summary td {
              padding: 4px;
              text-align: right;
              font-size: 10px;
            }
            .footer {
              margin-top: 12px;
              font-size: 9px;
              text-align: center;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="header">Siddiqui Medical Store</div>
          <div class="shop-info">
            <p>53- Gulberg III Near Sui Gas Office Guru Mangat Road</p>
            <p>Opposite SNGPL Office Lahore</p>
            <p>Phone#: 03364214916, 03114572734</p>
            <p>License No: 490-B/GT/10/2016</p>
          </div>
          <div class="customer">
            Customer Name: <span style="text-transform: uppercase;">${customerName}</span>
          </div>
          <table>
            <tr>
              <td style="text-align:left;">Invoice #</td>
              <td style="text-align:right;">#2</td>
            </tr>
            <tr>
              <td style="text-align:left;">Date</td>
              <td style="text-align:right;">${new Date().toLocaleDateString()}</td>
            </tr>
          </table>
          <table style="margin-top:6px;">
            <thead>
              <tr>
                <th>Sr#</th>
                <th>Item</th>
                <th>Unit Cost</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${allItem
                .map(
                  (item, i) => `
                  <tr>
                    <td>${i + 1}</td>
                    <td style="text-align:left;">${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                  </tr>
                `,
                )
                .join("")}
            </tbody>
          </table>
          <table class="summary">
            <tr>
              <td>Subtotal</td>
              <td>${subtotal}</td>
            </tr>
            <tr>
              <td><b>Grand Total</b></td>
              <td><b>${subtotal}</b></td>
            </tr>
          </table>
          <div class="footer">
            <p>FRIDGE ITEM & INHALER & LOOSE MEDICINE NON RETURNABLE</p>
            <p>(Computer Software Developed by ConsoleDot – Ph# 03321639988)</p>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <button
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={() => navigate(`/dashboard`)}
          >
            <FaArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Dashboard</span>
          </button>

          <div className="mt-6">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Generate Invoice</h1>
            <p className="text-slate-600">Create and manage pharmacy invoices</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Search Product</label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Customer Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter customer name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
          </div>
        </div>

        {isSearchModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
              <h2 className="text-xl font-bold text-slate-800 mb-4">Search Results</h2>
              <div className="max-h-64 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  <ul className="space-y-2">
                    {filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="p-3 hover:bg-slate-50 cursor-pointer rounded-lg border border-slate-200 transition-colors"
                        onClick={() => handleSelectProduct(product)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-slate-800">{product.name}</span>
                          <span className="text-blue-600 font-semibold">Rs {product.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-500 text-center py-8">No products found</p>
                )}
              </div>
              <button
                className="mt-4 w-full px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                onClick={() => setIsSearchModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Add Item</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Item Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Medicine name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Quantity</label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Price (Rs)</label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <button
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
            onClick={addItem}
          >
            <FaPlus className="w-4 h-4" />
            Add Item
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">Invoice Items</h3>
          </div>

          {allItem.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Medicine</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Unit Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Total</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {allItem.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-800">{item.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        {editableItemIndex === index ? (
                          <input
                            ref={(el) => (editableRefs.current[index] = el)}
                            type="number"
                            className="w-20 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(e, index)}
                          />
                        ) : (
                          <span className="text-slate-700">{item.quantity}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-700">Rs {item.price.toFixed(2)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-800">
                          Rs {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {editableItemIndex === index ? (
                            <>
                              <button
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                onClick={saveEditedItem}
                                title="Save changes"
                              >
                                <FaCheck className="w-4 h-4" />
                              </button>
                              <button
                                className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                                onClick={cancelEdit}
                                title="Cancel editing"
                              >
                                <FaTimes className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                onClick={() => setEditableItemIndex(index)}
                                title="Edit quantity"
                              >
                                <FaRegPenToSquare className="w-4 h-4" />
                              </button>
                              <button
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                onClick={() => openDeleteModal(index)}
                                title="Delete item"
                              >
                                <FaTrashAlt className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-slate-500 text-lg">No items added yet</p>
              <p className="text-slate-400 text-sm mt-1">Add items to start building your invoice</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-slate-600 mb-1">Total Amount</p>
              <p className="text-3xl font-bold text-slate-800">Rs {totalPrice.toFixed(2)}</p>
            </div>
            <button
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleClicku}
              disabled={allItem.length === 0 || !customerName}
            >
              Generate Invoice
            </button>
          </div>
        </div>

        {isModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <FaTrashAlt className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Delete Item</h3>
                <p className="text-slate-600 mb-6">
                  Are you sure you want to delete this item? This action cannot be undone.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition-colors"
                    onClick={() => {
                      setIsModal(false)
                      setItemToDelete(null)
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    onClick={handleDeleteClick}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
