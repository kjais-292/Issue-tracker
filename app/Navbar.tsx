"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { IoBugSharp } from "react-icons/io5";
import classnames from 'classnames'

const Navbar = () => {

    const links=[{href:'/',label:'Dashboard'},{href:'/issues',label:'Issues'}];
    const pathname=usePathname();

  return (
    <nav className="flex space-x-6 px-5 h-14 border-b mb-5 items-center font-bold">
        <Link href="/"><IoBugSharp /></Link>
        <ul className="flex space-x-6">
            {links.map(links=><Link 
            key={links.href} 
            href={links.href}
            className={classnames({
                'text-zinc-900':links.href===pathname,
                'text-zinc-500':links.href!==pathname,
                'hover:text-zinc-800 transition-colors':true
            })}>{links.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar