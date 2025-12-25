"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Multi-Cloud Infrastructure",
    description: "Automated infrastructure deployment on AWS, Azure and GCP",
    tags: ["Terraform", "AWS", "Azure"],
  },
  {
    title: "CI/CD Pipeline",
    description: "Complete deployment automation with tests and monitoring",
    tags: ["GitLab CI", "Docker", "K8s"],
  },
  {
    title: "Cloud Migration",
    description: "Zero-downtime migration from on-premise to cloud",
    tags: ["AWS", "Docker", "Terraform"],
  },
  {
    title: "K8s Production Cluster",
    description: "Highly available and secure Kubernetes cluster",
    tags: ["Kubernetes", "Helm", "Istio"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-20 bg-neutral-900">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-neutral-800 p-6 hover:border-neutral-600 transition-colors"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-neutral-800 text-neutral-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
