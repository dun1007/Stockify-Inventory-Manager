import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faQuestion,
  faTable,
  faWarehouse,
  faTruck,
  faAlignRight,
  faCommentDollar,
  faIdCard
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Navbar, Button } from "react-bootstrap";
import classNames from "classnames";


class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <div className="sidebar-title">
            <h1>Stockify!</h1>
            <img src={require('./beta-tag.png')} alt="Beta Tag" className="beta-tag"/>
          </div>
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="ms-auto"
          >
            <FontAwesomeIcon icon={faAlignRight} className="mr-2" />
          </Button>
        </div>

        <Navbar bg="grey" variant="dark" className="h-30">
          <Nav className="flex-column ml-auto">
            {/*<Nav.Link href="/Dashboard">
              <FontAwesomeIcon icon={faTable} className="ms-3" /> Welcome
            </Nav.Link>*/}
            <Nav.Link href="/UserGuide">
              <FontAwesomeIcon icon={faQuestion} className="ms-3" /> User Guide
            </Nav.Link>
            
            <Nav.Link href="/Inventory">
              <FontAwesomeIcon icon={faWarehouse} className="ms-3" /> Inventory
            </Nav.Link>

            <Nav.Link href="/Order">
              <FontAwesomeIcon icon={faTruck} className="ms-3" /> Manage Order
            </Nav.Link>

            <Nav.Link href="/Sales">
              <FontAwesomeIcon icon={faCommentDollar} className="ms-3" /> Sales
            </Nav.Link>

            <Nav.Link href="/Employees">
              <FontAwesomeIcon icon={faIdCard} className="ms-3" /> Employees
            </Nav.Link>
        
            <Nav.Link href="/Contact">
              <FontAwesomeIcon icon={faPaperPlane} className="ms-3" /> Contact
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SideBar;
