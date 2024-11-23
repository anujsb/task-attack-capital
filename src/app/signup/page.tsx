import React from 'react'

const page = () => {
  return (
    <div className="h-screen flex flex-col  items-center justify-center bg-[radial-gradient(circle,_#cacafb_45%,_#ffd1c700)]">
      <form
        // onSubmit={handleSubmit}
        className=" p-10  rounded-lg bg-[#f0f1fa]"
      >
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Sign Up
      </button>
    </form>
    </div>
  )
}

export default page