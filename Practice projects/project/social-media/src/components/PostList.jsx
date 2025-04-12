import { useContext } from "react";
import Post from "./Post";
import { PostList as PLD } from "../store/postlist-store";

const PostList = () => {
  const { postList } = useContext(PLD);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
