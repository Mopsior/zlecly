import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useDrawerData } from '@/hooks/use-drawer-data'

export const Route = createFileRoute('/app/summary/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { t } = useTranslation()

    useDrawerData({
        title: t('summaryDrawer'),
        isTitleVisible: false,
        description: t('summaryDrawerContent'),
        isDescriptionVisible: true,
    })

    return <></>
}
