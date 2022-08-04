import type { NextPage } from 'next'
import { BasicTable } from '@/components/BasicTable';
import { trpc } from '@/utils/trpc';
import { METADATA_VERSION } from '@/utils/constants';

const Metadata: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(['get-mat-metadata', {version: METADATA_VERSION}]);
  return (
    <div>
      <BasicTable data={data} isLoading={isLoading} />
    </div>
  )
}

export default Metadata
