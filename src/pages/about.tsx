import type { NextPage } from 'next'
import { Header } from '@/components/Header';

const About: NextPage = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-center'>
            <Header />
            <div className='container mx-auto w-4/6'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam temporibus mollitia aliquam, id exercitationem consectetur fuga nostrum laborum, iste repellendus hic reiciendis culpa harum ad earum voluptatibus nam fugit voluptas.
            </div>
        </div>
    )
}

export default About