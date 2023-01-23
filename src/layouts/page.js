import * as React from 'react'
import Head from '../components/pagehead'
import PageFooter from '../components/pagefooter'

import '../styles/mystyle.scss'

const Page = ({ children }) => {
  return (
    <>
      <Head />
      {children}
      <PageFooter />
    </>
  )
}

export default Page
