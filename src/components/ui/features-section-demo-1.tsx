import { useId } from "react";
import { AiOutlineRobot } from "react-icons/ai";
import { FaCode, FaCogs, FaDesktop, FaBrain, FaLifeRing } from "react-icons/fa";
// import GlareHover from "./GlareHover.jsx";
// @ts-ignore - GlareHover.jsx lacks type declarations

export default function FeaturesSectionDemo() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-12 lg:pt-0 pb-20 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          What we offer
        </h2>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          As a full stack agency, We help early stage startups with everything from branding, product design, video and investor decks.
        </p>
        <p className="text-sm lg:text-base max-w-2xl mb-10 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          We've had the pleasure to collaborate with top teams working across a variety of B2C & B2B industries across the globe.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto mt-12 lg:mt-16 px-6 sm:px-8 md:px-4 lg:px-0">
        {grid.map((feature) => (
          // <GlareHover
          //   key={feature.title}
          //   width="100%"
          //   height="100%"
          //   background="transparent"
          //   borderRadius="24px"
          //   borderColor="transparent"
          //   glareColor="#ffffff"
          //   glareOpacity={0.8}
          //   glareAngle={-45}
          //   glareSize={300}
          //   transitionDuration={700}
          //   className="w-full h-full"
          // >
            <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden w-full h-full border border-neutral-200 dark:border-neutral-800">
              <Grid size={20} />
              <div className="flex items-start gap-3 relative z-20">
                {feature.icon && (
                  // @ts-ignore - icon is a React component
                  <feature.icon className="text-xl text-neutral-700 dark:text-neutral-300 shrink-0" />
                )}
                <p className="text-base font-bold text-neutral-800 dark:text-white">
                  {feature.title}
                </p>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                {feature.description}
              </p>
            </div>
          // </GlareHover>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "AI Automation",
    icon: AiOutlineRobot,
    description:
      "Our AI automation services design and deploy intelligent systems that automate repetitive tasks, integrate with your existing tools, and extract actionable insights from complex data—helping you increase efficiency, reduce costs, and scale operations.",
  },
  {
    title: "Web Development",
    icon: FaCode,
    description:
      "Our web development team builds custom websites with high performance and user-centered design. From simple to complex, we deliver solutions tailored to your unique needs.",
  },
  {
    title: "Custom Software",
    icon: FaCogs,
    description:
      "Transform your business with custom software from our team. We create scalable and secure solutions that streamline processes and provide a competitive edge.",
  },
  {
    title: "Desktop Apps",
    icon: FaDesktop,
    description:
      "Our team offers custom desktop app development services to enhance your productivity and streamline your workflows with secure, tailored applications.",
  },
  {
    title: "Generative AI",
    icon: FaBrain,
    description:
      "Transform your business with custom generative AI solutions. Our team creates automated, high-quality content and insights from complex data.",
  },
  {
    title: "Maintenance & Support",
    icon: FaLifeRing,
    description:
      "Comprehensive software maintenance and support services. Our team provides ongoing support, bug fixing, and updates to keep your software running smoothly.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full mask-[linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-linear-to-r  mask-[radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
