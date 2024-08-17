import { useContext } from "react";
import Post from "./Posts";
import { PostList as PostListData } from "../store/Post-List-Store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;