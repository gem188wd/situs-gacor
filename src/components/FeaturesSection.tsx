import { motion } from "framer-motion";
import { Shield, Zap, HeadphonesIcon, CreditCard } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Aman",
    desc: "Enkripsi data tingkat militer & lisensi resmi untuk keamanan maksimal.",
  },
  {
    icon: Zap,
    title: "Proses Cepat",
    desc: "Deposit & withdraw instan. Tanpa ribet, tanpa antri.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support 24/7",
    desc: "Tim customer service profesional siap membantu kapan saja.",
  },
  {
    icon: CreditCard,
    title: "Metode Lengkap",
    desc: "Bank lokal, e-wallet, pulsa, dan crypto tersedia untuk kemudahan transaksi.",
  },
];

const FeaturesSection = () => {
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
            Kenapa <span className="text-secondary">GEM188</span>?
          </h2>
          <p className="text-muted-foreground text-lg">Keunggulan yang membuat kami berbeda</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card rounded-xl p-6 group hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:glow-gold transition-all">
                <feat.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-sm font-bold tracking-wider mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
