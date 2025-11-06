import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm flex  justify-center fixed top-0 z-100">
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="btn btn-ghost text-xl">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/discover" className="btn btn-ghost text-xl">
            Discover
          </Link>
        </li>
        <li>
          <Link href="/messages" className="btn btn-ghost text-xl">
            Messages
          </Link>
        </li>
        <li>
          <Link href="/settings" className="btn btn-ghost text-xl">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
