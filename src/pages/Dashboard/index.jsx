import {
  Users,
  Briefcase,
  UserCheck,
  UserMinus,
  TrendingUp,
} from "lucide-react";
import { initialCandidates } from "../../data/candidates";
import { initialInternships } from "../../data/internships";

const statusData = [
  {
    icon: Users,
    title: "Total Candidates",
    numbers: initialCandidates.length,
    percentage: "18%",
  },
  {
    icon: Briefcase,
    title: "Total Internships",
    numbers: initialInternships.length,
    percentage: "22%",
  },
  {
    icon: UserCheck,
    title: "Hired Candidates",
    numbers: initialCandidates.filter((c) => c.status == "Approved").length,
    percentage: "30%",
  },
  {
    icon: UserMinus,
    title: "Rejected Candidates",
    numbers: initialCandidates.filter((r) => r.status === "Rejected").length,
    percentage: "12%",
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <p className="text-slate-black mt-2">
          Get a quick overview of your activities, stats, and updates — all in
          one place.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {statusData.map((data, index) => (
          <div
            key={index}
            className="bg-white border border-neutral rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary/12 text-primary/90 text-xl">
                <data.icon />
              </div>
              <h3 className="text-base text-slate-black font-medium">
                {data.title}
              </h3>
            </div>

            <div className="bg-primary rounded-xl p-6 text-white">
              <h1 className="text-3xl font-semibold mb-2">{data.numbers}</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <TrendingUp size={16} />
                  <span>{data.percentage}</span>
                </div>
                <div className="text-sm opacity-80 font-light whitespace-nowrap">
                  vs {data.comparison || "last period"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 bg-white p-6 border border-neutral rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-black mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-indigo-600">JD</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-black">
                John Doe applied for Frontend Developer
              </p>
              <p className="text-sm text-body">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-green-600">JS</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-slate-black">
                Jane Smith was approved for Backend Developer
              </p>
              <p className="text-sm text-body">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
