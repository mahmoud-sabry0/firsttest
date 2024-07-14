import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Datesaction({deleteData ,onViewData}) {
  return (
    <Row className="justify-content-center my-2">
            <Col sm="8" className="d-flex justify-content-between ">
              <button onClick={deleteData} className="btn-style p-2">مسح الكل</button>
              <button onClick={onViewData} className="btn-style p-2">عرض البينات</button>
            </Col>
          </Row>
  )
}
