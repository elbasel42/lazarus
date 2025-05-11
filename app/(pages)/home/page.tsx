import { Net } from "@components";

export default function Home() {
  return (
    <main>
      <Net />
      <h1 className="text-center pt-24 text-2xl font-bold">
        Your future in Tech awaits!
      </h1>
      <p className="text-center">
        Make{" "}
        <span className="underline decoration-wavy decoration-purple-800">
          35,000 EGP
        </span>{" "}
        a month!
      </p>
      <div className="flex gap-4 !bg-black/5 w-fit mx-auto">
        <button className="primary !w-fit mt-4 !rounded-full">
          Get Started
        </button>
        <button className="primary !w-fit mt-4 !rounded-full !bg-black !text-white ">
          Contact Us
        </button>
      </div>
    </main>
  );
}
