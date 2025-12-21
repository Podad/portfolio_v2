"use client";

import { motion } from "framer-motion";

const skillsData = {
  "CLOUD PLATFORMS": ["AWS", "Azure", "GCP", "OVH"],
  "DEVOPS TOOLS": ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "ArgoCD"],
  "INFRASTRUCTURE": ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
  "MONITORING": ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
} as const;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl w-full ml-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#00d4ff]">
            COMPÉTENCES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                variants={categoryVariants}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="border border-zinc-800 p-6 hover:border-[#00d4ff] transition-all"
              >
                <h3 className="text-sm font-bold mb-6 text-[#00ff88] border-b border-zinc-800 pb-3">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial="hidden"
                      whileInView="visible"
                      variants={skillVariants}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm cursor-hover hover:text-[#00d4ff] transition-colors"
                    >
                      <span className="text-[#00d4ff]">○</span>
                      {skill}
                    </motion.li>
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
