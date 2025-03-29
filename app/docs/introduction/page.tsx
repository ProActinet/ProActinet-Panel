import {
  ShieldCheck,
  ActivitySquare,
  BellRing,
  Eye,
  Download,
} from "lucide-react";

export default function IntroductionPage() {
  return (
    <div className="min-h-screen p-4 sm:p-8 text-white overflow-x-hidden">
      <div className="max-w-5xl mx-auto rounded-lg shadow-lg p-6 sm:p-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
            Welcome to Proactinet
          </h1>
          <p className="text-lg sm:text-2xl max-w-2xl mx-auto px-2">
            Shield your systems with Proactinet — the advanced anti-botnet
            platform built for real-time protection and peace of mind.
          </p>
          <div className="flex justify-center mt-8">
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-accent bg-pink-accent px-6 sm:px-10 text-base sm:text-lg font-medium text-white shadow-lg transition-colors hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white">
              Get Started
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <div className="flex flex-col items-center text-center px-4">
            <ShieldCheck size={40} className="mb-4 text-pink-accent" />
            <h3 className="text-xl font-bold mb-2">Advanced Protection</h3>
            <p className="text-base text-white/80">
              Proactinet defends your system against botnet threats with
              cutting-edge detection and prevention.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <ActivitySquare size={40} className="mb-4 text-pink-accent" />
            <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
            <p className="text-base text-white/80">
              Monitor live logs and track suspicious activities directly from
              your dashboard.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <BellRing size={40} className="mb-4 text-pink-accent" />
            <h3 className="text-xl font-bold mb-2">Instant Alerts</h3>
            <p className="text-base text-white/80">
              Receive immediate email alerts for any unusual behavior detected
              on your system.
            </p>
          </div>
        </section>

        {/* Surveillance Section */}
        <section className="mb-16 px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <Eye size={60} className="text-pink-accent" />
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Continuous Surveillance
              </h2>
              <p className="text-base sm:text-lg text-white/80">
                Proactinet runs silently in the background, ensuring 24/7
                surveillance of your device. Whether idle or active, your system
                is always under watchful protection.
              </p>
            </div>
          </div>
        </section>

        {/* Why Proactinet */}
        <section className="mb-16 text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Choose Proactinet?
          </h2>
          <p className="text-base sm:text-xl max-w-3xl mx-auto mb-10 text-white/80">
            In a world where botnet threats are evolving, Proactinet stands as
            your proactive defense solution. Empower your Linux systems with
            seamless installation, robust security, and total control — all in
            one lightweight platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-accent bg-pink-accent px-6 sm:px-10 text-base sm:text-lg font-medium text-white shadow-lg transition-colors hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white">
              Install Now
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-accent px-6 sm:px-10 text-base sm:text-lg font-medium text-white shadow-lg transition-colors hover:bg-pink-accent focus:outline-none focus:ring-2 focus:ring-white">
              Learn More
            </button>
          </div>
        </section>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#20170fc9] rounded-xl p-6 sm:p-8 shadow-lg gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Ready to Protect Your System?
            </h3>
            <p className="text-base sm:text-lg text-white/80">
              Download Proactinet and experience next-gen anti-botnet security.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-xl border border-pink-accent bg-pink-accent px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white shadow-lg transition-colors hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white">
            <Download size={18} className="mr-2" />
            Download for Linux
          </button>
        </div>
      </div>
    </div>
  );
}
