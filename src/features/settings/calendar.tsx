import { useTranslation } from 'react-i18next'
import { Plus } from 'lucide-react'
import { ListItem } from '../calendar/list-item'
import { Button } from '../ui/button'
import { ListItemSkeleton } from '../skeletons/list-item'
import { ErrorScreen } from '../error-screen'
import { useUserCalendars } from '@/hooks/use-user-calendars'
import { Route } from '@/routes/app/route'
import { DEFAULT_CALENDAR_COLORS } from '@/types/constants'

export const CalendarSettings = () => {
    const { t } = useTranslation()
    const state = Route.useLoaderData()
    const { data, isLoading, isError, error } = useUserCalendars(state.userId)

    return (
        <div className='flex h-fit w-full flex-col gap-y-2'>
            <p className='text-muted-foreground text-sm'>{t('appSettings.calendars.label')}</p>
            {isError && error && <ErrorScreen error={error} />}
            {isLoading && <ListItemSkeleton />}
            {data?.map((calendar) => (
                <ListItem
                    key={`calendar-item-${calendar.id}`}
                    name={calendar.name}
                    color={
                        calendar.color ??
                        DEFAULT_CALENDAR_COLORS[
                            Math.floor(Math.random() * DEFAULT_CALENDAR_COLORS.length)
                        ]
                    }
                />
            ))}
            {!isLoading && !isError && (
                <Button>
                    <Plus size={16} />
                    {t('appSettings.calendars.add')}
                </Button>
            )}
        </div>
    )
}
