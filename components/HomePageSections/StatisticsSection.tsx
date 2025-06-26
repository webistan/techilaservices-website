import Image from "next/image"

interface StatisticsSectionProps {
  data?: {
    statsNumber: string;
    statsText: string;
    icon: {
      node: {
        mediaItemUrl: string;
      };
    };
  }[];
}

const StatisticsSection = ({ data }: StatisticsSectionProps) => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <Image
                  src={stat.icon.node.mediaItemUrl}
                  alt={stat.statsText}
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {stat.statsNumber}
              </div>
              <div className="text-slate-600">
                {stat.statsText}
              </div>
            </div>
          )) || (
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