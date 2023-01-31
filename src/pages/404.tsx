import type { NextPage } from 'next'
import { NotFound } from '@/Components/NotFound'
import { Navbar } from '@/Components/Navbar'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <NotFound />
    </>
  )
}

export default NotFoundPage
