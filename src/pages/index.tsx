import type { NextPage } from 'next'
import Head from "next/head";
import { BasicTable } from '@/components/BasicTable';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <Head>
        <title>Solar Materials Vault</title>
      </Head>
      <div className="text-center pt-8"> Solar materials vault </div>
      <div className='p-2' />
        <div className="overflow-x-auto shadow-md" >
          <BasicTable />
        </div>
      <div className='p-2' />
    </div>
  )
}

export default Home
