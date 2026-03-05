import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Gamepad2, Trophy, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Platform Game Online Terpercaya #1</span>
          </div>

          {/* Brand */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-2">
            <span className="text-primary text-glow-cyan">GEM</span>
            <span className="text-secondary text-glow-gold">188</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body font-light">
            Rasakan sensasi bermain game online terbaik dengan keamanan & kenyamanan tingkat tinggi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
  <motion.a
    href="https://gem188-hape.com/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg glow-cyan tracking-wider text-center"
  >
    MAIN SEKARANG
  </motion.a>
  
  <motion.a
    href="https://gem188-hape.com/account/register"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="px-8 py-4 rounded-lg border border-secondary text-secondary font-display font-bold text-lg tracking-wider hover:bg-secondary/10 transition-colors text-center"
  >
    DAFTAR Sekarang
  </motion.a>
</div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { icon: Gamepad2, value: "500+", label: "Games" },
              { icon: Trophy, value: "100K+", label: "Pemain Aktif" },
              { icon: Zap, value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="text-center"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
