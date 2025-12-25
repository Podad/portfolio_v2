"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type Line = { type: "input" | "output"; text: string; link?: string };
type CommandOutput = string | { text: string; link: string };

const commands: Record<string, CommandOutput[]> = {
  help: [
    "Available commands:",
    "  whoami      - Who am I?",
    "  skills      - My technical skills",
    "  projects    - My projects",
    "  contact     - Contact information",
    "  clear       - Clear terminal",
  ],
  whoami: ["Quentin Broyer — Cloud & DevOps Engineer"],
  skills: [
    "Cloud:      AWS, Azure, GCP, OVH",
    "DevOps:     Docker, Kubernetes, GitLab CI, ArgoCD",
    "IaC:        Terraform, Ansible, Pulumi",
    "Monitoring: Prometheus, Grafana, ELK Stack",
  ],
  projects: [
    "1. Multi-Cloud Infrastructure - Terraform, AWS, Azure, GCP",
    "2. CI/CD Pipeline - GitLab CI, Docker, Kubernetes",
    "3. Cloud Migration - Zero-downtime migration",
    "4. K8s Production Cluster - Helm, Istio, Prometheus",
  ],
  contact: [
    { text: "Email:    quentin.broyer@exemple.com", link: "mailto:quentin.broyer@exemple.com" },
    { text: "GitHub:   github.com/quentinbroyer", link: "https://github.com/quentinbroyer" },
    { text: "LinkedIn: linkedin.com/in/quentinbroyer", link: "https://linkedin.com/in/quentinbroyer" },
  ],
};

const initialLines: Line[] = [
  { type: "output", text: "Welcome to my portfolio. Type 'help' for commands." },
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [...lines, { type: "input", text: cmd }];

    if (trimmed === "clear") {
      setLines(initialLines);
      setInput("");
      return;
    }

    if (trimmed === "") {
      setLines(newLines);
      setInput("");
      return;
    }

    const output = commands[trimmed];
    if (output) {
      output.forEach((item) => {
        if (typeof item === "string") {
          newLines.push({ type: "output", text: item });
        } else {
          newLines.push({ type: "output", text: item.text, link: item.link });
        }
      });
    } else {
      newLines.push({ type: "output", text: `Command not found: ${trimmed}` });
    }

    setLines(newLines);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  const focusInput = () => inputRef.current?.focus();

  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight);
  }, [lines]);

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <div className="bg-neutral-800 rounded-t-lg px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-neutral-600" />
          <div className="w-3 h-3 rounded-full bg-neutral-600" />
          <div className="w-3 h-3 rounded-full bg-neutral-600" />
          <span className="ml-4 text-neutral-400 text-sm">quentin.broyer@portfolio</span>
        </div>

        {/* Body */}
        <div
          ref={bodyRef}
          onClick={focusInput}
          className="bg-neutral-950 rounded-b-lg p-6 font-mono text-sm h-[70vh] overflow-y-auto cursor-text"
        >
          {lines.map((line, i) => (
            <div key={i} className="mb-1">
              {line.type === "input" ? (
                <>
                  <span className="text-neutral-500">$</span>
                  <span className="text-white">{line.text}</span>
                </>
              ) : line.link ? (
                <a
                  href={line.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white underline"
                >
                  {line.text}
                </a>
              ) : (
                <span className="text-neutral-400">{line.text}</span>
              )}
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center">
            <span className="text-neutral-500">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none caret-white"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
