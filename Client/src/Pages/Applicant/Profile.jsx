import { useState, useEffect } from "react";
import { 
  IoMdNotifications, 
  IoMdWallet, 
  IoMdCart, 
  IoMdCheckmarkCircle, 
  IoMdTrendingUp, 
  IoMdTrendingDown 
} from "react-icons/io";

export const Profile = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("user");
    if (userEmail) {
      const user = JSON.parse(userEmail);
      setEmail(user.email);
    }
  }, []);

  return (<>
    
      {/* Top Header Section */}

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column: Stats Cards & Sales Dynamics */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Orders */}
            <StatCard title="Orders" value="201" trend="+8.2%" icon={<IoMdCart />} isUp={true} />
            {/* Approved */}
            <StatCard title="Approved" value="36" trend="+3.4%" icon={<IoMdCheckmarkCircle />} isUp={true} />
            {/* Month Total */}
            <StatCard title="Month total" value="25410" trend="-0.2%" isUp={false} />
            {/* Revenue */}
            <StatCard title="Revenue" value="1352" trend="-1.2%" isUp={false} />
          </div>

          {/* Sales Dynamics Chart Placeholder */}
          <div className="bg-[#1a1d27] p-6 rounded-2xl h-80">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">Sales dynamics</h3>
              <span className="text-gray-400">2021 ▾</span>
            </div>
            <div className="flex items-end justify-between h-56 px-2">
              {/* Simplified Bar Visualization */}
              {[60, 40, 80, 50, 70, 90, 65, 30, 75, 55, 85, 95].map((h, i) => (
                <div key={i} className="w-4 bg-gray-700 rounded-t-full relative group">
                  <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-full transition-all duration-500" style={{ height: `${h}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-gray-500 uppercase">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
        </div>

        {/* Right Column: Donut Charts & Invoices */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Users Donut */}
            <DonutCard title="Users" value="4.890" legend={[{label: 'New', color: 'bg-yellow-500'}, {label: 'Returning', color: 'bg-yellow-200'}, {label: 'Inactive', color: 'bg-gray-600'}]} />
            {/* Subscriptions Donut */}
            <DonutCard title="Subscriptions" value="1.201" legend={[{label: 'Paid', color: 'bg-blue-500'}, {label: 'Trial', color: 'bg-blue-300'}]} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Paid Invoices */}
            <div className="bg-[#1a1d27] p-5 rounded-2xl relative overflow-hidden">
               <div className="flex justify-between">
                <IoMdWallet className="text-gray-400" size={24} />
                <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full flex items-center justify-center text-[10px]">+15%</div>
               </div>
               <p className="text-gray-400 mt-4 text-sm">Paid Invoices</p>
               <p className="text-xl font-bold">$30,256.23</p>
               <p className="text-[10px] text-gray-500">Current Financial Year</p>
            </div>
            {/* Funds Received */}
            <div className="bg-[#1a1d27] p-5 rounded-2xl relative overflow-hidden">
               <div className="flex justify-between">
                <div className="p-1 bg-gray-800 rounded">💼</div>
                <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full flex items-center justify-center text-[10px]">+59%</div>
               </div>
               <p className="text-gray-400 mt-4 text-sm">Funds received</p>
               <p className="text-xl font-bold">$150,256.23</p>
               <p className="text-[10px] text-gray-500">Current Financial Year</p>
            </div>
          </div>

          {/* Customer Order Table */}
          <div className="bg-[#1a1d27] p-4 rounded-2xl overflow-x-auto">
            <h3 className="mb-4 font-semibold">Customer order</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-gray-800">
                  <th className="pb-2">Profile</th><th className="pb-2">Address</th><th className="pb-2">Date</th><th className="pb-2">Status</th><th className="pb-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <TableRow name="Press" addr="London" date="22.08.2022" status="Delivered" price="$920" color="bg-yellow-900/30" />
                <TableRow name="Marina" addr="Man city" date="24.08.2022" status="Processed" price="$452" color="bg-green-900/30" />
                <TableRow name="Alex" addr="Unknown" date="18.08.2022" status="Cancelled" price="$1200" color="bg-red-900/30" />
              </tbody>
            </table>
          </div>
        </div>

      </div>
</>
  );
};

// Sub-components for cleaner code
const StatCard = ({ title, value, trend, isUp, icon }) => (
  <div className="bg-[#1a1d27] p-5 rounded-2xl flex flex-col justify-between">
    <div className="flex justify-between text-gray-400">
      <span className="text-sm">{title}</span>
      {icon || <div className="w-5 h-5 border border-gray-600 rounded" />}
    </div>
    <div className="mt-4">
      <h2 className="text-2xl font-bold">{value}</h2>
      <div className={`flex items-center text-xs mt-1 ${isUp ? 'text-green-400' : 'text-red-400'}`}>
        {isUp ? <IoMdTrendingUp className="mr-1"/> : <IoMdTrendingDown className="mr-1"/>}
        {trend} <span className="text-gray-500 ml-1">since last month</span>
      </div>
    </div>
  </div>
);

const DonutCard = ({ title, value, legend }) => (
  <div className="bg-[#1a1d27] p-5 rounded-2xl flex items-center justify-between">
    <div>
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <h2 className="text-2xl font-bold mb-4">{value}</h2>
      <div className="space-y-1">
        {legend.map((item, i) => (
          <div key={i} className="flex items-center text-[10px] text-gray-400">
            <span className={`w-2 h-2 rounded-full mr-2 ${item.color}`}></span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
    <div className="w-20 h-20 rounded-full border-8 border-blue-500 border-l-gray-700 transform rotate-45"></div>
  </div>
);

const TableRow = ({ name, addr, date, status, price, color }) => (
  <tr className={`${color} border-l-4 border-transparent hover:border-blue-500`}>
    <td className="py-3 px-2 flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-gray-600"></div> {name}
    </td>
    <td>{addr}</td>
    <td>{date}</td>
    <td>{status}</td>
    <td className="text-right font-bold">{price}</td>
  </tr>
);