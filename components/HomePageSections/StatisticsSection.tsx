const StatisticsSection = () => {
  return (
    <section className="px-6 py-16 mx-4">
      <div className="max-w-7xl mx-auto">
        {/* Statistics Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            We consulted more then 1.2m+ popular companies world-wide
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              30<sup className="text-2xl">+</sup>
            </div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">
              YEAR
              <br />
              EXPERIENCES
            </div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              1.2<sup className="text-2xl">m</sup>
            </div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">
              CLIENTS AROUND
              <br />
              THE WORLD
            </div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              10<sup className="text-2xl">+</sup>
            </div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">
              AWARD
              <br />
              WINNING
            </div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              3.8<sup className="text-2xl">x</sup>
            </div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">
              ECONOMICAL
              <br />
              GROWTH
            </div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              70<sup className="text-2xl">+</sup>
            </div>
            <div className="text-sm text-slate-600 uppercase tracking-wide">
              TEAM
              <br />
              MEMBERS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection; 