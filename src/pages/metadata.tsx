import type { NextPage } from 'next'
import { BasicTable } from '@/components/BasicTable';
import { Header } from '@/components/Header';
import { trpc } from '@/utils/trpc';

const Metadata: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata']);
  if (error) return <div>{error.message}</div>;
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <Header />
        <BasicTable data={data} isLoading={isLoading} />
      <div className='p-5' />
    </div>
  )
}

export default Metadata
