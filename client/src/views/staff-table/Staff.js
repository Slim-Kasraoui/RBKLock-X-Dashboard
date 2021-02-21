import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
// import createStaff from '../../actions/staffActions'


import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

import usersData from '../users/UsersData'
import { connect } from 'react-redux'

import staffActions, { createStaff } from '../../redux/actions/staffActions'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = [{ key: 'name', _classes: 'font-weight-bold' }, 'registered', 'role', 'status']

const Staff = (props) => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  const [staff, setStaff] = useState([1,2,3,4,5,6,7])


  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])


  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            {/* <CCardHeader>
              Staff List
            </CCardHeader> */}
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={7}
                pagination
                clickableRows
                onRowClick={(item) => history.push(`/users/${item.id}`)}
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>

          <CButton active block color="primary" aria-pressed="true" onClick={() => {
            console.log('hi');
            setStaff([...staff, 8])

            props.addStaff(8)
            console.log(staff)
            console.log(props.staff.staffReducer)
          }}>Primary</CButton>
        </CCol>
      </CRow>

    </>
  )
}

const mapStateToProps = (staff) => {
  console.log("mapState====", staff);
  return {
    staff: staff
  }
}

const mapDistpatchToProps = (dispatch) => {

  return {
    addStaff: (value) => dispatch(createStaff(value))
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Staff)
