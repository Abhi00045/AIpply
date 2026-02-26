import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const data = [
  { name: "Mon", value: 82 },
  { name: "Tue", value: 51 },
  { name: "Wed", value: 88 },
  { name: "Thu", value: 45 },
  { name: "Fri", value: 82 },
];

export const Profile = () => {
  return (
    <div className="space-y-6">

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Projects" value="15" change="+5 vs last month" />
        <StatCard title="Total Tasks" value="10" change="+2 vs last month" />
        <StatCard title="In Reviews" value="23" change="+12 vs last month" />
        <StatCard title="Completed Tasks" value="50" change="+15 vs last month" />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Today's Tasks */}
        <div className="lg:col-span-2 bg-[#111] rounded-2xl p-6 border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Today's Tasks</h3>
            <div className="flex gap-2">
              <input
                placeholder="Search here..."
                className="bg-[#1a1a1a] text-xs px-3 py-2 rounded-lg outline-none border border-white/10"
              />
              <button className="bg-[#1a1a1a] text-xs px-4 py-2 rounded-lg border border-white/10">
                Filter
              </button>
            </div>
          </div>

          <TaskRow name="Prepare Q2 report" project="Fintech Project" date="12 Mar 2024" />
          <TaskRow name="Finalize homepage design" project="Brodo Redesign" date="12 Mar 2024" />
          <TaskRow name="Review onboarding checklist" project="HR Setup" date="12 Mar 2024" />
          <TaskRow name="Finalize homepage design" project="Lucas Projects" date="12 Mar 2024" />
        </div>

        {/* Performance */}
        <div className="bg-[#111] rounded-2xl p-6 border border-white/5">
          <h3 className="text-lg font-semibold text-white mb-4">Performance</h3>

          <div className="text-3xl font-bold text-white mb-6">
            86% <span className="text-xs text-green-400 ml-2">+15% vs last week</span>
          </div>

          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888" />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Projects Table */}
      <div className="bg-[#111] rounded-2xl p-6 border border-white/5">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">List Projects</h3>
          <input
            placeholder="Search here..."
            className="bg-[#1a1a1a] text-xs px-3 py-2 rounded-lg outline-none border border-white/10"
          />
        </div>

        <ProjectRow name="Fintech Project" status="In Progress" progress="70%" tasks="14 / 20" date="12 Mar 2024" owner="Michael M" />
        <ProjectRow name="Brodo Redesign" status="Completed" progress="100%" tasks="25 / 25" date="16 Mar 2024" owner="Jhon Cena" />
        <ProjectRow name="HR Setup" status="On Hold" progress="70%" tasks="8 / 20" date="18 May 2024" owner="Dawne Jay" />
      </div>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value, change }) => (
  <div className="bg-[#111] rounded-2xl p-6 border border-white/5">
    <p className="text-gray-400 text-sm">{title}</p>
    <h2 className="text-3xl font-bold text-white mt-2">{value}</h2>
    <p className="text-xs text-green-400 mt-1">{change}</p>
  </div>
);

const TaskRow = ({ name, project, date }) => (
  <div className="grid grid-cols-3 text-sm py-3 border-b border-white/5 last:border-none text-gray-300">
    <div>{name}</div>
    <div className="text-gray-400">{project}</div>
    <div className="text-right text-gray-500">{date}</div>
  </div>
);

const ProjectRow = ({ name, status, progress, tasks, date, owner }) => (
  <div className="grid grid-cols-6 text-sm py-4 border-b border-white/5 last:border-none text-gray-300 items-center">
    <div className="col-span-2">{name}</div>
    <div>
      <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-400">
        {status}
      </span>
    </div>
    <div>{progress}</div>
    <div>{tasks}</div>
    <div className="text-right text-gray-500">{date}</div>
  </div>
);