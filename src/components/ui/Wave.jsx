export default function Wave({ fill = "#F5F3EC", className = "", flip = false }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden leading-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`block h-[50px] w-full md:h-[90px] ${flip ? "scale-y-[-1]" : ""}`}
      >
        <path
          d="M0,64 C180,96 360,24 540,38 C720,52 810,92 990,84 C1170,76 1290,32 1440,48 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}