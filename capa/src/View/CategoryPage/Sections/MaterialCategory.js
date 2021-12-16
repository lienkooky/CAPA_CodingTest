import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MaterialContainer = styled.div`
  .material {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-family: Inter, sans-serif;
  }

  .material__input {
    display: flex;
    position: relative;
    padding: 5px 8px;
    width: 73px;
    height: 17px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #939fa5;
    border-radius: 5px;
    cursor: pointer;
  }

  .material__input:hover {
    border: 1px solid #acd7fa;
  }

  .material__title {
    font-size: 12px;
    line-height: 16px;
    color: #333;
  }
  .material__arrow {
    font-size: 20px;
    margin-top: -0.5rem;
    color: #939fa5;
    text-align: center;
  }
  .material__body {
    margin-top: 0.2rem;
    padding: 5px 10px;
    width: 130px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border: 1px solid #939fa5;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .material__label {
    font-size: 0.9rem;
    padding-left: 0.2rem;
    cursor: pointer;
  }

  #material__body__checkbox {
    display: inline-block;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
`;

const MaterialCategory = ({ Material }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const [Checked, setChecked] = useState([]);

  const handleMaterialClick = () => {
    const materialTitle = document.querySelector('.material__input');
    const materialText = document.querySelector('.material__title');
    const materialArrow = document.querySelector('.material__arrow');

    setIsOpen(!IsOpen);

    if (!IsOpen) {
      materialTitle.style.backgroundColor = '#1464c0';
      materialText.style.color = '#fff';
      materialArrow.style.color = '#fff';
    } else {
      materialTitle.style.backgroundColor = 'transparent';
      materialText.style.color = '#333';
      materialArrow.style.color = '#939fa5';
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
    <MaterialContainer>
      <form>
        <div className="material checkbox">
          <input
            type="checkbox"
            id="material__title__input"
            className="material__button"
            style={{ display: 'none' }}
            onClick={handleMaterialClick}
          />
          <label htmlFor="material__title__input" className="material__input">
            <div className="material__title">
              재료{IsOpen ? `(${Checked.length})` : null}
            </div>
            <FontAwesomeIcon className="material__arrow" icon={faSortDown} />
          </label>
          {IsOpen === true ? (
            <div className="material__body">
              {Material.map((el, i) => {
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      id="material__body__checkbox"
                      value={el}
                      onChange={(e) => handleSingleCheck(e.target.checked, el)}
                      checked={Checked.includes(el) ? true : false}
                    />
                    <label
                      htmlFor="material__body__checkbox"
                      className="material__label"
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
    </MaterialContainer>
  );
};

export default MaterialCategory;
