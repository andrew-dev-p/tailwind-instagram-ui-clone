import { getFakeUserName } from "../lib/utils";

const MiniProfile = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/150?u=24"
            alt="User"
            className="w-12 aspect-square rounded-full cursor-pointer"
          />
          <div>
            <p>You</p>
            <p className="text-sm text-gray-400">Welcome to Instagram</p>
          </div>
        </div>
        <button className="text-blue-500 cursor-pointer">Sign out</button>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 text-lg">Suggestions for you</p>
          <button className="font-bold text-lg text-gray-500 cursor-pointer">
            See all
          </button>
        </div>
        <div>
          <div className="mt-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={`https://i.pravatar.cc/150?u=${index}`}
                    alt="User"
                    className="w-8 aspect-square rounded-full cursor-pointer"
                  />
                  <div>
                    <p>{getFakeUserName()}</p>
                    <p className="text-sm text-gray-400">Manager</p>
                  </div>
                </div>
                <button className="text-blue-500 cursor-pointer">Follow</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;
