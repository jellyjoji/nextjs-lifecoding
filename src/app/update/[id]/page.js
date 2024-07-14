"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL+'posts' + id)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          const options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body }),
          };
          fetch(`http://localhost:9999/posts` + id, options)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              const lastid = result.id;
              router.refresh();
              router.push(`/read/${lastid}`);
            });
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e = setTitle(e.target.value))}
          />
        </p>
        <p>
          <textarea
            name="body"
            id="body"
            value={body}
            onChange={(e = setBody(e.target.value))}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>
    </>
  );
}
