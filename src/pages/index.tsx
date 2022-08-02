import type { NextPage } from 'next'
import { Header } from '@/components/Header';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <Header />
      <div className='container mx-auto w-4/6'>
        <h1 className='text-2xl text-sky-800 font-bold'>
          Databse for photovoltaic materials and their properties
        </h1>
        <h2 className='text-xl text-slate-500'>
          Fair usage of data
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum voluptate rerum, quam, quis iusto autem nam dolorum a natus fuga laudantium eaque molestias impedit ratione delectus, eos minus esse.</p>
      </div>
    </div>
  )
}

export default Home
