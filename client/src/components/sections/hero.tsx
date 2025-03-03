import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-background to-blue-500/20 animate-gradient" />

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? 'rgba(168, 85, 247, 0.15)' : i === 1 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)'} 0%, transparent 70%)`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
            animate={{
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                AI-Powered Assistant
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-4xl md:text-6xl font-bold"
            >
              Your Personal{" "}
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                AI Assistant
              </span>{" "}
              for Everything
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-xl text-muted-foreground"
            >
              Experience the next generation of AI assistance. Powerful, intuitive, and always ready to help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/auth">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:opacity-90 transition-opacity"
                >
                  Get Started Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/20">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex items-center gap-4 text-muted-foreground"
            >
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=64&h=64" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium">
                  +5k
                </div>
              </div>
              <span>Join 10,000+ users already using AI Assistant</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* 3D-like AI Assistant visualization */}
            <div className="relative w-full aspect-square max-w-[500px]">
              <motion.div
                className="absolute inset-0"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="relative w-64 h-64">
                  {/* Core circle */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-pulse" />

                  {/* Orbiting circles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6 rounded-full bg-primary"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 120}deg) translateX(140px) translateY(-50%)`,
                      }}
                    />
                  ))}

                  {/* Center AI icon */}
                  <div className="absolute inset-8 rounded-full bg-background border border-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      AI
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}