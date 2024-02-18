import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const sendMessageSchema = z.object({
  email: z
    .string({
      required_error: "Value required",
      description: "Email",
      invalid_type_error: "Type invalid",
    })
    .min(1, { message: "Value invalid null" })
    .email({
      message: "Not is valid email",
    }),
  message: z
    .string({
      required_error: "Value required",
      description: "Message",
      invalid_type_error: "Type invalid",
    })
    .min(1, { message: "Value invalid null" }),
});
type SendMessage = z.infer<typeof sendMessageSchema>;

export const FormContact = (): React.JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMessage>({
    resolver: zodResolver(sendMessageSchema),
  });

  const onSubmit: SubmitHandler<SendMessage> = async ({ email, message }) => {
    const response = await fetch("/api/send-mail.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });
    console.log(response)
    return response;
  };

  return (
    <form
      className="flex flex-col gap-y-4 w-full justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Your email
        </label>
        <input
          type="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required
          {...register("email")}
        />
      </div>
      {errors.email && (
        <p className="text-xs italic text-red-500 mt-2">
          {" "}
          {errors.email?.message}
        </p>
      )}
      <div className="sm:col-span-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Your message
        </label>
        <textarea
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="text-xs italic text-red-500 mt-2">
            {" "}
            {errors.message?.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
          <path d="M6.5 12h14.5" />
        </svg>
      </button>
    </form>
  );
};
