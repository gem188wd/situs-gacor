import { motion } from "framer-motion";
import { Dice5, Spade, Monitor, Trophy, Joystick, Coins } from "lucide-react";

const categories = [
  { icon: Spade, name: "Live Casino", desc: "Dealer profesional 24 jam", color: "text-primary" },
  { icon: Joystick, name: "Slots", desc: "Ribuan game slot populer", color: "text-secondary" },
  { icon: Monitor, name: "E-Sports", desc: "Taruhan e-sports real-time", color: "text-primary" },
  { icon: Trophy, name: "Sportsbook", desc: "Olahraga dari seluruh dunia", color: "text-secondary" },
  { icon: Dice5, name: "Arcade", desc: "Game kasual seru", color: "text-primary" },
  { icon: Coins, name: "Togel", desc: "Pasaran resmi terlengkap", color: "text-secondary" },
];

const GameCategories = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Pilih <span className="text-primary">Game</span> Favoritmu
          </h2>
          <p className="text-muted-foreground text-lg">Koleksi game terlengkap dari provider ternama</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl p-6 text-center cursor-pointer group hover:border-primary/30 transition-all duration-300"
            >
              <cat.icon className={`w-10 h-10 mx-auto mb-3 ${cat.color} group-hover:scale-110 transition-transform`} />
              <h3 className="font-display text-sm font-bold tracking-wider mb-1">{cat.name}</h3>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
