import PostItem from "../PostItem/PostItem";

const PostList = ({ posts = [] }) => {
  const postItems = posts.map((post) => (
    <PostItem key={post.name} name={post.name} post={post.post} />
  ));

  return (
    <div>
      <h3>Posts</h3>
      <div>{postItems}</div>
    </div>
  );
};

export default PostList;
