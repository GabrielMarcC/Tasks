import { OnboardingForm } from "@/components/OnBoardingForm";
import { currentUser } from "@clerk/nextjs/server";

export default async function Onboarding() {
  const user = await currentUser();
  const userName = user?.firstName ?? "";

  return (
    <div className="bg-[url('/bg.jpeg')] h-[102vw] bg-cover relative w-full mt-[-75px] overflow-hidden text-white ">
      <OnboardingForm user={userName} />
    </div>
  );
}
