"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Command {
  input: string;
  output: string[];
  delay?: number;
}

const commands: Command[] = [
  {
    input: "whoami",
    output: [
      "Quentin Broyer Cloud & DevOps Administrator",
      ""
    ],
    delay: 500,
  },
  {
    input: "cat profile.txt",
    output: [
      "Name: Quentin Broyer",
      "Jobs: Cloud & DevOps Engineer",
      "Spécialisé en infrastructure cloud,",
      "CI/CD, Kubernetes, ElasticSearch",
      "Helm, Terraform, Python",
      ""
    ],
    delay: 1000,
  },
  {
    input: "ls -la skills/",
    output: [
      "drwxr-xr-x  cloud-platforms/",
      "drwxr-xr-x  devops-tools/",
      "drwxr-xr-x  infrastructure/",
      "drwxr-xr-x  monitoring/",
      ""
    ],
    delay: 800,
  },
  {
    input: "echo $STATUS",
    output: [
      "✓ Disponible pour de nouveaux projets",
      ""
    ],
    delay: 600,
  },
];

{/* Writeting in terminal */}
const TYPING_SPEED_MIN = 50;
const TYPING_SPEED_VARIANCE = 50;
const OUTPUT_DISPLAY_DELAY = 200;

export default function Terminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [completedCommands, setCompletedCommands] = useState<Command[]>([]);

  const moveToNextCommand = useCallback(() => {
    setCompletedCommands(prev => [...prev, commands[currentCommandIndex]]);
    setCurrentCommandIndex(prev => prev + 1);
    setDisplayedText("");
    setShowOutput(false);
  }, [currentCommandIndex]);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const currentCommand = commands[currentCommandIndex];
    const fullText = currentCommand.input;

    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, TYPING_SPEED_MIN + Math.random() * TYPING_SPEED_VARIANCE);

      return () => clearTimeout(timeout);
    }

    const showOutputTimeout = setTimeout(() => {
      setShowOutput(true);
      const nextCommandTimeout = setTimeout(() => {
        moveToNextCommand();
      }, currentCommand.delay || 800);

      return () => clearTimeout(nextCommandTimeout);
    }, OUTPUT_DISPLAY_DELAY);

    return () => clearTimeout(showOutputTimeout);
  }, [displayedText, currentCommandIndex, moveToNextCommand]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl ml-4"
      >
        {/* Terminal Header */}
        <div className="bg-zinc-900 border border-[#f11515] rounded-t-lg p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm text-zinc-400 ml-4 text-xl">
            Quentin.Broyer@portfolio: ~
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-black border-x border-b border-[#00d4ff] rounded-b-lg p-6 h-[80vh] overflow-y-auto font-mono text-lg">
          {/* Completed Commands */}
          {completedCommands.map((cmd, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#00ff88]">➜</span>
                <span className="text-[#00d4ff]">~</span>
                <span className="text-white">{cmd.input}</span>
              </div>
              {cmd.output.map((line, i) => (
                <div key={i} className="text-zinc-300 ml-6">
                  {line}
                </div>
              ))}
            </div>
          ))}

          {/* Current Command Being Typed */}
          {currentCommandIndex < commands.length && (
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[#00ff88]">➜</span>
                <span className="text-[#00d4ff]">~</span>
                <span className="text-white">{displayedText}</span>
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="inline-block w-2 h-4 bg-white ml-1"
                  />
                )}
              </div>

              {/* Current Output */}
              {showOutput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {commands[currentCommandIndex].output.map((line, i) => (
                    <div key={i} className="text-zinc-300 ml-6">
                      {line}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          {/* Final Prompt */}
          {currentCommandIndex >= commands.length && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-[#00ff88]">➜</span>
              <span className="text-[#00d4ff]">~</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block w-2 h-4 bg-white"
              />
            </div>
          )}

          {/* Scroll Indicator */}
          {currentCommandIndex >= commands.length && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 text-center"
            >
              <div className="text-zinc-500 mb-2">Scroll pour explorer</div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="text-[#00d4ff] text-2xl"
              >
                ↓
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
