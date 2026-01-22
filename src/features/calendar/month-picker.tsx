import { ChevronLeft, ChevronRight } from 'lucide-react'
import { t } from 'i18next'
import { Button } from '../ui/button'
import { H2 } from '../typograpghy'
import type { Dispatch, SetStateAction } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'

const monthsItems = {
    1: t('calendar.months.1'),
    2: t('calendar.months.2'),
    3: t('calendar.months.3'),
    4: t('calendar.months.4'),
    5: t('calendar.months.5'),
    6: t('calendar.months.6'),
    7: t('calendar.months.7'),
    8: t('calendar.months.8'),
    9: t('calendar.months.9'),
    10: t('calendar.months.10'),
    11: t('calendar.months.11'),
    12: t('calendar.months.12'),
}

export const MonthPicker = ({
    month,
    setMonth,
}: {
    month: number
    setMonth: Dispatch<SetStateAction<number>>
}) => {
    return (
        <div className='flex gap-x-4'>
            <Button variant='ghost'>
                <ChevronLeft size={16} className='size-4' />
            </Button>
            <Select onValueChange={(value) => setMonth(Number(value))} value={month}>
                <SelectTrigger className='' withInputStyles={false}>
                    <H2>{monthsItems[month as keyof typeof monthsItems]}</H2>
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(monthsItems).map(([key, value]) => (
                        <SelectItem key={`month-picker-item-${key}`} value={key}>
                            {value}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Button variant='ghost'>
                <ChevronRight size={16} className='size-4' />
            </Button>
        </div>
    )
}
