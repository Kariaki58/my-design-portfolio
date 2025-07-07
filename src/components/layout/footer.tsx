import { Code2 } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t" id="footer">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold">
            <Code2 className="w-6 h-6 text-accent" />
            <span className="font-headline">Code Canvas</span>
          </a>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Code Canvas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
