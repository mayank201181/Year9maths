import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortsHub } from "@/components/ShortsHub";

export const metadata: Metadata = {
  title: "Concept Shorts — Year 9 Maths",
  description: "Bite-sized concept Shorts for every Tanglin Year 9 Mathematics topic.",
};

export default function ShortsPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading Concept Shorts…</p>}>
      <ShortsHub subjectLabel="Year 9 Maths" />
    </Suspense>
  );
}
