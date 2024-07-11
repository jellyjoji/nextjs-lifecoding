export default async function Read(props) {
  const resp = await fetch(`http://localhost:9999/posts/${props.params.id}`, {
    cache: "no-store",
  });
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      parameters: {props.params.id}
    </>
  );
}
