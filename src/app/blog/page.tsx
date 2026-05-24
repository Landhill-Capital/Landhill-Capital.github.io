import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Landhill Capital Blog",
  description:
    "Insights and updates on micro-SaaS and AI startup ecosystems from Landhill Capital.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main>
      <header className="py-5">
        <div className="container-wrap">
          <Link className="font-semibold text-[#1d3557]" href="/">
            Home
          </Link>
        </div>
      </header>

      <section className="container-wrap pb-14">
        <span className="inline-block rounded-full bg-[#d7f1f1] px-3 py-1 text-xs font-bold tracking-[0.08em] text-[#0a9396] uppercase">
          Landhill Capital Blog
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Insights on micro-SaaS and applied AI
        </h1>
        <p className="mt-3 max-w-[64ch] text-[#5c677d]">
          This index curates our latest thinking on founder execution,
          product-market fit, unit economics, and practical AI adoption.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="card p-5 shadow-[0_10px_24px_rgba(20,33,61,0.07)]">
              {post.category ? (
                <span className="rounded-md bg-[#f4f6fb] px-2 py-1 text-xs font-semibold text-[#1d3557]">
                  {post.category}
                </span>
              ) : null}
              <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-[#5c677d]">{post.date}</p>
              <p className="mt-3 text-[#5c677d]">{post.excerpt}</p>
              <Link
                className="btn-primary mt-5 inline-block rounded-xl px-4 py-2 font-semibold"
                href={`/blog/${post.slug}`}
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

