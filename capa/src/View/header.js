import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
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
    position: relative;
    > .navbar__menu {
      padding: 0 20px;
    }
    > .navbar__menu::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 20px;
      color: #000;
    }
    > .navbar__logout {
      padding: 0 20px;
    }
  }
`;

const header = () => {
  return (
    <>
      <NavBar>
        <div className="navbar__left">
          <div className="navbar__logo">CAPA</div>
          <div className="navbar__name"> 파트너스</div>
        </div>
        <div className="navbar__right">
          <div className="navbar__menu">이미지 A 가공 업체</div>
          <div className="navbar__logout">로그아웃</div>
        </div>
      </NavBar>
    </>
  );
};

export default header;
