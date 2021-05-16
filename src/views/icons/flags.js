import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { getIconsView } from './Brands.js'
import { flagSet } from '@coreui/icons'


const Flags = () => {
  return (
    <CCard>
      <CCardHeader>
        Flag Icons
        {/* <DocsLink href="https://github.com/coreui/coreui-icons" text="GitHub"/> */}
      </CCardHeader>
      <CCardBody>
        <CRow className="text-center">
          {getIconsView(flagSet)}
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default Flags
