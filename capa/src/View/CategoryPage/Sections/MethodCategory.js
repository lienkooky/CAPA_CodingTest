import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MethodContainer = styled.div`
  margin-right: 10px;
  .method {
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    height: 30px;
    font-family: Inter, sans-serif;
  }

  .method__input {
    display: flex;
    padding: 5px 8px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #939fa5;
    border-radius: 5px;
    cursor: pointer;
  }

  .method__input:hover {
    border: 1px solid #acd7fa;
  }

  .method__title {
    font-size: 12px;
    line-height: 16px;
    color: #333;
  }
  .method__arrow {
    font-size: 20px;
    margin-top: -0.5rem;
    color: #939fa5;
    text-align: center;
  }
  .method__body {
    margin-top: 0.2rem;
    padding: 5px 10px;
    width: 130px;
    max-height: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border: 1px solid #939fa5;
    border-radius: 5px;
    cursor: pointer;
  }

  .method__label {
    font-size: 0.9rem;
    padding-left: 0.2rem;
    cursor: pointer;
  }

  #method__body__checkbox {
    display: inline-block;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;

const MethodCategory = ({ Method, handleFilterClick }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const [Checked, setChecked] = useState([]);

  const handleMethodClick = () => {
    const methodTitle = document.querySelector('.method__input');
    const methodText = document.querySelector('.method__title');
    const methodArrow = document.querySelector('.method__arrow');

    setIsOpen(!IsOpen);

    if (!IsOpen) {
      methodTitle.style.backgroundColor = '#1464c0';
      methodText.style.color = '#fff';
      methodArrow.style.color = '#fff';
    } else {
      methodTitle.style.backgroundColor = 'transparent';
      methodText.style.color = '#333';
      methodArrow.style.color = '#939fa5';
    }
  };

  const handleSingleCheck = useCallback(
    (checked, list) => {
      if (checked) {
        setChecked([...Checked, list]);
      } else {
        setChecked(Checked.filter((el) => el !== list));
      }
    },
    [Checked]
  );

  return (
    <MethodContainer>
      <form>
        <div className="method checkbox">
          <input
            type="checkbox"
            id="method__title__input"
            className="method__button"
            style={{ display: 'none' }}
            onClick={handleMethodClick}
          />
          <label htmlFor="method__title__input" className="method__input">
            <div className="method__title">
              가공방식
              {Checked.length !== 0 ? `(${Checked.length})` : null}
            </div>
            <FontAwesomeIcon className="method__arrow" icon={faSortDown} />
          </label>
          {IsOpen === true ? (
            <div className="method__body">
              {Method.map((el, i) => {
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      id="method__body__checkbox"
                      value={el}
                      onChange={(e) => handleSingleCheck(e.target.checked, el)}
                      checked={Checked.includes(el) ? true : false}
                      onClick={handleFilterClick}
                    />
                    <label
                      htmlFor="method__body__checkbox"
                      className="method__label"
                    >
                      {el}
                    </label>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </form>
    </MethodContainer>
  );
};

export default MethodCategory;
