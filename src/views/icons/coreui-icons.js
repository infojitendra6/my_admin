import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { getIconsView } from './Brands.js'


const CoreUIIcons = () => {
  return (
    <CCard>
      <CCardHeader>
        Free Icons / as CIcon{' '}

      </CCardHeader>
      <CCardBody>
        <CRow className="text-center">
          {getIconsView(freeSet)}
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default CoreUIIcons
