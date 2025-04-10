import { getFakeUserName, getRandomBlah } from "../lib/utils";
import PostCard from "./PostCard";

const Posts = () => {
  const posts = [
    {
      authorImg: "https://i.pravatar.cc/150?u=1",
      authorName: getFakeUserName(),
      postImg: "https://i.pravatar.cc/600?u=1",
      postText: getRandomBlah(),
      likesNumber: Math.floor(Math.random() * 100),
      comments: [
        {
          authorImg: "https://i.pravatar.cc/150?u=2",
          authorName: getFakeUserName(),
          commentText: getRandomBlah(),
          timeAgo: "1h",
        },
        {
          authorImg: "https://i.pravatar.cc/150?u=2",
          authorName: getFakeUserName(),
          commentText: getRandomBlah(),
          timeAgo: "1h",
        },
      ],
    },
    {
      authorImg: "https://i.pravatar.cc/150?u=1",
      authorName: getFakeUserName(),
      postImg: "https://i.pravatar.cc/600?u=1",
      postText: getRandomBlah(),
      likesNumber: Math.floor(Math.random() * 100),
      comments: [
        {
          authorImg: "https://i.pravatar.cc/150?u=2",
          authorName: getFakeUserName(),
          commentText: getRandomBlah(),
          timeAgo: "1h",
        },
        {
          authorImg: "https://i.pravatar.cc/150?u=2",
          authorName: getFakeUserName(),
          commentText: getRandomBlah(),
          timeAgo: "1h",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {posts.map((post) => (
        <PostCard key={post.authorName} {...post} />
      ))}
    </div>
  );
};

export default Posts;
