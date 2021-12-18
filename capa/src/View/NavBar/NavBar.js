import React from 'react';
import styled from 'styled-components';
import { faGopuram } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
  @media (max-width: 600px) {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0.8rem;

    > .navbar__left {
      display: flex;
      align-items: center;
      margin-left: 60px;
      > .navbar__logo {
        font-size: 1.1rem;
        font-weight: bold;
        margin-right: 0.3rem;
      }
      > .navbar__name {
        font-size: 0.9rem;
      }
    }
    .navbar__right {
      display: none;
    }
  }
`;

const Navbar = () => {
  const handleSideBarClick = () => {
    const sidebarBox = document.querySelector('#box');
    const pageWrapper = document.querySelector('#page-wrapper');
    sidebarBox.classList.toggle('active');
    pageWrapper.classList.toggle('active');
  };
  const handlePageWrapperClick = () => {
    const sidebarBox = document.querySelector('#box');
    const pageWrapper = document.querySelector('#page-wrapper');
    sidebarBox.classList.remove('active');
    pageWrapper.classList.remove('active');
  };

  return (
    <>
      <NavBar>
        <SideBar>
          <div id="page-wrapper" onClick={handlePageWrapperClick}></div>
          <div id="btn">
            <FontAwesomeIcon icon={faBars} onClick={handleSideBarClick} />
          </div>
          <div id="box">
            <div id="items">
              <div className="item__title">
                <div className="item__logo">CAPA</div>
                <div className="item__name"> 파트너스</div>
              </div>
              <div class="item">
                <FontAwesomeIcon
                  icon={faGopuram}
                  style={{ paddingRight: '10px' }}
                />
                파트너정밀가공
              </div>
              <div class="item">로그아웃</div>
            </div>
          </div>
        </SideBar>

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

const SideBar = styled.div`
  box-sizing: border-box;

  #page-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
  #page-wrapper.active {
    left: 70%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  #btn {
    position: fixed;
    z-index: 1;
    top: 15px;
    left: 15px;
    cursor: pointer;
  }

  #box {
    position: fixed;
    z-index: 4;
    top: 0px;
    left: -70%;
    width: 70%;
    height: 100vh;
    background-color: #fff;
    color: #fff;
    transition: all 0.3s ease;
  }

  #box.active {
    left: 0;
  }

  #items {
    position: relative;
    .item__title {
      display: flex;
      align-items: center;
      font-size: 16px;
      padding: 0.8rem 20px;
      color: #2698f3;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
      .item__logo {
        font-weight: 900;
        padding-right: 2px;
      }
      .item__name {
        font-size: 14px;
      }
    }
    .item {
      position: relative;
      padding-top: 40px;
      padding-left: 30px;
      cursor: pointer;
      color: #000;
      &:last-child {
        padding-top: 30px;
      }
    }
  }
`;
