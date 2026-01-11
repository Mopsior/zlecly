import { Outlet, createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import Drawer from '@/components/vaul'
import { authStateFn } from '@/functions/auth-state'

export const Route = createFileRoute('/app')({
    component: RouteComponent,
    beforeLoad: async () => await authStateFn(),
    loader: async ({ context }) => {
        return { userId: context.userId }
    },
})

function RouteComponent() {
    const state = Route.useLoaderData()
    const { t } = useTranslation()

    return (
        <div>
            {t('hello')} {state.userId}!
            <Drawer trigger={<>{t('openDrawer')}</>}>
                <Outlet />
            </Drawer>
        </div>
    )
}
