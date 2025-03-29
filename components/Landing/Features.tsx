"use client";

import type React from "react";

import { Activity, Bell, Shield, BarChart, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-12 bg-gradient-to-t from-[#ff2e8215] to-[#18080e3b] overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-xl bg-pink-950/60 px-3 py-1 text-sm text-pink-300 mb-4 backdrop-blur-sm border border-pink-800/20">
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Advanced Network Monitoring
          </h2>
          <p className="max-w-[700px] text-gray-400 md:text-xl">
            Proctinet provides powerful tools to monitor, alert, and protect
            your network infrastructure in real-time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCard
            variants={itemVariants}
            icon={<Activity className="h-10 w-10 text-pink-500" />}
            title="Realtime Netflow Monitoring"
            description="Monitor network traffic patterns and bandwidth usage with detailed visualizations and analytics in real-time."
          />
          <FeatureCard
            variants={itemVariants}
            icon={<Mail className="h-10 w-10 text-pink-500" />}
            title="Automated Email Alerts"
            description="Receive instant notifications about critical network events, performance issues, and potential security threats."
          />
          <FeatureCard
            variants={itemVariants}
            icon={<Shield className="h-10 w-10 text-pink-500" />}
            title="Realtime Threat Detection"
            description="Identify and respond to security threats as they happen with advanced pattern recognition and anomaly detection."
          />
          <FeatureCard
            variants={itemVariants}
            icon={<BarChart className="h-10 w-10 text-pink-500" />}
            title="Comprehensive Analytics"
            description="Gain insights into network performance with detailed reports and customizable dashboards."
          />
          <FeatureCard
            variants={itemVariants}
            icon={<Bell className="h-10 w-10 text-pink-500" />}
            title="Customizable Notifications"
            description="Configure alert thresholds and notification preferences to suit your organization's specific needs."
          />
          <FeatureCard
            variants={itemVariants}
            icon={<Clock className="h-10 w-10 text-pink-500" />}
            title="Historical Data Analysis"
            description="Access and analyze historical network data to identify trends and plan for future capacity needs."
          />
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: any;
}

function FeatureCard({ icon, title, description, variants }: FeatureCardProps) {
  return (
    <motion.div
      variants={variants}
      className="group flex flex-col items-center text-center p-6 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-pink-900/40 
      hover:border-pink-600/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] 
      hover:-translate-y-1 hover:bg-gray-900/95"
    >
      <div
        className="p-3 rounded-full bg-pink-950/50 mb-4 group-hover:bg-pink-900/50 transition-colors duration-300 
        group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group-hover:text-pink-300 transition-colors duration-300"
        >
          {icon}
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
}
