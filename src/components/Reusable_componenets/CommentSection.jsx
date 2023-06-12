import React from "react";
import { Form } from "react-router-dom";

export const CommentSection = () => {
  return (
    <div className="space-y-8 pt-16 mt-16 border-t border-gray-400/25">
      <h1 className="text-4xl font-playfair  font-bold">Leave a comment</h1>
      <Form className="grid grid-cols-2 font-playfair gap-10 text-gray-900">
        <label
          className="border flex items-center px-5 border-gray-400/50 h-14 rounded-md overflow-hidden"
          htmlFor=""
        >
          <input
            placeholder="Your Name *"
            className="placeholder:text-base outline-none w-full"
            type="text"
          />
        </label>

        <label
          className="border flex items-center px-5 border-gray-400/50 h-14 rounded-md overflow-hidden"
          htmlFor=""
        >
          <input
            placeholder="Your E-Mail *"
            className="placeholder:text-base outline-none w-full"
            type="email"
          />
        </label>

        <textarea
          placeholder="Your comment *"
          className="col-span-2 border outline-none border-gray-400/60 rounded-md p-4 resize-none"
          name=""
          id=""
          rows={6}
        />
      </Form>
    </div>
  );
};