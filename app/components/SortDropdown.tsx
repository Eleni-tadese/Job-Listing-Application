"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Job } from "../types/job";

interface SortDropdownProps {
  jobs: Job[];
  onSortedChange: (sorted: Job[]) => void;
}

const options = ["Most relevant", "Newest", "Title A–Z"];

export default function SortDropdown({ jobs, onSortedChange }: SortDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Most relevant");

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);

    let sorted = [...jobs];
    if (option === "Newest") {
      sorted = sorted.sort(
        (a, b) => new Date(b.postedOn).getTime() - new Date(a.postedOn).getTime()
      );
    } else if (option === "Title A–Z") {
      sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    onSortedChange(sorted);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-gray-600"
      >
        Sort by: <span className="font-semibold text-gray-900">{selected}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}