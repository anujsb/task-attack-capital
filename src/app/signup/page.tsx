import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex flex-col  items-center justify-center p-10">
      <form
        // onSubmit={handleSubmit}
        className=" p-10  rounded-xl bg-white shadow-sm lg:w-1/3 w-full "
      >
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <Input
          type="text"
          placeholder="Name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-dashed rounded shadow-sm"
          required
        />
        <Input
          type="email"
          placeholder="Email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-dashed rounded shadow-sm"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-dashed rounded shadow-sm"
          required
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="w-min mt-4 text-white rounded-full hover:scale-110 duration-500 transition font-semibold "
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
