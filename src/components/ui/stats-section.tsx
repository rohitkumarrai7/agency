import { motion } from "motion/react";
import { FaUsers, FaCheckCircle, FaCalendarAlt, FaStar, FaHeart } from "react-icons/fa";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: FaUsers,
    value: "20+",
    label: "Happy Clients",
  },
  {
    icon: FaCheckCircle,
    value: "20+",
    label: "Project Completed",
  },
  {
    icon: FaCalendarAlt,
    value: "3+",
    label: "Years in Business",
  },
  {
    icon: FaStar,
    value: "100%",
    label: "Positive Reviews",
  },
  {
    icon: FaHeart,
    value: "92%",
    label: "Customer Retention",
  },
];

export default function StatsSection() {
  return (
    <div className="relative py-12 lg:py-16 bg-linear-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-black dark:text-white"
          >
            Our clients simply love our work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm lg:text-base max-w-3xl my-4 mx-auto text-neutral-600 text-center font-normal dark:text-neutral-300 leading-relaxed"
          >
            We've proudly delivered 20+ projects over the past 3 years, earning 100% positive reviews 
            and a 92% client retention rate. From early-stage startups to established brands, our partners 
            value not just the quality of our design and development, but the collaborative process that 
            makes every project seamless and impactful.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  stat: StatItem;
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.3 } 
      }}
      className="relative group"
    >
      <div className="relative h-full bg-white dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
        {/* Icon with animated background */}
        <motion.div
          className="relative mb-4"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated circle background */}
          <div className="absolute inset-0 -m-2 rounded-full bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center border-2 border-white dark:border-neutral-950 shadow-lg">
            <Icon className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300" />
          </div>
        </motion.div>

        {/* Value */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight"
        >
          {stat.value}
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium"
        >
          {stat.label}
        </motion.div>

        {/* Decorative shine effect */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
