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
//     fetch("${BASE_URL}/product", {
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
//         onClick={() => navigate(`/`)}
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
//     fetch("${BASE_URL}/product", {
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
//     fetch("${BASE_URL}/sale/today", {
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
//           onClick={() => navigate("/")}
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
//     fetch("${BASE_URL}/product", {
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
//             onClick={() => navigate(`/`)}
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
"use client";

import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Trash2,
  Search,
  Plus,
  Check,
  X,
  ShoppingCart,
  Calculator,
  User,
  Package,
  DollarSign,
  Calendar,
  Receipt,
  Edit3,
  AlertCircle,
  TrendingUp,
  Pill,
  FileText,
} from "lucide-react";
import config from "../api/config";
const BASE_URL = config.BASE_URL
export const GenerateInvoiceComponent = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [allItem, setAllItem] = useState([]);
  const [invoiceId, setInvoiceId] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [editableItemIndex, setEditableItemIndex] = useState(null);
  const [customerName, setCustomerName] = useState("Customer");
  const [isModal, setIsModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [dailySales, setDailySales] = useState({ totalSales: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);
  const editableRefs = useRef([]);
  const navigate = useNavigate();
  const generateInvoicID = () => {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    const objectId =
      timestamp +
      "xxxxxxxxxxxxxxxx".replace(/[x]/g, () =>
        ((Math.random() * 16) | 0).toString(16)
      );
    return `INV-${objectId.substring(0, 12).toUpperCase()}`;
  };

  useEffect(() => {
    const generateInvoiceId = generateInvoicID();
    if (generateInvoiceId) {
      setInvoiceId(generateInvoiceId);
    }
  }, []);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("${BASE_URL}/product", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        setProduct(data?.data || []);
      } else {
        throw new Error("Failed to get products");
      }
    } catch (error) {
      toast.error(error?.message || "Failed to load products");
    } finally {
      setIsLoading(false);
    }
  };

  const getDailySaleReports = async () => {
    try {
      const response = await fetch("${BASE_URL}/sale/today", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        setDailySales(data?.data || { totalSales: 0 });
      }
    } catch (error) {
      console.error("Failed to load daily sales:", error);
    }
  };

  useEffect(() => {
    getProduct();
    getDailySaleReports();
  }, []);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue) {
      const filtered = product.filter((p) =>
        p.name.toLowerCase().includes(searchValue)
      );
      setFilteredProducts(filtered);
      setIsSearchModal(true);
    } else {
      setFilteredProducts([]);
      setIsSearchModal(false);
    }
  };

  const addItem = (selectedProduct) => {
    if (selectedProduct?._id && quantity > 0 && selectedProduct?.price > 0) {
      // Check if item already exists
      const existingItemIndex = allItem.findIndex(
        (item) => item.id === selectedProduct._id
      );

      if (existingItemIndex !== -1) {
        // Update existing item quantity
        setAllItem((prev) =>
          prev.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
        toast.success("Item quantity updated");
      } else {
        // Add new item
        setAllItem((prev) => [
          ...prev,
          {
            id: selectedProduct._id,
            name: selectedProduct.name,
            dosage: selectedProduct.dosage,
            category: selectedProduct.category,
            quantity: quantity,
            price: Number.parseFloat(selectedProduct?.price),
            amount: Number.parseFloat(selectedProduct?.price) * quantity,
          },
        ]);
        toast.success("Item added to invoice");
      }

      // Reset inputs
      setQuantity(1);
      setSearchTerm("");
      setIsSearchModal(false);
    } else {
      toast.error("Please select a valid product");
    }
  };

  useEffect(() => {
    const total = allItem.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [allItem]);

  const handleQuantityChange = (e, index) => {
    const newQuantity = parseInt(e.target?.value) || 0;
    if (newQuantity > 0) {
      setAllItem((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleDeleteClick = () => {
    if (itemToDelete !== null) {
      setAllItem((prev) => prev.filter((_, i) => i !== itemToDelete));
      toast.success("Item removed from invoice");
      setIsModal(false);
      setItemToDelete(null);
    }
  };

  const openDeleteModal = (index) => {
    setItemToDelete(index);
    setIsModal(true);
  };

  const handlePrintInvoice = async () => {
    if (allItem.length === 0) {
      toast.error("Please add items to generate invoice");
      return;
    }

    if (!customerName.trim()) {
      toast.error("Please enter customer name");
      return;
    }

    const subtotal = allItem.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

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
          <p><strong>License No:</strong> 490-B/GT/10/2016</p>
        </div>
        
        <div class="invoice-info">
          <table style="border: none; margin: 0;">
            <tr>
              <td style="border: none; text-align: left; padding: 2px 0;"><strong>Invoice #:</strong></td>
              <td style="border: none; text-align: right; padding: 2px 0;">${invoiceId}</td>
            </tr>
            <tr>
              <td style="border: none; text-align: left; padding: 2px 0;"><strong>Date:</strong></td>
              <td style="border: none; text-align: right; padding: 2px 0;">${new Date().toLocaleDateString()}</td>
            </tr>
            <tr>
              <td style="border: none; text-align: left; padding: 2px 0;"><strong>Time:</strong></td>
              <td style="border: none; text-align: right; padding: 2px 0;">${new Date().toLocaleTimeString()}</td>
            </tr>
          </table>
        </div>

        <div class="customer">
          <strong>Customer:</strong> ${customerName.toUpperCase()}
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
            ${allItem
              .map(
                (item, i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td style="text-align:left; font-size: 11px;">${item.name}${
                  item.dosage ? ` (${item.dosage})` : ""
                }${item.category ? ` (${item.category.name})` : ""}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${item.quantity}</td>
                  <td><strong>${(item.price * item.quantity).toFixed(
                    2
                  )}</strong></td>
                </tr>
              `
              )
              .join("")}
          </tbody>
        </table>
        
        <table class="summary">
          <tr>
            <td style="text-align: left;"><strong>Subtotal:</strong></td>
            <td><strong>Rs ${subtotal.toFixed(2)}</strong></td>
          </tr>
          <tr class="total-row">
            <td style="text-align: left;"><strong>GRAND TOTAL:</strong></td>
            <td><strong>Rs ${subtotal.toFixed(2)}</strong></td>
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
    await generateInvoice();
  };
  const generateInvoice = () => {
    const token = localStorage.getItem("token");
    fetch(`${BASE_URL}/sale`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        products: allItem,
        customerName: customerName,
        invoiceId: invoiceId,
      }),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else if (response.status === 401) {
          localStorage.clear();
          navigate("/");
          getDailySaleReports();
          toast.error("token expire");
        } else {
          throw new Error("Failed to add product");
        }
      })
      .then((data) => {
        setAllItem([]);
        setCustomerName("Customer");
        setSearchTerm("");
        toast.success("Invoice generated successfully!");
        getDailySaleReports();
        const generateInvoiceId = generateInvoicID();
        if (generateInvoiceId) {
          setInvoiceId(generateInvoiceId);
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  return (
    <div className="min-h-screen  w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
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
                    Generate Invoice
                  </h1>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    Create new pharmacy invoice
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Sales Card */}
            <div className=" flex gap-2 ">
              <button
                className="flex-1 lg:flex-none px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                onClick={() => navigate(`/invoices`)}
              >
                <FileText className="h-4 w-4" />
                View All Invoices
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex gap-4 h-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-[80%]  ">
          {/* Customer & Search Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Product Search */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Search Products
                </h3>
              </div>

              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Search medicines by name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>

                {/* Search Results Dropdown */}
                {isSearchModal && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-40 max-h-80 overflow-hidden">
                    <div className="p-2">
                      {isLoading ? (
                        <div className="flex items-center justify-center py-8">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                          <span className="ml-2 text-gray-600">Loading...</span>
                        </div>
                      ) : filteredProducts.length > 0 ? (
                        <div className="max-h-72 overflow-y-auto">
                          {filteredProducts.map((product) => (
                            <div
                              key={product._id}
                              className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                              onClick={() => addItem(product)}
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <Package className="h-4 w-4 text-blue-600" />
                                  <h4 className="font-medium text-gray-900">
                                    {product.name}
                                  </h4>
                                </div>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                  {product.dosage && (
                                    <span>Dosage: {product.dosage}</span>
                                  )}
                                  {product.category?.name && (
                                    <span>
                                      Category: {product.category.name}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-blue-600">
                                  Rs {product.price}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Click to add
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <Package className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                          <p className="text-gray-500">No products found</p>
                          <p className="text-sm text-gray-400">
                            Try a different search term
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Customer Information
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter customer name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Receipt className="h-4 w-4" />
                    <span>Invoice #{invoiceId}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Items Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Invoice Items
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {allItem.length} items
                  </span>
                </div>
                {allItem.length > 0 && (
                  <button
                    onClick={() => setAllItem([])}
                    className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1"
                  >
                    <X className="h-4 w-4" />
                    Clear All
                  </button>
                )}
              </div>
            </div>

            {allItem.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Sr#
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Medicine
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Quantity
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Unit Price
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Total
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {allItem.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">
                              {item.name}
                            </div>
                            <div className="flex gap-2">
                              {item.dosage && (
                                <div className="text-sm text-gray-500">
                                  Dosage: {item.dosage}
                                </div>
                              )}
                              {item.dosage && (
                                <div className="text-sm text-gray-500">
                                  Category: {item.category.name}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <input
                            type="number"
                            min="1"
                            className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(e, index)}
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          Rs {item.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          Rs {(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            onClick={() => openDeleteModal(index)}
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
          </div>

          {/* Invoice Summary & Actions */}
        </div>
        <div className="w-[20%] flex flex-col gap-4">
          <div className="bg-gradient-to-r flex flex-col justify-between  from-green-500 h-32 xl:h-40 to-emerald-600 text-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4" />
              <span className="text-lg font-medium">Today's Sales</span>
            </div>
            <div className="text-2xl text-end font-bold">
              Rs {dailySales?.totalSales?.toLocaleString() || "0"}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col  justify-between items-start lg:items-center gap-6">
              {/* Total Summary */}
              <div className="flex items-center gap-6">
                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-600 mb-1">Items</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {allItem.length}
                  </p>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden lg:block"></div>
                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                  <p className="text-3xl font-bold text-blue-600">
                    Rs {totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full ">
                <button
                  className=" px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
                  onClick={() => {
                    setAllItem([]);
                    setCustomerName("Customer");
                    setSearchTerm("");
                  }}
                  disabled={allItem.length === 0}
                >
                  Clear Invoice
                </button>
                <button
                  className=" px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  onClick={() => setShowInvoicePreview(true)}
                  disabled={allItem.length === 0 || !customerName.trim()}
                >
                  <FileText className="h-4 w-4" />
                  View Invoice
                </button>
                <button
                  className=" px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  onClick={handlePrintInvoice}
                  disabled={allItem.length === 0 || !customerName.trim()}
                >
                  <Receipt className="h-5 w-5" />
                  Generate Invoice
                </button>
              </div>
            </div>

            {/* Validation Messages */}
            {allItem.length === 0 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-800">
                  Add items to generate invoice
                </span>
              </div>
            )}
            {!customerName.trim() && allItem.length > 0 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-800">
                  Enter customer name to generate invoice
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Remove Item
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to remove this item from the invoice?
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors font-medium"
                  onClick={() => {
                    setIsModal(false);
                    setItemToDelete(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                  onClick={handleDeleteClick}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Preview Modal */}
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
                      <strong>License No:</strong> 490-B/GT/10/2016
                    </p>
                  </div>
                </div>

                {/* Invoice Info */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>
                        <strong>Invoice #:</strong> {invoiceId}
                      </p>
                      <p>
                        <strong>Date:</strong> {new Date().toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Time:</strong> {new Date().toLocaleTimeString()}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Customer:</strong>
                      </p>
                      <p className="uppercase font-semibold">{customerName}</p>
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
                      {allItem.map((item, i) => (
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
                            Rs {item.price.toFixed(2)}
                          </td>
                          <td className="border border-gray-300 p-2 text-center">
                            {item.quantity}
                          </td>
                          <td className="border border-gray-300 p-2 text-right font-semibold">
                            Rs {(item.price * item.quantity).toFixed(2)}
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
                        Rs {totalPrice.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="bg-blue-600 text-white">
                      <td className="p-3 text-left font-bold">GRAND TOTAL:</td>
                      <td className="p-3 text-right font-bold">
                        Rs {totalPrice.toFixed(2)}
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
                    Rs {totalPrice.toLocaleString()}
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
                    handlePrintInvoice();
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
