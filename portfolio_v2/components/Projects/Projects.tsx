"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "multi-cloud",
    title: "Infrastructure Multi-Cloud",
    description: "Déploiement automatisé d'infrastructure sur AWS, Azure et GCP",
    tags: ["Terraform", "AWS", "Azure", "GCP"],
  },
  {
    id: "ci-cd-pipeline",
    title: "Pipeline CI/CD Complet",
    description: "Automatisation complète du déploiement avec tests et monitoring",
    tags: ["GitLab CI", "Docker", "Kubernetes", "ArgoCD"],
  },
  {
    id: "cloud-migration",
    title: "Migration Cloud",
    description: "Migration d'applications on-premise vers le cloud avec zéro downtime",
    tags: ["AWS", "Docker", "Terraform", "Ansible"],
  },
  {
    id: "k8s-cluster",
    title: "Cluster Kubernetes Production",
    description: "Mise en place d'un cluster K8s hautement disponible et sécurisé",
    tags: ["Kubernetes", "Helm", "Istio", "Prometheus"],
  },
  {
    id: "monitoring-stack",
    title: "Stack de Monitoring",
    description: "Solution complète de monitoring et alerting pour infrastructure cloud",
    tags: ["Prometheus", "Grafana", "ELK", "AlertManager"],
  },
  {
    id: "infrastructure-automation",
    title: "Automatisation Infrastructure",
    description: "IaC pour provisioning et configuration automatisés",
    tags: ["Terraform", "Ansible", "Python", "Bash"],
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl w-full ml-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#00d4ff]">
            PROJETS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                variants={projectVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="border border-zinc-800 p-6 hover:border-[#00d4ff] transition-all cursor-hover group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-[#00ff88] text-[#00ff88] rounded-full"
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
