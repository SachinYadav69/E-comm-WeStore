import React from "react";
import { useCart } from "../context/CartContext";
import { FiPackage, FiSettings, FiHeart, FiLogOut } from "react-icons/fi";

const Profile = () => {
  const { cartItem } = useCart();

  // Mock Data
  const recentOrders = [
    {
      id: "#AS-9021",
      date: "Jan 02, 2026",
      status: "In Transit",
      total: "$129.00",
    },
    {
      id: "#AS-8842",
      date: "Dec 15, 2025",
      status: "Delivered",
      total: "$89.50",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 md:px-16 lg:px-32">
      {/* HEADER: User Intro */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">
            Hello,{" "}
            <span className="font-serif italic text-white/20">Guest User</span>
          </h1>
        </div>
        <div className="mt-6 md:mt-0 flex gap-4">
          <button className="flex items-center gap-2 text-[9px] uppercase tracking-widest border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition-all">
            <FiSettings /> Settings
          </button>
          <button className="flex items-center gap-2 text-[9px] uppercase tracking-widest bg-red-600 px-6 py-3 hover:bg-white hover:text-black transition-all">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: Stats & Links (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0a0a0a] border border-white/5 p-8 space-y-8">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                Cart Items
              </span>
              <span className="text-xl font-light">{cartItem.length}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                Wishlist
              </span>
              <span className="text-xl font-light">04</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                Reward Points
              </span>
              <span className="text-xl font-light">1,240</span>
            </div>
          </div>

          <nav className="flex flex-col border border-white/5">
            {[
              { name: "Order History", icon: <FiPackage /> },
              { name: "Favorite Pieces", icon: <FiHeart /> },
              { name: "Security Settings", icon: <FiSettings /> },
            ].map((link, i) => (
              <button
                key={i}
                className="flex items-center gap-4 p-5 text-[10px] uppercase tracking-[0.3em] border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-all text-left"
              >
                <span className="text-red-600">{link.icon}</span>
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT: Recent Activity (8 Columns) */}
        <div className="lg:col-span-8">
          <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold mb-8 opacity-40">
            Recent Archives
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 text-[9px] uppercase tracking-widest text-white/20 font-bold">
                    Order ID
                  </th>
                  <th className="py-4 text-[9px] uppercase tracking-widest text-white/20 font-bold">
                    Date
                  </th>
                  <th className="py-4 text-[9px] uppercase tracking-widest text-white/20 font-bold">
                    Status
                  </th>
                  <th className="py-4 text-[9px] uppercase tracking-widest text-white/20 font-bold text-right">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentOrders.map((order, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-white/[0.01] transition-all"
                  >
                    <td className="py-6 text-[11px] tracking-widest text-white font-medium">
                      {order.id}
                    </td>
                    <td className="py-6 text-[10px] tracking-widest text-white/40 uppercase">
                      {order.date}
                    </td>
                    <td className="py-6">
                      <span
                        className={`text-[8px] uppercase tracking-widest px-3 py-1 border ${
                          order.status === "Delivered"
                            ? "border-green-900/50 text-green-500"
                            : "border-yellow-900/50 text-yellow-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-6 text-[11px] tracking-widest text-white text-right font-bold">
                      {order.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State Mockup */}
          {recentOrders.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
                No Transaction History Found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
