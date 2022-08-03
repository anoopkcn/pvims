import Link from "next/link";
import Image from 'next/image'

export const Header = () => {
  return (
    <div className="mx-auto w-4/6">
      <header className="py-6">
        <div className="flex flex-row items-center justify-between">

          <div className="flex flex-row items-center w-1/2">
            <div className="pr-3 items-center">
              <Link href='/'>
                <a>
                  <Image src="/logo.svg" alt="logo" width="64" height="64" />
                </a>
              </Link>
            </div>
            <Link href='/'>
              <a>
                <div>
                  <div className="w-80">
                    <div className="text-2xl text-sky-800 font-bold">PViMS </div>
                    <div className="text-lg text-slate-400"> PhotoVoltaic inspired Materials Search </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <div>
            <ul className="flex items-center list-reset text-lg text-sky-800">
              <li className="md:pl-4"><Link href='/metadata'>Metadata</Link></li>
              <li className="md:pl-4"><Link href='/about'>About</Link></li>
              <li className="md:pl-4"><Link href='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
      <div className='p-2' />
    </div>
  )
}