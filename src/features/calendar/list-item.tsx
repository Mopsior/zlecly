export const ListItem = ({ name, color }: { name: string; color: string }) => {
    return (
        <div className='border-border hover:bg-secondary/20 flex w-full items-center gap-x-2 rounded-md border px-4 py-2 transition-colors'>
            <div className='size-3 rounded-full' style={{ backgroundColor: `#${color}` }} />
            {name}
        </div>
    )
}
