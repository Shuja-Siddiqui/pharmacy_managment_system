// import React, { useEffect, useState } from "react";
// import { FaArrowLeft, FaPlus, FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Pagination } from "./Pagination";
// import config from "../api/config";
// const BASE_URL = config.BASE_URL
// export const RetrunInventoryComponent = () => {
//   const [returnProduct, setReturnProduct] = useState();
//   const [formData, setFormData] = useState();
//   const [searchterm, setSearchTerm] = useState();
//   const [product, setproduct] = useState();
//   const [viewModal, setViewModal] = useState();
//   // const [categoryName, setCategoryName] = useState("");
//   const [isUpdateModal, setIsUpdateModal] = useState(false);
//   const [isDeleteModal, setIsDeleteModal] = useState(false);
//   const [selectItem, setSelectedItem] = useState();
//   // const [categoryData, setCategoryData] = useState();
//   const [isModal, setIsModal] = useState(false);
//   const navigate = useNavigate();

//   // const addCategory = () => {
//   //   const token = localStorage.getItem("token");
//   //   fetch("${BASE_URL}/category", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //     body: JSON.stringify({
//   //       name: categoryName,
//   //     }),
//   //   })
//   //     .then((response) => {
//   //       if (response.status === 200 || 201) {
//   //         return response.json();
//   //       } else {
//   //         throw new Error("Failed to add product");
//   //       }
//   //     })
//   //     .then((data) => {
//   //       toast.success(data?.message);
//   //       getCategory();
//   //       setIsModal(false);
//   //     })
//   //     .catch((error) => {
//   //       toast.error(error.message);
//   //     });
//   // };

//   // const getCategory = () => {
//   //   fetch("${BASE_URL}/category", {
//   //     method: "GET",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     // body: JSON.stringify({
//   //     //   email: formData?.email,
//   //     //   password: formData?.password,
//   //     //   role: selectedComponent,
//   //     // }),
//   //   })
//   //     .then((response) => {
//   //       if (response.status === 200 || 201) {
//   //         return response.json();
//   //       } else {
//   //         throw new Error("Failed to login");
//   //       }
//   //     })
//   //     .then((data) => {
//   //       setCategoryData(data?.data);
//   //     })
//   //     .catch((error) => {
//   //       toast.error(error?.message);
//   //     });
//   // };

//   const getReturnProduct = () => {
//     fetch(`${BASE_URL}/returns`, {
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
//         setReturnProduct(data?.data);
//       })
//       .catch((error) => {
//         toast.error(error?.message);
//       });
//   };

//   const addProduct = (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     fetch(`${BASE_URL}/returns`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         product: formData?._id,
//         returnPrice: formData?.price,
//         quantity: formData?.quantity,
//         reason: formData?.reason,
//       }),
//     })
//       .then((response) => {
//         console.log(response.status);
//         if (response.status === 200 || response.status === 201) {
//           return response.json();
//         } else if (response.status === 401) {
//           localStorage.clear();
//           navigate(`/`);
//         } else {
//           throw new Error("Failed to add product");
//         }
//       })
//       .then((data) => {
//         setSearchTerm("");
//         setFormData({
//           name: "",
//           price: "",
//           reason: "",
//           quantity: "",
//         });
//         toast.success("Product added successfully");
//         getReturnProduct();
//         getProduct();
//       })
//       .catch((error) => {
//         toast.error(error?.message);
//       });
//   };

//   const handleUpdate = (e) => {
//     const token = localStorage.getItem("token");
//     console.log(token);
//     e.preventDefault();
//     fetch(`${BASE_URL}/returns`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         // Include Authorization header if required
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         returnAmount: selectItem?.totalReturnPrice,
//         product: selectItem?._id,
//         quantity: parseInt(selectItem?.quantity),
//       }),
//     })
//       .then((response) => {
//         if (response.status === 200 || 201) {
//           return response.json(); // Only parse JSON if the status is 200
//         } else {
//           throw new Error("Failed to login");
//         }
//       })
//       .then((data) => {
//         toast.success("Sucessfully Update");
//         getReturnProduct();
//         setIsUpdateModal(false);
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

//   const handleDelete = (e) => {
//     const token = localStorage.getItem("token");
//     e.preventDefault();
//     fetch(`${BASE_URL}/product/by-id/${selectItem?._id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (response.status === 200 || 201) {
//           return response.json();
//         } else {
//           localStorage.clear();
//           navigate(`/`);
//           throw new Error(response.json());
//         }
//       })
//       .then((data) => {
//         toast.success(data?.message);
//         getReturnProduct();
//         setIsDeleteModal(false);
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

