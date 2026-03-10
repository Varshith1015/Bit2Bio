import Image from "next/image";

export default function Section2() {
  return (
    <section className="relative bg-transparent">
      <div className="mx-auto max-w-300 px-6 py-6 md:py-8">
        <h2 className="text-center text-[48px] leading-none tracking-[-0.02em] text-[#24345d] md:text-[64px]">
          From your data to your
          <br />
          <span className="font-serif">formula.</span>
        </h2>

        <div className="mt-2 flex justify-center -mb-4">
          <Image
            src="/landing/pack.png"
            alt="Bit2Bio pack"
            width={1100}
            height={620}
            className="w-180 md:w-220"
            priority
          />
        </div>

        <p className="mt-1 text-center text-[20px] text-[#314873] md:text-[28px]">
          Clean ingredients. Precise doses. Real results.
        </p>
      </div>
    </section>
  );
}