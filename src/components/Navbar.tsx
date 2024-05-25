"use client";

import { UserButton } from "@clerk/nextjs";
import { Kanban } from "lucide-react";
import { useSession } from "@clerk/nextjs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
export const Navbar = () => {
  const { isSignedIn } = useSession();

  return (
    <div className="py-3 bg-transparent w-full z-10 relative flex items-center justify-between">
      <div className="flex justify-between w-[90%] ">
        <Link
          href={"/"}
          className={`${cn(buttonVariants({ variant: "link" }), "text-white")}`}
        >
          <Kanban />
          <h1 className="text-4xl text-white">Kanban</h1>
        </Link>
      </div>
      <div className="flex items-center px-4">
        <UserButton afterSignOutUrl="/" />
        <span>Theme switch</span>
        {!isSignedIn && (
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "link" }), "text-white")}
          >
            Already a member? Sign In{" "}
          </Link>
        )}
      </div>
    </div>
  );
};