//   const getProduct = () => {
//     fetch(`${BASE_URL}/product`, {
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
//         setproduct(data?.data);
//       })
//       .catch((error) => {
//         toast.error(error?.message);
//       });
//   };
//   useEffect(() => {
//     // getCategory();
//     getProduct();
//     getReturnProduct();
//   }, []);

//   const filteredMedications = product?.filter((med) => {
//     const matchesSearch =
//       med?.name?.toLowerCase().includes(searchterm?.toLowerCase()) ||
//       med?.category?.name.toLowerCase().includes(searchterm?.toLowerCase());
//     // const matchesCategory =
//     //   !categoryName || med?.category?.name === categoryName;
//     return matchesSearch;
//   });

//   const addTo = (item) => {
//     setFormData(item);
//     setSearchTerm(item?.name);
//     setIsModal(false);
//   };
//   return (
//     <div className="p-5 bg-[#F3F4F6] min-h-screen">
//       <div className=" flex w-full">
//         <div
//           className="h-10 w-12 bg-black p-2 rounded-lg"
//           onClick={() => navigate("/")}
//         >
//           {" "}
//           <FaArrowLeft className=" text-white  w-full h-full " />
//         </div>
//         <h1 className="text-3xl ml-[35%] font-bold text-center">
//         Return Inventory
//         </h1>
//       </div>
//       <div className="w-full grid grid-cols-3 gap-5 mt-5">
//         <div className="flex flex-col gap-2">
//           <h1 className="font-semibold">Item</h1>
//           <div className="relative">
//             <input
//               type="search"
//               placeholder="Search medications..."
//               value={searchterm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setIsModal(true);
//               }}
//               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none "
//             />
//             <FaSearch className="absolute left-3 top-3 text-gray-400" />
//             <div className="overflow-x-auto w-full max-h-96 overflow-y-auto absolute bg-white shadow top-14">
//               {searchterm?.length > 0 && (
//                 <table className="min-w-full relative top-0 z-50">
//                   {filteredMedications?.length > 0 && isModal ? (
//                     <>
//                       <thead className="sticky top-0">
//                         <tr className="bg-gray-100">
//                           <th className="px-4 py-2 text-left">Name</th>
//                           <th className="px-4 py-2 text-left">Category</th>
//                           <th className="px-4 py-2 text-right">Price</th>
//                           <th className="px-4 py-2 text-right">Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {filteredMedications?.map((medication, index) => (
//                           <tr key={index} className="border-b hover:bg-gray-50">
//                             <td className="px-4 py-2">{medication.name}</td>
//                             <td className="px-4 py-2">
//                               {medication.category?.name}
//                             </td>
//                             <td className="px-4 py-2 text-right">
//                               {medication.price.toFixed(2)}
//                             </td>
//                             <td className="px-4 py-2 text-center">
//                               <button
//                                 onClick={() => addTo(medication)}
//                                 // disabled={medication.stock === 0}
//                                 className={`inline-flex items-center px-3 py-1 rounded ${
//                                   medication.stock === 0
//                                     ? "bg-gray-300 cursor-not-allowed"
//                                     : "bg-blue-500 hover:bg-blue-600 text-white"
//                                 }`}
//                               >
//                                 <FaPlus className="mr-1" size={12} />
//                                 Add
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </>
//                   ) : (
//                     ""
//                   )}
//                 </table>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <h1 className="font-semibold">Price</h1>
//           <input
//             type="number"
//             className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
//             placeholder="Price"
//             required
//             value={formData?.price}
//             onChange={(e) =>
//               setFormData({ ...formData, price: e.target.value })
//             }
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <h1 className="font-semibold">Quantity</h1>
//           <input
//             type="number"
//             className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
//             placeholder="qunatity"
//             value={formData?.quantity}
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, quantity: e.target.value })
//             }
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <h1 className="font-semibold">Reason</h1>
//           <textarea
//             type="text"
//             className="border w-full border-[#E8E8E8] p-2 h-36 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
//             placeholder="Retrun Reason"
//             value={formData?.reason}
//             required
//             onChange={(e) =>
//               setFormData({ ...formData, reason: e.target.value })
//             }
//           />
//         </div>
//       </div>
//       {/* <div className="mt-3 w-full flex justify-between">
//           <div className="border  p-2 rounded-lg">
//             <select
//               name=""
//               id=""
//               required
//               className=" border-none focus:outline-none  flex items-center"
//               onChange={(e) =>
//                 setFormData({ ...formData, category: e.target.value })
//               }
//               value={formData?.category}
//             >
//               <option value="">Choose Category</option>
//               {categoryData?.map((i) => (
//                 <>
//                   <option value={i._id}>{i?.name}</option>
//                 </>
//               ))}
//             </select>
//           </div>
//           <div>
//             <button
//               className="p-2  bg-black text-white font-semibold rounded-lg"
//               onClick={() => setIsModal(true)}
//             >
//               Add Category
//             </button>
//           </div>
//         </div> */}
//       <button
//         className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
//         type="submit"
//         onClick={addProduct}
//       >
//         + Add Item
//       </button>

