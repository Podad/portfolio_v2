"use client";

import { motion } from "framer-motion";

const contactLinks = [
  { id: "email", label: "Email", value: "quentin.broyer@exemple.com", href: "mailto:quentin.broyer@exemple.com" },
  { id: "github", label: "GitHub", value: "github.com/quentinbroyer", href: "https://github.com/quentinbroyer" },
  { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/quentinbroyer", href: "https://linkedin.com/in/quentinbroyer" },
] as const;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-4xl w-full ml-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#00d4ff]">
            CONTACT
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-8 text-zinc-400">
                Intéressé par une collaboration ? N&apos;hésitez pas à me contacter.
              </p>

              <div className="space-y-4">
                {contactLinks.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    whileInView="visible"
                    variants={linkVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 border border-zinc-800 hover:border-[#00d4ff] transition-all cursor-hover group"
                  >
                    <span className="text-sm text-zinc-500 w-20">{item.label}</span>
                    <span className="text-sm group-hover:text-[#00d4ff] transition-colors">
                      {item.value}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={formVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-[#00d4ff] p-8 bg-[#00d4ff]/5"
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full bg-transparent border border-zinc-800 p-3 text-sm focus:border-[#00d4ff] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border border-zinc-800 p-3 text-sm focus:border-[#00d4ff] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full bg-transparent border border-zinc-800 p-3 text-sm focus:border-[#00d4ff] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00d4ff] text-black font-bold py-3 px-6 hover:bg-[#00ff88] transition-colors cursor-hover"
                >
                  ENVOYER
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
