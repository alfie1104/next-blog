import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem post={post} key={post.title} />
      ))}
    </ul>
  );
}

export default PostsGrid;
