"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Années d'XP", value: "5+" },
  { label: "Projets", value: "50+" },
  { label: "Certifications", value: "8" },
  { label: "Technologies", value: "30+" },
] as const;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
};

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl w-full ml-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#00d4ff]">
            À PROPOS
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Passionné par l&apos;infrastructure cloud et l&apos;automatisation,
                je conçois et déploie des solutions scalables et résilientes.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-zinc-400">
                Mon expertise couvre l&apos;ensemble du cycle DevOps, de la
                conteneurisation à l&apos;orchestration, en passant par le monitoring
                et la sécurité.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  variants={statVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-[#00d4ff] p-6 hover:bg-[#00d4ff]/10 transition-all cursor-hover"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#00ff88] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
