import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import CareerSearch from "./CareerSearch";
import { fetchJobs } from "./fetchJobs";

export default async function CareerPage({ searchParams }: { searchParams: { cursor?: string; query?: string } }) {
  const params = searchParams || {};
  const pageSize = 10;
  const cursor = params?.cursor || undefined;
  const query = params?.query || "";
  const { jobs, lastVisible } = await fetchJobs(pageSize, cursor, query);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 w-full">
        {/* Heading Section with Background Image */}
        <section className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/career-bg.jpg"
            alt="Career Background"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Careers at Techila</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">Join our team and help us build the future of IT solutions.</p>
          </div>
        </section>
        {/* Main Content Full Width */}
        <section className="w-full px-4 sm:px-8 md:px-16 py-12">
          <CareerSearch jobs={jobs} nextCursor={lastVisible} query={query} />
        </section>
      </main>
      <Footer />
    </>
  );
} 