import type { NextPage } from 'next'
import Head from "next/head";

const About: NextPage = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-center'>
            <Head>
                <title>Solar Materials Vault</title>
            </Head>
            <div className="text-center pt-8"> Solar materials vault </div>
            <div className='p-2' />
            <div className="overflow-x-auto" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nisi cum. Voluptates, beatae ab iusto odit atque quo fuga laudantium iure nulla eius, odio accusamus labore, omnis corporis aliquid inventore?
            </div>
            <div className='p-2' />
        </div>
    )
}

export default About