import { Outlet, createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Menu } from 'lucide-react'
import Drawer from '@/features/drawer'
import { authStateFn } from '@/functions/auth-state'
import { Button } from '@/features/ui/button'
import { Footer } from '@/features/footer'
import { Calendar } from '@/features/calendar'

export const Route = createFileRoute('/app')({
    component: RouteComponent,
    beforeLoad: async () => await authStateFn(),
})

function RouteComponent() {
    const { t } = useTranslation()

    return (
        <>
            <Calendar />
            <Drawer
                trigger={
                    <div className='fixed bottom-4 left-0 w-full px-4 md:hidden'>
                        <Button suppressHydrationWarning className='w-full'>
                            <Menu />
                            {t('menu')}
                        </Button>
                    </div>
                }
            >
                <Outlet />
                <Footer withoutFixed visibleOnMobile />
            </Drawer>
        </>
    )
}
