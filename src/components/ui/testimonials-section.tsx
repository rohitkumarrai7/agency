import { motion } from "motion/react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Working with this team has been an absolute pleasure. Their dedication to excellence and attention to detail is unmatched. They truly understand what it takes to build a successful business.",
    name: "Michael Steward",
    title: "CEO, Tech Startup",
  },
  {
    quote:
      "The creative vision and execution exceeded all expectations. Every project milestone was delivered on time with exceptional quality. Highly recommend their services!",
    name: "Julia Gimmel",
    title: "Marketing Director",
  },
  {
    quote:
      "Their user-centric approach transformed our product. The design process was collaborative and the final results speak for themselves. Our users love the new experience!",
    name: "Lisa Anderson",
    title: "Product Manager",
  },
  {
    quote:
      "They helped us achieve remarkable growth through strategic marketing initiatives. Professional, creative, and results-driven. A true partner in our success story.",
    name: "James Wilson",
    title: "Founder & CEO",
  },
  {
    quote:
      "From concept to launch, they guided us every step of the way. Their product expertise and strategic thinking helped us create something truly innovative and market-ready.",
    name: "Sarah Mitchell",
    title: "Head of Product",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="relative py-12 lg:py-16 bg-neutral-50 overflow-hidden">
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm lg:text-base max-w-3xl my-4 mx-auto text-neutral-600 text-center font-normal dark:text-neutral-300"
          >
            Don't just take our word for it - hear from the clients who've experienced 
            the impact of our work firsthand.
          </motion.p>
        </div>

        {/* Infinite Moving Cards */}
        <div className="relative">
          <InfiniteMovingCards
            items={testimonials.map((testimonial) => ({
              ...testimonial,
              quote: (
                <div className="space-y-3">
                  {/* 5 Stars */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-sm" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {testimonial.quote}
                  </p>
                </div>
              ) as any,
            }))}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="py-4"
          />
        </div>
      </div>
    </div>
  );
}
