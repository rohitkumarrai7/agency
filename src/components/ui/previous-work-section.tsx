import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

// Bento grid layout pattern
const layoutPattern = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-2",
];

// Static fallback when Convex hasn't loaded yet
const staticProjects = [
  { title: "Visume", description: "Visume is an AI-powered video resume platform that helps candidates showcase their skills through short video interviews.", link: "https://www.visume.co.in", image_url: "/seekout03.svg" },
  { title: "Yazo Eat", description: "Yazo Eat lets you discover and order from amazing local home cooks and food vendors.", link: "https://yazoeat.com.au/", image_url: "/seekout04.svg" },
  { title: "We Go Authentic", description: "We Go Authentic offers personalised Bhutan tour packages, connecting travellers with immersive local experiences.", link: "https://www.wegoauthentic.com", image_url: "/seekout05.svg" },
  { title: "UNTUCKit", description: "UNTUCKit designs men's and women's apparel built around perfectly-fitting shirts.", link: "https://www.untuckit.com/", image_url: "/seekout06.svg" },
  { title: "Attainz", description: "Attainz is an advanced email verification platform that ensures clean, valid email lists.", link: "https://www.attainz.com", image_url: "/seekout07.svg" },
  { title: "Gragafa", description: "Gragafa is a custom JavaScript library for interactive graph creation and data visualization.", link: "https://github.com/charstorm/gragafa", image_url: "/seekout01.png" },
];

export default function PreviousWorkSection() {
  const convexProjects = useQuery(api.projects.list);

  const rawProjects = convexProjects && convexProjects.length > 0
    ? [...convexProjects].sort((a, b) => a.display_order - b.display_order)
    : staticProjects;

  const projects = rawProjects.map((p, i) => ({
    ...p,
    className: layoutPattern[i % layoutPattern.length],
  }));

  return (
    <div id="work" className="relative py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-medium text-black dark:text-white"
          >
            Our Founder's Previous Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm lg:text-base max-w-3xl my-4 mx-auto text-neutral-600 text-center font-normal dark:text-neutral-300"
          >
            From AI voice agent platforms to full-stack web applications—we've built solutions
            across a variety of B2C & B2B industries across the globe.
          </motion.p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={project.className}
            >
              <BentoGridItem
                title={project.title}
                description={project.description}
                header={
                  project.image_url ? (
                    <div className="flex h-full min-h-24 w-full items-center justify-center rounded-md bg-white overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-contain p-2"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full min-h-24 w-full items-center justify-center rounded-md bg-linear-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
                      <span className="text-2xl md:text-4xl font-bold text-neutral-400/60 dark:text-neutral-600 select-none">
                        {project.title.split("(")[0].trim()}
                      </span>
                    </div>
                  )
                }
                className="h-full"
                icon={
                  <a
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
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
