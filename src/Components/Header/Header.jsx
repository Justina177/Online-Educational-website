import React from 'react';
import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

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
                  {navLinks.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))}
                </li>
              </ul>
            </div>
            <div className="nav__right">
              <p><i className="ri-phone-line"></i>+234 87654321</p>
            </div>
          </div>
        </div>
      </Container>
      
    </section>
  )
}

export default Header
