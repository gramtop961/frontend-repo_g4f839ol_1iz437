import { Activity, MousePointer, Shield, Zap } from 'lucide-react';

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-neutral-700">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Why this feels fast</h2>
        <p className="mt-2 text-neutral-700 max-w-2xl">
          A focused set of patterns keeps the experience smooth and modern while the loading animation provides clear feedback.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <Feature icon={Activity} title="Perceived Performance" description="A visible progress narrative reduces uncertainty and increases trust." />
        <Feature icon={MousePointer} title="Interactive by Design" description="The hero remains fully interactive and responsive to input." />
        <Feature icon={Zap} title="Subtle Motion" description="Tasteful micro-animations keep it calm yet lively, never distracting." />
        <Feature icon={Shield} title="Accessible" description="High contrast, clear type, and keyboard-friendly controls throughout." />
      </div>
    </section>
  );
}

export default FeaturesSection;
