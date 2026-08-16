import Link from "next/link";
import { jobs } from "../../data/jobs";
import { notFound } from "next/navigation";
import { Clock, Flame, MapPin, Calendar, CheckCircle2, ArrowLeft } from "lucide-react";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) return notFound();

  const aboutItems = [
    { icon: Clock, label: "Posted On", value: job.postedOn },
    { icon: Flame, label: "Deadline", value: job.deadline },
    { icon: MapPin, label: "Location", value: job.location },
    { icon: Calendar, label: "Start Date", value: job.startDate },
    { icon: Calendar, label: "End Date", value: job.endDate },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <span className="text-gray-300">/</span>
        <p className="text-gray-400 text-sm">Applicant Dashboard / Description</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-blue-200 rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Responsibilities</h2>
            <ul className="space-y-2">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Ideal Candidate we want</h2>
            <p className="text-gray-700 leading-relaxed">{job.idealCandidate}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">When & Where</h2>
            <div className="flex gap-3 items-start text-gray-700">
              <span className="bg-blue-50 rounded-full p-2 flex-shrink-0">
                <MapPin className="w-4 h-4 text-blue-500" />
              </span>
              <span className="mt-1.5">{job.whenAndWhere}</span>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3">About</h3>
            <ul className="space-y-4 text-sm">
              {aboutItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-3 items-start">
                  <span className="bg-blue-50 rounded-full p-2 flex-shrink-0">
                    <Icon className="w-4 h-4 text-blue-500" />
                  </span>
                  <span>
                    <p className="text-gray-500">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Categories</h3>
            <div className="flex gap-2 flex-wrap">
              {job.categories.map((c) => (
                <span key={c} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Required Skills</h3>
            <div className="flex gap-2 flex-wrap">
              {job.requiredSkills.map((s) => (
                <span key={s} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}