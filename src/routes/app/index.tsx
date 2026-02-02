import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { IS_DESKTOP } from '@/types/constants'
import { useMediaQuery } from '@/utils/use-media-query'

export const Route = createFileRoute('/app/')({
    component: RouteComponent,
})

function RouteComponent() {
    const isDesktop = useMediaQuery(IS_DESKTOP)
    const navigate = useNavigate()

    if (isDesktop)
        return navigate({
            to: '/app/summary',
            search: (prev) => prev,
        })

    return <></>
}
