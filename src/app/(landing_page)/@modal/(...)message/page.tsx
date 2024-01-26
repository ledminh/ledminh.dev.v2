"use client";

export default function MessageModal() {
  return (
    <section className="absolute top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center">
      <div className="p-4 border-2 border-gray-400 rounded-lg">
        <h3>SEND MESSAGE</h3>
        <form className="flex flex-col gap-4">
          <label>
            <span>NAME</span>
            <input type="text" />
          </label>
          <label>
            <span>EMAIL</span>
            <input type="email" />
          </label>
          <label>
            <span>MESSAGE</span>
            <textarea />
          </label>
          <button className="bg-yellow-800 text-white p-2 rounded-lg">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}
