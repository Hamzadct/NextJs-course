/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/E6VK51I5w5W
 */
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex items-center min-h-screen px-4 text-center md:px-6">
      <div className="space-y-6 w-full">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
          <p className="mx-auto max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Oops! The page you're looking for does not exist.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
            href="#"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
