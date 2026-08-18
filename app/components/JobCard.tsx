import Link from "next/link";
import Image from "next/image";
import { Job } from "../types/job";

interface JobCardProps {
  job: Job;
}

const typeStyles: Record<string, string> = {
  "In Person": "bg-green-100 text-green-700",
  Virtual: "bg-blue-100 text-blue-700",
  Remote: "bg-blue-100 text-blue-700",
  Hybrid: "bg-purple-100 text-purple-700",
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex gap-5 border border-gray-100 cursor-pointer">
        <Image
          src={job.avatar}
          alt={job.company}
          width={64}
          height={64}
          className="rounded-full h-16 w-16 object-cover flex-shrink-0"
        />

        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900">
            {job.title}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            {job.company} • {job.location}
          </p>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            {job.description}
          </p>

          <div className="flex gap-2 flex-wrap mt-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                typeStyles[job.type] ?? "bg-gray-100 text-gray-700"
              }`}
            >
              {job.type}
            </span>

            {job.categories.map((category) => (
              <span
                key={category}
                className="bg-orange-50 text-orange-600 border border-orange-200 px-3 py-1 rounded-full text-xs font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}