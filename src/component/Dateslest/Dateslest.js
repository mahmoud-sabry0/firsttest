import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Img from"../../download.png"
export default function Dateslest({person}) {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8">
      <div className="rectangle p-2">
        {person.length ? (person.map((item)=>{
          return(
            
            <div key={item.id} className="d-flex border-bottom mx-3">
          <img className="img-avatar" src={ Img } alt="ccc"/>
          <div className="px-3">
          <p className="d-inline fs-5"> {item.name}</p>
          <p className="fs-6">{item.data}</p>
          </div>
         
        </div>
          )
        })):<h2>لا يوجد بينات</h2>}
      </div>
    </Col>
  </Row>
  )
}
