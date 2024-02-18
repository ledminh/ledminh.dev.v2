"use client";

import { useState } from "react";
import sendMessageAction from "@/core/server/message/sendMessageAction";

import { useForm } from "react-hook-form";
import type { Message as MessageType } from "@/core/types";

export default function MessageMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitState, setSubmitState] = useState<
    "not-submit" | "submitting" | "submitted"
  >("not-submit");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    setSubmitState("submitting");

    const message: MessageType = {
      name: data.name as string,
      email: data.email as string,
      message: data.message as string,
    };

    sendMessageAction(message)
      .then(() => {
        setSubmitState("submitted");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSubmitState("not-submit");
      });
  };

  if (errorMessage)
    return (
      <div className="p-4 border-2 border-gray-400 rounded-lg w-2/3 max-w-[750px]">
        <h2 className="mb-4">MESSAGE ME</h2>
        <p className="text-lg font-semibold text-red-600">
          There's some error occur.
        </p>
        <p className="text-lg font-semibold">
          Please try again or contact me through my email at{" "}
          <span className="text-blue-500">minh.le@ledminh.dev</span>
        </p>
      </div>
    );

  if (submitState === "submitted")
    return (
      <div className="p-4 border-2 border-gray-400 rounded-lg w-2/3 max-w-[750px]">
        <h2 className="mb-4">MESSAGE ME</h2>
        <p className="text-lg font-semibold">
          Thank you, your message has been submitted.
        </p>
        <p className="text-lg font-semibold">
          I will get back to you as soon as possible.
        </p>
      </div>
    );

  return (
    <div className="p-4 border-2 border-gray-400 rounded-lg w-2/3 max-w-[750px]">
      <h2 className="mb-4">MESSAGE ME</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col gap-2 md:flex-row md:gap-6">
          <span className="text-lg font-semibold">NAME</span>
          <input
            {...register("name", { required: true })}
            type="text"
            className="p-2 text-black rounded-md bg-gray-200 font-semibold basis-full"
          />
          {errors?.firstName?.type === "required" && (
            <FormErrorMessage>First name is required</FormErrorMessage>
          )}
        </label>
        <label className="flex flex-col gap-2 md:flex-row md:gap-6">
          <span className="text-lg font-semibold">EMAIL</span>
          <input
            {...register("email", { required: true, pattern: emailPattern })}
            type="email"
            className="p-2 text-black rounded-md bg-gray-200 font-semibold basis-full"
          />
          {errors?.email?.type === "required" && (
            <FormErrorMessage>Email is required</FormErrorMessage>
          )}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-lg font-semibold">MESSAGE</span>
          <textarea
            className="p-2 text-black rounded-md resize-none h-52 bg-gray-200"
            {...register("message", { required: true })}
          />
          {errors?.message?.type === "required" && (
            <FormErrorMessage>Message is required</FormErrorMessage>
          )}
        </label>
        <div className="flex justify-center md:justify-end">
          <button
            className="bg-yellow-800 text-white p-2 rounded-lg hover:bg-yellow-700 active:bg-yellow-600 w-[200px] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:active:bg-gray-400 disabled:text-black"
            disabled={submitState !== "not-submit"}
          >
            {submitState === "not-submit" && "SUBMIT"}
            {submitState === "submitting" && "SUBMITTING..."}
          </button>
        </div>
      </form>
    </div>
  );
}

/*****************************
 * Sub Component
 */

const FormErrorMessage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text-red-600">{children}</p>;
};

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
