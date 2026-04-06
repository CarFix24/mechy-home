const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "#";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 font-headline font-black tracking-tighter text-zinc-900">
            <span className="material-symbols-outlined text-primary text-2xl">build</span>
            <span className="text-2xl">CARFIX<span className="text-primary">24</span></span>
          </div>
          <span className="px-4 py-1.5 bg-primary-fixed text-on-primary-fixed text-xs font-bold font-label tracking-widest uppercase rounded-full">
            Coming Soon
          </span>
        </div>
      </nav>

      <main className="pt-24">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center z-10">
            <h1 className="text-6xl md:text-8xl font-black font-headline text-on-background leading-[0.9] tracking-tighter mb-8">
              Auto Repair,<br />
              <span className="text-primary italic">Reinvented.</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed">
              Say goodbye to waiting rooms and hidden markups. CarFix24 connects you directly
              with top-tier mechanics for transparent, on-demand auto service at your doorstep.
            </p>

            {/* Waitlist Form */}
            <form
              action={FORMSPREE_URL}
              method="POST"
              className="w-full max-w-xl flex flex-col sm:flex-row gap-3"
            >
              <input type="hidden" name="_subject" value="CarFix24 Waitlist Signup" />
              <div className="bg-surface-container-low rounded-xl px-4 py-2 flex items-center focus-within:ring-2 ring-primary/40 transition-all sm:w-1/3 flex-shrink-0">
                <span className="material-symbols-outlined text-outline mr-2 text-base">person</span>
                <select
                  name="user_type"
                  className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-medium outline-none cursor-pointer text-sm"
                >
                  <option value="consumer">Car Owner</option>
                  <option value="mechanic">Mechanic</option>
                </select>
              </div>
              <div className="flex-grow bg-surface-container-low rounded-xl px-4 py-2 flex items-center focus-within:ring-2 ring-primary/40 transition-all">
                <span className="material-symbols-outlined text-outline mr-3">mail</span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline font-medium outline-none"
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <button
                type="submit"
                className="kinetic-gradient text-on-primary px-8 py-4 rounded-xl font-bold font-headline shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95 whitespace-nowrap flex items-center justify-center gap-2"
              >
                Join Waitlist
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </form>
            <p className="text-sm text-secondary mt-4">
              Be the first to access our upcoming iOS and Android apps.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black font-headline text-on-background tracking-tighter mb-4">
                The Auto Repair Industry is Broken.
              </h2>
              <p className="text-secondary max-w-3xl mx-auto text-lg">
                For decades, car owners have dealt with high markups, lack of transparency, and
                massive inconvenience. The Uber model disrupted taxis; CarFix24 is doing it for
                auto repair.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">money_off</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">No More High Markups</h3>
                <p className="text-secondary leading-relaxed">
                  Traditional shops mark up parts by 100% or more. With CarFix24, you source
                  parts transparently and pay fair rates.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">End the Guesswork</h3>
                <p className="text-secondary leading-relaxed">
                  Stop wondering what you&apos;re actually paying for. See exact labor charges
                  and effort expended upfront.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4">Ultimate Convenience</h3>
                <p className="text-secondary leading-relaxed">
                  No more dropping your car off and waiting all day. Our certified mechanics
                  come to your home or office.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Two-Sided Marketplace Section */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black font-headline text-on-background tracking-tighter mb-4">
                Two Powerful Apps. One Platform.
              </h2>
              <p className="text-secondary max-w-2xl mx-auto text-lg">
                Coming soon to the App Store and Google Play.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

              {/* Mechy — Consumer App */}
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/30 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold font-label">
                    For Car Owners
                  </span>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">directions_car</span>
                  </div>
                </div>
                <h3 className="text-4xl font-black font-headline text-on-background mb-1">Mechy</h3>
                <p className="text-xl font-semibold text-primary mb-8">Your Personal Pit Crew.</p>
                <ul className="space-y-6 flex-grow">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">check_circle</span>
                    <div>
                      <h4 className="text-lg font-bold font-headline text-on-background mb-1">Unmatched Convenience</h4>
                      <p className="text-secondary leading-relaxed">Create a service request in the Mechy app and schedule it when and where it works for you.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">check_circle</span>
                    <div>
                      <h4 className="text-lg font-bold font-headline text-on-background mb-1">Real Cost Savings</h4>
                      <p className="text-secondary leading-relaxed">Avoid the massive overhead costs of brick-and-mortar shops. Only pay for the mechanic&apos;s time and actual parts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">check_circle</span>
                    <div>
                      <h4 className="text-lg font-bold font-headline text-on-background mb-1">Full Transparency</h4>
                      <p className="text-secondary leading-relaxed">View mechanic profiles, read reviews, and see precise pricing before you accept a job.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* MechyPro — Pro App */}
              <div className="bg-on-background p-10 rounded-[2rem] flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-surface/10 text-surface rounded-full text-sm font-bold font-label">
                    For Mechanics
                  </span>
                  <div className="w-12 h-12 bg-surface/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-surface">engineering</span>
                  </div>
                </div>
                <h3 className="text-4xl font-black font-headline text-surface mb-1">MechyPro</h3>
                <p className="text-xl font-semibold text-primary-fixed-dim mb-8">Be Your Own Boss.</p>
                <ul className="space-y-6 flex-grow">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0 mt-1">work</span>
                    <div>
                      <h4 className="text-lg font-bold font-headline text-surface mb-1">More Autonomy</h4>
                      <p className="text-surface-variant/80 leading-relaxed">Accept the jobs you want. Build your own client base without a shop manager breathing down your neck.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0 mt-1">calendar_month</span>
                    <div>
                      <h4 className="text-lg font-bold font-headline text-surface mb-1">Flexible Hours</h4>
                      <p className="text-surface-variant/80 leading-relaxed">Work when you want. Set your availability in the MechyPro app and balance life your way.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0 mt-1">trending_up</span>
                    <div>
                      <h4 className="text-lg font-bold font-headline text-surface mb-1">Higher Income</h4>
                      <p className="text-surface-variant/80 leading-relaxed">Keep a much larger percentage of the hourly labor rate compared to standard repair shop splits.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works — 4 Steps */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black font-headline text-on-background tracking-tighter mb-6">
                How CarFix24 Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-surface-container-high -z-10">
                <div className="h-full w-1/4 bg-primary"></div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary text-2xl font-bold font-headline mb-8 ring-8 ring-surface-container-low">
                  01
                </div>
                <h4 className="text-xl font-bold font-headline mb-3">Request</h4>
                <p className="text-secondary leading-relaxed text-sm">
                  Car owner opens the Mechy app and creates a service request.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center text-on-surface text-2xl font-bold font-headline mb-8 ring-8 ring-surface-container-low">
                  02
                </div>
                <h4 className="text-xl font-bold font-headline mb-3">Match &amp; Source</h4>
                <p className="text-secondary leading-relaxed text-sm">
                  Select an available MechyPro mechanic and source parts via our network.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center text-on-surface text-2xl font-bold font-headline mb-8 ring-8 ring-surface-container-low">
                  03
                </div>
                <h4 className="text-xl font-bold font-headline mb-3">Service</h4>
                <p className="text-secondary leading-relaxed text-sm">
                  Job is accepted, scheduled, and completed by the provider at your location.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center text-on-surface text-2xl font-bold font-headline mb-8 ring-8 ring-surface-container-low">
                  04
                </div>
                <h4 className="text-xl font-bold font-headline mb-3">Pay</h4>
                <p className="text-secondary leading-relaxed text-sm">
                  Seamless, cashless payment splits directly to provider and supplier.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 w-full py-12 px-6 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">build</span>
            <div className="text-lg font-bold text-zinc-500 font-headline">
              CARFIX<span className="text-primary">24</span>
            </div>
          </div>
          <div className="text-zinc-500 text-sm flex flex-col sm:flex-row items-center gap-2 font-body">
            <span>© {new Date().getFullYear()} Pistons Inc.</span>
            <span className="hidden sm:inline">·</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex gap-6 font-label text-sm tracking-wide">
            <a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Twitter</a>
            <a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
            <a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
}
