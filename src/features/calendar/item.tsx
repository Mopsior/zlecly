import { cva } from 'class-variance-authority'
import { CircleAlert } from 'lucide-react'
import { Cell } from './types'
import type { ItemProps } from './types'

const cellVariants = cva('border-border p-2 h-32 flex justify-center relative', {
    variants: {
        position: {
            [Cell.TOP]: 'border-l border-t',
            [Cell.TOP_RIGHT]: 'border-t border-l border-r rounded-tr-md',
            [Cell.TOP_LEFT]: 'border-l border-t rounded-tl-md',
            [Cell.TOP_RIGHT_LEFT]: 'border-t border-x rounded-t-md',
            [Cell.LEFT]: 'border-l border-t',
            [Cell.LEFT_FIXED]: 'border-l border-y',
            [Cell.RIGHT]: 'border-r border-l border-t',
            [Cell.BOTTOM]: 'border-l border-b',
            [Cell.BOTTOM_TOP]: 'border-l border-y',
            [Cell.BOTTOM_RIGHT]: 'border-b border-r border-t border-l rounded-br-md',
            [Cell.BOTTOM_RIGHT_FIXED_WIDTH]:
                'col-span-2 w-[calc(50%+1px)] border-b border-r border-l rounded-br-md',
            [Cell.BOTTOM_LEFT]: 'border-b border-l rounded-bl-md',
            [Cell.BOTTOM_RIGHT_LEFT]: 'border-b border-x rounded-b-md',
            [Cell.CENTER]: 'border-l border-t',
            [Cell.CENTER_FIXED_BOTTOM]: 'border-l border-y',
        },
        isWeekday: {
            false: null,
            true: 'text-muted-foreground',
        },
        isFreeDay: {
            false: null,
            true: 'bg-destructive/10',
        },
    },
})

export const CalendarItem = ({ day, position, isWeekday, isFreeDay }: ItemProps) => {
    return (
        <div className={cellVariants({ position, isWeekday, isFreeDay })}>
            <span>{day}</span>
            {isFreeDay && (
                <CircleAlert className='text-destructive absolute top-2 right-2 size-6' />
            )}
        </div>
    )
}
