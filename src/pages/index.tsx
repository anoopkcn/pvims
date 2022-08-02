import type { NextPage } from 'next'
import { Header } from '@/components/Header';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <Header />
      <div className='container mx-auto w-4/6 text-lg' >
        <h1 className='text-2xl text-sky-800 font-bold pb-5'>
          Databse for photovoltaic materials and their properties
        </h1>
        <h2 className='text-xl text-slate-500 pb-3'>
          Fair usage of data
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum voluptate rerum, quam, quis iusto autem nam dolorum a natus fuga laudantium eaque molestias impedit ratione delectus, eos minus esse.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolorum natus sunt commodi tempora totam fugit excepturi beatae magnam a quia tempore impedit consequatur praesentium consequuntur fuga, harum quidem est! 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure expedita minima accusantium nisi ipsa, est repudiandae nihil quae sequi, autem reiciendis 
        </p>
      </div>
      <div className="p-5"/>
    </div>
  )
}

export default Home
