import { useSearch } from '@tanstack/react-router'
import { CalendarItem } from './item'
import { getPosition } from './getCellPosition'
import { useCalendar } from '@/hooks/use-calendar'
import { Route } from '@/routes/app'

export const CalendarGrid = () => {
    const { month, year } = useSearch({
        from: Route.fullPath,
    })

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
