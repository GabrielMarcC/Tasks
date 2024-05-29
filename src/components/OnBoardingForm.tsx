/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";
import { Input } from "./ui/input";

export const OnboardingForm = ({
  user,
}: {
  user: string | null | undefined;
}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const stepOneSubmit = () => {
    setStep(2);
  };

  const stepTwoSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      router.replace("/mykanban");
      toast.success(`Welcome to Kanban, ${user}!`);
    }, 5000);
    setLoading(false);
  };

  const goBack = () => {
    setStep(1);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="text-white flex flex-col justify-center items-center h-full pt-[82px] w-[90%] mx-auto max-w-[1450px]"
    >
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <h1 className="mb-10 text-4xl font-bold uppercase">
            Welcome {user} Let's give your Board a Name!
          </h1>
          <form
            className="flex flex-col gap-10 items-center"
            onSubmit={stepOneSubmit}
          >
            <Input
              type="text"
              name="name"
              placeholder="My board"
              disabled={loading}
            />
            <Button type="submit" className="bg-purple-400 hover:bg-purple-600">
              Continue
            </Button>
          </form>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <h1 className="mb-10 text-4xl font-bold uppercase">
            Now Let's add your first task!
          </h1>
          <form
            className="flex flex-col gap-10 items-center"
            onSubmit={stepTwoSubmit}
          >
            <Input
              type="text"
              name="task"
              placeholder="My first task..."
              disabled={loading}
            />

            <div className="flex justify-between items-center w-4/5 mb-10">
              <Button
                className="bg-transparent hover:bg-transparent"
                onClick={goBack}
                disabled={loading}
              >
                &#8592; Go back
              </Button>
              <Button
                className="bg-purple-700 hover:bg-black"
                type="submit"
                disabled={loading}
              >
                Continue
              </Button>
              {loading ? (
                <div className="flex gap-3 items-center text-white">
                  <SyncLoader color="white" />
                  <span>Gettin Your Board Ready</span>
                </div>
              ) : null}
            </div>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
};
