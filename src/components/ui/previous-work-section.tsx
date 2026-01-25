import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Visume",
    description:
      "Visume is an AI-powered video resume platform that helps candidates showcase their skills through short video interviews and enables employers to discover talent more effectively.",
    link: "#",
    className: "md:col-span-2",
    header: (
      <div className="flex h-full min-h-24 w-full items-center justify-center rounded-md bg-linear-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <span className="text-4xl font-bold text-neutral-400 dark:text-neutral-600">
          Visume
        </span>
      </div>
    ),
  },
  {
    title: "Yazo Eat (both website & android app)",
    description:
      "Yazo Eat lets you discover and order from amazing local home cooks and food vendors with 0% commission on pickup & self-delivered orders.",
    link: "#",
    className: "md:col-span-1",
    header: (
      <div className="flex h-full min-h-24 w-full items-center justify-center rounded-md bg-linear-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-600">
          Yazo
        </span>
      </div>
    ),
  },
  {
    title: "We Go Authentic",
    description:
      "We Go Authentic offers personalised Bhutan tour packages, connecting travellers with immersive local experiences and culture.",
    link: "#",
    className: "md:col-span-1",
    header: (
      <div className="flex h-full min-h-24 w-full items-center justify-center rounded-md bg-linear-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-600">
          WGA
        </span>
      </div>
    ),
  },
  {
    title: "UNTUCKit",
    description:
      "UNTUCKit designs men's and women's apparel built around perfectly-fitting shirts that look sharp when worn untucked.",
    link: "#",
    className: "md:col-span-2",
    header: (
      <div className="flex h-full min-h-24 w-full items-center justify-center rounded-md bg-linear-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <span className="text-3xl font-bold text-neutral-400 dark:text-neutral-600">
          UNTUCKit
        </span>
      </div>
    ),
  },
  {
    title: "Attainz",
    description:
      "Attainz is an advanced email verification platform that ensures clean, valid, and high-deliverability email lists for successful campaigns.",
    link: "#",
    className: "md:col-span-1",
    header: (
      <div className="flex h-full min-h-24 w-full items-center justify-center rounded-md bg-linear-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-600">
          Attainz
        </span>
      </div>
    ),
  },
  {
    title: "Gragafa (custom software)",
    description:
      "Gragafa is a custom JavaScript library engineered for interactive graph creation and data visualization, featuring modular design, YAML input support, and 30% faster DOM manipulation.",
    link: "#",
    className: "md:col-span-2",
    header: (
      <div className="flex h-full min-h-24 w-full items-center justify-center rounded-md bg-linear-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        <span className="text-3xl font-bold text-neutral-400 dark:text-neutral-600">
          Gragafa
        </span>
      </div>
    ),
  },
];

export default function PreviousWorkSection() {
  return (
    <div className="relative py-12 lg:py-16 bg-white">
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
            Our Previous Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm lg:text-base max-w-3xl my-4 mx-auto text-neutral-600 text-center font-normal dark:text-neutral-300"
          >
            As a full stack agency, we help early stage startups with everything from branding, 
            product design, video and investor decks. We've had the pleasure to collaborate with 
            top teams working across a variety of B2C & B2B industries across the globe.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={project.className}
            >
              <BentoGridItem
                title={project.title}
                description={project.description}
                header={project.header}
                className="h-full"
                icon={
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors"
                  >
                    View <FaExternalLinkAlt className="text-xs" />
                  </a>
                }
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
