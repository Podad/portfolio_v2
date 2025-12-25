"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years of XP", value: "5+" },
  { label: "Projects", value: "50+" },
  { label: "Certifications", value: "8" },
  { label: "Technologies", value: "30+" },
];

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-neutral-900">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">About</h2>

          <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
            Passionate about cloud infrastructure and automation, I design and
            deploy scalable and resilient solutions.
          </p>
          <p className="text-neutral-500 mb-12 leading-relaxed">
            My expertise covers the entire DevOps cycle, from containerization
            to orchestration, including monitoring and security.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-neutral-800 p-6 text-center"
              >
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
