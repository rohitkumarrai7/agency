import { useId } from "react";
import { motion } from "motion/react";
import { 
  FaComments, 
  FaLightbulb, 
  FaCode, 
  FaRocket, 
  FaCheckCircle 
} from "react-icons/fa";

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "We start by understanding your vision, goals, and requirements through detailed discussions.",
    icon: FaComments,
  },
  {
    number: "02",
    title: "Planning",
    description: "Strategic planning and design mockups to ensure we're aligned on the project direction.",
    icon: FaLightbulb,
  },
  {
    number: "03",
    title: "Development",
    description: "Bringing your project to life with clean, scalable code and regular progress updates.",
    icon: FaCode,
  },
  {
    number: "04",
    title: "Testing",
    description: "Rigorous quality assurance to ensure everything works flawlessly across all devices.",
    icon: FaCheckCircle,
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploying your project and providing ongoing support to ensure continued success.",
    icon: FaRocket,
  },
];

export default function WorkflowSection() {
  return (
    <div className="relative py-12 lg:py-16 bg-linear-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-black dark:text-white"
          >
            Our Workflow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm lg:text-base max-w-3xl my-4 mx-auto text-neutral-600 text-center font-normal dark:text-neutral-300"
          >
            Learn about our systematic and transparent approach to delivering outstanding results. 
            Our Workflow showcases our process, from consultation to project completion. 
            Collaborative and communicative, we ensure successful project delivery every time.
          </motion.p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-neutral-200 via-neutral-300 to-neutral-200 transform -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {workflowSteps.map((step, index) => (
              <WorkflowStepCard
                key={step.number}
                step={step}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface WorkflowStepCardProps {
  step: WorkflowStep;
  index: number;
  isEven: boolean;
}

function WorkflowStepCard({ step, index, isEven }: WorkflowStepCardProps) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Content Card */}
      <div className={`w-full lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {/* Step Number */}
          <div
            className={`inline-block mb-4 text-6xl sm:text-7xl font-bold text-neutral-100 dark:text-neutral-800 ${
              isEven ? "lg:float-right lg:ml-4" : "lg:float-left lg:mr-4"
            }`}
          >
            {step.number}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-3">
            {step.title}
          </h3>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {step.description}
          </p>

          {/* Decorative corner gradient */}
          <div
            className={`absolute top-0 ${
              isEven ? "right-0" : "left-0"
            } w-24 h-24 bg-linear-to-br from-neutral-100/50 to-transparent dark:from-neutral-800/50 rounded-3xl pointer-events-none`}
          />
        </motion.div>
      </div>

      {/* Center Icon Circle */}
      <div className="relative z-10 shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="relative"
        >
          {/* Outer ring with pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-linear-to-br from-neutral-300 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 blur-md"
          />

          {/* Main circle */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border-4 border-white dark:border-neutral-950 shadow-xl flex items-center justify-center">
            <Icon className="text-3xl sm:text-4xl text-neutral-700 dark:text-neutral-300" />
          </div>
        </motion.div>
      </div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden lg:block w-5/12" />
    </motion.div>
  );
}

// Grid background pattern component (optional enhancement)
export function WorkflowGrid() {
  const patternId = useId();
  
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern
            id={patternId}
            width={32}
            height={32}
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 32V.5H32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-neutral-200 dark:text-neutral-800"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
