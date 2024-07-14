import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Datescount({person}) {
  return (
    <Row className="justify-content-center">
            <Col sm="8">لديك { person.length} مواعيد اليوم</Col>
          </Row>
  )
}
