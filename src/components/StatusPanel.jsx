import { useEffect, useMemo, useState } from 'react';
import { Activity, CheckCircle, Clock } from 'lucide-react';

function StatusPanel() {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let rafId;
    let start;
    const duration = 3000; // 3s pleasant ramp

    const step = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(step);
      } else {
        setReady(true);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const status = useMemo(() => {
    if (ready) return { label: 'Ready', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' };
    if (progress > 0) return { label: 'Loading', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' };
    return { label: 'Pending', icon: Clock, color: 'text-neutral-600', bg: 'bg-neutral-50' };
  }, [ready, progress]);

  const Icon = status.icon;

  return (
    <section id="status" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${status.bg}`}>
              <Icon className={`h-5 w-5 ${status.color}`} />
            </span>
            <div>
              <p className="text-sm text-neutral-500">Website status</p>
              <h3 className="text-lg font-semibold">{status.label}</h3>
            </div>
          </div>
          <div className="mt-6">
            <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
              <div
                className="h-full rounded-full bg-black transition-[width] duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-neutral-600">Progress: {progress}%</p>
          </div>
        </div>

        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">What you are seeing</h3>
          <p className="mt-2 text-neutral-700">
            The hero above embeds a live 3D scene that visualizes loading from 0% to 100% with a minimalist black & white
            aesthetic. It remains interactive while the rest of the page is available.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc list-inside">
            <li>Interactive Spline scene in the hero.</li>
            <li>Non-blocking gradient overlay preserves interaction.</li>
            <li>Smooth progress indicator mirrors perceived load.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default StatusPanel;
