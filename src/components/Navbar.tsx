import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-black tracking-tight">
          <span className="text-primary">GEM</span>
          <span className="text-secondary">188</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Games", "Promo", "Bantuan", "Tentang"].map((item) => (
            <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium tracking-wider uppercase">
              {item}
            </a>
          ))}
          <button className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display text-xs font-bold tracking-wider glow-cyan">
            LOGIN
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-card border-t border-border/50 px-6 py-4 flex flex-col gap-3"
        >
          {["Games", "Promo", "Bantuan", "Tentang"].map((item) => (
            <a key={item} href="#" className="text-sm text-muted-foreground py-2 font-medium tracking-wider uppercase">
              {item}
            </a>
          ))}
          <button className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display text-xs font-bold tracking-wider mt-2">
            LOGIN
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
