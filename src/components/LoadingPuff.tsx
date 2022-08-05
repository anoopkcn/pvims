import Link from 'next/link';
import Image from 'next/image'

export const LoadingPuff = () => {
  return (
    <div className='w-full h-32 text-center place-content-center m-10'>
      <Image src="/puff.svg" alt="loading" width="100" height="100" />
      {/* <div className="p-2">
        <p>Loading data from Server. <span className='font-bold'>This should be fast</span></p>
        <p>If it takes more than <span className='font-bold'>5 seconds</span> please reload the page</p>
        <p>If it is still loading contact the developer at <Link href="/contact"><a className='text-slate-400'>Contact</a></Link> </p>
      </div> */}
    </div>
  )
};