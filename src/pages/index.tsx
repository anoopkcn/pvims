import type { NextPage } from 'next'
import Head from "next/head";
import { BasicTable } from '@/components/BasicTable';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center relative'>
      <Head>
        <title>Solar Materials Vault</title>
      </Head>
      <div className="text-center pt-8"> Solar materials vault </div>
      <div className='p-2' />
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg" >
          <BasicTable />
        </div>
      <div className='p-2' />
    </div>
  )
}

export default Home
