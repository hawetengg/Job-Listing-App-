"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import jobData from "@/app/jobs.json";

import { Job } from "@/app/lib/types/job";
import { SiTicktick } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    if (id) {
      console.log(`Searching for job with id: ${id}`);
      const jobDetail = jobData.job_postings.find((job) => job.id === id);
      if (jobDetail) {
        setJob(jobDetail);
      } else {
        console.log(`Job with id: ${id} not found`);
        setJob(null);
      }
    }
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg gap-5 my-16 w-[153vh]">
      <h1 className="text-3xl font-bold mb-4 text-[#25324B]">{job.title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4 pr-4">
          <p className="text-gray-600 mb-4">{job.description}</p>
          <h2 className="text-2xl font-bold mb-2 text-[#25324B]">
            Responsibilities
          </h2>
          <ul className="flex flex-col gap-2">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex gap-2">
                <p>
                  <SiTicktick className="text-#56CDAD"/>
                </p>
                <p className="text-start">{responsibility}</p>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-[#25324B]">
            Ideal Candidate
          </h2>
          <div className="mb-4">
            <p>Age: {job.ideal_candidate.age}</p>
            <p>Gender: {job.ideal_candidate.gender}</p>
              {job.ideal_candidate.traits.map((trait, index) => (
                <p key={index} className="mb-2">
                  {trait}
                </p>
              ))}
          </div>
          <h2 className="text-2xl font-bold mb-2 inline-flex gap-2 text-[#25324B]">
            <p>
              <CiLocationOn />
            </p>
            When & Where
          </h2>
          <p className="mb-4">{job.when_where}</p>
        </div>
        <div className="md:w-1/4 pl-4 border-l border-gray-200">
          <h2 className="text-2xl font-bold mb-2 text-[#25324B]">About</h2>
          <p className="flex gap-2">
            <p>
              <CiCirclePlus />
            </p>
            Posted On: {job.about.posted_on}
          </p>
          <p className="flex gap-2">
            <p>
              <MdOutlineLocalFireDepartment />
            </p>
            Deadline: {job.about.deadline}
          </p>
          <p className="flex gap-2">
            <p>
              <CiLocationOn />
            </p>
            Location: {job.about.location}
          </p>
          <p className="flex gap-2">
            <p>
              <MdOutlineDateRange />
            </p>
            Start Date: {job.about.start_date}
          </p>
          <p className="flex gap-2">
            <p>
              <MdOutlineDateRange />
            </p>
            End Date: {job.about.end_date}
          </p>
          <h2 className="text-2xl font-bold mb-2 text-[#25324B]">Categories</h2>
          {job.about.categories.map((category, index) => (
            <p
              key={index}
              className="mb-2 text-[#FFC663] bg-[#FDF3EB] py-1 px-3 rounded-full"
            >
              {category}
            </p>
          ))}
          <h2 className="text-2xl font-bold mb-2 text-[#25324B]">
            Required Skills
          </h2>
          {job.about.required_skills.map((skill, index) => (
            <p
              key={index}
              className="mb-2 text-[#2D298E] bg-[#F8F8Fd] py-1 px-3 rounded-full"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
