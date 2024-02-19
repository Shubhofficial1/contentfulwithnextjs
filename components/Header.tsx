import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[60px] w-full bg-indigo-300 flex px-10 items-center">
      <Link href="/">
        <h1 className="font-bold text-md text-white">Tech Blogs</h1>
      </Link>
    </header>
  );
}
