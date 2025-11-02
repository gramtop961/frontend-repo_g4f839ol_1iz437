import { Rocket } from 'lucide-react';

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">LoadWatch</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#status" className="hover:text-black transition-colors">Status</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
