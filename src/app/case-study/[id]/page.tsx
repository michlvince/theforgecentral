import { campaigns } from "@/lib/campaigns";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Case Study - The Forge Central",
};

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const campaign = campaigns.find((c) => c.id === params.id);

  if (!campaign) {
    // If campaign not found, we could redirect to 404, but for simplicity we'll show a message.
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050507] text-white">
        <p>Case study not found</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050507] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <div className="mb-8">
          <a href="/campaigns" className="text-sm font-medium text-[#d4af37] hover:underline">
            ← Back to Case Studies
          </a>
        </div>

        {/* Hero section */}
        <div className="relative mb-12">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30" />
          </div>
          <div className="absolute bottom-4 left-4 bg-[#d4af37]/30 rounded-full px-3 py-1">
            <span className="text-xs font-bold text-white">{campaign.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            {campaign.title}
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-zinc-300 leading-relaxed">{campaign.desc}</p>
            <div className="flex items-center gap-6 text-base">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">Client:</span>
                <span className="font-medium">{campaign.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">Metrics:</span>
                <span className="font-medium text-[#{d4af37}]">{campaign.metrics}</span>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-8">
            <a href="#brief" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37]/60 via-[#d4af37]/60 to-[#d4af37]/60 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 transition-all">
              <span className="mr-3">Start Your Narrative</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}