import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm flex  justify-left fixed top-0 z-100">
      <ul className="flex gap-35 ml-15">
        <li className = "btn btn-ghost text-xl">
        Diluted

        </li>
        <li>
          <Link href="/" className="btn btn-ghost text-xl">
            Leaderboards
          </Link>
        </li>
        <li>
          <Link href="/discover" className="btn btn-ghost text-xl">
            Discover
          </Link>
        </li>
      </ul>
    </div>
  );
}
