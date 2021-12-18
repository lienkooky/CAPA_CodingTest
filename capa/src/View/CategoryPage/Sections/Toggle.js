import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  > .toggle-container {
    width: 40px;
    height: 14px;
    border-radius: 30px;
    background-color: #c2c2c2;
    transition: all 0.2s ease;
    &.toggle--checked {
      background-color: #badefb;
    }
  }
  > .toggle-circle {
    position: absolute;
    top: 4px;
    left: -1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    transition: all 0.25s ease;
    box-sizing: border-box;
    &.toggle--checked {
      left: 18px;
      background-color: #2096f3;
      border: 1px solid #2096f3;
    }
  }
  > span {
    margin-left: 20px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 50%;
    > .toggle-circle {
      position: absolute;
      top: -1px;
      left: -1px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #eee;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
      transition: all 0.25s ease;
      box-sizing: border-box;
    }
    > span {
      margin-left: 15px;
    }
  }
`;

const Toggle = ({ toggleHandler, isOn }) => {
  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div
          className={
            isOn ? 'toggle-container toggle--checked' : 'toggle-container'
          }
        />
        <div
          className={isOn ? 'toggle-circle toggle--checked' : 'toggle-circle'}
        />
        <span>상담 중인 요청만 보기</span>
      </ToggleContainer>
    </>
  );
};

export default Toggle;
