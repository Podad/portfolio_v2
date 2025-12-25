"use client";

import { motion } from "framer-motion";

const skills = {
  "Cloud": ["AWS", "Azure", "GCP", "OVH"],
  "DevOps": ["Docker", "Kubernetes", "GitLab CI", "ArgoCD"],
  "IaC": ["Terraform", "Ansible", "Pulumi"],
  "Monitoring": ["Prometheus", "Grafana", "ELK Stack"],
};

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-neutral-950">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-neutral-800 p-5"
              >
                <h3 className="text-sm font-medium text-neutral-400 mb-4 pb-2 border-b border-neutral-800">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-sm text-neutral-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
