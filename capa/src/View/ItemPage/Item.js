import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 1540px;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .item__wrap {
    width: 32.6%;
    padding: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    box-sizing: border-box;

    &:nth-child(3n + 1) {
      margin-right: 0.5%;
    }
    &:nth-child(3n) {
      margin-right: 0;
      margin-left: 0.5%;
    }
    &:nth-child(1) {
      margin-bottom: 1%;
    }
    &:nth-child(2) {
      margin: 0 0.5% 1%;
    }
    &:nth-child(3) {
      margin-bottom: 1%;
    }
    &:nth-child(5) {
      margin: 0 0.5%;
    }
  }
  .item__title {
    display: flex;
    flex-direction: column;
    position: relative;
    > h3 {
      padding-top: 10px;
      margin: 0;
    }
    .item__counselling {
      position: absolute;
      top: 0;
      right: 0;
      padding: 3px 6px;
      margin-top: 10px;
      font-size: 12px;
      font-weight: bold;
      border: 1.5px solid #ffa611;
      border-radius: 20px;
      color: #ffa611;
      &.control {
        display: none;
      }
    }
    .item__customer {
      padding-top: 15px;
    }
    .item__time {
      padding: 30px 0 50px 0;
      color: #999;
      &::after {
        content: '';
        position: absolute;
        top: 10rem;
        left: 0;
        width: 100%;
        border: 1px solid #f2f2f2;
      }
    }
  }
  .item__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 30px;
    > .item__content__name {
      display: flex;
      flex-direction: column;
      padding-right: 50px;
      > span {
        padding: 5px 0;
      }
    }
    > .item__content__amount {
      display: flex;
      flex-direction: column;
      > span {
        padding: 5px 0;
        font-weight: bold;
      }
    }
  }
  .item__btn {
    padding-top: 30px;
    padding-bottom: 5px;
    > .item__btn__more {
      padding: 7px 12px;
      margin-right: 10px;
      border-radius: 5px;
      font-weight: bold;
      background-color: #2096f3;
      border: 1px solid #2096f3;
      color: #fff;
      cursor: pointer;
    }
    > .item__btn__chat {
      padding: 7px 12px;
      border-radius: 5px;
      font-weight: bold;
      background-color: transparent;
      border: 1px solid #2096f3;
      color: #2096f3;
      cursor: pointer;
    }
  }
`;

const Item = ({ AllData, isOn, MethodChecked, MaterialChecked }) => {
  const [PlusData, setPlusData] = useState([]);
  const [Data, setData] = useState([]);
  const Filtered = AllData.map((el) => {
    return {
      id: el.id,
      title: el.title,
      status: el.status,
      client: el.client,
      due: el.due,
      count: el.count,
      amount: el.amount,
      method: el.method,
      material: el.material,
    };
  });

  useEffect(() => {
    setPlusData([...MaterialChecked, ...MethodChecked]);
  }, [MaterialChecked, MethodChecked]);

  useEffect(() => {
    let result = [...Filtered];
    result = result.filter((el) => {
      for (let i = 0; i < PlusData.length; i++) {
        if (PlusData[i] === '') continue;
        if (PlusData[i] === el.method[i]) return el;
        if (PlusData[i] === el.material[i]) return el;
        if (PlusData[i] === el.method[i] && PlusData[i] === el.material)
          return el;
      }
    });
    setData(result);
  }, [PlusData]);

  // 가공방식이 2개 이상일 경우
  const longMethod = Data.map((el) => {
    let result = [];
    if (el.method.length > 1) {
      result.push(el.method);
    }
    return result[0];
  });

  const longMaterial = Data.map((el) => {
    let result = [];
    if (el.material.length > 1) {
      result.push(el.material);
    }
    return result[0];
  });

  const ItemTemplate = Data.map((el) => {
    return (
      <div className="item__wrap" key={el.id}>
        <div className="item__title">
          <h3>{el.title}</h3>
          <span
            className={
              el.status === '대기중'
                ? 'item__counselling control'
                : 'item__counselling'
            }
          >
            {el.status}
          </span>
          <span className="item__customer">{el.client}</span>
          <span className="item__time">{el.due}까지 납기</span>
        </div>
        <div className="item__content">
          <div className="item__content__name">
            <span>도면개수</span>
            <span>총 수량</span>
            <span>가공방식</span>
            <span>재료</span>
          </div>
          <div className="item__content__amount">
            <span>{el.count}개</span>
            <span>{el.amount}개</span>
            <span>
              {el.method.length > 1 ? longMethod[0].join(', ') : el.method}
            </span>
            <span>
              {el.material.length > 1
                ? longMaterial[1].join(', ')
                : el.material}
            </span>
          </div>
        </div>
        <div className="item__btn">
          <button className="item__btn__more">요청 내역 보기</button>
          <button className="item__btn__chat">채팅하기</button>
        </div>
      </div>
    );
  });

  return (
    <ItemContainer>
      {isOn
        ? Data.map((el) => {
            if (el.status === '상담중') {
              return (
                <div className="item__wrap" key={el.id}>
                  <div className="item__title">
                    <h3>{el.title}</h3>
                    <span className="item__counselling">{el.status}</span>
                    <span className="item__customer">{el.client}</span>
                    <span className="item__time">{el.due}까지 납기</span>
                  </div>
                  <div className="item__content">
                    <div className="item__content__name">
                      <span>도면개수</span>
                      <span>총 수량</span>
                      <span>가공방식</span>
                      <span>재료</span>
                    </div>
                    <div className="item__content__amount">
                      <span>{el.count}개</span>
                      <span>{el.amount}개</span>
                      <span>
                        {el.method.length > 1
                          ? longMethod[0].join(', ')
                          : el.method}
                      </span>
                      <span>
                        {el.material.length > 1
                          ? longMaterial[1].join(', ')
                          : el.material}
                      </span>
                    </div>
                  </div>
                  <div className="item__btn">
                    <button className="item__btn__more">요청 내역 보기</button>
                    <button className="item__btn__chat">채팅하기</button>
                  </div>
                </div>
              );
            }
          })
        : ItemTemplate}
    </ItemContainer>
  );
};

export default Item;
