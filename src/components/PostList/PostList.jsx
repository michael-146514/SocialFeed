import PostItem from "../PostItem/PostItem";

const PostList = ({ posts = [] }) => {
  const postItems = posts.map((post) => (
    <PostItem key={post.name} name={post.name} post={post.post} />
  ));

  return (
    <div className="post-box">
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
