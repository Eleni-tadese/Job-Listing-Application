"use client";

import { useEffect, useState } from "react";
import JobCard from "./components/JobCard";
import SortDropdown from "./components/SortDropdown";
import { Job } from "./types/job";
import { getOpportunities } from "./lib/api";

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch opportunities from the API once, when the page loads.
  useEffect(() => {
    async function loadJobs() {
      try {
        setLoading(true);
        setError(null);
        const data = await getOpportunities();
        setJobs(data);
      } catch (err) {
        setError("Failed to load job listings. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Opportunities</h1>
          <p className="text-gray-500 text-sm mt-1">
            {loading ? "Loading..." : `Showing ${jobs.length} results`}
          </p>
        </div>
        <SortDropdown jobs={jobs} onSortedChange={setJobs} />
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-20 text-gray-400">
          Loading opportunities...
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="text-center py-20">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && jobs.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          No opportunities found.
        </div>
      )}

      {/* Data loaded successfully */}
      {!loading && !error && jobs.length > 0 && (
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  );
}