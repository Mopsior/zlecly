import { useTheme } from './theme-provider'
import { Toaster } from '@/components/ui/sonner'

export const ToasterWrapper = () => {
    const { userTheme } = useTheme()
    return <Toaster theme={userTheme} position='bottom-right' />
}
