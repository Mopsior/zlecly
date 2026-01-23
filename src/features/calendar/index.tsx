import { t } from 'i18next'
import { CalendarGrid } from './grid'
import { MonthPicker } from './month-picker'
import { cn } from '@/lib/utils'

const weekdays = {
    1: t('calendar.weekdays.1'),
    2: t('calendar.weekdays.2'),
    3: t('calendar.weekdays.3'),
    4: t('calendar.weekdays.4'),
    5: t('calendar.weekdays.5'),
    6: t('calendar.weekdays.6'),
    7: t('calendar.weekdays.7'),
}

export const Calendar = () => {
    return (
        <div className='flex h-full w-full flex-col items-center gap-8 p-8'>
            <MonthPicker />
            <div className='grid w-full grid-cols-7'>
                {Object.values(weekdays).map((day, index) => (
                    <div
                        className={cn([
                            'mb-4 text-center text-sm',
                            index < 5 ? 'text-foreground' : 'text-muted-foreground',
                        ])}
                        key={`calendar-weekday-${day}`}
                    >
                        {day}
                    </div>
                ))}
                <CalendarGrid />
            </div>
        </div>
    )
}
