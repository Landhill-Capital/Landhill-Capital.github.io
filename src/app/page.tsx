import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-16 md:py-20">
        <div className="container-wrap">
          <div className="card grid gap-8 overflow-hidden border border-[#dce3f2] bg-white md:grid-cols-[1.2fr_1fr]">
            <div className="p-6 md:p-10">
              <span className="inline-block rounded-full bg-[#d7f1f1] px-3 py-1 text-xs font-bold tracking-[0.08em] text-[#0a9396] uppercase">
                Landhill Capital
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#14213d] md:text-5xl">
                Investing in practical micro-SaaS and AI startups
              </h1>
              <p className="mt-4 max-w-[58ch] text-lg text-[#5c677d]">
                We back focused founders building useful products with strong customer
                value. Our team combines market research, financial analysis, and
                hands-on due diligence to identify durable opportunities.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="btn-primary rounded-xl px-5 py-3 font-semibold transition"
                  href="mailto:fangzhangnz@gmail.com"
                >
                  Contact Us
                </a>
                <Link
                  className="rounded-xl border border-[#d7dff2] bg-[#f4f6fb] px-5 py-3 font-semibold text-[#1d3557] transition hover:-translate-y-0.5"
                  href="/blog"
                >
                  Read Blog Updates
                </Link>
              </div>
            </div>
            <aside className="grid place-items-center bg-[linear-gradient(140deg,rgba(10,147,150,0.14),rgba(20,33,61,0.06)),#f4f6fb] p-6 md:p-8">
              <div className="grid w-full max-w-96 gap-3">
                <article className="card p-4">
                  <strong className="block text-lg">Micro-SaaS First</strong>
                  <span className="text-sm text-[#5c677d]">
                    Simple products with clear customer outcomes.
                  </span>
                </article>
                <article className="card p-4">
                  <strong className="block text-lg">AI With Utility</strong>
                  <span className="text-sm text-[#5c677d]">
                    Applied AI that improves speed, quality, or margins.
                  </span>
                </article>
                <article className="card p-4">
                  <strong className="block text-lg">Hands-On Diligence</strong>
                  <span className="text-sm text-[#5c677d]">
                    Research-led decision support for founder teams.
                  </span>
                </article>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container-wrap">
          <h2 className="text-3xl font-semibold">What We Focus On</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <article className="card p-5">
              <h3 className="text-lg font-semibold">Market Research</h3>
              <p className="mt-2 text-[#5c677d]">
                We examine category trends, customer segments, and go-to-market
                signals to understand market timing and fit.
              </p>
            </article>
            <article className="card p-5">
              <h3 className="text-lg font-semibold">Financial Analysis</h3>
              <p className="mt-2 text-[#5c677d]">
                Unit economics, revenue quality, and growth durability are central to
                our investment process.
              </p>
            </article>
            <article className="card p-5">
              <h3 className="text-lg font-semibold">Due Diligence</h3>
              <p className="mt-2 text-[#5c677d]">
                We partner with teams to evaluate product traction, operating health,
                and long-term defensibility.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container-wrap">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl font-semibold">Portfolio</h2>
              <p className="mt-2 max-w-[70ch] text-[#5c677d]">
                We invest in focused software companies solving recurring workflows
                for niche customer groups. Below are representative portfolio
                profiles that reflect our investment strategy.
              </p>
            </div>
            <a
              className="rounded-xl border border-[#d7dff2] bg-[#f4f6fb] px-5 py-3 font-semibold text-[#1d3557] transition hover:-translate-y-0.5"
              href="mailto:fangzhangnz@gmail.com?subject=Portfolio%20Inquiry"
            >
              Request Portfolio Details
            </a>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="card p-5">
              <span className="inline-block rounded-full bg-[#ebf9f9] px-3 py-1 text-xs font-bold tracking-[0.06em] text-[#0a9396] uppercase">
                Live Website
              </span>
              <h3 className="mt-3 text-lg font-semibold">The Job Copilot</h3>
              <p className="mt-2 text-[#5c677d]">
                An AI-powered job search assistant that helps users find and apply
                for jobs more efficiently.
              </p>
              <a
                className="mt-3 inline-block rounded-lg border border-[#d7dff2] bg-[#f4f6fb] px-3 py-2 text-sm font-semibold text-[#1d3557] transition hover:-translate-y-0.5"
                href="https://thejobcopilot.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </article>

            <article className="card p-5">
              <span className="inline-block rounded-full bg-[#fff5dc] px-3 py-1 text-xs font-bold tracking-[0.06em] text-[#9a6700] uppercase">
                Live Website
              </span>
              <h3 className="mt-3 text-lg font-semibold">HuaNest Heritage</h3>
              <p className="mt-2 text-[#5c677d]">
                A platform that brings travellers closer to local civilization around
                the world.
              </p>
              <a
                className="mt-3 inline-block rounded-lg border border-[#d7dff2] bg-[#f4f6fb] px-3 py-2 text-sm font-semibold text-[#1d3557] transition hover:-translate-y-0.5"
                href="https://huanest.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </article>

            <article className="card p-5">
              <span className="inline-block rounded-full bg-[#eef2fb] px-3 py-1 text-xs font-bold tracking-[0.06em] text-[#1d3557] uppercase">
                Coming Soon
              </span>
              <h3 className="mt-3 text-lg font-semibold">Future Website or Mobile App</h3>
              <p className="mt-2 text-[#5c677d]">
                Reserved space for new portfolio additions. We can feature the next
                company website or mobile app here.
              </p>
              <p className="mt-3 text-sm text-[#5c677d]">
                Stage: To Be Announced
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container-wrap grid gap-4 md:grid-cols-[1.1fr_1fr]">
          <article className="card border-[#eddcb2] bg-[linear-gradient(130deg,#fff9ec,#ebf9f9)] p-5">
            <h2 className="text-2xl font-semibold">Open Role: Investment Analyst</h2>
            <p className="mt-2 text-[#5c677d]">
              We are looking for a talented, motivated analyst to support pipeline
              development and investment evaluation.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[#5c677d]">
              <li>Conduct startup and sector-level market research.</li>
              <li>Build and review financial models for opportunities.</li>
              <li>Support due diligence and investment memos.</li>
            </ul>
            <a
              className="btn-primary mt-5 inline-block rounded-xl px-5 py-3 font-semibold"
              href="mailto:fangzhangnz@gmail.com"
            >
              Apply by Email
            </a>
          </article>

          <article className="card p-5">
            <h2 className="text-2xl font-semibold">From Our Blog</h2>
            <p className="mt-2 text-[#5c677d]">
              We publish insights and updates about the micro-SaaS and AI startup
              ecosystem, with content powered by Markdown posts.
            </p>
            <Link
              className="mt-4 inline-block rounded-xl border border-[#d7dff2] bg-[#f4f6fb] px-5 py-3 font-semibold text-[#1d3557] transition hover:-translate-y-0.5"
              href="/blog"
            >
              View All Posts
            </Link>
          </article>
        </div>
      </section>

      <footer className="py-10 text-[#5c677d]">
        <div className="container-wrap text-sm">
          <strong className="text-[#14213d]">Landhill Capital</strong>
          <br />
          Investing in micro-SaaS and AI startups.
        </div>
      </footer>
    </main>
  );
}

