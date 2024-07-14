import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Img from "./download.png";
import { person } from "./component/Data/Data";
import Datescount from "./component/Datescount/Datescount";
import Dateslest from "./component/Dateslest/Dateslest";
import Datesaction from "./component/Datesaction/Datesaction";
import { useEffect, useState } from "react";
function App() {
const  [personData,setpersonData]=useState(person)
const onDelete=()=>{
  setpersonData([])
}
const onViewData=()=>{
  setpersonData(person)
}
useEffect(()=>{
  setpersonData([])
},[])
  return (
    <>
      <div>
        <Container className="py-5 ">
          <Datescount person={personData}/>
          <Dateslest person={personData}/>
           <Datesaction deleteData={ onDelete } onViewData={onViewData}/>
         

          
        </Container>
      </div>
    </>
  );
}

export default App;
