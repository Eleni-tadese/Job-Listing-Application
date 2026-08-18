import { Job } from "../types/job";

const BASE_URL = "https://a2sv-akil.onrender.com";

/**
 * Raw shape returned by the API (opportunities/search and opportunities/:id).
 */
interface ApiOpportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string; // newline-separated string, not an array
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string; // "virtual" | "inPerson"
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgName: string;
  logoUrl: string;
  datePosted: string;
}

/**
 * Formats an ISO date string into a readable form, e.g. "Jul 1, 2023".
 * Falls back to "N/A" if parsing fails (some records have placeholder
 * dates like "0001-01-01").
 */
function formatDate(iso: string): string {
  const date = new Date(iso);
  if (isNaN(date.getTime()) || date.getFullYear() < 1900) return "N/A";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Converts opType into a readable label matching our card design.
 */
function formatOpType(opType: string): string {
  if (opType === "inPerson") return "In Person";
  if (opType === "virtual") return "Virtual";
  return opType || "Not specified";
}

/**
 * Converts a raw API opportunity into our internal Job shape,
 * so JobCard and the details page never need to change.
 */
function mapApiOpportunityToJob(item: ApiOpportunity): Job {
  return {
    id: item.id,
    name: item.orgName?.trim() ?? "Unknown",
    title: item.title,
    company: item.orgName?.trim() ?? "Unknown company",
    location: Array.isArray(item.location)
      ? item.location.join(", ")
      : "Not specified",
    type: formatOpType(item.opType),
    avatar:
      item.logoUrl ??
      "https://ui-avatars.com/api/?name=Job&background=E5E7EB&color=1F2937",
    description: item.description ?? "",
    // Split the newline-separated string into an array of lines.
    responsibilities: (item.responsibilities ?? "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean),
    idealCandidate: item.idealCandidate ?? "",
    categories: item.categories ?? [],
    requiredSkills: item.requiredSkills ?? [],
    postedOn: formatDate(item.datePosted),
    deadline: formatDate(item.deadline),
    startDate: formatDate(item.startDate),
    endDate: formatDate(item.endDate),
    whenAndWhere: item.whenAndWhere ?? "",
  };
}

/**
 * Fetches the list of job opportunities from the API.
 * Throws on network failure or non-2xx responses so callers can
 * catch and show an error state.
 */
export async function getOpportunities(): Promise<Job[]> {
  const res = await fetch(`${BASE_URL}/opportunities/search`);

  if (!res.ok) {
    throw new Error(`Failed to fetch opportunities: ${res.status}`);
  }

  const json = await res.json();
  const rawList: ApiOpportunity[] = json.data ?? [];

  return rawList.map(mapApiOpportunityToJob);
}

/**
 * Fetches a single opportunity by ID.
 * Returns null if not found so the page can show a proper 404.
 */
export async function getOpportunityById(id: string): Promise<Job | null> {
  const res = await fetch(`${BASE_URL}/opportunities/${id}`);

  if (!res.ok) {
    return null;
  }

  const json = await res.json();
  const raw: ApiOpportunity = json.data ?? json;

  if (!raw || !raw.id) return null;

  return mapApiOpportunityToJob(raw);
}