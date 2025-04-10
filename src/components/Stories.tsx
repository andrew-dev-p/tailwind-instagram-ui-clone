import { getFakeUserName } from "../lib/utils";

const Stories = () => {
  return (
    <div className="w-full my-4 border border-gray-300 rounded-sm shadow-sm">
      <div className="flex gap-2 overflow-x-auto overflow-y-hidden p-6 mb-0.5">
        {Array.from({ length: 14 }).map((_, index) => (
          <div className="group flex flex-col gap-1 items-center cursor-pointer">
            <div className="p-[1.5px] border-2 border-red-500 rounded-full flex items-center justify-center w-fit group-hover:scale-110 transition-transform duration-200 ease-in-out">
              <img
                src={`https://i.pravatar.cc/150?u=${index + 1}`}
                alt="User"
                className="w-14 aspect-square rounded-full"
              />
            </div>
            <p className="w-14 text-sm truncate text-center">
              {getFakeUserName()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
