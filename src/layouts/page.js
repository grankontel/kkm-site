import * as React from 'react'
import PageHead from '../components/pagehead'
import PageFooter from '../components/pagefooter'

import '../styles/mystyle.scss'

const Page = ({ children }) => {
  return (
    <>
      <PageHead />
      {children}
      <PageFooter />
    </>
  )
}

export default Page
