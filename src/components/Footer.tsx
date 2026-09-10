import { Cpu } from 'lucide-react';
import { profile, navLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-900">
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg glass flex items-center justify-center">
              <Cpu className="w-5 h-5 text-accent-400" />
            </div>
            <span className="font-display font-semibold text-sm">{profile.name}</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-xs text-gray-500 hover:text-accent-300 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
