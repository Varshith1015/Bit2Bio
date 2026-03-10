import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-300 items-center justify-between px-6 py-6">

        {/* Logo */}
        <Link
          href="#home"
          className="text-[28px] font-semibold tracking-tight text-white"
        >
          Bit<span className="text-[#7FE0D6]">2</span>Bio
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 text-[16px] font-medium tracking-wide md:flex">

          <Link
            href="#home"
            className="text-white transition hover:text-white/70"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="text-white transition hover:text-white/70"
          >
            About Us
          </Link>

          <Link
            href="#how"
            className="text-white transition hover:text-white/70"
          >
            How It Works
          </Link>

          <Link
            href="#faq"
            className="text-white transition hover:text-white/70"
          >
            FAQs
          </Link>

          <Link
            href="#contact"
            className="text-white transition hover:text-white/70"
          >
            Contact Us
          </Link>

        </nav>

        {/* CTA */}
        <Link
          href="#get-started"
          className="rounded-xl bg-black/30 px-6 py-3 text-[15px] font-semibold text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-black/40"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
}