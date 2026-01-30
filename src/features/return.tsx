import { useTranslation } from 'react-i18next'
import { Undo2 } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import type { FileRouteTypes } from '@/routeTree.gen'

export const Return = ({ to }: { to: FileRouteTypes['to'] }) => {
    const { t } = useTranslation()

    return (
        <div className='h-fit w-full'>
            <Link to={to} search={(prev) => prev}>
                <Button variant='ghost' className='text-muted-foreground'>
                    <Undo2 />
                    {t('return')}
                </Button>
            </Link>
        </div>
    )
}
