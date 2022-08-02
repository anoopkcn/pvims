import Head from "next/head";
import Link from "next/link";

export const Header = () => {
    return (
        <div className="mx-auto w-4/6">
            <Head>
                <title>PViMS</title>
            </Head>
            <header className="py-6">
                <div className="container mx-auto md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl text-sky-800 font-bold"><Link href='/'> PViMS </Link> </h1>
                    <h2 className="text-slate-500">PhotoVoltaic inspired Materials Search</h2>
                </div>
                <ul className="md:flex md:items-center list-reset text-lg text-sky-800">
                    <li className="md:pl-4"><Link href='/metadata'>Metadata</Link></li>
                    <li className="md:pl-4"><Link href='/about'>About</Link></li>
                    <li className="md:pl-4"><Link href='/contact'>Contact</Link></li>
                </ul>
                </div>
            </header>
            <div className='p-2' />
        </div>
    )
}