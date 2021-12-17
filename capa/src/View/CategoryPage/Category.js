import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Toggle from './Sections/Toggle';

const CategoryContainer = styled.div`
  width: 1540px;
  margin: 0 auto;
  > h2 {
    width: 100%;
    padding-top: 1rem;
  }
  > p {
    margin-top: -1rem;
  }
  .category__toggle {
    display: flex;
    justify-content: space-between;
  }
  .category {
    display: flex;
    position: relative;
    > .filtering {
      position: absolute;
      width: 50%;
      top: 0.3rem;
      left: 13rem;
      margin-left: 20px;
      color: #58b0f6;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
      > .reset {
        margin-right: 10px;
        color: #2096f3;
        font-size: 16px;
      }
    }
  }
`;

const Category = () => {
  const [Method, setMethod] = useState([]);
  const [Material, setMaterial] = useState([]);
  const [MethodIsOpen, setMethodIsOpen] = useState(false);
  const [MaterialIsOpen, setMaerialIsOpen] = useState(false);
  const [MethodChecked, setMethodChecked] = useState([]);
  const [MaterialChecked, setMaterialChecked] = useState([]);

  useEffect(() => {
    handleCheckBoxMethod();
  }, []);

  const handleCheckBoxMethod = () => {
    axios.get('http://localhost:4000/requests').then((res) => {
      // Method 구하기
      let filteredMethod = res.data.map((el) => el.method).flat();
      let filteredMethodData = filteredMethod.filter((el, i) => {
        return filteredMethod.indexOf(el) === i;
      });
      setMethod(filteredMethodData);

      // Material 구하기
      let filteredMaterial = res.data.map((el) => el.material).flat();
      let filteredMaterialData = filteredMaterial.filter((el, i) => {
        return filteredMaterial.indexOf(el) === i;
      });
      setMaterial(filteredMaterialData);
    });
  };

  // 전체 체크 클릭 시 발생하는 함수
  const handleAllCheck = useCallback(
    (checked) => {
      if (checked) {
        const MethodCheckedList = [];
        const MaterialCheckedList = [];
        Method.forEach((list) => MethodCheckedList.push(list));
        setMethodChecked(MethodCheckedList);
        Material.forEach((list) => MaterialCheckedList.push(list));
        setMaterialChecked(MaterialCheckedList);
      } else {
        setMethodChecked([]);
        setMaterialChecked([]);
      }
    },
    [Method, Material]
  );

  // Method 시작 부분

  const handleMethodClick = () => {
    const methodTitle = document.querySelector('.method__input');
    const methodText = document.querySelector('.method__title');
    const methodArrow = document.querySelector('.method__arrow');

    setMethodIsOpen(!MethodIsOpen);

    if (!MethodIsOpen) {
      methodTitle.style.backgroundColor = '#1464c0';
      methodText.style.color = '#fff';
      methodArrow.style.color = '#fff';
    } else {
      methodTitle.style.backgroundColor = 'transparent';
      methodText.style.color = '#333';
      methodArrow.style.color = '#939fa5';
    }
  };

  const handleSingleMethodCheck = useCallback(
    (checked, list) => {
      if (checked) {
        setMethodChecked([...MethodChecked, list]);
      } else {
        setMethodChecked(MethodChecked.filter((el) => el !== list));
      }
    },
    [MethodChecked]
  );

  // Material 시작 부분

  const handleMaterialClick = () => {
    const materialTitle = document.querySelector('.material__input');
    const materialText = document.querySelector('.material__title');
    const materialArrow = document.querySelector('.material__arrow');

    setMaerialIsOpen(!MaterialIsOpen);

    if (!MaterialIsOpen) {
      materialTitle.style.backgroundColor = '#1464c0';
      materialText.style.color = '#fff';
      materialArrow.style.color = '#fff';
    }
  };

  const handleSingleMaterialCheck = useCallback(
    (checked, list) => {
      if (checked) {
        setMaterialChecked([...MaterialChecked, list]);
      } else {
        setMaterialChecked(MaterialChecked.filter((el) => el !== list));
      }
    },
    [MaterialChecked]
  );
  return (
    <CategoryContainer>
      <h2>들어온 요청</h2>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <div className="category__toggle">
        <div className="category">
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
                    {MethodChecked.length !== 0
                      ? `(${MethodChecked.length})`
                      : null}
                  </div>
                  <FontAwesomeIcon
                    className="method__arrow"
                    icon={faSortDown}
                  />
                </label>
                {MethodIsOpen === true ? (
                  <div className="method__body">
                    {Method.map((el, i) => {
                      return (
                        <div key={i}>
                          <input
                            type="checkbox"
                            id="method__body__checkbox"
                            value={el}
                            onChange={(e) =>
                              handleSingleMethodCheck(e.target.checked, el)
                            }
                            checked={MethodChecked.includes(el) ? true : false}
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
                <label
                  htmlFor="material__title__input"
                  className="material__input"
                >
                  <div className="material__title">
                    재료
                    {MaterialChecked.length !== 0
                      ? `(${MaterialChecked.length})`
                      : null}
                  </div>
                  <FontAwesomeIcon
                    className="material__arrow"
                    icon={faSortDown}
                  />
                </label>
                {MaterialIsOpen === true ? (
                  <div className="material__body">
                    {Material.map((el, i) => {
                      return (
                        <div key={i}>
                          <input
                            type="checkbox"
                            id="material__body__checkbox"
                            value={el}
                            onChange={(e) =>
                              handleSingleMaterialCheck(e.target.checked, el)
                            }
                            checked={
                              MaterialChecked.includes(el) ? true : false
                            }
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
          <div
            className="filtering"
            onClick={(e) => handleAllCheck(e.target.checked)}
          >
            <FontAwesomeIcon icon={faRedoAlt} className="reset" />
            필터링 리셋
          </div>
        </div>
        <Toggle />
      </div>
    </CategoryContainer>
  );
};

export default Category;

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
