import { t } from 'i18next'
import z from 'zod'

export const formSchema = z.object({
    name: z
        .string()
        .min(1, t('appSettings.calendars.create.form.name.required'))
        .max(16, t('appSettings.calendars.create.form.name.maxLength')),
    color: z
        .string()
        .min(6)
        .max(6)
        .refine(
            (val) => /^([0-9A-F]{3}){1,2}$/i.test(val),
            t('appSettings.calendars.create.form.color.invalid'),
        ),
    salary: z
        .number()
        .positive(t('appSettings.calendars.create.form.salary.invalid'))
        .max(150, t('appSettings.calendars.create.form.salary.invalid'))
        .optional(),
})
