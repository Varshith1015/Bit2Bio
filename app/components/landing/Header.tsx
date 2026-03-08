export default function LandingHeader() {
  return (
    <header className="flex w-full items-center justify-between pt-8 pb-4">

      {/* Logo */}
      <div className="text-[26px] font-semibold tracking-tight text-white">
        Bit<span className="text-[#7FE0D6]">2</span>Bio
      </div>

      {/* Navigation */}
      <nav className="hidden items-center gap-12 text-[16px] font-medium tracking-wide md:flex">
        
        <a
          href="#home"
          className="text-white transition hover:text-white/80"
        >
          Home
        </a>

        <a
          href="#about"
          className="text-white transition hover:text-white/80"
        >
          About Us
        </a>

        <a
          href="#how"
          className="text-white transition hover:text-white/80"
        >
          How it Works
        </a>

        <a
          href="#faq"
          className="text-white transition hover:text-white/80"
        >
          FAQs
        </a>

        <a
          href="#contact"
          className="text-white transition hover:text-white/80"
        >
          Contact Us
        </a>

      </nav>

      {/* CTA Button */}
      <a
        href="#get-started"
        className="rounded-xl bg-black/30 px-6 py-3 text-[15px] font-semibold text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-black/40"
      >
        Get Started
      </a>

    </header>
  );
}
