import type { NextPage } from 'next'
import { BasicTable } from '@/components/BasicTable';
import { Header } from '@/components/Header';

const Metadata: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
        <Header />
        <BasicTable />
        <div className='p-5' />
    </div>
  )
}

export default Metadata
