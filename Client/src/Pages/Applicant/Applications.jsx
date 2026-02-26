
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  Trash2,
  Plus,
  Loader2,
  FilePlus,
  FileCheck,
} from "lucide-react";
import axios from "axios";
import _ from "lodash";
import { supabase } from "../lib/supabase"; // ✅ make sure this exists
import "./Apply.css";

export const Applications = () => {
  const [jobs, setJobs] = useState([]);
  const [savingRows, setSavingRows] = useState(new Set());

  // ✅ Axios instance with auth interceptor
  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: "http://localhost:3011/api/applications",
    });

    instance.interceptors.request.use(async (config) => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.access_token) {
        config.headers.Authorization = `Bearer ${session.access_token}`;
      }

      return config;
    });

    return instance;
  }, []);

  const statusCycle = [
    "Applied",
    "Interviewed",
    "Offer",
    "Waitlisted",
    "Rejected",
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get("/");
        setJobs(res.data.data);
      } catch (err) {
        console.error("LOAD ERROR:", err.response?.data || err.message);
      }
    };
    loadData();
  }, [api]);

  const saveToBackend = useCallback(
    _.debounce(async (id, field, value) => {
      try {
        await api.put(`/${id}`, { [field]: value });

        setSavingRows((p) => {
          const n = new Set(p);
          n.delete(id);
          return n;
        });
      } catch (err) {
        console.error("UPDATE ERROR:", err.response?.data || err.message);

        setSavingRows((p) => {
          const n = new Set(p);
          n.delete(id);
          return n;
        });
      }
    }, 800),
    [api]
  );

  const handleEdit = (id, field, value) => {
    setSavingRows((p) => new Set(p).add(id));

    setJobs((p) =>
      p.map((j) => (j.id === id ? { ...j, [field]: value } : j))
    );

    saveToBackend(id, field, value);
  };

  const handleAdd = async () => {
    try {
      const res = await api.post("/", {
        company: "",
        position: "",
        status: "Applied",
        salary: "",
        resume: null,
      });

      setJobs((p) => [res.data.data, ...p]);
    } catch (err) {
      console.error("ADD ERROR:", err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    setJobs((p) => p.filter((j) => j.id !== id));

    try {
      await api.delete(`/${id}`);
    } catch (err) {
      console.error("DELETE ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div className="p-4 bg-[#111] min-h-screen text-gray-300 min-w-[1000px]">
      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="text-gray-500 text-[10px] uppercase tracking-[0.2em] bg-[#1a1a1a]">
              <th className="py-4 px-4 w-1/4">Company</th>
              <th className="py-4 px-4">Position</th>
              <th className="py-4 px-4 w-40 text-center">Status</th>
              <th className="py-4 px-4 w-48 text-center">Applied Date</th>
              <th className="py-4 px-4 w-40 text-center">Salary</th>
              <th className="py-4 px-4 w-24 text-center">Resume</th>
              <th className="py-4 px-4 w-16"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            <AnimatePresence>
              {jobs.map((job) => (
                <motion.tr
                  key={job.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="group hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {savingRows.has(job.id) ? (
                        <Loader2
                          size={20}
                          className="animate-spin text-green-400"
                        />
                      ) : (
                        <FileSpreadsheet size={20} className="text-gray-600" />
                      )}
                      <input
                        value={job.company || ""}
                        onChange={(e) =>
                          handleEdit(job.id, "company", e.target.value)
                        }
                        className="inputChanger"
                        placeholder="Company"
                      />
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <input
                      value={job.position || ""}
                      onChange={(e) =>
                        handleEdit(job.id, "position", e.target.value)
                      }
                      className="inputChanger"
                      placeholder="Role"
                    />
                  </td>

                  <td className="px-4 py-3 text-center">
                    <div
                      onClick={() =>
                        handleEdit(
                          job.id,
                          "status",
                          statusCycle[
                            (statusCycle.indexOf(job.status) + 1) %
                              statusCycle.length
                          ]
                        )
                      }
                      className={`px-3 py-1 rounded-full text-[10px] font-bold border cursor-pointer ${getStatusStyles(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-center text-xs text-gray-500">
                    {job.created_at?.split("T")[0]}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <input
                      value={job.salary || ""}
                      onChange={(e) =>
                        handleEdit(job.id, "salary", e.target.value)
                      }
                      className="inputChanger"
                      placeholder="LPA"
                    />
                  </td>

                  <td className="px-4 py-3 text-center">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          handleEdit(
                            job.id,
                            "resume",
                            e.target.files[0]?.name
                          )
                        }
                      />
                      {job.resume ? (
                        <FileCheck className="text-emerald-500" size={21} />
                      ) : (
                        <FilePlus className="text-gray-600" size={21} />
                      )}
                    </label>
                  </td>

                  <td className="px-4 py-3 text-right">
                    <div
                      onClick={() => handleDelete(job.id)}
                      className="opacity-0 group-hover:opacity-100 text-gray-600 hover:text-red-500 cursor-pointer"
                    >
                      <Trash2 size={20} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <button
        onClick={handleAdd}
        className="mt-6 flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl"
      >
        <Plus size={18} /> New Application
      </button>
    </div>
  );
};

const getStatusStyles = (s) => {
  const styles = {
    Applied: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Interviewed: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    Offer: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    Waitlisted: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    Rejected: "bg-red-500/10 text-red-500 border-red-500/20",
  };
  return styles[s] || "bg-gray-800 text-gray-400";
};