import React from "react";

const steps = [
  {
    id: "1",
    title: "Take the Quiz",
    description: "Answer a few questions about your health goals.",
    button: "Start Quiz",
    type: "phone",
  },
  {
    id: "2",
    title: "Upload Biomarkers",
    description: "Send us your existing lab results for deeper analysis.",
    button: "Unlock My Formula",
    type: "tablet",
  },
  {
    id: "3",
    title: "Order a Home Kit",
    description: "Test at home to discover what your body truly needs.",
    button: "Get Started",
    type: "kit",
  },
];

function StepVisual({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <div className="relative h-55 w-55 md:h-62.5 md:w-62.5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-45 w-26.25 rotate-[8deg] rounded-[20px] border border-white/70 bg-[linear-gradient(180deg,#f6f8fc_0%,#dde4ef_100%)] shadow-[0_18px_35px_rgba(93,112,148,0.16)]">
            <div className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-[#cfd7e5]" />
            <div className="absolute inset-2.5 rounded-2xl bg-white/80 p-3">
              <div className="mb-3 h-2 w-14 rounded-full bg-[#d6ddea]" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-[#7eb7bd]" />
                    <div className="h-2 flex-1 rounded-full bg-[#c8d2df]" />
                    <div
                      className="h-2 w-3 rounded-full"
                      style={{ backgroundColor: i % 2 === 0 ? "#dcb56e" : "#8dc9bf" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-9 right-4.5 h-10 w-18 rounded-[14px] bg-white/20 blur-md" />
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className="relative h-55 w-72.5 md:h-60 md:w-[320px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-41.25 w-62.5 rounded-2xl border border-white/70 bg-[linear-gradient(180deg,#f7f9fc_0%,#dde5ef_100%)] shadow-[0_18px_35px_rgba(93,112,148,0.16)]">
            <div className="absolute inset-2.5 rounded-xl bg-white/82 p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-2 w-16 rounded-full bg-[#d6ddea]" />
                <div className="h-2 w-10 rounded-full bg-[#cad3df]" />
              </div>

              <div className="grid grid-cols-[52px_1fr] gap-3">
                <div className="space-y-2">
                  <div className="h-16 rounded-[10px] bg-[#eef2f7]" />
                  <div className="h-10 rounded-[10px] bg-[#eef2f7]" />
                </div>

                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between gap-3">
                      <div className="h-2.5 w-16 rounded-full bg-[#8db8d7]" />
                      <div className="h-2.5 w-10 rounded-full bg-[#8aa2bc]" />
                      <div
                        className="h-2.5 w-4 rounded-full"
                        style={{ backgroundColor: i % 2 === 0 ? "#d3b06d" : "#90c9bd" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-7.5 right-7 h-8.5 w-30 rounded-2xl bg-white/18 blur-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-55 w-[320px] md:h-62.5 md:w-90">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="relative h-32.5 w-62.5 rounded-[14px] border border-white/70 bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f1_100%)] shadow-[0_18px_35px_rgba(93,112,148,0.15)]">
          <div className="absolute -top-8 left-1/2 h-8 w-30 -translate-x-1/2 rounded-t-[10px] bg-[#d8deea]" />

          <div className="absolute inset-2.5 rounded-[10px] bg-white/82 p-3">
            <div className="mb-2 h-3 w-24 rounded-full bg-[#303b5c]" />
            <div className="mb-3 h-2 w-36 rounded-full bg-[#c8d2df]" />

            <div className="rounded-[10px] bg-[#eef3f8] p-3">
              <div className="mb-2 flex gap-2">
                <div className="h-2 w-16 rounded-full bg-[#92b6cf]" />
                <div className="h-2 w-10 rounded-full bg-[#cfd8e4]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-20 rounded-full bg-[#8ab5d1]" />
                  <div className="h-2 w-8 rounded-full bg-[#8fc8be]" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-2 w-16 rounded-full bg-[#b8c7d9]" />
                  <div className="h-2 w-10 rounded-full bg-[#d3b06d]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 -right-6 h-15.5 w-4.5 rounded-lg bg-[linear-gradient(180deg,#f7fafc_0%,#cddbeb_100%)] shadow-[0_10px_18px_rgba(93,112,148,0.12)]" />
        <div className="absolute bottom-1.5 -right-12.5 h-18 w-6.5 rounded-[10px] bg-[linear-gradient(180deg,#f7fafc_0%,#cfe1f0_100%)] shadow-[0_10px_18px_rgba(93,112,148,0.12)]" />
      </div>
    </div>
  );
}

function StepRow({
  id,
  title,
  description,
  button,
  type,
  isLast,
}: {
  id: string;
  title: string;
  description: string;
  button: string;
  type: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[86px_1.15fr_1fr] md:gap-12">
      <div className="relative hidden h-full md:flex md:justify-center">
        {!isLast && (
          <div className="absolute top-18 h-[calc(100%-12px)] w-px bg-[linear-gradient(180deg,rgba(146,164,193,0.48)_0%,rgba(146,164,193,0.14)_100%)]" />
        )}
        <div className="relative z-10 mt-2 flex h-15.5 w-15.5 items-center justify-center rounded-full border border-white/60 bg-[linear-gradient(180deg,#97abc8_0%,#7f97bb_100%)] text-[30px] font-light text-white shadow-[0_12px_20px_rgba(108,126,163,0.16)]">
          {id}
        </div>
      </div>

      <div className="text-center md:text-left">
        <div className="mb-3 flex justify-center md:hidden">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-[linear-gradient(180deg,#97abc8_0%,#7f97bb_100%)] text-[28px] font-light text-white shadow-[0_12px_20px_rgba(108,126,163,0.16)]">
            {id}
          </div>
        </div>

        <h3 className="text-[36px] font-medium leading-[1.08] tracking-[-0.025em] text-[#24345d] md:text-[42px]">
          {title}
        </h3>

        <p className="mt-4 max-w-115 text-[19px] leading-[1.55] text-[#5d6d8d] md:text-[21px]">
          {description}
        </p>

        <button className="mt-7 min-w-70 rounded-full border border-white/75 bg-[linear-gradient(180deg,#ffffff_0%,#edf1f7_100%)] px-10 py-4 text-[21px] font-semibold tracking-[-0.01em] text-[#24345d] shadow-[0_10px_20px_rgba(111,126,159,0.10),inset_0_1px_0_rgba(255,255,255,0.95)] transition hover:scale-[1.01]">
          {button}
        </button>
      </div>

      <div className="flex justify-center md:justify-end">
        <StepVisual type={type} />
      </div>
    </div>
  );
}

export default function Section3() {
  return (
    <section id="how" className="relative bg-transparent">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.95),transparent_34%)]" />
      </div>

      <div className="relative mx-auto max-w-300 px-6 py-18 md:py-24">
        <div className="mx-auto max-w-205 text-center">
          <p className="text-[22px] font-medium tracking-[0.02em] text-[#8ea0bb] md:text-[26px]">
            How It Works
          </p>

          <h2 className="mt-4 text-[66px] font-normal leading-[0.98] tracking-[-0.04em] text-[#233257] md:text-[92px]">
            Built, not blended.
          </h2>

          <p className="mx-auto mt-6 max-w-190 text-[28px] leading-[1.42] tracking-[-0.01em] text-[#697996] md:text-[34px]">
            Three simple steps to create your personalized formula.
          </p>
        </div>

        <div className="mt-18 space-y-14 md:mt-24 md:space-y-16">
          {steps.map((step, index) => (
            <StepRow
              key={step.id}
              id={step.id}
              title={step.title}
              description={step.description}
              button={step.button}
              type={step.type}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}