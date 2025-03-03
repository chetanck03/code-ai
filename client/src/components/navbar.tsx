import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-xl border-b border-white/10" />

        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between relative">
            <Link href="/">
              <a className="relative z-10 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Assistant
                </span>
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/">
                <a className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </a>
              </Link>
              <Link href="/features">
                <a className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                  Features
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                  Contact
                </a>
              </Link>
              <Link href="/auth">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative z-10 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 py-4 md:hidden"
            >
              <div className="container px-4 flex flex-col gap-4">
                <Link href="/">
                  <a className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                    Home
                  </a>
                </Link>
                <Link href="/features">
                  <a className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                    Features
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                    Contact
                  </a>
                </Link>
                <Link href="/auth">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}