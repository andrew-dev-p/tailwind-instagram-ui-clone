import MiniProfile from "./components/MiniProfile";
import Posts from "./components/Posts";
import Stories from "./components/Stories";

const Feed = () => {
  return (
    <div className="xl:grid xl:grid-cols-[1fr_300px]">
      <section className="px-4 xl:max-w-6xl xl:mx-auto">
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:block xl:w-[300px]">
        <MiniProfile />
      </section>
    </div>
  );
};

export default Feed;
