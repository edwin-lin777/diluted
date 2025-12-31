import Link from "next/link";
import { Cal_Sans } from "next/font/google";

const cal = Cal_Sans({
  weight: "400",
});

export default function Navbar() {
  return (
    <div className="navbar flex shadow-xs justify-left fixed top-10 z-100">
      <div className="flex-col flex">
        <ul className="translate-y-[-40px] flex ml-15">
          <li className="cal-sans-regular btn btn-ghost text-3xl">Diluted</li>
          <li>
            <Link
              href="/"
              className="btn btn-ghost roboto-flex-class font-medium"
            >
              Leaderboards
            </Link>
          </li>
          <li>
            <Link
              href="/discover"
              className="btn btn-ghost roboto-flex-class font-medium"
            >
              Discover
            </Link>
          </li>
        </ul>
        <div className="fixed ml-21 py-3">
          <ul className="flex gap-7">
            <li className="text-gray-400 hover:text-black transition-colors">
              <Link href="" className="">
                Trending
              </Link>
            </li>
            <li className="text-gray-400 hover:text-black transition-colors">
              <Link href="" className="">
                For You
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
