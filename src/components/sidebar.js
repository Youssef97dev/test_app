import React from "react";
import {Nav} from "react-bootstrap";
//import '../pages/style/Dashboard.css'
import {BiBorderAll} from "react-icons/bi";
import { HiCloud } from "react-icons/hi";
import {BsFillPersonFill} from  "react-icons/bs";
import './sidebar.css'

const Sidebar = () => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>

                
            <Nav.Item>
                <Nav.Link href="#" style={{textDecoration: "none", color:"white"}}><BiBorderAll size={34} /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" style={{textDecoration: "none", color:"white"}}> <HiCloud size={34}  /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" style={{textDecoration: "none", color:"white"}}><BsFillPersonFill size={34}  /></Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  ;
  export default Sidebar