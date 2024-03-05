const names = ["Jamal", "Rumana"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <h2>{chosenName}</h2>
      <p>Shows random names</p>
    </div>
  );
}

export default Post;
