import getURL, { WEBSITE_URL } from "config";
import CommentForm from "./CommentForm";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";

export default async function Comments({ slug }: { slug: string }) {
  const commentsRes = await fetch(getURL(`/api/comments/${slug}`), { next: { revalidate: 5 } });
  const comments = await commentsRes.json();

  const user: User | null = await currentUser();

  return (
    <div>
      <h3>Comments</h3>
      {/* @ts-ignore */}
      {user ? <CommentForm slug={slug} username={user.username} /> : <Link href="/sign-in">Please sign in to comment</Link>}

      <ul>
        {/* @ts-ignore */}
        {comments.map((comment) => {
          return (
            <li key={comment.uuid}>
              {comment.username} says...
              <br />
              {comment.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
