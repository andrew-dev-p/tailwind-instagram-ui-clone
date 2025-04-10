import { useState } from "react";

interface Props {
  authorImg: string;
  authorName: string;
  postImg: string;
  postText: string;
  likesNumber: number;
  comments: {
    authorImg: string;
    authorName: string;
    commentText: string;
    timeAgo: string;
  }[];
}

const PostCard = ({
  authorImg,
  authorName,
  postImg,
  postText,
  likesNumber,
  comments,
}: Props) => {
  const [likes, setLikes] = useState(likesNumber);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="mb-4 bg-white border border-gray-300 rounded-sm shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={authorImg}
            alt={authorName}
            className="w-12 h-12 rounded-full mr-4"
          />
          <span className="font-semibold">{authorName}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-500 rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
      <img
        src={postImg}
        alt={postText}
        className="w-full h-auto max-h-[500px] object-cover"
      />
      <div className="px-4 py-2">
        <div className="flex items-center mb-2">
          <button
            className={`cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out ${
              liked ? "text-red-500" : ""
            }`}
            onClick={handleLike}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill={liked ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <span className="ml-2">{likes} likes</span>
        </div>
        <p className="text-lg">
          <span className="font-semibold">{authorName}</span> {postText}
        </p>
        {comments.length > 0 && (
          <div className="mt-2 space-y-2">
            {comments.map((comment) => (
              <div
                key={comment.authorName}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={comment.authorImg}
                    alt={comment.authorName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="text-sm">
                    <span className="font-semibold">{comment.authorName}</span>{" "}
                    {comment.commentText}
                  </div>
                </div>
                <span className="ml-2 text-gray-500 text-xs">
                  {comment.timeAgo}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
