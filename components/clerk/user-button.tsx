'use client'

import { UserButton as ClerkUserButton } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import { Laptop, Moon, Sun } from 'lucide-react'

export const UserButton = () => {
    const { theme, setTheme } = useTheme()

    const handleChange = () => {
        switch (theme) {
            case 'light':
                setTheme('dark')
                break
            case 'dark':
                setTheme('system')
                break
            default:
                setTheme('light')
                break
        }
    }

    return (
        <ClerkUserButton>
            <ClerkUserButton.MenuItems>
                <ClerkUserButton.Action
                    label='Switch theme'
                    labelIcon={
                        theme === 'light' ? (
                            <Sun size={16} />
                        ) : theme === 'dark' ? (
                            <Moon size={16} />
                        ) : (
                            <Laptop size={16} />
                        )
                    }
                    onClick={() => handleChange()}
                />
            </ClerkUserButton.MenuItems>
        </ClerkUserButton>
    )
}
