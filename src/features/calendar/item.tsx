import { cva } from 'class-variance-authority'
import { Cell } from './types'
import type { ItemProps } from './types'

const cellVariants = cva('border-border h-16 flex items-center justify-center', {
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
    },
})

export const CalendarItem = ({ day, position }: ItemProps) => {
    return (
        <div className={cellVariants({ position })}>
            <span>{day}</span>
        </div>
    )
}
