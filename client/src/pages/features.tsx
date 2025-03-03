import { motion } from "framer-motion";
import Features from "@/components/sections/features";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-16 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Features</h1>
          <p className="text-muted-foreground">
            Discover what makes our AI Assistant unique
          </p>
        </div>
        <Features />
      </motion.div>
    </main>
  );
}
