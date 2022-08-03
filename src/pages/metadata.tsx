import type { NextPage } from 'next'
import { BasicTable } from '@/components/BasicTable';
import { trpc } from '@/utils/trpc';

const Metadata: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata']);
  return (
    <div>
      <BasicTable data={data} isLoading={isLoading} />
    </div>
  )
}

export default Metadata
