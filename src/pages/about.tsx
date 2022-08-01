import type { NextPage } from 'next'
import { Header } from '@/components/Header';
import { trpc } from '@/utils/trpc';
import md from 'markdown-it';

const About: NextPage = () => {
    const { data, error, isLoading } = trpc.useQuery(['get-mat-about']);

    if (isLoading) {
        return null;
    }

    // console.log(data);
    return (
        <div className='h-screen w-screen flex flex-col items-center'>
            <Header />
            <div className='container mx-auto w-4/6'>
            <article className="prose mx-auto max-w-none">
                <div dangerouslySetInnerHTML={{ __html: md().render(data) }} />
            </article>
            </div>
        </div>
    )
}

export default About