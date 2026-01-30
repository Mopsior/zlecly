import { ChartNoAxesColumn, Share2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@tanstack/react-router'
import { UserButton } from '../clerk/user-button'
import { Tabs as ShadTabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Tabs = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div className='relative flex w-full justify-center'>
            <ShadTabs>
                <TabsList>
                    <TabsTrigger
                        value={'summary'}
                        onClick={() => navigate({ to: '/app/summary', search: (prev) => prev })}
                    >
                        <ChartNoAxesColumn />
                        <span className='not-lg:hidden'>{t('tabs.summary')}</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value={'share'}
                        onClick={() => navigate({ to: '/app/share', search: (prev) => prev })}
                    >
                        <Share2 />
                        <span className='not-lg:hidden'>{t('tabs.share')}</span>
                    </TabsTrigger>
                </TabsList>
            </ShadTabs>
            <div className='fixed top-13 right-8 -translate-y-1/2 transform'>
                <UserButton />
            </div>
        </div>
    )
}
