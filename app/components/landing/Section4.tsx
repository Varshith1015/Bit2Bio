import Image from "next/image";

export default function Section4() {
  return (
    <section id="science" className="relative py-28">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(140,170,220,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.6),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-300 px-6">

        {/* heading */}
        <div className="text-center">

          <h2 className="text-[44px] md:text-[56px] font-semibold tracking-[-0.03em] text-[#243358]">
            Science behind your formula
          </h2>

          <p className="mx-auto mt-6 max-w-225 text-[20px] md:text-[22px] text-[#66748f]">
            Every ingredient is chosen using your biomarkers and built using
            precision manufacturing.
          </p>

        </div>


        {/* cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md p-8 shadow-lg">

            <h3 className="text-[24px] font-semibold text-[#2c3a5d] text-center">
              Biomarker Analysis
            </h3>

            <p className="mt-4 text-[17px] text-[#65738e] text-center">
              Your lab markers guide every ingredient and dosage.
            </p>

            <div className="mt-10 flex justify-center">
              <Image
                src="/landing/vitamin.png"
                alt="Vitamin biomarker analysis"
                width={260}
                height={260}
                className="object-contain"
              />
            </div>

            <p className="mt-8 text-[16px] text-[#6a7691] text-center">
              Your lab markers guide every ingredient
            </p>

          </div>


          {/* CARD 2 */}
          <div className="rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md p-8 shadow-lg">

            <h3 className="text-[24px] font-semibold text-[#2c3a5d] text-center">
              Precision Dosing
            </h3>

            <p className="mt-4 text-[17px] text-[#65738e] text-center">
              Each nutrient is calculated for your body.
            </p>

            <div className="mt-10 flex justify-center">
              <Image
                src="/landing/precision.png"
                alt="Precision dosing"
                width={260}
                height={260}
                className="object-contain"
              />
            </div>

            <p className="mt-8 text-[16px] text-[#6a7691] text-center">
              Each nutrient is calculated for your body.
            </p>

          </div>


          {/* CARD 3 */}
          <div className="rounded-2xl border border-white/50 bg-white/40 backdrop-blur-md p-8 shadow-lg">

            <h3 className="text-[24px] font-semibold text-[#2c3a5d] text-center">
              Made On Demand
            </h3>

            <p className="mt-4 text-[17px] text-[#65738e] text-center">
              Freshly manufactured for your exact formula.
            </p>

            <div className="mt-10 flex justify-center">
              <Image
                src="/landing/demand.png"
                alt="Made on demand"
                width={260}
                height={260}
                className="object-contain"
              />
            </div>

            <p className="mt-8 text-[16px] text-[#6a7691] text-center">
              Freshly manufactured for your exact formula.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}