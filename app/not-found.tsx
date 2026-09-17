import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Wordmark size="md" className="mb-10 w-44" />
      <h1 className="text-2xl font-medium">Page not found</h1>
      <p className="mt-3 text-sm text-mute">This route is not part of the site.</p>
      <Link
        href="/"
        className="mt-8 border border-ink px-5 py-2 text-[12px] uppercase tracking-[0.2em]"
      >
        Back to ZOVEN
      </Link>
    </main>
  );
}
