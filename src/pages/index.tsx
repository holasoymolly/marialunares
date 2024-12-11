import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      {/* Links principales */}
      <div className="mt-6 flex flex-col items-center gap-4">
        <a
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          href="https://vercel.com/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy Now
        </a>
        <a
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Documentation
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-500">
        Powered by{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Vercel
        </a>
      </footer>
    </div>
  );
}