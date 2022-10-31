import { Navbar } from '@/Components/Navbar'
import { ReactNode } from 'react'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
