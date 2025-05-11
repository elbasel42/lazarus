import { Net } from "@components";

export default function Home() {
  return (
    <>
      <Net />
      <main>
        <h1 className="pt-24 text-2xl font-bold text-center">
          Your future in Tech awaits!
        </h1>
        <p className="text-center">
          Make{" "}
          <span className="underline decoration-wavy decoration-purple-800">
            35,000 EGP
          </span>{" "}
          a month!
        </p>
        <div className="flex gap-4 !bg-black/5 w-fit mx-auto mt-4">
          <button className="w-[35vw] px-1 py-2 text-sm md:!w-[30vw] primary !rounded-full">
            Get Started
          </button>
          <button className="w-[35vw] px-1 py-2 text-sm md:!w-[30vw] primary border border-white/20 !rounded-full !bg-black !text-white ">
            Contact Us
          </button>
        </div>
      </main>
    </>
  );
}
