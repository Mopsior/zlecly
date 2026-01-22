import { CalendarItem } from './item'
import { getPosition } from './getCellPosition'
import { useCalendar } from '@/hooks/use-calendar'

export const CalendarGrid = ({ month, year }: { month: number; year: number }) => {
    const { days, firstDayOfMonth, daysInMonth, weeksCount, lastDayOfMonth } = useCalendar({
        month,
        year,
    })

    return days.map((day, index) => {
        const key = `calendar-item-${day?.day}-${month}-${year}-${index}`
        if (!day?.day) return <div key={key} />

        return (
            <CalendarItem
                key={key}
                day={day.day.toString()}
                position={getPosition(
                    day,
                    index,
                    firstDayOfMonth,
                    daysInMonth,
                    weeksCount,
                    lastDayOfMonth,
                )}
            />
        )
    })
}
