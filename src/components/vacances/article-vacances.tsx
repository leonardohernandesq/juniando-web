"use client";

import { useState } from "react";
import JobList from "../job-list";
import IJobs from "@/models/jobs.interface";
import useEscapeKey from "@/hooks/useEscModal";

export default function ArticleVacances({ jobs }: { jobs: IJobs[] }) {
  const [openJobId, setOpenJobId] = useState<string | number | null>(null);

  useEscapeKey(() => setOpenJobId(null));

  return (
    <JobList jobs={jobs} openJobId={openJobId} setOpenJobId={setOpenJobId} />
  );
}
