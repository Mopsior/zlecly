export const ListItemSkeleton = () => {
    return [0, 1, 2].map((_, index) => (
        <div
            key={`skeleton-${index}`}
            className='bg-muted/20 h-10 w-full animate-pulse rounded-md transition-colors'
        />
    ))
}
