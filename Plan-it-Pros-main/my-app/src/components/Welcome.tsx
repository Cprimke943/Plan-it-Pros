'use client';

export default function Welcome() {
  return (
    <section className="relative">
      {/* Gradient Background */}
      <div className="h-[420px] bg-gradient-to-b from-[#d49789] to-transparent text-white flex flex-col justify-end px-6 pb-28 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Plan-It Pro</h1>
        <p className="mt-2 text-sm md:text-base">
          — your personalized hub for discovering, creating, and managing events that match your interests. Plan it like a pro.
        </p>
      </div>

      {/* Search Bar */}
      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-[#d3b58f] rounded-2xl shadow-xl px-10 py-8 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {['Search Event', 'Place', 'Time'].map((label, i) => (
          <div key={label} className="w-full md:w-1/3 space-y-1">
            <label className="text-white text-md">{label}</label>
            <select className="w-full bg-transparent border-b-2 border-white text-white font-semibold text-lg focus:outline-none py-2">
              <option>
                {label === 'Search Event'
                  ? 'All Events'
                  : label === 'Place'
                  ? 'Athens, GA'
                  : 'Any Date'}
              </option>
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}
