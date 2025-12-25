"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "quentin.broyer@exemple.com", href: "mailto:quentin.broyer@exemple.com" },
  { label: "GitHub", value: "github.com/quentinbroyer", href: "https://github.com/quentinbroyer" },
  { label: "LinkedIn", value: "linkedin.com/in/quentinbroyer", href: "https://linkedin.com/in/quentinbroyer" },
];

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-neutral-950">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Contact</h2>
          <p className="text-neutral-500 mb-8">
            Interested in working together? Get in touch.
          </p>

          <div className="space-y-3 mb-12">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 border border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                <span className="text-xs text-neutral-600 w-16">{link.label}</span>
                <span className="text-sm text-neutral-300">{link.value}</span>
              </motion.a>
            ))}
          </div>

          <div className="border border-neutral-800 p-6">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border border-neutral-800 p-3 text-sm text-white placeholder-neutral-600 focus:border-neutral-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-neutral-800 p-3 text-sm text-white placeholder-neutral-600 focus:border-neutral-600 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border border-neutral-800 p-3 text-sm text-white placeholder-neutral-600 focus:border-neutral-600 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-neutral-900 font-medium py-3 hover:bg-neutral-200 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
