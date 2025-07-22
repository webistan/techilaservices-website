"use client";
import { useEffect, useState } from "react";
import { graphqlClient } from "@/lib/graphql-client";
import { GET_STATS } from "@/lib/wp-queries";

interface ReachSectionProps {
  data?: {
    sectionHeading: string;
    reachSectionStats: {
      reachStats: string;
      reachTitle: string;
    }[];
  };
}

const StatisticsSection = () => {
  const [data, setData] = useState<ReachSectionProps["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  type StatsQueryResponse = {
    post?: {
      homePageOurReachSection?: ReachSectionProps["data"];
    };
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res: StatsQueryResponse = await graphqlClient.request(GET_STATS);
        setData(res?.post?.homePageOurReachSection || null);
      } catch (err: any) {
        setError("Failed to load statistics");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-16">
        <div className="mx-auto text-center text-slate-500">Loading statistics...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-16">
        <div className="mx-auto text-center text-red-500">{error}</div>
      </section>
    );
  }

  return (
    <section className="px-6 py-16">
      <div className="mx-auto">
        {data?.sectionHeading && (
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">
            {data.sectionHeading}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {data?.reachSectionStats?.length ? (
            data.reachSectionStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.reachStats}
                </div>
                <div className="text-slate-600">
                  {stat.reachTitle}
                </div>
              </div>
            ))
          ) : (
            // Fallback content if no data
            <div className="col-span-full text-center text-slate-500">
              No statistics available
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;