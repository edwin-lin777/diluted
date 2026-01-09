import Link from "next/link";
import { CompanySearch } from "@/components/CompanySearch";
import Company from "@/app/models/Company";
import logo from '../public/Diluted-Logo.png'
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar flex shadow-xs justify-left bg-white absolute z-100 justify-between px-20">
      <div className="flex-col flex">
        <ul className="flex ">
          <Link href='/' className=''>
           <div className="relative w-[150px] h-11 overflow-hidden shrink-0">
    <Image
      src={logo}
      alt="Diluted"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
          </Link>

          <li>
            <Link
              href="/explore"
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
              Ideas
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