//       {/* return product tabel */}
//       <Pagination
//         data={returnProduct}
//         itemsPerPage={10}
//         setViewModal={setViewModal}
//         setSelectedItem={setSelectedItem}
//       />
//       {/* <table className={`w-full border  border-black mt-5`}>
//         <thead>
//           <tr className=" text-start ">
//             <th className="pb-2">Item</th>
//             <th className="pb-2">Quantity</th>
//             <th className="pb-2">Total Price</th>
//             <th className="pb-2">Reason</th>
//             <th className="pb-2">Date</th>
//             <th className="pb-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {returnProduct?.map((item) => (
//             <tr className="border-t border-[#232323] shadow-slate-50 ">
//               <th className="text-base  font-normal ">
//                 {item?.product?.name}{" "}
//               </th>
//               <th className="text-base  font-normal ">{item?.quantity} </th>
//               <th className="text-base  font-normal">
//                 {item?.totalReturnPrice}
//               </th>
//               <th className="text-base  font-normal">
//                 {item?.reason?.substring(0, 15)}
//                 {item?.reason?.length > 15 && "....."}
//               </th>
//               <th className="text-base  font-normal ">
//                 {" "}
//                 {new Date(item?.returnedAt).toLocaleDateString()}
//               </th>
//               <th>
//                 <div className="flex justify-center items-center gap-5 ">
//                   <BsEyeFill
//                     className="cursor-pointer text-lg hover:text-amber-500 "
//                     onClick={() => {
//                       setIsModal(true);
//                       setSelectedItem(item);
//                     }}
//                   />
//                   <MdDelete
//                     className="cursor-pointer text-lg hover:text-amber-500 "
//                     onClick={() => {
//                       setIsDeleteModal(true);
//                       setSelectedItem(item);
//                     }}
//                   />
//                 </div>
//               </th>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}

//       {viewModal && (
//         <div className="fixed flex w-full top-0 h-screen justify-center items-center">
//           <div
//             className="w-full h-screen right-0   fixed top-0 bg-black opacity-10"
//             onClick={() => setViewModal(false)}
//           ></div>
//           <div className="absolute top-[35%] p-5 shadow-lg rounded-lg w-[30%] min-h-72 bg-white">
//             <div className="flex flex-col gap-3 relative justify-around items-center w-full h-full">
//               <button
//                 className="absolute top-0 right-0 text-gray-500 hover:text-gray-800"
//                 onClick={() => setViewModal(false)}
//               >
//                 ✖
//               </button>
//               <h1 className="text-2xl font-semibold">View Inventory</h1>
//               <div className="flex gap-1 items-center w-full ">
//                 <label className="font-bold text-xl">Retrun Date:</label>
//                 <p> {new Date(selectItem?.returnedAt).toLocaleDateString()}</p>
//               </div>
//               <div className="flex gap-1 items-baseline w-full ">
//                 <label className="font-bold text-xl text-center">
//                   Item Name :
//                 </label>
//                 <p>{selectItem?.product?.name}</p>
//               </div>
//               <div className="flex gap-1 items-baseline w-full ">
//                 <label className="font-bold text-xl text-center">
//                   Quantity :
//                 </label>
//                 <p>{selectItem?.quantity}</p>
//               </div>
//               <div className="flex gap-1 items-baseline w-full ">
//                 <label className="font-bold text-xl text-center">
//                   Total Price :
//                 </label>
//                 <p>{selectItem?.totalReturnPrice}</p>
//               </div>
//               <div className="flex gap-1 items-baseline w-full ">
//                 <label className="font-bold text-xl text-center">Reason:</label>
//                 <p>{selectItem?.reason}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* upadte modal */}
//       {isUpdateModal && (
//         <div className="fixed inset-0 z-50 flex justify-center items-center">
//           {/* Overlay */}

