import type { NextPage } from 'next'
import { BasicTable } from '@/components/BasicTable';
import { Header } from '@/components/Header';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <Header />
      <div className='container mx-auto w-4/6'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident a ratione nam quod eius, ducimus quae officia ipsam numquam inventore reiciendis quisquam unde quaerat harum consequatur voluptas nostrum incidunt placeat?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laboriosam ratione. Eaque vero minus quibusdam doloribus numquam temporibus nisi soluta mollitia cupiditate est, maxime eos quas odio vel molestias id?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos saepe impedit porro vero dolorem officiis animi. Modi veritatis esse ratione quibusdam suscipit maiores, itaque quisquam nesciunt autem neque, voluptas harum!
      </div>
    </div>
  )
}

export default Home
