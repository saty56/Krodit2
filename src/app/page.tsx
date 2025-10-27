import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-10 py-20 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={16}
            priority
          />
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">Krodit</h1>
        </div>

        <section className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left">
          <h2 className="text-3xl font-bold text-black dark:text-zinc-50">Subscription management, simplified</h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            Track, edit, cancel, and get reminders for all your subscriptions in one place. This is a starter screen wired to Tailwind v4 and shadcn/ui.
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <a href="#subscriptions">Go to Subscriptions</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/shadcn/ui" target="_blank" rel="noreferrer">shadcn/ui Docs</a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
