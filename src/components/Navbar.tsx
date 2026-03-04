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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Games", "Promo", "Bantuan", "Tentang"].map((item) => (
            <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium tracking-wider uppercase">
              {item}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            <a 
              href="https://gem188-hape.com/account/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary font-bold hover:underline tracking-wider uppercase"
            >
              DAFTAR
            </a>
            <a 
              href="https://gem188-hape.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display text-xs font-bold tracking-wider glow-cyan hover:opacity-90 transition-opacity"
            >
              LOGIN
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-card border-t border-border/50 px-6 py-4 flex flex-col gap-4"
        >
          {["Games", "Promo", "Bantuan", "Tentang"].map((item) => (
            <a key={item} href="#" className="text-sm text-muted-foreground py-1 font-medium tracking-wider uppercase">
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <a 
              href="https://gem188-hape.com/account/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center py-2 text-primary font-bold border border-primary rounded-lg"
            >
              DAFTAR
            </a>
            <a 
              href="https://gem188-hape.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center py-2 rounded-lg bg-primary text-primary-foreground font-display font-bold"
            >
              LOGIN
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;