//           {/* Modal Content */}
//           <div className="relative bg-white w-[90%] max-w-[500px] p-5 rounded-lg shadow-lg z-50">
//             <h2 className="text-xl font-semibold mb-4 text-center">
//               Update User
//             </h2>

//             <form onSubmit={handleUpdate}>
//               <div className="grid grid-cols-1 gap-4">
//                 {/* User Name */}
//                 <div className="flex flex-col">
//                   <label className="font-semibold">Item Name</label>
//                   <input
//                     type="text"
//                     className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500"
//                     placeholder="Medicine Name"
//                     required
//                     value={selectItem?.product.name}
//                     onChange={(e) => {
//                       const updatedValue = e.target.value;
//                       setSelectedItem((prev) => ({
//                         ...prev,
//                         name: updatedValue,
//                       }));
//                     }}
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="flex flex-col">
//                   <label className="font-semibold">Stock</label>
//                   <input
//                     type="text"
//                     className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500"
//                     placeholder="Stock"
//                     required
//                     value={selectItem?.quantity}
//                     onChange={(e) => {
//                       const updatedValue = e.target.value;
//                       setSelectedItem((prev) => ({
//                         ...prev,
//                         quantity: updatedValue,
//                       }));
//                     }}
//                   />
//                 </div>

//                 {/* Phone No */}
//                 <div className="flex flex-col">
//                   <label className="font-semibold">TotalReturnPrice</label>
//                   <input
//                     type="text"
//                     className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500"
//                     placeholder="Price"
//                     required
//                     value={selectItem?.totalReturnPrice}
//                     onChange={(e) => {
//                       const updatedValue = e.target.value;
//                       setSelectedItem((prev) => ({
//                         ...prev,
//                         price: updatedValue,
//                       }));
//                     }}
//                   />
//                 </div>

//                 {/* Password */}
//                 {/* <div className="flex flex-col">
//                   <label className="font-semibold">Password</label>
//                   <input
//                     type="password"
//                     className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500"
//                     placeholder="Password"
//                     required
//                     onChange={(e) =>
//                       setFormData({ ...formData, password: e.target.value })
//                     }
//                   />
//                 </div> */}

//                 {/* Role */}
//                 {/* <div className="flex flex-col">
//                   <label className="font-semibold">Category</label>
//                   <select
//                     value={selectItem?.category?.name}
//                     onChange={(e) => {
//                       const updatedValue = e.target.value;
//                       setSelectedItem((prev) => ({
//                         ...prev,
//                         category: updatedValue,
//                       }));
//                     }}
//                     className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500"
//                   >
//                     {categoryData?.map((i) => (
//                       <>
//                         <option value={i._id}>{i?.name}</option>
//                       </>
//                     ))}
//                   </select>
//                 </div> */}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-black hover:text-black border text-white font-semibold py-2 mt-4 rounded-lg hover:bg-white hover:border-black hover:border"
//               >
//                 Update
//               </button>
//             </form>

//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               onClick={() => setIsUpdateModal(false)}
//             >
//               ✖
//             </button>
//           </div>
//         </div>
//       )}

//       {isDeleteModal && (
//         <div className="fixed inset-0 z-50 flex justify-center items-center">
//           {/* Overlay */}
//           <div
//             className="fixed inset-0 bg-black opacity-50"
//             onClick={() => setIsDeleteModal(false)} // Close modal when clicking the overlay
//           ></div>

//           {/* Modal Content */}
//           <div className="relative bg-white w-[90%] max-w-[350px] p-5 rounded-lg shadow-lg z-50">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               onClick={() => setIsDeleteModal(false)}
//             >
//               ✖
//             </button>
//             <h2 className="text-xl font-semibold mb-4 text-center">
//               Delete User
//             </h2>
//             <div className="flex justify-around">
//               <button
//                 className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
//                 onClick={handleDelete}
//               >
//                 Confrim
//               </button>
//               <button
//                 className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
//                 onClick={() => setIsDeleteModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowLeft,
  Package,
  Plus,
  Search,
  Edit3,
  Trash2,
  Filter,
  Download,
  Upload,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Box,
  Tag,
  Calendar,
  X,
  Check,
  Pill,
  RotateCcw,
} from "lucide-react";
import config from "../api/config";
import { BsEyeFill } from "react-icons/bs";

