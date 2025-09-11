import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Pill,
  User,
  Shield,
  FileText,
  Package,
  BarChart3,
  RotateCcw,
  UserPlus,
  Bell,
  Settings,
  Search,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Receipt,
} from "lucide-react";

export const DashboardComponent = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("@role");
  const userName = "John Doe"; // This would come from your auth context

  const handleLogout = () => {
    localStorage.removeItem("@role");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const quickStats = [
    { label: "Today's Sales", value: "$2,847", change: "+12%", trend: "up" },
    { label: "Total Products", value: "1,247", change: "+3", trend: "up" },
    { label: "Low Stock Items", value: "23", change: "-5", trend: "down" },
    { label: "Pending Orders", value: "8", change: "+2", trend: "up" },
  ];

  const mainActions = [
    {
      title: "Generate Invoice",
      description: "Create a new invoice for customer purchase",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      route: "/generateInvoice",
      available: true,
    },
    {
      title: "Inventory Management",
      description: "Manage your medicine inventory and stock levels",
      icon: Package,
      color: "from-green-500 to-green-600",
      route: "/inventory",
      available: userRole === "admin",
    },
    {
      title: "Sales Reports",
      description: "View detailed sales analytics and reports",
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      route: "/sales-report",
      available: userRole === "admin",
    },
    {
      title: "Return Items",
      description: "Process returns and manage returned inventory",
      icon: RotateCcw,
      color: "from-orange-500 to-orange-600",
      route: "/return-inventory",
      available: userRole === "admin",
    },
    {
      title: "User Management",
      description: "Create and manage system users",
      icon: UserPlus,
      color: "from-indigo-500 to-indigo-600",
      route: "/create-user",
      available: userRole === "admin",
    },
    {
      title: "Invoices",
      description: "View detailed invoice",
      icon: Receipt,
      color: "from-indigo-500 to-indigo-600",
      route: "/invoices",
      available: userRole === "admin",
    },
  ];

  const availableActions = mainActions.filter((action) => action.available);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Pharmacy POS
                </h1>
                <p className="text-sm text-gray-600 hidden sm:block">
                  Point of Sale System
                </p>
              </div>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, invoices..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* User Actions */}
            {/* <div className="flex items-center gap-2 sm:gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                {userRole === "admin" ? (
                  <Shield className="h-4 w-4 text-blue-600" />
                ) : (
                  <User className="h-4 w-4 text-green-600" />
                )}
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-700">
                    {userName}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">{userRole}</p>
                </div>
              </div>

              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="h-5 w-5" />
              </button>

              </div> */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline text-sm font-medium">
                Logout
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Section */}
        {/* <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Welcome back, {userName.split(' ')[0]}!
              </h2>
              <p className="text-gray-600 mt-1">
                Here's what's happening with your pharmacy today.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div> */}

        {/* Quick Stats */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                  stat.trend === 'up' 
                    ? 'text-green-700 bg-green-100' 
                    : 'text-red-700 bg-red-100'
                }`}>
                  <TrendingUp className={`h-3 w-3 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Main Actions Grid */}
        <div className="mb-8">
          {/* <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  onClick={() => navigate(action.route)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {action.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {action.description}
                  </p>

                  <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity / Alerts */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Invoice #INV-{1000 + index}</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">${(Math.random() * 200 + 50).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>


          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">System Alerts</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Low Stock Alert</p>
                  <p className="text-xs text-gray-600">23 items are running low on stock</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">System Update</p>
                  <p className="text-xs text-gray-600">New features available in v2.1.0</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};
