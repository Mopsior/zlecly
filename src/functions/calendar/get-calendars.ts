import { createServerFn } from '@tanstack/react-start'
import z from 'zod'
import { eq } from 'drizzle-orm'
import { calendars as calendarsSchema } from '@/db/schema'
import { db } from '@/db'

const GetCalendarSchema = z.object({
    userId: z.string(),
})

export const getCalendars = createServerFn({ method: 'GET' })
    .inputValidator(GetCalendarSchema)
    .handler(async ({ data }) => {
        const calendars = await db
            .select()
            .from(calendarsSchema)
            .where(eq(calendarsSchema.userId, data.userId))

        return calendars
    })
