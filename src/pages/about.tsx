import type { NextPage } from 'next'
import { Header } from '@/components/Header';

const About: NextPage = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-center'>
            <Header />
            <div className='container mx-auto w-4/6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nisi cum. Voluptates, beatae ab iusto odit atque quo fuga laudantium iure nulla eius, odio accusamus labore, omnis corporis aliquid inventore?
            </div>
        </div>
    )
}

export default About