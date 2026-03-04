const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-xl font-black tracking-tight">
              <span className="text-primary">GEM</span>
              <span className="text-secondary">188</span>
            </span>
            <p className="text-xs text-muted-foreground mt-1">Platform Game Online Terpercaya</p>
          </div>
          <div className="flex gap-6">
            {["Syarat & Ketentuan", "Kebijakan Privasi", "Kontak"].map((link) => (
              <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© 2026 GEM188. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
