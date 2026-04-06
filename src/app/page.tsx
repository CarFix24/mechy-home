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
        <section className="relative min-h-[921px] flex items-center px-6 overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Content */}
            <div className="lg:col-span-7 z-10">
              <span className="inline-block px-4 py-1.5 bg-primary-fixed text-on-primary-fixed text-xs font-bold font-label tracking-widest uppercase rounded-full mb-6">
                Coming Soon
              </span>
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
                className="flex flex-col sm:flex-row gap-3 max-w-lg"
              >
                <input type="hidden" name="_subject" value="CarFix24 Waitlist Signup" />
                <div className="bg-surface-container-low rounded-xl px-4 py-2 flex items-center focus-within:ring-2 ring-primary/40 transition-all">
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
                    placeholder="Enter your email"
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

            {/* Right: Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALS30BqSjDyhEpERkJOuiKiDoqv7IGGyHs66ftTcB01JDK_LjqbOKzV76cTR_NHJzmjEHtmLiuKxTcZb2AQ6oso7QySNNqhSE7KnyvQUUB-urDmA7vntBOgKefKgkYmNmCKsYE8lRbT-G8fVulB3aeYZbAUeGj1u2Bexk_89F9igdJgCCrc4o7JVlJAHeHgaeEt8lmYOfspagn5xr0X99-FBYfGd7rj1yUoxQ_TZqZDX6R-Ylw8YsOv5u78JRPcEzQEB1m4_BOFrUz"
                  alt="Professional mechanic working on a luxury engine"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                {/* Floating Diagnostic Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface">Engine Health Check</h4>
                      <p className="text-xs text-secondary font-label">Real-time Diagnostic</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full kinetic-gradient w-[85%]"></div>
                  </div>
                </div>
              </div>
              {/* Decorative blurs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

          </div>
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
                Coming soon to iOS and Android.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

              {/* Mechy — Consumer App */}
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/30 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold font-label w-fit">
                      For Car Owners
                    </span>
                    <div className="flex items-center gap-1.5 pl-1">
                      <svg className="w-4 h-4 fill-current text-on-background/40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.89 1.22-2.13 1.08-3.38-1.08.04-2.39.71-3.16 1.61-.69.79-1.3 2.05-1.14 3.28 1.19.09 2.41-.62 3.22-1.51z"/>
                      </svg>
                      <svg className="w-4 h-4 fill-current text-on-background/40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.03 20.44,10.97 18.66,9.95L16.81,8.88L14.4,11.3L16.81,15.12M13.69,12L14.4,11.3L4.54,1.44C4.83,1.31 5.15,1.25 5.5,1.25C5.87,1.25 6.24,1.35 6.56,1.54L15.34,6.6L13.69,12M13.69,12L6.56,22.46C6.24,22.65 5.87,22.75 5.5,22.75C5.15,22.75 4.83,22.69 4.54,22.56L13.69,12Z"/>
                      </svg>
                      <span className="text-[10px] font-bold font-label uppercase tracking-widest text-outline">iOS &amp; Android</span>
                    </div>
                  </div>
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
                  <div className="flex flex-col gap-2">
                    <span className="px-3 py-1 bg-surface/10 text-surface rounded-full text-sm font-bold font-label w-fit">
                      For Mechanics
                    </span>
                    <div className="flex items-center gap-1.5 pl-1">
                      <svg className="w-4 h-4 fill-current text-surface/40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.89 1.22-2.13 1.08-3.38-1.08.04-2.39.71-3.16 1.61-.69.79-1.3 2.05-1.14 3.28 1.19.09 2.41-.62 3.22-1.51z"/>
                      </svg>
                      <svg className="w-4 h-4 fill-current text-surface/40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.03 20.44,10.97 18.66,9.95L16.81,8.88L14.4,11.3L16.81,15.12M13.69,12L14.4,11.3L4.54,1.44C4.83,1.31 5.15,1.25 5.5,1.25C5.87,1.25 6.24,1.35 6.56,1.54L15.34,6.6L13.69,12M13.69,12L6.56,22.46C6.24,22.65 5.87,22.75 5.5,22.75C5.15,22.75 4.83,22.69 4.54,22.56L13.69,12Z"/>
                      </svg>
                      <span className="text-[10px] font-bold font-label uppercase tracking-widest text-surface/40">iOS &amp; Android</span>
                    </div>
                  </div>
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
