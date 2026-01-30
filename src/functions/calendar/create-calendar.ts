import { createServerFn } from '@tanstack/react-start'
import z from 'zod'

const CalendarSchema = z.object({})

export const createCalendar = createServerFn({ method: 'POST' }).inputValidator(CalendarSchema)
// .handler(async ({ data }) => {})
