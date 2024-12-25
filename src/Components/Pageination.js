import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pageination = () => {

  const{page,handlePageChange,totalPages} = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>

    <div className='w-full max-w-[670px] py-2 flex gap-x-2'>
      {page > 1 &&
        (<button className='border rounded-md px-4 py-1'
         onClick={() => handlePageChange(page-1)}>
          Previous
        </button>)
      }
      {page < totalPages &&
        (<button className='border rounded-md px-4 py-1'
        onClick={() => handlePageChange(page+1)}>
          Next
        </button>)
      }
    </div>

      <p className='font-bold text-sm'>
      Page {page} of {totalPages}
      </p>

    </div>
  )
}

export default Pageination