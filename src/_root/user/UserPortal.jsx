import React, { useState } from 'react';
import {
  Users,
  Package,
  MapPin,
  Plus,
  Settings,
  CreditCard,
  LogOut,
  Menu,
  X,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Calendar,
  Filter,
  Search,
  Bell,
  User,
  Home,
  MoreHorizontal,
  Download,
  Edit,
  Trash2,
  Phone,
  Navigation,
  DollarSign,
  Activity,
  BarChart3,
  PieChart,
  Globe,
  ChevronDown,
  Zap,
} from 'lucide-react';

const DashboardUser = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userRole] = useState('Admin');

  // Mock data
  const stats = {
    activeRiders: 24,
    totalDeliveries: 156,
    todayDeliveries: 42,
    weekDeliveries: 298,
    monthDeliveries: 1247,
    revenue: 15690,
    avgDeliveryTime: 28,
    completionRate: 94.2,
  };

  const riders = [
    {
      id: 1,
      name: 'John Doe',
      status: 'online',
      deliveries: 23,
      phone: '+263771234567',
      location: 'Harare CBD',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Mary Smith',
      status: 'offline',
      deliveries: 18,
      phone: '+263772345678',
      location: 'Avondale',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'David Wilson',
      status: 'online',
      deliveries: 31,
      phone: '+263773456789',
      location: 'Borrowdale',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      status: 'busy',
      deliveries: 27,
      phone: '+263774567890',
      location: 'Eastlea',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Mike Brown',
      status: 'online',
      deliveries: 19,
      phone: '+263775678901',
      location: 'Newlands',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Lisa Chen',
      status: 'busy',
      deliveries: 33,
      phone: '+263776789012',
      location: 'Mount Pleasant',
      rating: 4.8,
    },
  ];

  const deliveries = [
    {
      id: 1,
      pickup: 'Harare CBD',
      dropoff: 'Avondale',
      status: 'in-progress',
      rider: 'John Doe',
      fare: '$15',
      time: '10:30 AM',
      customer: 'Alice Cooper',
    },
    {
      id: 2,
      pickup: 'Borrowdale',
      dropoff: 'Eastlea',
      status: 'completed',
      rider: 'David Wilson',
      fare: '$20',
      time: '09:45 AM',
      customer: 'Bob Smith',
    },
    {
      id: 3,
      pickup: 'Westgate',
      dropoff: 'Marlborough',
      status: 'pending',
      rider: 'Unassigned',
      fare: '$12',
      time: '11:15 AM',
      customer: 'Carol White',
    },
    {
      id: 4,
      pickup: 'Newlands',
      dropoff: 'Highlands',
      status: 'cancelled',
      rider: 'Mary Smith',
      fare: '$18',
      time: '08:30 AM',
      customer: 'Dave Johnson',
    },
    {
      id: 5,
      pickup: 'Greystone Park',
      dropoff: 'Msasa',
      status: 'completed',
      rider: 'Mike Brown',
      fare: '$25',
      time: '07:15 AM',
      customer: 'Emma Davis',
    },
    {
      id: 6,
      pickup: 'Belvedere',
      dropoff: 'Warren Park',
      status: 'in-progress',
      rider: 'Lisa Chen',
      fare: '$22',
      time: '12:00 PM',
      customer: 'Frank Miller',
    },
  ];

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Home, description: 'Overview & Analytics' },
    { id: 'riders', name: 'Riders', icon: Users, description: 'Manage Delivery Team' },
    { id: 'deliveries', name: 'Deliveries', icon: Package, description: 'Track Orders' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, description: 'Performance Insights' },
    { id: 'account', name: 'Billing', icon: CreditCard, description: 'Account & Payments' },
    { id: 'settings', name: 'Settings', icon: Settings, description: 'System Configuration' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'offline':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      case 'busy':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'in-progress':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const renderRiders = () => (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rider Management</h1>
          <p className="text-gray-600 mt-1">Manage your delivery team and track performance</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
          <Plus className="w-5 h-5" />
          Add New Rider
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search riders..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
            <option value="">All Status</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="busy">Busy</option>
          </select>
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
            <option value="">All Locations</option>
            <option value="harare-cbd">Harare CBD</option>
            <option value="avondale">Avondale</option>
            <option value="borrowdale">Borrowdale</option>
          </select>
          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            More Filters
          </button>
        </div>
      </div>

      {/* Riders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {riders.map((rider) => (
          <div
            key={rider.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {rider.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{rider.name}</h3>
                  <p className="text-sm text-gray-600">{rider.location}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(rider.status)}`}
              >
                {rider.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Deliveries</p>
                <p className="font-semibold text-gray-900">{rider.deliveries}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Rating</p>
                <p className="font-semibold text-gray-900">⭐ {rider.rating}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{rider.phone}</span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                View Details
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <MoreHorizontal className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDeliveries = () => (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Delivery Management</h1>
          <p className="text-gray-600 mt-1">Track and manage all delivery orders</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setActiveSection('create-delivery')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
          >
            <Plus className="w-5 h-5" />
            New Delivery
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Enhanced Filters */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
            <option value="">All Riders</option>
            {riders.map((rider) => (
              <option key={rider.id} value={rider.name}>
                {rider.name}
              </option>
            ))}
          </select>
          <input
            type="date"
            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
          />
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100">
            <Filter className="w-5 h-5" />
            Advanced
          </button>
        </div>
      </div>

      {/* Deliveries Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left p-6 font-semibold text-gray-700">Order Details</th>
                <th className="text-left p-6 font-semibold text-gray-700">Customer</th>
                <th className="text-left p-6 font-semibold text-gray-700">Route</th>
                <th className="text-left p-6 font-semibold text-gray-700">Rider</th>
                <th className="text-left p-6 font-semibold text-gray-700">Status</th>
                <th className="text-left p-6 font-semibold text-gray-700">Amount</th>
                <th className="text-left p-6 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery) => (
                <tr key={delivery.id} className="border-b border-gray-50 hover:bg-gray-25">
                  <td className="p-6">
                    <div>
                      <p className="font-semibold text-gray-900">
                        #{delivery.id.toString().padStart(4, '0')}
                      </p>
                      <p className="text-sm text-gray-600">{delivery.time}</p>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="font-medium text-gray-900">{delivery.customer}</p>
                  </td>
                  <td className="p-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-900">{delivery.pickup}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-900">{delivery.dropoff}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      {delivery.rider !== 'Unassigned' && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {delivery.rider
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                      )}
                      <span className="text-sm text-gray-900">{delivery.rider}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium border ${getStatusColor(delivery.status)}`}
                    >
                      {delivery.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="font-semibold text-gray-900">{delivery.fare}</span>
                  </td>
                  <td className="p-6">
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-600">
                        <MapPin className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Good morning, Admin! 👋</h1>
          <p className="text-gray-600 mt-1">
            Here's what's happening with your delivery network today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setActiveSection('create-delivery')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5" />
            Create Delivery
          </button>
          <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5" />
            Export Data
          </button>
        </div>
      </div>

      {/* Advanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Active Riders</p>
              <p className="text-3xl font-bold text-blue-900 mt-1">{stats.activeRiders}</p>
              <p className="text-blue-600 text-xs mt-1">+3 from yesterday</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-2xl border border-emerald-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-600 text-sm font-medium">Today's Revenue</p>
              <p className="text-3xl font-bold text-emerald-900 mt-1">${stats.revenue}</p>
              <p className="text-emerald-600 text-xs mt-1">+12% from yesterday</p>
            </div>
            <div className="bg-emerald-500 p-3 rounded-xl">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-2xl border border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-600 text-sm font-medium">Avg. Delivery Time</p>
              <p className="text-3xl font-bold text-amber-900 mt-1">{stats.avgDeliveryTime}m</p>
              <p className="text-amber-600 text-xs mt-1">-5min improvement</p>
            </div>
            <div className="bg-amber-500 p-3 rounded-xl">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium">Completion Rate</p>
              <p className="text-3xl font-bold text-purple-900 mt-1">{stats.completionRate}%</p>
              <p className="text-purple-600 text-xs mt-1">+2.1% this week</p>
            </div>
            <div className="bg-purple-500 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Live Map */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              Live Tracking
            </h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                {riders.filter((r) => r.status === 'online').length} Online
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                {riders.filter((r) => r.status === 'busy').length} Busy
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-80 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-medium">Interactive Map Integration</p>
              <p className="text-gray-500 text-sm mt-2">
                Real-time rider locations and delivery routes
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Full Map
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Deliveries</span>
                <span className="font-semibold text-gray-900">{stats.todayDeliveries}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Completed</span>
                <span className="font-semibold text-emerald-600">38</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">In Progress</span>
                <span className="font-semibold text-blue-600">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Pending</span>
                <span className="font-semibold text-amber-600">1</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
            <div className="space-y-3">
              {riders
                .filter((r) => r.status === 'online' || r.status === 'busy')
                .sort((a, b) => b.deliveries - a.deliveries)
                .slice(0, 3)
                .map((rider, index) => (
                  <div key={rider.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{rider.name}</p>
                      <p className="text-sm text-gray-600">{rider.deliveries} deliveries</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">⭐ {rider.rating}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-medium text-gray-700">Order ID</th>
                <th className="text-left p-4 font-medium text-gray-700">Customer</th>
                <th className="text-left p-4 font-medium text-gray-700">Route</th>
                <th className="text-left p-4 font-medium text-gray-700">Rider</th>
                <th className="text-left p-4 font-medium text-gray-700">Status</th>
                <th className="text-left p-4 font-medium text-gray-700">Amount</th>
                <th className="text-left p-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.slice(0, 5).map((delivery) => (
                <tr key={delivery.id} className="border-b border-gray-50 hover:bg-gray-25">
                  <td className="p-4 font-mono text-sm">
                    #{delivery.id.toString().padStart(4, '0')}
                  </td>
                  <td className="p-4">{delivery.customer}</td>
                  <td className="p-4">
                    <div className="text-sm">
                      <div className="text-gray-900">{delivery.pickup}</div>
                      <div className="text-gray-500">→ {delivery.dropoff}</div>
                    </div>
                  </td>
                  <td className="p-4">{delivery.rider}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(delivery.status)}`}
                    >
                      {delivery.status}
                    </span>
                  </td>
                  <td className="p-4 font-semibold">{delivery.fare}</td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                        <MapPin className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCreateDelivery = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create New Delivery</h1>
        <p className="text-gray-600 mt-1">Set up a new delivery order</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <form className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Pickup Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter pickup address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  placeholder="Pickup contact name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Drop-off Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off Location
                </label>
                <input
                  type="text"
                  placeholder="Enter drop-off address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipient Name
                </label>
                <input
                  type="text"
                  placeholder="Recipient name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Package Type</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
                <option value="">Select package type</option>
                <option value="food">Food</option>
                <option value="documents">Documents</option>
                <option value="small-items">Small Items</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assigned Rider</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
                <option value="">Auto-assign</option>
                {riders
                  .filter((r) => r.status === 'online')
                  .map((rider) => (
                    <option key={rider.id} value={rider.id}>
                      {rider.name}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Fare ($)
              </label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Instructions
            </label>
            <textarea
              rows="4"
              placeholder="Any special instructions for the rider..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-medium"
            >
              Create Delivery
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('deliveries')}
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
        <p className="text-gray-600 mt-1">Performance metrics and business intelligence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 h-64 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-blue-700 font-medium">Revenue Analytics Chart</p>
              <p className="text-blue-600 text-sm">Integration with charting library</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Delivery Success Rate</span>
                  <span className="text-sm font-medium text-gray-900">94.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Customer Satisfaction</span>
                  <span className="text-sm font-medium text-gray-900">4.8/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">On-time Delivery</span>
                  <span className="text-sm font-medium text-gray-900">89.5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '89.5%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Orders</span>
                <span className="font-semibold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active Riders</span>
                <span className="font-semibold">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg. Rating</span>
                <span className="font-semibold">4.8⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccount = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Account & Billing</h1>
        <p className="text-gray-600 mt-1">Manage your subscription and billing information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-6">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  value="QuickBike Deliveries"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  value="admin@quickbike.co.zw"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address
                </label>
                <input
                  type="text"
                  value="123 Main Street, Harare, Zimbabwe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 font-medium">
              Update Information
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-6">Recent Invoices</h3>
            <div className="space-y-4">
              {[
                { id: 'INV-2025-001', date: '2025-08-01', amount: '$299', status: 'Paid' },
                { id: 'INV-2025-002', date: '2025-07-01', amount: '$299', status: 'Paid' },
                { id: 'INV-2025-003', date: '2025-06-01', amount: '$299', status: 'Paid' },
              ].map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-sm text-gray-600">{invoice.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{invoice.amount}</p>
                    <span className="text-sm text-emerald-600">{invoice.status}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 ml-4 p-2 hover:bg-blue-50 rounded-lg">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-6">Subscription</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Plan</span>
                <span className="font-semibold">Business Pro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Fee</span>
                <span className="font-semibold">$299</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Next Billing</span>
                <span className="font-semibold">Sep 13, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="text-emerald-600 font-semibold">Active</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-gray-100 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-200 font-medium">
              Manage Subscription
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-6">Payment Method</h3>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-4">
              <CreditCard className="w-8 h-8 text-gray-600" />
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-600">Expires 12/27</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 font-medium">
              Update Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Configure your system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold mb-6">User Management</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Admin User</p>
                  <p className="text-sm text-gray-600">admin@quickbike.co.zw</p>
                </div>
              </div>
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                Admin
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Manager User</p>
                  <p className="text-sm text-gray-600">manager@quickbike.co.zw</p>
                </div>
              </div>
              <span className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                Manager
              </span>
            </div>
            {userRole === 'Admin' && (
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 font-medium">
                Add New User
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold mb-6">System Preferences</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">SMS Alerts</p>
                <p className="text-sm text-gray-600">Critical updates via SMS</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Auto-assign Riders</p>
                <p className="text-sm text-gray-600">Automatically assign available riders</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard();
      case 'riders':
        return renderRiders();
      case 'deliveries':
        return renderDeliveries();
      case 'create-delivery':
        return renderCreateDelivery();
      case 'analytics':
        return renderAnalytics();
      case 'account':
        return renderAccount();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-xl border-r border-gray-100 transition-transform duration-300 ease-in-out lg:flex lg:flex-col`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 lg:justify-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BikeDelivery</h1>
              <p className="text-xs text-gray-600">Management Portal</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6 flex-1 px-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon
                  className={`w-5 h-5 mr-3 flex-shrink-0 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-500 group-hover:text-gray-700'
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item.name}</p>
                  <p className="text-xs text-gray-500 truncate">{item.description}</p>
                </div>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 p-3 mb-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p className="text-xs text-gray-600">{userRole}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="hidden sm:block">
                <nav className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Dashboard</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-900 font-medium capitalize">
                    {activeSection === 'create-delivery'
                      ? 'Create Delivery'
                      : activeSection.replace('-', ' ')}
                  </span>
                </nav>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  3
                </span>
              </button>
              <div className="hidden sm:flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-600">{userRole}</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default DashboardUser;
