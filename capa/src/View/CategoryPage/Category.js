import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MethodCategory from './Sections/MethodCategory';
import MaterialCategory from './Sections/MaterialCategory';

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
  > .category {
    display: flex;
    position: relative;
    > .filtering {
      position: absolute;
      top: 0.3rem;
      left: 13rem;
      margin-left: 25px;
      color: #58b0f6;
      font-size: 11px;
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

  const handleFilterClick = () => {
    handleCheckBoxMethod();
  };

  return (
    <CategoryContainer>
      <h2>들어온 요청</h2>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <div className="category">
        <MethodCategory Method={Method} />
        <MaterialCategory Material={Material} />
        <div className="filtering" onClick={handleFilterClick}>
          <FontAwesomeIcon icon={faRedoAlt} className="reset" />
          필터링 리셋
        </div>
      </div>
    </CategoryContainer>
  );
};

export default Category;
