import * as React from 'react'

import PageHead from '../components/pagehead'
import '../styles/mystyle.scss'

const Page = ({ children }) => {
  return (
    <>
      <PageHead />
      {children}
    </>
  )
}

export default Page
