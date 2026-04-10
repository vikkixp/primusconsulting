import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-7xl">
          <div className="flex items-center gap-3">
            <img src="/primus-logo.svg" alt="Primus Consulting Logo" className="h-9 w-9" />
            <span className="font-semibold text-lg tracking-tight text-slate-800">Primus Consulting</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">About</Link>
            <Link href="#services" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Services</Link>
            <Link href="#expertise" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Expertise</Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Contact</Link>
          </nav>
          <Link href="#contact" className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors duration-200 shadow-sm">
            Get in Touch
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">Salesforce Consulting & Development</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Developer-led Salesforce solutions that grow with your business.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
                We don't just click and configure. We build custom, scalable Salesforce implementations that solve real business problems for global B2B firms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors text-center">
                  Schedule a Consultation
                </Link>
                <Link href="#services" className="rounded-lg border border-slate-200 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors text-center">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Built by developers, for businesses that mean business.</h2>
                <p className="text-slate-600 mb-4 text-lg">
                  Primus Consulting was founded on the belief that great Salesforce implementations require more than just admin certifications. They require engineering expertise.
                </p>
                <p className="text-slate-600 mb-6 text-lg">
                  Our team of certified Salesforce developers build solutions that are maintainable, performant, and designed to evolve as your organization grows. No technical debt, no quick fixes. Just solid engineering.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">50+</p>
                    <p className="text-sm text-slate-600">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">98%</p>
                    <p className="text-sm text-slate-600">Client Retention</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">10+</p>
                    <p className="text-sm text-slate-600">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-200 rounded-2xl h-80 md:h-auto"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What we do best</h2>
              <p className="text-slate-600 text-lg">End-to-end Salesforce services built on solid engineering principles.</p>
            </div>

            {/* Featured new services */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border-2 border-blue-600 bg-blue-50/40 p-8 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">Now Available</span>
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Agentforce Implementation</h3>
                <p className="text-slate-600 mb-4">End-to-end Agentforce strategy, design, and implementation. We build autonomous AI agents that handle real business processes — from customer service bots to complex multi-step sales workflows — with full customization in Apex and Flow.</p>
                <ul className="text-sm text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>Agent topic & action design</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>Custom Apex actions & Flow integrations</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>Einstein AI grounding & prompt engineering</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>Governance, safety guardrails & testing</li>
                </ul>
              </div>
              <div className="rounded-xl border-2 border-sky-500 bg-sky-50/40 p-8 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wider text-sky-600 bg-sky-100 px-2.5 py-1 rounded-full">Now Available</span>
                <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Cloud 360</h3>
                <p className="text-slate-600 mb-4">Unify all your customer data into a real-time, actionable profile. We implement Salesforce Data Cloud to connect siloed systems, resolve identities, and power AI-driven engagement across every touchpoint.</p>
                <ul className="text-sm text-slate-600 space-y-1.5">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>Data ingestion & stream setup</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>Identity resolution & unified profiles</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>Calculated insights & segmentation</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>Activation across Sales, Service & Marketing Cloud</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Development",
                  description: "Apex, LWC, Flow, and integration development built to enterprise standards with proper testing and documentation.",
                },
                {
                  title: "Implementation & Migration",
                  description: "Full Salesforce implementations, data migrations, and org transformations planned and executed by senior engineers.",
                },
                {
                  title: "Technical Architecture",
                  description: "System design, performance audits, governance frameworks, and technical debt elimination.",
                },
                {
                  title: "Integration Services",
                  description: "REST, SOAP, Bulk API, and middleware integrations with your existing business systems.",
                },
                {
                  title: "Managed Services",
                  description: "Ongoing development, maintenance, and support from dedicated Salesforce engineers.",
                },
                {
                  title: "Training & Enablement",
                  description: "Technical training for your internal team to build and maintain Salesforce solutions properly.",
                },
              ].map((service, index) => (
                <div key={index} className="rounded-xl border border-slate-200 p-8 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Deep technical Salesforce expertise</h2>
              <p className="text-slate-400 text-lg">Our team holds advanced certifications and real-world engineering experience across the entire Salesforce platform.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-sm">
              {[
                { label: "Agentforce", highlight: true },
                { label: "Data Cloud 360", highlight: true },
                { label: "Salesforce Certified Technical Architect", highlight: false },
                { label: "Platform Developer I & II", highlight: false },
                { label: "Apex & LWC Specialists", highlight: false },
                { label: "Service Cloud Consultant", highlight: false },
                { label: "Sales Cloud Consultant", highlight: false },
                { label: "CPQ Implementation", highlight: false },
                { label: "Experience Cloud", highlight: false },
                { label: "MuleSoft Integration", highlight: false },
                { label: "CI/CD for Salesforce", highlight: false },
                { label: "Security & Governance", highlight: false },
              ].map((item, index) => (
                <div key={index} className={`rounded-lg px-4 py-3 ${item.highlight ? "border border-blue-500 bg-blue-900/30 text-blue-300 font-semibold" : "border border-slate-800 text-slate-300"}`}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">Trusted By</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Companies that rely on us</h2>
              <p className="text-slate-600 text-lg">We work with B2B organizations across industries globally.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-60">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="h-12 bg-slate-200 rounded"></div>
              ))}
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Primus didn't just build our Salesforce instance — they built something that actually fits how our business works. No compromises.",
                  company: "SaaS Technology Company",
                },
                {
                  quote: "Other consultants told us what we wanted wasn't possible. Primus's engineers built it in 6 weeks. Night and day difference.",
                  company: "Global Manufacturing Firm",
                },
                {
                  quote: "Finally a Salesforce partner that understands software development best practices. No more messy, unmaintainable code.",
                  company: "Financial Services Provider",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-xl border border-slate-200 p-8">
                  <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-slate-900">— {testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to build something that lasts?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Schedule a free 30-minute technical consultation with one of our senior Salesforce engineers. No sales pitches. Just honest technical advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:hello@primusconsulting.com" className="rounded-lg bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors text-center">
                hello@primusconsulting.com
              </Link>
              <Link href="#" className="rounded-lg border border-white/30 px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors text-center">
                Book a Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/primus-logo.svg" alt="Primus Consulting Logo" className="h-8 w-8" />
              <span className="font-semibold">Primus Consulting</span>
            </div>
            <p className="text-sm text-slate-500">© 2026 Primus Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
