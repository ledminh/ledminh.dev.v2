"use client";

import { FormEvent, useState } from "react";
import sendMessageAction from "@/core/server/message/sendMessageAction";

export default function MessageMe() {
  const [submitState, setSubmitState] = useState<
    "not-submit" | "submitting" | "submitted"
  >("not-submit");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("submitting");

    sendMessageAction("This is a message").then(() => {
      setTimeout(() => {
        setSubmitState("submitted");
      }, 1000);
    });
  };

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
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 md:flex-row md:gap-6">
          <span className="text-lg font-semibold">NAME</span>
          <input
            type="text"
            className="p-2 text-black rounded-md bg-gray-200 font-semibold basis-full"
          />
        </label>
        <label className="flex flex-col gap-2 md:flex-row md:gap-6">
          <span className="text-lg font-semibold">EMAIL</span>
          <input
            type="email"
            className="p-2 text-black rounded-md bg-gray-200 font-semibold basis-full"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-lg font-semibold">MESSAGE</span>
          <textarea className="p-2 text-black rounded-md resize-none h-52 bg-gray-200" />
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
