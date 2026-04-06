const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? "#";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <div className="text-2xl font-black tracking-tighter text-zinc-900 font-headline">
            CARFIX<span className="text-primary">24</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-blue-600 font-bold font-headline transition-colors" href="#">
              Benefits
            </a>
            <a
              className="text-zinc-600 font-medium font-headline hover:text-blue-600 transition-colors"
              href="#"
            >
              How it Works
            </a>
            <a
              className="text-zinc-600 font-medium font-headline hover:text-blue-600 transition-colors"
              href="#"
            >
              Mechanics
            </a>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold font-headline scale-95 active:duration-150 active:scale-90 transition-all">
            Notify Me
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="inline-block px-4 py-1.5 bg-primary-fixed text-on-primary-fixed text-xs font-bold font-label tracking-widest uppercase rounded-full mb-6">
                Coming Soon
              </span>
              <h1 className="text-6xl md:text-8xl font-black font-headline text-on-background leading-[0.9] tracking-tighter mb-8">
                Auto Repair,
                <br />
                <span className="text-primary italic">Reinvented.</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-12 leading-relaxed">
                Say goodbye to waiting rooms and hidden markups. CarFix24 connects you directly
                with top-tier mechanics for transparent, on-demand auto service at your doorstep.
              </p>
              <form
                action={FORMSPREE_URL}
                method="POST"
                className="flex flex-col sm:flex-row gap-4 max-w-lg"
              >
                <input type="hidden" name="_subject" value="CarFix24 Waitlist Signup" />
                <div className="flex-grow bg-surface-container-low rounded-xl px-4 py-2 flex items-center group focus-within:ring-2 ring-primary/40 transition-all">
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
                  className="kinetic-gradient text-on-primary px-8 py-4 rounded-xl font-bold font-headline shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95 whitespace-nowrap"
                >
                  Join the Waitlist
                </button>
              </form>
              <div className="mt-8 flex items-center gap-4 text-sm font-medium text-secondary">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAu01nqSjXAHlK6zljp9ajDna1x5Habl1Sr4tzmAt9CfoGAFQs9hfOkvNMILQeR4RUoBJICnOKI0ih1iWuTQ17VYGEEAAyjZFxdBA16zO19XRbBo-68ywM1SWEvrIYJhwA3h0yjae7UHPfpYmh2i2ZT9VrLPrnrfu-2SeWCKDTLMhEMhDZshIyKnhv9Xp9yUKwtJU65KcGsStjrZFrBVroK8fyNylB4WZEtTDVSvE-kscCsGk0zwqURt7cJxfs0IYc-HbGNNK1kNvW"
                      alt="Professional mechanic"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxD-3oVn-QdNbTA__gqGuFmAY5qxU05GCyu7D5-shwtKC0VJLD6k63HDmDcPJ_Vd4m9DmaALwiF1Gs2RNvGvO2n0fdl4iajeYzTdQPxwZNpz0OvPK9GUlmmwIX4OZqlA74xbb6guBBwfMXxJqPT-8hbBnk8IajhZWGaJf7ctKd8bNDchva45nXvCSnLIvdPO1dZVUZgVcd0xSPrxp0hL4etlBOgPkK97QJgsq3s7-jSu6nOqAWwHDM2wmwsQagviDYqC8g8Q_CAGOq"
                      alt="Female technician"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHQ75VuXTWMhYydnM6ymhogFcIEoPpxrirVR1NwLWZXsRoap3k1ndlwk35i0LTu91E0rk026wbe9nruGqLraIR7IVAmTiofWToGwPAMW6lLT6AvcU7YpqPXkhd8uOOeRKqLTI8U8_GKTMR7RMdOvAWLHYDTDHZmXo1Zwn8yD2--Si3DJeslfVgry0PlrHQ1AnxKbkjqtPZMpdXNFlMNPe0-g5sFjZh4Yjbl0EIiYTOSENpx-OieLaD-bb7ITy6kcDQ_eGWIPh1xFH"
                      alt="Mechanical engineer"
                    />
                  </div>
                </div>
                <span>500+ Expert Mechanics Ready</span>
              </div>
            </div>

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
                      <span className="material-symbols-outlined text-primary">
                        precision_manufacturing
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface">
                        Engine Health Check
                      </h4>
                      <p className="text-xs text-secondary font-label">Real-time Diagnostic</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full kinetic-gradient w-[85%]"></div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black font-headline text-on-background tracking-tighter mb-4">
                Why CarFix24?
              </h2>
              <p className="text-secondary max-w-xl mx-auto">
                We&apos;re stripping away the complexity of traditional repair shops to bring you a
                frictionless service experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      verified_user
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4">Radical Transparency</h3>
                  <p className="text-secondary leading-relaxed">
                    No &quot;mystery parts&quot; or hidden fees. See exactly what&apos;s happening
                    with your car through our live diagnostic feed.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      home_pin
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4">At Your Doorstep</h3>
                  <p className="text-secondary leading-relaxed">
                    Your driveway is our workshop. Save hours of travel and waiting time while our
                    pros come directly to you.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      handyman
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4">Top-Tier Talent</h3>
                  <p className="text-secondary leading-relaxed">
                    Only the top 5% of certified mechanics make it through our vetting process.
                    Excellence is non-negotiable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black font-headline text-on-background tracking-tighter mb-6">
                  Service in Motion.
                </h2>
                <p className="text-xl text-secondary">
                  Three simple steps to get your vehicle back to peak performance without leaving
                  your couch.
                </p>
              </div>
              <div className="hidden md:flex gap-4">
                <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined">arrow_back</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-on-background flex items-center justify-center text-surface">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-surface-container-high -z-10">
                <div className="h-full w-1/3 bg-primary"></div>
              </div>
              <div className="flex flex-col">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary text-2xl font-bold font-headline mb-8 ring-8 ring-surface">
                  01
                </div>
                <h4 className="text-2xl font-bold font-headline mb-3">Book Instantly</h4>
                <p className="text-secondary leading-relaxed">
                  Select your service, choose a time slot, and get a guaranteed quote in seconds
                  via our app.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center text-on-surface text-2xl font-bold font-headline mb-8 ring-8 ring-surface">
                  02
                </div>
                <h4 className="text-2xl font-bold font-headline mb-3">Relax at Home</h4>
                <p className="text-secondary leading-relaxed">
                  A certified mechanic arrives with everything needed. Track their progress live
                  while you stay focused on your day.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center text-on-surface text-2xl font-bold font-headline mb-8 ring-8 ring-surface">
                  03
                </div>
                <h4 className="text-2xl font-bold font-headline mb-3">Service Done</h4>
                <p className="text-secondary leading-relaxed">
                  Confirm the work, pay securely through the platform, and hit the road with a
                  digital service history log.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expanding Nationwide / CTA Section */}
        <section className="py-24 px-6 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <p className="text-sm font-bold font-label tracking-[0.2em] text-outline uppercase mb-12">
              Expanding Nationwide
            </p>
            <div className="mt-20 p-8 md:p-12 bg-primary text-on-primary rounded-[3rem] w-full flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="z-10 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black font-headline mb-2 leading-tight">
                  Coming to St. Louis soon.
                </h3>
                <p className="text-primary-fixed/80">
                  Be the first to experience the future of auto repair.
                </p>
              </div>
              <form action={FORMSPREE_URL} method="POST" className="z-10">
                <input type="hidden" name="_subject" value="CarFix24 Early Access Request" />
                <button
                  type="submit"
                  className="bg-surface text-primary px-10 py-4 rounded-xl font-black font-headline shadow-xl hover:bg-surface-container-lowest transition-all scale-100 hover:scale-105 active:scale-95"
                >
                  GET EARLY ACCESS
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="py-24 px-6 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black font-headline text-on-background tracking-tighter mb-4">
                Get the Mechy App
              </h2>
              <p className="text-secondary max-w-xl mx-auto">
                Precision auto repair management at your fingertips. Choose the experience that
                fits your role.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Consumer App Card */}
              <div className="relative bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center group overflow-hidden">
                <div className="flex-1 text-center md:text-left z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6">
                    <span className="material-symbols-outlined text-primary">directions_car</span>
                  </div>
                  <h3 className="text-3xl font-black font-headline mb-4">Mechy</h3>
                  <p className="text-secondary mb-8 leading-relaxed">
                    The easiest way to book and track your car repairs. Real-time updates and
                    transparent pricing in your pocket.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      className="flex items-center gap-3 bg-on-background text-surface px-5 py-2.5 rounded-xl transition-transform hover:scale-105 active:scale-95"
                      href="#"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.89 1.22-2.13 1.08-3.38-1.08.04-2.39.71-3.16 1.61-.69.79-1.3 2.05-1.14 3.28 1.19.09 2.41-.62 3.22-1.51z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-[10px] font-bold leading-none uppercase opacity-60">Download on the</p>
                        <p className="text-sm font-black font-headline leading-tight">App Store</p>
                      </div>
                    </a>
                    <a
                      className="flex items-center gap-3 bg-on-background text-surface px-5 py-2.5 rounded-xl transition-transform hover:scale-105 active:scale-95"
                      href="#"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.03 20.44,10.97 18.66,9.95L16.81,8.88L14.4,11.3L16.81,15.12M13.69,12L14.4,11.3L4.54,1.44C4.83,1.31 5.15,1.25 5.5,1.25C5.87,1.25 6.24,1.35 6.56,1.54L15.34,6.6L13.69,12M13.69,12L6.56,22.46C6.24,22.65 5.87,22.75 5.5,22.75C5.15,22.75 4.83,22.69 4.54,22.56L13.69,12Z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-[10px] font-bold leading-none uppercase opacity-60">Get it on</p>
                        <p className="text-sm font-black font-headline leading-tight">Google Play</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-12 -bottom-24 w-64 rotate-12 transition-transform group-hover:rotate-6 duration-500">
                  <div className="aspect-[9/19.5] bg-surface-container-high rounded-[2.5rem] border-8 border-on-background/5 p-2 shadow-2xl">
                    <div className="w-full h-full bg-zinc-100 rounded-[1.8rem] flex items-center justify-center overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover opacity-80"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYyAFRAFpvCUzvLBglZTAmoYGggPb4zynBAIL_b1l1wckAy0ggiF2vRJsSlx4qe-QDW5UGQtPRUbr0lvEq4eCcKDAVG7Qxcd1e81vOtKJe7ztaHwyUlNvf6EdUdey7VRNN9214mslOP2jblQaKpJz_sGxVFWu7bx2WsOg4HK47D0F8tX0nQyP28myFz6n5ysittCyeQkAa3uP19TzHNLDBxSx8aYbT0rIYVt3pgPI--ZtlBkW45HDHGtAEBJLGSTPLZWeirLu4U6-A"
                        alt="Mechy app screenshot"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pro App Card */}
              <div className="relative bg-on-background p-10 rounded-[2rem] text-surface flex flex-col md:flex-row gap-8 items-center group overflow-hidden">
                <div className="flex-1 text-center md:text-left z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-surface/10 rounded-xl mb-6">
                    <span className="material-symbols-outlined text-surface">engineering</span>
                  </div>
                  <h3 className="text-3xl font-black font-headline mb-4">MechyPro</h3>
                  <p className="text-surface-variant/80 mb-8 leading-relaxed">
                    A powerful tool for top-tier technicians to manage their workflow, diagnostics,
                    and customer communications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      className="flex items-center gap-3 bg-surface text-on-background px-5 py-2.5 rounded-xl transition-transform hover:scale-105 active:scale-95"
                      href="#"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.89 1.22-2.13 1.08-3.38-1.08.04-2.39.71-3.16 1.61-.69.79-1.3 2.05-1.14 3.28 1.19.09 2.41-.62 3.22-1.51z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-[10px] font-bold leading-none uppercase opacity-60">Download on the</p>
                        <p className="text-sm font-black font-headline leading-tight">App Store</p>
                      </div>
                    </a>
                    <a
                      className="flex items-center gap-3 bg-surface text-on-background px-5 py-2.5 rounded-xl transition-transform hover:scale-105 active:scale-95"
                      href="#"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.03 20.44,10.97 18.66,9.95L16.81,8.88L14.4,11.3L16.81,15.12M13.69,12L14.4,11.3L4.54,1.44C4.83,1.31 5.15,1.25 5.5,1.25C5.87,1.25 6.24,1.35 6.56,1.54L15.34,6.6L13.69,12M13.69,12L6.56,22.46C6.24,22.65 5.87,22.75 5.5,22.75C5.15,22.75 4.83,22.69 4.54,22.56L13.69,12Z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-[10px] font-bold leading-none uppercase opacity-60">Get it on</p>
                        <p className="text-sm font-black font-headline leading-tight">Google Play</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-12 -top-24 w-64 -rotate-12 transition-transform group-hover:-rotate-6 duration-500">
                  <div className="aspect-[9/19.5] bg-surface/10 rounded-[2.5rem] border-8 border-white/5 p-2 shadow-2xl">
                    <div className="w-full h-full bg-zinc-800 rounded-[1.8rem] flex items-center justify-center overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover opacity-60"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFn-ZSaUd0oMSM35BLZKf5NXACXy8wggAzs1unVgQlHv-7f0lkDcelExR_4xgDNXRyfOVc_ut2I_JKi4GDFrpsuzzLbtauBtDmd-UabCBWOEK2n6w-61mdipD2jQAiuKAz2k6h6vu4Guyqg69X5_p3GUR17jvhCxsb3984DHisAUIuZ0Tppv88opHME9IcCfuVMgbfkkd8Pt0FVa0wGbZ-IL1SPJWkmWavZ_SPNY2ND_wEYXwoVilxoOfSXZzbpQ5Pntp3SZzOEkMx"
                        alt="MechyPro app screenshot"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 w-full py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-lg font-bold text-zinc-900 font-headline">
              CARFIX<span className="text-primary">24</span>
            </div>
            <p className="text-zinc-500 text-sm font-body">
              © 2024 CARFIX24. Auto Repair, Reinvented.
            </p>
          </div>
          <div className="flex gap-8 font-label text-sm tracking-wide">
            <a className="text-zinc-500 hover:text-zinc-900 transition-opacity" href="#">
              Privacy Policy
            </a>
            <a className="text-zinc-500 hover:text-zinc-900 transition-opacity" href="#">
              Terms of Service
            </a>
            <a className="text-zinc-500 hover:text-zinc-900 transition-opacity" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
