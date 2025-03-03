import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

export default function Auth() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-background to-blue-500/20 animate-gradient" />

      {/* Animated orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${i === 0 ? 'rgba(168, 85, 247, 0.1)' : i === 1 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(236, 72, 153, 0.1)'} 0%, transparent 70%)`,
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <Card className="backdrop-blur-xl bg-background/40 border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Welcome to AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form className="space-y-4">
                  <Input 
                    placeholder="Email" 
                    type="email"
                    className="bg-background/50 border-white/10 focus:border-primary"
                  />
                  <Input 
                    placeholder="Password" 
                    type="password"
                    className="bg-background/50 border-white/10 focus:border-primary"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:opacity-90">
                    Login
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form className="space-y-4">
                  <Input 
                    placeholder="Name"
                    className="bg-background/50 border-white/10 focus:border-primary"
                  />
                  <Input 
                    placeholder="Email" 
                    type="email"
                    className="bg-background/50 border-white/10 focus:border-primary"
                  />
                  <Input 
                    placeholder="Password" 
                    type="password"
                    className="bg-background/50 border-white/10 focus:border-primary"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:opacity-90">
                    Register
                  </Button>
                </form>
              </TabsContent>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background/50 backdrop-blur-md px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="w-full border-white/10 bg-background/50 hover:bg-white/5">
                  <FaGoogle className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full border-white/10 bg-background/50 hover:bg-white/5">
                  <FaFacebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full border-white/10 bg-background/50 hover:bg-white/5">
                  <FaGithub className="w-4 h-4" />
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}