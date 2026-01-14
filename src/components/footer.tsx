import { Trans, useTranslation } from 'react-i18next'
import { InlineCode } from './inline-code'
import { ExternalLink } from './external-link'
import { env } from '@/env'

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <div className='text-muted-foreground fixed bottom-4 left-1/2 -translate-x-1/2 transform text-center text-sm'>
            <Trans
                i18nKey={'footer.build'}
                components={{
                    b: <b />,
                    code: <InlineCode />,
                    repoUrl: <ExternalLink to={env.VITE_REPO} withUnderline />,
                    commitUrl: import.meta.env.SOURCE_COMMIT ? (
                        <ExternalLink
                            to={`${env.VITE_REPO}/commit/${import.meta.env.SOURCE_COMMIT}`}
                            withUnderline
                        />
                    ) : (
                        <></>
                    ),
                }}
                values={{
                    buildType: import.meta.env.PROD
                        ? t('footer.buildType.prod')
                        : t('footer.buildType.dev'),
                    buildHash: import.meta.env.SOURCE_COMMIT ?? t('footer.buildType.dev'),
                }}
            />
        </div>
    )
}
