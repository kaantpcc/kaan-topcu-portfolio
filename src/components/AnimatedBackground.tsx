const routes = [
  {
    className: "left-[-8rem] top-24 h-56 w-[34rem] opacity-[0.18]",
    paths: ["M18 62H128L182 112H308L358 70H514", "M42 174H168L226 134H348L414 168H502"]
  },
  {
    className: "right-[-10rem] top-40 h-64 w-[38rem] opacity-[0.17]",
    paths: ["M20 98H146L206 54H352L426 116H572", "M84 202H188L256 160H388L462 196H548"]
  },
  {
    className: "left-[-7rem] bottom-24 h-60 w-[36rem] opacity-[0.16]",
    paths: ["M28 118H152L214 78H336L408 132H540", "M74 210H188L248 178H356L438 218H526"]
  },
  {
    className: "right-[-8rem] bottom-16 h-56 w-[34rem] opacity-[0.17]",
    paths: ["M24 70H118L174 112H296L378 78H516", "M58 182H194L260 144H374L444 184H506"]
  }
];

const packets = [
  { left: "9%", top: "18%", delay: "-1s", width: 124 },
  { left: "74%", top: "22%", delay: "-4.8s", width: 148 },
  { left: "8%", top: "72%", delay: "-8.4s", width: 132 },
  { left: "76%", top: "68%", delay: "-12s", width: 116 }
];

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-paper" />
      <div className="background-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.78),transparent)]" />
      <div className="scan-beam absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {routes.map((route, routeIndex) => (
        <svg
          key={route.className}
          className={`absolute ${route.className}`}
          viewBox="0 0 580 260"
          fill="none"
          style={{ animationDelay: `${routeIndex * -2.8}s` }}
        >
          {route.paths.map((path, pathIndex) => (
            <path
              key={path}
              d={path}
              stroke={pathIndex % 2 === 0 ? "#111827" : "#2563EB"}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      ))}

      <div className="hidden md:block">
        {packets.map((packet) => (
          <span
            key={`${packet.left}-${packet.top}`}
            className="route-packet absolute h-[2px] overflow-hidden rounded-full bg-ink/[0.08]"
            style={{
              left: packet.left,
              top: packet.top,
              width: packet.width,
              animationDelay: packet.delay
            }}
          >
            <span className="route-packet-dot absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent/70 shadow-[0_0_18px_rgba(37,99,235,0.32)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
