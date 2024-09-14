import { SearchCode, Command } from 'lucide-react'
import CommandMenu from './CommandMenu';
import { useState } from 'react';



const Search = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <div className="bg-green-200 mb-4 relative flex items-center rounded px-2 py-1.5 text-sm">
        <SearchCode className='mr-2' />
        <input type="text" className="w-full placeholder:text-gray-700 bg-transparent focus:outline-none" 
            placeholder='search something ...'
            onClick={(e)=>{
                e.target.blur();
                setOpen(true)
            }}
        />
        <span className="p-1 text-xs flex gap-0 5 items-center shadow rounded absolute right-1 5 top-1/2 -translate-y-1/2">
        <Command  className='size-3.5'/>K
        </span>
    </div>

    <CommandMenu open={open} setOpen={setOpen} />
    </>
  )
}

export default Search