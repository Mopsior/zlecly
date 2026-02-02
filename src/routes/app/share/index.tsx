import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/share/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div></div>
}
