import { Command } from 'cmdk'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

const CommandMenu = ({ open, setOpen }) => {


    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu"
            className='fixed inset-0 bg-opacity-50 bg-black'
            onClick={() => setOpen(false)}
        >
            <div
            className='bg-white rounded-lg shaow-xl border-green-300 border overflow-hidden w-full max-w-lg mx-auto mt-12'
            onClick={(e)=>e.stopPropagation()}>
            <Command.Input
            placeholder='Search a service'
            className='relative border-b border-green-300
             p-3 text-md w-full placeholder:text-green-500 focuse:outline-none'
            />
            <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group heading="Letters">
                    <Command.Item>a</Command.Item>
                    <Command.Item>b</Command.Item>
                    <Command.Separator />
                    <Command.Item>c</Command.Item>
                </Command.Group>

                <Command.Item>Apple</Command.Item>
            </Command.List>
            </div>
        </Command.Dialog>
    )
}
CommandMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
}

export default CommandMenu
