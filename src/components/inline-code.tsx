import type { ClassNameValue } from 'tailwind-merge'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export const InlineCode = ({
    className,
    ...props
}: ComponentPropsWithoutRef<'code'> & { className?: ClassNameValue }) => (
    <code className={cn(['bg-secondary rounded-md px-2 py-0.5', className])} {...props} />
)
