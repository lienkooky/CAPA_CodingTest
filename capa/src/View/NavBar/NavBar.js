import React from 'react';
import styled from 'styled-components';
import { faGopuram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = styled.div`
  position: relative;
  background-color: #4460bd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  color: #fff;
  > .navbar__left {
    display: flex;
    align-items: center;
    > .navbar__logo {
      font-size: 1.7rem;
      font-weight: bold;
      margin-right: 0.3rem;
    }
    > .navbar__name {
      font-size: 1.3rem;
    }
  }
  > .navbar__right {
    display: flex;
    align-items: center;

    > .navbar__menu {
      padding: 0 20px;
      border-right: 3px solid #fff;
      > .menu__icon {
        margin-right: 8px;
      }
    }

    > .navbar__logout {
      padding: 0 20px;
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <NavBar>
        <div className="navbar__left">
          <div className="navbar__logo">CAPA</div>
          <div className="navbar__name"> 파트너스</div>
        </div>
        <div className="navbar__right">
          <div className="navbar__menu">
            <FontAwesomeIcon icon={faGopuram} className="menu__icon" /> A 가공
            업체
          </div>
          <div className="navbar__logout">로그아웃</div>
        </div>
      </NavBar>
    </>
  );
};

export default Navbar;