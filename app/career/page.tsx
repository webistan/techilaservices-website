import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import CareerSearch from "./CareerSearch";
import CareerJobList from "./CareerJobList";
import { useState } from "react";

const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    description: "Work with React, Next.js, and modern frontend tools to build amazing user experiences.",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Pune, India",
    type: "Full Time",
    description: "Develop robust backend services using Node.js and cloud technologies.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description: "Design intuitive interfaces and collaborate closely with product teams.",
  },
  {
    id: 4,
    title: "Project Manager",
    location: "Remote",
    type: "Full Time",
    description: "Lead cross-functional teams to deliver projects on time and within scope.",
  },
];

export default function CareerPage() {
  // The state and logic will be handled in the client components
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-2">Careers at Techila</h1>
            <p className="text-lg text-gray-600">Join our team and help us build the future of IT solutions.</p>
          </header>
          <CareerSearch jobs={JOBS} />
        </div>
      </main>
      <Footer />
    </>
  );
} 