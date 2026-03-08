import Image from "next/image";
import LandingHeader from "./Header";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-205 w-full">
        {/* ===========================
            MOBILE / TABLET
           =========================== */}
        <div className="absolute inset-0 lg:hidden">
          <div className="absolute inset-0 bg-[#061421]" />

          {/* Main background gradient (dark -> subtle light) */}
          <div className="absolute inset-0 bg-linear-to-r from-[#061421]  via-[#143A55]/80 to-[#e9f2f7]" />

          {/*
            RIGHT "LAB LIGHT" FIX:
            - NOT bright at top
            - brighter towards bottom
            - reduced intensity overall
          */}
          <div className="absolute inset-0 pointer-events-none">
            {/* a soft white ramp that increases towards bottom-right */}
            <div className="absolute -right-22.5 top-0 h-full w-[55%] bg-linear-to-b from-transparent via-white/10 to-white/20 blur-[28px]" />
            {/* a bottom-right glow hotspot (subtle) */}
            <div className="absolute -right-30 -bottom-35 h-130 w-130 rounded-full bg-[radial-gradient(circle_at_55%_55%,rgba(255,255,255,0.30),rgba(220,235,245,0.16),transparent_72%)] blur-[42px]" />
          </div>

          {/* Vignette for text readability */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,0,0,0.58),transparent_62%)]" />
        </div>

        {/* ===== MOBILE HERO ===== */}
        <div className="relative z-10 mx-auto w-full max-w-105 px-4 pt-6 lg:hidden">
          {/* Top logo */}
          <div className="flex items-center justify-center">
            <div className="text-[40px] font-semibold tracking-tight italic text-white">
              Bit<span className="text-[#7FE0D6]">2</span>Bio
            </div>
          </div>

          {/* Top buttons row */}
          <div className="mt-4 flex gap-3">
            <a
              href="#get-started"
              className="flex-1 rounded-lg bg-linear-to-r from-[#3F8CA4] to-[#2D6F87] py-3 text-center text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(64,180,220,0.25)]"
            >
              Get Started
            </a>
            <a
              href="#build"
              className="flex-1 rounded-lg bg-white/10 py-3 text-center text-[14px] font-semibold text-white ring-1 ring-white/18 backdrop-blur-md"
            >
              Build My Formula
            </a>
          </div>

          {/* Headline */}
          <div className="mt-6 text-center">
            <h1 className="text-[28px] font-semibold italic leading-[1.15] text-white">
              Stop taking supplements
              <br />
              made for strangers.
            </h1>
            <div className="mx-auto mt-3 h-px w-56 bg-white/25" />
            <p className="mt-4 text-[14px] text-white/75">
              3D-built supplements tailored
              <br />
              to your biomarkers.
            </p>
          </div>

          {/* Image card */}
          <div className="relative mt-6 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
            <Image
              src="/landing/hero-ui.png"
              alt="Bit2Bio mobile hero"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Bottom stacked CTAs */}
          <div className="mt-6 space-y-3 pb-8">
            <a
              href="#get-started"
              className="block w-full rounded-xl bg-linear-to-r from-[#3F8CA4] to-[#2D6F87] py-4 text-center text-[16px] font-semibold text-white shadow-[0_12px_40px_rgba(64,180,220,0.25)]"
            >
              Get Started
            </a>
            <a
              href="#quiz"
              className="block w-full rounded-xl bg-white/10 py-4 text-center text-[16px] font-semibold text-white ring-1 ring-white/18 backdrop-blur-md"
            >
              Take the Quiz
            </a>
            <a
              href="#upload"
              className="block w-full rounded-xl bg-white/10 py-4 text-center text-[16px] font-semibold text-white ring-1 ring-white/18 backdrop-blur-md"
            >
              Upload Biomarkers
            </a>
          </div>
        </div>

        {/* ===========================
            DESKTOP
           =========================== */}
        <div className="relative z-10 hidden lg:block">
          {/* Base background gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-[#061421]  via-[#143A55]/80 to-[#e9f2f7]" />

          {/*
            RIGHT "LAB LIGHT" FIX (DESKTOP):
            - reduce top-right brightness
            - increase whiteness toward bottom-right
            - overall softer than before
          */}
          <div className="absolute inset-0 pointer-events-none">
            {/* soft vertical ramp: transparent top -> subtle white bottom */}
            <div className="absolute -right-22.5 top-0 h-full w-[45%] bg-linear-to-b from-transparent via-white/8 to-white/18 blur-[34px]" />
            {/* bottom-right hotspot (subtle) */}
            <div className="absolute -right-40 -bottom-45 h-180 w-180 rounded-full bg-[radial-gradient(circle_at_55%_55%,rgba(255,255,255,0.26),rgba(220,235,245,0.14),transparent_72%)] blur-[60px]" />
          </div>

          {/* Left vignette for text readability */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,0,0,0.58),transparent_62%)]" />

          <div className="relative mx-auto flex h-205 max-w-7xl flex-col px-10">
            <LandingHeader />

            <div className="grid flex-1 grid-cols-12 items-center gap-6">
              {/* LEFT: Text */}
              <div className="col-span-6">
                <h1 className="text-[58px] font-normal leading-[1.05] tracking-[-0.03em] text-white xl:text-[64px]">
                  Stop taking supplements
                  <br />
                  made for strangers.
                </h1>

                <p className="mt-6 text-[20px] text-white/80">
                  From data to dose — manufactured fresh for you.
                </p>

                <p className="mt-4 text-[18px] text-white/65">
                  3D-built supplements tailored to your biomarkers.
                </p>

                {/* Buttons */}
                <div className="mt-12 flex flex-col gap-5">
                  <div>
                    <a
                      href="#get-started"
                      className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-[#3F8CA4] to-[#2D6F87] px-8 py-4 text-[16px] font-semibold text-white shadow-[0_10px_40px_rgba(64,180,220,0.35)] transition hover:scale-[1.02] hover:opacity-95"
                    >
                      Get Started <span className="text-white/90">→</span>
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#quiz"
                      className="rounded-xl bg-white px-7 py-4 text-[16px] font-semibold text-[#0B1F33] shadow-md transition hover:bg-white/90"
                    >
                      Take the Quiz
                    </a>
                    <a
                      href="#upload"
                      className="rounded-xl bg-white px-7 py-4 text-[16px] font-semibold text-[#0B1F33] shadow-md transition hover:bg-white/90"
                    >
                      Upload Biomarkers
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT: Graphic */}
              <div className="relative col-span-6 -mt-6 pr-12 xl:pr-20">
                {/* optional subtle cool glow behind machine */}
                <div className="pointer-events-none absolute right-10 top-24 h-105 w-105 rounded-full bg-[radial-gradient(circle,rgba(120,200,255,0.18),transparent_65%)] blur-2xl" />

                <div className="relative h-160 lg:h-175 xl:h-190 2xl:h-205 overflow-visible pointer-events-none">
                  <Image
                    src="/landing/hero-ui.png"
                    alt="Bit2Bio machine and bottle"
                    fill
                    priority
                    className="object-contain object-right scale-[1.65] xl:scale-[1.75] 2xl:scale-[1.9] translate-x-10 xl:translate-x-16"
                    sizes="(max-width: 1024px) 60vw, 900px"
                  />
                </div>
              </div>
            </div>

            <div className="h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
