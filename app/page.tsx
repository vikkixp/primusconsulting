import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-18 items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-base">P</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">Primus Consulting</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 link-hover">About</Link>
            <Link href="#services" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 link-hover">Services</Link>
            <Link href="#expertise" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 link-hover">Expertise</Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 link-hover">Contact</Link>
          </nav>
          <Link href="#contact" className="button-hover rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-all duration-200 shadow-sm">
            Get in Touch
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-28 md:py-36 lg:py-44">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Salesforce Consulting & Development</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                Developer-led Salesforce solutions that grow with your business.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl">
                We don't just click and configure. We build custom, scalable Salesforce implementations that solve real business problems for global B2B firms.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="#contact" className="button-hover rounded-md bg-blue-600 px-9 py-4 text-base font-medium text-white hover:bg-blue-700 transition-all duration-200 shadow-md text-center">
                  Schedule a Consultation
                </Link>
                <Link href="#services" className="button-hover rounded-md border border-slate-200 px-9 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-center">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">About Us</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">Built by developers, for businesses that mean business.</h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Primus Consulting was founded on the belief that great Salesforce implementations require more than just admin certifications. They require engineering expertise.
                </p>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                  Our team of certified Salesforce developers build solutions that are maintainable, performant, and designed to evolve as your organization grows. No technical debt, no quick fixes. Just solid engineering.
                </p>
                <div className="grid grid-cols-3 gap-8 md:gap-12">
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</p>
                    <p className="text-sm text-slate-600">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">98%</p>
                    <p className="text-sm text-slate-600">Client Retention</p>
                  </div>
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">10+</p>
                    <p className="text-sm text-slate-600">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-80 md:h-[420px] shadow-sm"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Services</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">What we do best</h2>
              <p className="text-slate-600 text-lg">End-to-end Salesforce services built on solid engineering principles.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div key={index} className="card-hover rounded-xl border border-slate-200 bg-white p-8 hover:border-blue-200 hover:bg-blue-50/30">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-28 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-400">Expertise</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Deep technical Salesforce expertise</h2>
              <p className="text-slate-400 text-lg">Our team holds advanced certifications and real-world engineering experience across the entire Salesforce platform.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-sm">
              {[
                "Salesforce Certified Technical Architect",
                "Platform Developer I & II",
                "Apex & LWC Specialists",
                "Service Cloud Consultant",
                "Sales Cloud Consultant",
                "CPQ Implementation",
                "Experience Cloud",
                "MuleSoft Integration",
                "Bulk & Composite APIs",
                "CI/CD for Salesforce",
                "Performance Optimization",
                "Security & Governance",
              ].map((item, index) => (
                <div key={index} className="card-hover border border-slate-800 rounded-md px-5 py-4 text-slate-300 hover:border-slate-700 hover:bg-slate-900">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">Trusted By</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Companies that rely on us</h2>
              <p className="text-slate-600 text-lg">We work with B2B organizations across industries globally.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 opacity-70">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="h-12 bg-slate-200 rounded"></div>
              ))}
            </div>

            <div className="mt-24 grid md:grid-cols-3 gap-8">
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
                <div key={index} className="card-hover rounded-xl border border-slate-200 bg-white p-10">
                  <p className="text-slate-700 mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                  <p className="text-sm font-semibold text-slate-900">— {testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-28 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">Ready to build something that lasts?</h2>
            <p className="text-blue-100 text-lg lg:text-xl mb-12 leading-relaxed">
              Schedule a free 30-minute technical consultation with one of our senior Salesforce engineers. No sales pitches. Just honest technical advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="mailto:hello@primusconsulting.com" className="button-hover rounded-md bg-white px-9 py-4 text-base font-medium text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-md text-center">
                hello@primusconsulting.com
              </Link>
              <Link href="#" className="button-hover rounded-md border border-white/30 px-9 py-4 text-base font-medium text-white hover:bg-white/10 transition-all duration-200 text-center">
                Book a Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold">Primus Consulting</span>
            </div>
            <p className="text-sm text-slate-500">© 2026 Primus Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
