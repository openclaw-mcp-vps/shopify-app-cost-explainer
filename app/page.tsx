export default function Home() {
  const faqs = [
    {
      q: "How does it connect to my Shopify store?",
      a: "We use Shopify OAuth — you authorize read-only access to your app subscriptions. No passwords, no manual data entry."
    },
    {
      q: "What counts as a redundant app?",
      a: "Our database maps app features across 2,000+ Shopify apps. When two or more apps you pay for cover the same feature, we flag the overlap and show you the cheaper option."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your dashboard at any time. No contracts, no cancellation fees."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Shopify stores spending $200+/mo on apps
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Wasting Money on{" "}
          <span className="text-[#58a6ff]">Redundant Shopify Apps</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your store in 30 seconds. See exactly which apps overlap, which ones earn their keep, and where you can cut costs — all in one interactive dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Saving — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required to explore.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "🔍", title: "Redundancy Scanner", desc: "Flags apps with overlapping features so you only pay once." },
          { icon: "📊", title: "ROI Breakdown", desc: "See revenue impact vs. monthly cost for every app." },
          { icon: "⚡", title: "Instant Insights", desc: "Dashboard loads in seconds via Shopify Admin API." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">All-Inclusive Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited app scans",
              "Redundancy & overlap detection",
              "ROI & revenue impact reports",
              "Cost-saving recommendations",
              "Shopify OAuth — read-only & secure"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Shopify App Cost Analyzer. Not affiliated with Shopify Inc.
      </footer>
    </main>
  );
}
