import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-500 dark:bg-black">
      <SignIn />
    </div>
  );
}
