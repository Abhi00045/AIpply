import React from 'react'

function Work() {
  return (
    <div>
        {/* <h2 className="mb-1.5">Work Expirence</h2> */}
                    <input type="text" placeholder="Company name" />
                    <input type="text" placeholder="Job role" />
                    <input type="text" placeholder="location" />
                   <div className='flex flex-row w-full gap-5'>
                    <div className='flex flex-row gap-1.5'><label htmlFor="StartSate">Start-Date</label> <input type="date" placeholder="end date" /></div>
                    <div className='flex flex-row gap-1.5'>
                      <label htmlFor="">End-Date</label> <input type="date" placeholder="end date" />
                    </div>
                   </div>
                    <input type="text" placeholder="Description" className='h-25' />
                    <button>
                        ADD 
                    </button>
        
    </div>
  )
}

export default Work