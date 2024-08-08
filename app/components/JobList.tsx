// app/page.tsx
import React from "react";
import JobCard from "@/app/components/jobCard";
import jobData from "@/app/jobs.json";
import Link from "next/link";

export default function JobList() {
  return (
    <main className="min-h-screen px-20 py-10 bg-white">
      <div className="mb-6 ">
        <div className="flex justify-center items-center gap-5 my-4 w-[153vh]">
          <div>
            <h1
              className="text-3xl 
          font-bold"
            >
              Opportunities
            </h1>
            <p className="text-gray-600">
              Showing {jobData.job_postings.length} results
            </p>
          </div>
          <div className="flex items-center ml-auto">
            <span className="mr-2">Sort by:</span>
            <select className="border rounded p-1 font-bold">
              <option>Most Relevant</option>
              <option>Latest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 ml-0 mr-12 mx-auto max-w-4xl ">
        {jobData.job_postings.map((job) => (
          <Link key={job.id} href={`/job/${job.id}`} legacyBehavior>
            <a className="my-5">
              <JobCard
                id={parseInt(job.id)}
                title={job.title}
                location={job.about.location}
                description={job.description}
                imageUrl={job.image}
              />
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
