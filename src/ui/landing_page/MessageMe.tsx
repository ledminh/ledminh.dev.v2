export default function MessageMe() {
  return (
    <div className="p-4 border-2 border-gray-400 rounded-lg w-2/3 max-w-[750px]">
      <h2>MESSAGE ME</h2>
      <form className="flex flex-col gap-4">
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
          <button className="bg-yellow-800 text-white p-2 rounded-lg hover:bg-yellow-700 active:bg-yellow-600 w-[200px]">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
