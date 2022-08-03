import Link from 'next/link';
import Image from 'next/image'

export const LoadingPuff = () => {
  return (
    <div className='m-auto w-full text-sm text-center h-32'>
      <Image src="/puff.svg" alt="loading" width="64" height="64" />
      {/* <div className="p-2">
        <p>Loading data from Server. <span className='font-bold'>This should be fast</span></p>
        <p>If it takes more than <span className='font-bold'>5 seconds</span> please reload the page</p>
        <p>If it is still loading contact the developer at <Link href="/contact"><a className='text-slate-400'>Contact</a></Link> </p>
      </div> */}
    </div>
  )
};