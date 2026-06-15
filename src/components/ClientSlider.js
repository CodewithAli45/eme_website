"use client";

const clients = [
  { logo: "/BCCL.jpg", name: "BCCL" },
  { logo: "/ACB.png", name: "ACB India" },
  { logo: "/BSL.jpg", name: "SAIL Bokaro Steel Plant" },
  { logo: "/ISP.jpg", name: "SAIL ISP" },
  { logo: "/bpscl.jpg", name: "BPSCL" },
  { logo: "/HPCL.jpg", name: "HPCL" },
  { logo: "/hec.jpg", name: "HEC Ltd." },
  { logo: "/MECON.jpg", name: "MECON" },
  { logo: "/ntpc.jpg", name: "NTPC" },
  { logo: "/rinl.jpg", name: "RINL" },
  { logo: "/Siemens.jpg", name: "Siemens" },
  { logo: "/SSPL.png", name: "Shyam Sel Power Ltd." },
  { logo: "/ongc.jpg", name: "ONGC" },
];

export default function ClientSlider() {
  // Double the array to ensure a seamless looping effect
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-slate-950/40 border-y border-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
          Our Valued Partners
        </span>
        <h2 className="font-display text-3xl font-black text-white mt-2">
          Trusted by Industrial Leaders
        </h2>
        <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Slider Track Container */}
      <div className="relative w-full overflow-hidden flex items-center py-6 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 sm:before:w-40 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 sm:after:w-40 after:bg-gradient-to-l after:from-slate-950 after:to-transparent">
        <div className="animate-infinite-scroll flex gap-12 items-center">
          {doubledClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-20 w-40 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 hover:bg-white/10 p-3 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="max-h-full max-w-full object-contain filter brightness-90 contrast-125 hover:brightness-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
