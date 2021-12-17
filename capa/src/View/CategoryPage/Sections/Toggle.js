import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    transition: all 0.2s ease;
    &.toggle--checked {
      background-color: #4000c7;
    }
  }
  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fafafa;
    transition: all 0.25s ease;
    &.toggle--checked {
      left: 27px;
    }
  }
  > span {
    margin-left: 20px;
  }
`;

const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

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
