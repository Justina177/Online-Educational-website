import React from 'react';
import { Container } from "reactstrap";



const Header = () => {
  return (
    <section>
      <Container>
        <div className="navgation">
          <div className="logo">
            <h2>
              <i className="ri-pentone"></i> LeTech.
            </h2>
          </div>

          <div className="nav">
            <div className="nav__menu">
              <ul className="nal-list">
                <li className="nav__item">
                  <a href="home">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      
    </section>
  )
}

export default Header
