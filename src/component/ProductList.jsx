import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

// const medications = [
//   {
//     id: 1,
//     name: "Amoxicillin 500mg",
//     category: "Antibiotics",
//     price: 15.99,
//     stock: 100,
//     expiryDate: "2024-12-31",
//     dosage: "500mg",
//   },
//   {
//     id: 2,
//     name: "Lisinopril 10mg",
//     category: "Blood Pressure",
//     price: 25.99,
//     stock: 150,
//     expiryDate: "2024-10-15",
//     dosage: "10mg",
//   },
//   {
//     id: 3,
//     name: "Metformin 850mg",
//     category: "Diabetes",
//     price: 18.99,
//     stock: 80,
//     expiryDate: "2024-11-30",
//     dosage: "850mg",
//   },
//   {
//     id: 4,
//     name: "Omeprazole 20mg",
//     category: "Antacid",
//     price: 22.99,
//     stock: 120,
//     expiryDate: "2024-09-20",
//     dosage: "20mg",
//   },
// ];

function ProductList({ addToCart, medications }) {
  const [isModal, setIsModal] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchCategory = [...new Set(medications?.map((med) => med?.category))];
  const categories = [...new Set(fetchCategory?.map((med) => med?.name))];
  const filteredMedications = medications?.filter((med) => {
    const matchesSearch =
      med?.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      med?.category?.name.toLowerCase().includes(searchTerm?.toLowerCase());
    const matchesCategory =
      !selectedCategory || med?.category?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Medication Inventory</h2>

      <div className="relative">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <input
                type="search"
                placeholder="Search medications..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsModal(true);
                }}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none "
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <div className="md:w-64">
            <div className="w-full  p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full focus:outline-none"
              >
                <option value="">All Categories</option>
                {categories?.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto  max-h-96 overflow-y-auto absolute w-[78%] bg-white shadow top-14">
          {searchTerm.length > 0 && (
            <table className="min-w-full relative top-0 z-50">
              {filteredMedications?.length > 0 && isModal ? (
                <>
                  <thead className="sticky top-0">
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Category</th>
                      <th className="px-4 py-2 text-left">Dosage</th>
                      <th className="px-4 py-2 text-right">Stock</th>
                      <th className="px-4 py-2 text-right">Price</th>
                      {/* <th className="px-4 py-2 text-center">Expiry Date</th> */}
                      <th className="px-4 py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMedications?.map((medication, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">{medication.name}</td>
                        <td className="px-4 py-2">
                          {medication.category?.name}
                        </td>
                        <td className="px-4 py-2">{medication.dosage}</td>
                        <td
                          className={`px-4 py-2 text-right ${
                            medication.stock < 50
                              ? "text-red-600 font-bold"
                              : ""
                          }`}
                        >
                          {medication.stock}
                        </td>
                        <td className="px-4 py-2 text-right">
                          {medication.price.toFixed(2)}
                        </td>
                        {/* <td className="px-4 py-2 text-center">
                          {medication.expiryDate}
                        </td> */}
                        <td className="px-4 py-2 text-center">
                          <button
                            onClick={() => {
                              addToCart(medication);
                              setIsModal(false);
                              setSearchTerm("");
                            }}
                            disabled={medication.stock === 0}
                            className={`inline-flex items-center px-3 py-1 rounded ${
                              medication.stock === 0
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                            }`}
                          >
                            <FaPlus className="mr-1" size={12} />
                            Add
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              ) : (
                ""
              )}
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
