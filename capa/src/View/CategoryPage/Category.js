import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './red.css';

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
`;

const Category = () => {
  const [Method, setMethod] = useState('');

  const handleCheckBoxMethod = () => {
    axios.get('http://localhost:4000/requests').then((res) => {
      let filtered = res.data.map((el) => el.method).flat();
      let filteredData = filtered.filter((el, i) => filtered.indexOf(el) === i);
      console.log(filteredData);
    });
  };

  useEffect(() => {
    handleCheckBoxMethod();
  }, []);

  return (
    <CategoryContainer>
      <h2>들어온 요청</h2>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      <form>
        <div className="method checkbox">
          <input
            type="checkbox"
            id="method__title__input"
            className="method__button"
            style={{ display: 'none' }}
          />
          <label htmlFor="method__title__input" className="method__input">
            <div className="method__title">가공방식</div>
            <FontAwesomeIcon className="method__arrow" icon={faSortDown} />
          </label>
          <div className="method__body">
            <input type="checkbox" id="method__body__checkbox" />
            <label htmlFor="method__body__checkbox" className="method__label">
              ㅋㅋㅋ
            </label>
          </div>
        </div>
      </form>
    </CategoryContainer>
  );
};

export default Category;
