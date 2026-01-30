import { useQuery } from '@tanstack/react-query'
import { getCalendars } from '@/functions/calendar/get-calendars'
import { QUERY_KEYS } from '@/types/constants'

export const useUserCalendars = (userId: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QUERY_KEYS.USER_CALENDARS, userId],
        queryFn: () => getCalendars({ data: { userId } }),
    })

    return { data, isLoading, isError, error }
}
