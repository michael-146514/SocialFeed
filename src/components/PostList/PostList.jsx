const PostList = ({ name, post }) => {
  return (
    <div>
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <p>{post}</p>
      </div>
      <div>
        <button>Like</button>
        <button>DisLike</button>
      </div>
    </div>
  );
};

export default PostList;
