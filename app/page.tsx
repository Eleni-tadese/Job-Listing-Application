"use client";

import { useState } from "react";
import JobCard from "./components/JobCard";
import SortDropdown from "./components/SortDropdown";
import { jobs as initialJobs } from "./data/jobs";

export default function Home() {
  const [jobs, setJobs] = useState(initialJobs);

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Opportunities</h1>
          <p className="text-gray-500 text-sm mt-1">
            Showing {jobs.length} results
          </p>
        </div>
        <SortDropdown jobs={jobs} onSortedChange={setJobs} />
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}