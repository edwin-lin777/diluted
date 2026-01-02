import Link from "next/link";
import { Cal_Sans } from "next/font/google";
import { CompanySearch } from "@/components/CompanySearch";
import Company from "@/database/Company";


const cal = Cal_Sans({
  weight: "400",
});

export default function Navbar() {
  return (
    <div className="navbar flex shadow-xs justify-left bg-white absolute z-100 justify-between">
      <div className="flex-col flex">
        <ul className="flex ">
          <li>
            <Link href="/" className="cal-sans-regular ml-20 text-3xl">
              Diluted
            </Link>
          </li>

          <li>
            <Link
              href="/leaderboard"
              className="btn btn-ghost roboto-flex-class font-medium"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              href="/discover"
              className="btn btn-ghost roboto-flex-class font-medium"
            >
              Finance
            </Link>
          </li>
          <li>
            <Link
              href="/discover"
              className="btn btn-ghost roboto-flex-class font-medium"
            >
              Tech
            </Link>
          </li>
          <li>
            <Link
              href="/discover"
              className="btn btn-ghost roboto-flex-class font-medium"
            >
              Defence
            </Link>
          </li>
          <li>
            <Link
              href="/discover"
              className="btn btn-ghost roboto-flex-class font-medium"
            >
              Goods
            </Link>
          </li>
        </ul>
        {/* <div className="fixed ml-21 py-3">
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
        </div> */}
      </div>
      <div className='flex items-center gap-3'>
          <CompanySearch/>
        <Link href='/'>
          <h1 className="">
            Sign In
          </h1>
        </Link>
        <Link href='/'>
          <h1 className="">
            Log In
          </h1>
        </Link>
      </div>
    </div>
  );
}
