import JobCard from "./components/JobCard";
import { jobs } from "./data/jobs";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Opportunities
      </h1>

      <div className="space-y-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </main>
  );
}