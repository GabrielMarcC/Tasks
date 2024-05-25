import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="bg-[url('/bg.jpeg')] h-[102vw] bg-cover relative w-full mt-[-75px] overflow-hidden text-white ">
      <div className="flex  items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
        <div className="grid items-center gap-6 md:grid-cols-2 mt-14">
          <Image
            src="/hero-image.png"
            className="mx-auto rounded-xl order-last  md:h-[500px] max-sm:px-5"
            alt="hero"
            width={800}
            height={500}
          />
          <div className="flex flex-col justify-center items-start max-md:items-center space-y-4 max-md:text-center ">
            <div className="space-y-2 text-3xl font-bold tracking-tighter">
              <h2>Visualize Sucess Daily </h2>
              <p className="text-gray-300 text-xl">
                Take control of your projects with our simple yet powerful
                Kanban board.
              </p>
              <Link href="/sign-up">
                <Button
                  variant={"default"}
                  className="text-white mt-3 bg-purple-600 hover:bg-purple-900"
                >
                  Start Planning now &#8594;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
