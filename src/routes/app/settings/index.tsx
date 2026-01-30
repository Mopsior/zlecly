import { createFileRoute } from '@tanstack/react-router'
import { CalendarSettings } from '@/features/settings/calendar'

export const Route = createFileRoute('/app/settings/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <CalendarSettings />
        </>
    )
}