const BASE_URL = config.BASE_URL;

export const RetrunInventoryComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchModal, setIsSearchModal] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [returnProduct, setReturnProduct] = useState([]);
  const [formData, setFormData] = useState();
  const [searchterm, setSearchTerm] = useState();
  const [productSearchterm, setProductSearchTerm] = useState();
  const [product, setproduct] = useState();
  const [viewModal, setViewModal] = useState();
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectItem, setSelectedItem] = useState();
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const getReturnProduct = () => {
    setIsLoading(true);
    fetch(`${BASE_URL}/returns`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200 || 201) {
          return response.json();
        } else {
          throw new Error("Failed to get product");
        }
      })
      .then((data) => {
        setReturnProduct(data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  const addProduct = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch(`${BASE_URL}/returns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product: formData?._id,
        returnPrice: formData?.price,
        quantity: formData?.quantity,
        reason: formData?.reason,
      }),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else if (response.status === 401) {
          localStorage.clear();
          navigate(`/`);
        } else {
          throw new Error("Failed to add product");
        }
      })
      .then((data) => {
        setSearchTerm("");
        setFormData({
          name: "",
          price: "",
          reason: "",
          quantity: "",
        });
        toast.success("Product added successfully");
        getReturnProduct();
        getProduct();
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  const handleUpdate = (e) => {
    const token = localStorage.getItem("token");
    console.log(token);
    e.preventDefault();
    fetch(`${BASE_URL}/returns`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Include Authorization header if required
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        returnAmount: selectItem?.totalReturnPrice,
        product: selectItem?._id,
        quantity: parseInt(selectItem?.quantity),
      }),
    })
      .then((response) => {
        if (response.status === 200 || 201) {
          return response.json(); // Only parse JSON if the status is 200
        } else {
          throw new Error("Failed to login");
        }
      })
      .then((data) => {
        toast.success("Sucessfully Update");
        getReturnProduct();
        setIsUpdateModal(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleDelete = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    fetch(`${BASE_URL}/product/by-id/${selectItem?._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200 || 201) {
          return response.json();
        } else {
          localStorage.clear();
          navigate(`/`);
          throw new Error(response.json());
        }
      })
      .then((data) => {
        toast.success(data?.message);
        getReturnProduct();
        setIsDeleteModal(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const getProduct = () => {
    fetch(`${BASE_URL}/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200 || 201) {
          return response.json();
        } else {
          throw new Error("Failed to get product");
        }
      })
      .then((data) => {
        setproduct(data?.data);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  useEffect(() => {
    // getCategory();
    getProduct();
    getReturnProduct();
  }, []);

  const filteredMedications = product?.filter((med) => {
    const matchesSearch =
      med?.name?.toLowerCase().includes(searchterm?.toLowerCase()) ||
      med?.category?.name.toLowerCase().includes(searchterm?.toLowerCase());
    // const matchesCategory =
    //   !categoryName || med?.category?.name === categoryName;
    return matchesSearch;
  });

  const addTo = (item) => {
    setFormData(item);
    setProductSearchTerm(item?.name);
    setIsSearchModal(false);
  };
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setProductSearchTerm(searchValue);

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
  const handleReturnSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue) {
      const filtered = returnProduct.filter((p) =>
        p.name.toLowerCase().includes(searchValue)
      );
      setFilteredProducts(filtered);
      setIsSearchModal(true);
    } else {
      setFilteredProducts([]);
      setIsSearchModal(false);
    }
  };

  const filteredReturnProducts = returnProduct?.filter((item) =>
    !searchterm
      ? true // no search term, include all
      : item?.product?.name?.toLowerCase().includes(searchterm.toLowerCase())
  );

  console.log(filteredReturnProducts);
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
                  <RotateCcw className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Return Inventory Management
                  </h1>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    Process returns and manage returned inventory
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Filter className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Add Product Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Return Product
            </h3>
          </div>

          <form onSubmit={addProduct}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Medicine Name *
                </label>
                <div className="relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Search medicines by name..."
                      value={productSearchterm}
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
                            <span className="ml-2 text-gray-600">
                              Loading...
                            </span>
                          </div>
                        ) : filteredProducts.length > 0 ? (
                          <div className="max-h-72 overflow-y-auto">
                            {filteredProducts?.map((product) => (
                              <div
                                key={product._id}
                                className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                                onClick={() => addTo(product)}
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

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter stock quantity"
                  value={formData?.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Price (Rs) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter price"
                  value={formData?.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Reason
                </label>
                <textarea
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter reasons (e.g., 500mg)"
                  value={formData?.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Adding...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Add Product
                </>
              )}
            </button>
          </form>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Search products by name..."
              value={searchterm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Return Product Inventory
              </h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {filteredReturnProducts?.length || 0} products
              </span>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading products...</span>
            </div>
          ) : filteredReturnProducts?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Medicine
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Qunatity
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Total Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Reason
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredReturnProducts?.map((item) => (
                    <tr
                      key={item._id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Pill className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-900">
                            {item?.product?.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                        Rs {item.totalReturnPrice?.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {item?.reason?.substring(0, 15) || "N/A"}
                        {item?.reason?.length > 15 && "....."}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {/* <button
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={() => {
                              setIsUpdateModal(true);
                              setSelectedItem(item);
                            }}
                            title="Edit product"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            onClick={() => {
                              setIsDeleteModal(true);
                              setSelectedItem(item);
                            }}
                            title="Delete product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button> */}
                          <BsEyeFill
                            className="cursor-pointer text-lg hover:text-amber-500 "
                            onClick={() => {
                              setViewModal(true);
                              setSelectedItem(item);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Add your first product to get started
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Update Product Modal */}
      {isUpdateModal && selectItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Update Product
              </h3>
              <button
                onClick={() => setIsUpdateModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={selectItem?.product.name}
                    onChange={(e) => {
                      const updatedValue = e.target.value;
                      setSelectedItem((prev) => ({
                        ...prev,
                        name: updatedValue,
                      }));
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={selectItem.quantity || ""}
                    onChange={(e) => {
                      const updatedValue = e.target.value;
                      setSelectedItem((prev) => ({
                        ...prev,
                        quantity: updatedValue,
                      }));
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={selectItem.totalReturnPrice}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectItem,
                        price: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                {/* <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={selectItem.price}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectItem,
                        price: parseFloat(e.target.value),
                      })
                    }
                  />
                </div> */}
                {/* 
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={selectItem.category?._id || selectItem.category}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectItem,
                        category: e.target.value,
                      })
                    }
                  >
                    <option value="">Choose Category</option>
                    {categoryData?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div> */}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsUpdateModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Updating...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" />
                      Update Product
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModal && selectItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Delete Product
              </h3>
              <p className="text-gray-600 mb-2">
                Are you sure you want to delete{" "}
                <strong>{selectItem.name}</strong>?
              </p>
              <p className="text-sm text-gray-500 mb-6">
                This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsDeleteModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {viewModal && (
        <div className="fixed flex w-full top-0 h-screen justify-center items-center">
          <div
            className="w-full h-screen right-0   fixed top-0 bg-black opacity-10"
            onClick={() => setViewModal(false)}
          ></div>
          <div className="absolute top-[35%] p-5 shadow-lg rounded-lg w-[30%] min-h-72 bg-white">
            <div className="flex flex-col gap-3 relative justify-around items-center w-full h-full">
              <button
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-800"
                onClick={() => setViewModal(false)}
              >
                ✖
              </button>
              <h1 className="text-2xl font-semibold">View Inventory</h1>
              <div className="flex gap-1 items-center w-full ">
                <label className="font-bold text-xl">Retrun Date:</label>
                <p> {new Date(selectItem?.returnedAt).toLocaleDateString()}</p>
              </div>
              <div className="flex gap-1 items-baseline w-full ">
                <label className="font-bold text-xl text-center">
                  Item Name :
                </label>
                <p>{selectItem?.product?.name}</p>
              </div>
              <div className="flex gap-1 items-baseline w-full ">
                <label className="font-bold text-xl text-center">
                  Quantity :
                </label>
                <p>{selectItem?.quantity}</p>
              </div>
              <div className="flex gap-1 items-baseline w-full ">
                <label className="font-bold text-xl text-center">
                  Total Price :
                </label>
                <p>{selectItem?.totalReturnPrice}</p>
              </div>
              <div className="flex gap-1 items-baseline w-full ">
                <label className="font-bold text-xl text-center">Reason:</label>
                <p>{selectItem?.reason}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
