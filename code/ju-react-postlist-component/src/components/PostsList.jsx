import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <main>
      <Post author="Jamal Uddin" body="I love how the React works!" />
      <Post author="Rumana Akter" body="I am just learning React!" />
    </main>
  );
}

export default PostsList;
