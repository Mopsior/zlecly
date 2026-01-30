import { useLocation } from '@tanstack/react-router'
import { Return } from '../return'
import { Tabs } from './tabs'
import type { ReactNode } from 'react'

const tabsVisible = ['/app/summary', '/app/share']

export const SidebarWrapper = ({ children }: { children: ReactNode }) => {
    const location = useLocation()

    return (
        <div className='flex h-full w-full flex-col items-center gap-6 py-8 pr-8 not-md:hidden'>
            {tabsVisible.includes(location.pathname) ? <Tabs /> : <Return to='/app/summary' />}
            {children}
        </div>
    )
}
