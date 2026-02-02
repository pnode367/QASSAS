import { Button } from "../components/ui/Button";

export function WhitePaperPage() {
  return (
    <main className="pt-28 pb-24 bg-space-black min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="font-mono text-cyber-cyan text-sm">THE SOVEREIGN WHITE PAPER</div>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mt-3">
          The Future of Geological Sovereignty
        </h1>

        <p className="text-white/60 mt-6 leading-relaxed">
          Technical architecture of the space-to-earth framework, ROI model, and deployment pathways.
        </p>

        <div className="mt-10 hud-border hud-corner bg-white/5 border border-white/10 p-8">
          <div className="text-white font-bold">Preview</div>
          <ul className="mt-4 text-white/60 list-disc pl-6 space-y-2">
            <li>Complete technical architecture of the QASSAS ecosystem</li>
            <li>Case studies from Arabian Shield deployments</li>
            <li>ROI analysis for exploration operations</li>
            <li>Integration pathways for existing workflows</li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Put a mock pdf at public/whitepaper.pdf */}
            <Button href="/whitepaper.pdf" className="text-lg">Download PDF</Button>
            <Button to="/contact" variant="outline" className="text-lg">Request Consultation</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
