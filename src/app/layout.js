import "./globals.css";
import Link from "next/link";
import { Control } from "./Control";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by jelly",
};

export default async function RootLayout({ children }) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'posts', {
    // next: { revalidate: 0 },
    cache: "no-store",
  });
  const topics = await resp.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
