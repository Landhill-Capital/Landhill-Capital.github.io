import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exists = getAllPosts().some((post) => post.slug === slug);

  if (!exists) {
    return {
      title: "Post Not Found | Landhill Capital Blog",
    };
  }

  const post = await getPostBySlug(slug);

  return {
    title: `${post.title} | Landhill Capital Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const exists = getAllPosts().some((post) => post.slug === slug);

  if (!exists) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  return (
    <main className="container-wrap py-8 pb-14">
      <Link className="font-semibold text-[#1d3557]" href="/blog">
        Back to Blog
      </Link>

      <article className="card mt-4 p-6 md:p-8">
        <p className="text-sm text-[#5c677d]">{post.date}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{post.title}</h1>
        <p className="mt-3 text-[#5c677d]">{post.excerpt}</p>

        <div
          className="prose prose-slate mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}

