// import React, { useEffect, useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import config from "../api/config";
// const BASE_URL = config.BASE_URL
// export const SalesReportComponent = () => {
//   const [allSales, setAllSales] = useState([]);
//   const [returnProduct, setReturnProduct] = useState([]);
//   const [searchterm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const getDailySaleReports = () => {
//     fetch(`${BASE_URL}/sale/all`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Failed to get sales data");
//         }
//       })
//       .then((data) => {
//         setAllSales(data?.data || []);
//       })
//       .catch((error) => {
//         toast.error(error?.message);
//       });
//   };
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

//   useEffect(() => {
//     getDailySaleReports();
//     getReturnProduct();
//   }, []);

//   const filterData = (data) => {
//     if (!searchterm) return data;
//     return data?.filter((item) =>
//       item?.name?.toLowerCase().includes(searchterm.toLowerCase())
//     );
//   };

//   const filteredSales = filterData(allSales);
//   const totalSales = allSales
//     .reduce((sum, sale) => sum + (sale.totalPrice || 0), 0)
//     .toFixed(2);

//   const totalReturns = returnProduct
//     .reduce((sum, sale) => sum + (sale.totalReturnPrice || 0), 0)
//     .toFixed(2);

//   const netAmount = (totalSales - totalReturns).toFixed(2);
//   return (
//     <div className="p-5 space-y-8 bg-[#F3F4F6] min-h-screen">
//       {/* Header */}
//       <div className=" flex w-full">
//         <div
//           className="h-10 w-12 bg-black p-2 rounded-lg cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           {" "}
//           <FaArrowLeft className=" text-white  w-full h-full " />
//         </div>
//         <h1 className="text-3xl ml-[40%] font-bold text-center">
//           Sales Report
//         </h1>
//       </div>

//       {/* Search Input */}
//       <div className="flex justify-center">
//         <input
//           type="text"
//           value={searchterm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search by product name..."
//           className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//       </div>

//       {/* Sales Summary */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-blue-50 p-4 rounded-lg shadow">
//           <div className="text-blue-600 font-medium">Total Sales Amount</div>
//           <div className="text-2xl font-bold">
//             {allSales
//               .reduce((sum, sale) => sum + (sale.totalPrice || 0), 0)
//               .toFixed(2)}{" "}
//             Rs
//           </div>
//         </div>
//         <div className="bg-green-50 p-4 rounded-lg shadow">
//           <div className="text-blue-600 font-medium">Total Return Amount</div>
//           <div className="text-2xl font-bold">
//             {returnProduct
//               .reduce((sum, sale) => sum + (sale.totalReturnPrice || 0), 0)
//               .toFixed(2)}{" "}
//             Rs
//           </div>
//         </div>
//         {/* <div className="bg-green-50 p-4 rounded-lg shadow">
//           <div className="text-green-600 font-medium">Total Items Sold</div>
//           <div className="text-2xl font-bold">
//             {allSales.reduce((sum, sale) => sum + (sale.product._id?.length || 0), 0)}
//           </div>
//         </div> */}
//         <div className="bg-purple-50 p-4 rounded-lg shadow">
//           <div className="text-purple-600 font-medium">Total Transactions</div>
//           <div className="text-2xl font-bold">{allSales.length}</div>
//         </div>
//         <div className="bg-[#dce2e0] p-4 rounded-lg shadow">
//           <div className="text-font-medium">Total Amount</div>
//           <div className="text-2xl font-bold">{netAmount}</div>
//         </div>
//       </div>

//       {/* Recent Sales Table */}
//       <div className="bg-white  shadow">
//         {/* <h2 className="text-xl font-bold mb-4">Recent Sales</h2> */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="px-4 py-2 border">Customer Name</th>
//                 <th className="px-4 py-2 border">Product Name</th>
//                 <th className="px-4 py-2 border">QTY</th>
//                 <th className="px-4 py-2 border">Date</th>
//                 <th className="px-4 py-2 border">Total Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSales.length > 0 ? (
//                 filteredSales.map((sale, index) => (
//                   <tr key={index} className="border-t hover:bg-slate-300 cursor-pointer">
//                     <td className="px-4 py-2 border">
//                       {sale.customerName || "N/A"}
//                     </td>
//                     <td className="px-4 py-2 border">
//                       {sale?.product?.name || "N/A"}
//                     </td>
//                     <td className="px-4 py-2 border">
//                       <ul className="list-disc list-inside">
//                         {sale.quantity || "N/A"}
//                       </ul>
//                     </td>
//                     <td className="px-4 py-2 border">
//                       {/* Format the date if available */}
//                       {sale.soldAt
//                         ? new Date(sale.soldAt).toLocaleDateString()
//                         : "N/A"}
//                     </td>
//                     <td className="px-4 py-2 border font-medium">
//                       {sale.totalPrice?.toFixed(2) || "0.00"} Rs
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="4"
//                     className="text-center py-4 text-gray-500 font-medium"
//                   >
//                     No sales data available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowLeft,
  Package,
  Search,
  AlertTriangle,
  DollarSign,
  Box,
  Tag,
  Pill,
} from "lucide-react";
import config from "../api/config";

const BASE_URL = config.BASE_URL;

export const SalesReportComponent = () => {
  const [allSales, setAllSales] = useState([]);
  const [returnProduct, setReturnProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalValue: 0,
    lowStock: 0,
    categories: 0,
  });
  const navigate = useNavigate();

  const getDailySaleReports = () => {
    fetch(`${BASE_URL}/sale/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to get sales data");
        }
      })
      .then((data) => {
        setAllSales(data?.data || []);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  const getReturnProduct = () => {
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
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  useEffect(() => {
    getDailySaleReports();
    getReturnProduct();
  }, []);

  const filterData = (data) => {
    if (!searchTerm) return data;
    return data?.filter((item) =>
      item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredSales = filterData(allSales);
  const totalSales = allSales
    .reduce((sum, sale) => sum + (sale.totalPrice || 0), 0)
    .toFixed(2);

  const totalReturns = returnProduct
    .reduce((sum, sale) => sum + (sale.totalReturnPrice || 0), 0)
    .toFixed(2);

  const netAmount = (totalSales - totalReturns).toFixed(2);

  const filteredProducts = allSales?.filter((item) =>
    item?.product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
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
                  <Package className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Sales Management
                  </h1>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    Manage your pharmacy inventory
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
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Return Products
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {allSales.length}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Box className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">
                  Rs {totalSales}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Return Amount
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  Rs {totalReturns}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
        
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total  Amount
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {netAmount}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold text-red-600">
                  {stats.lowStock}
                </p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </div> */}

          {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Categories</p>
                <p className="text-2xl font-bold text-gray-900">{stats.categories}</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Tag className="h-5 w-5 text-purple-600" />
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
              placeholder="Search products by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Product Inventory
              </h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {filteredProducts?.length || 0} products
              </span>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading products...</span>
            </div>
          ) : filteredProducts?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
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
                      Total Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date{" "}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Customer
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.map((item) => (
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
                      <td className="px-6 py-4 text-gray-600">
                        {item.priceAtSale.toFixed(2) || "N/A"}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        Rs {item.totalPrice.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(item.soldAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                        {item.customerName}
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
    </div>
  );
};
