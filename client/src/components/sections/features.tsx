import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Zap, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Responses",
    description: "Advanced AI algorithms provide intelligent and contextual responses"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant answers to your questions with minimal latency"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access your AI assistant anytime, anywhere, on any device"
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Communicate in multiple languages with natural conversations"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground">Experience the next generation of AI assistance</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group">
                <CardHeader>
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
