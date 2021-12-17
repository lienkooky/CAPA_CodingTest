import React from 'react';
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

const Item = () => {
  return (
    <ItemContainer>
      <div className="item__wrap">
        <div className="item__title">
          <h3>제목이 들어갑니다.</h3>
          <span className="item__counselling">상담중</span>
          <span className="item__customer">고객사가 들어갑니다.</span>
          <span className="item__time">2021. 01. 10까지 납기</span>
        </div>
        <div className="item__content">
          <div className="item__content__name">
            <span>도면개수</span>
            <span>총 수량</span>
            <span>가공방식</span>
            <span>재료</span>
          </div>
          <div className="item__content__amount">
            <span>2개</span>
            <span>100개</span>
            <span>밀링, 선반</span>
            <span>알류미늄</span>
          </div>
        </div>
        <div className="item__btn">
          <button className="item__btn__more">요청 내역 보기</button>
          <button className="item__btn__chat">채팅하기</button>
        </div>
      </div>
      <div className="item__wrap">
        <div className="item__title">
          <h3>제목이 들어갑니다.</h3>
          <span className="item__counselling">상담중</span>
          <span className="item__customer">고객사가 들어갑니다.</span>
          <span className="item__time">날짜가 들어갑니다.</span>
        </div>
        <div className="item__content">
          <div className="item__content__name">
            <span>도면개수</span>
            <span>총 수량</span>
            <span>가공방식</span>
            <span>재료</span>
          </div>
          <div className="item__content__amount">
            <span>2개</span>
            <span>100개</span>
            <span>밀링, 선반</span>
            <span>알류미늄</span>
          </div>
        </div>
        <div className="item__btn">
          <button className="item__btn__more">요청 내역 보기</button>
          <button className="item__btn__chat">채팅하기</button>
        </div>
      </div>
      <div className="item__wrap">
        <div className="item__title">
          <h3>제목이 들어갑니다.</h3>
          <span className="item__counselling">상담중</span>
          <span className="item__customer">고객사가 들어갑니다.</span>
          <span className="item__time">날짜가 들어갑니다.</span>
        </div>
        <div className="item__content">
          <div className="item__content__name">
            <span>도면개수</span>
            <span>총 수량</span>
            <span>가공방식</span>
            <span>재료</span>
          </div>
          <div className="item__content__amount">
            <span>2개</span>
            <span>100개</span>
            <span>밀링, 선반</span>
            <span>알류미늄</span>
          </div>
        </div>
        <div className="item__btn">
          <button className="item__btn__more">요청 내역 보기</button>
          <button className="item__btn__chat">채팅하기</button>
        </div>
      </div>
      <div className="item__wrap">
        <div className="item__title">
          <h3>제목이 들어갑니다.</h3>
          <span className="item__counselling">상담중</span>
          <span className="item__customer">고객사가 들어갑니다.</span>
          <span className="item__time">날짜가 들어갑니다.</span>
        </div>
        <div className="item__content">
          <div className="item__content__name">
            <span>도면개수</span>
            <span>총 수량</span>
            <span>가공방식</span>
            <span>재료</span>
          </div>
          <div className="item__content__amount">
            <span>2개</span>
            <span>100개</span>
            <span>밀링, 선반</span>
            <span>알류미늄</span>
          </div>
        </div>
        <div className="item__btn">
          <button className="item__btn__more">요청 내역 보기</button>
          <button className="item__btn__chat">채팅하기</button>
        </div>
      </div>
      <div className="item__wrap">
        <div className="item__title">
          <h3>제목이 들어갑니다.</h3>
          <span className="item__counselling">상담중</span>
          <span className="item__customer">고객사가 들어갑니다.</span>
          <span className="item__time">날짜가 들어갑니다.</span>
        </div>
        <div className="item__content">
          <div className="item__content__name">
            <span>도면개수</span>
            <span>총 수량</span>
            <span>가공방식</span>
            <span>재료</span>
          </div>
          <div className="item__content__amount">
            <span>2개</span>
            <span>100개</span>
            <span>밀링, 선반</span>
            <span>알류미늄</span>
          </div>
        </div>
        <div className="item__btn">
          <button className="item__btn__more">요청 내역 보기</button>
          <button className="item__btn__chat">채팅하기</button>
        </div>
      </div>
      <div className="item__wrap">
        <div className="item__title">
          <h3>제목이 들어갑니다.</h3>
          <span className="item__counselling">상담중</span>
          <span className="item__customer">고객사가 들어갑니다.</span>
          <span className="item__time">날짜가 들어갑니다.</span>
        </div>
        <div className="item__content">
          <div className="item__content__name">
            <span>도면개수</span>
            <span>총 수량</span>
            <span>가공방식</span>
            <span>재료</span>
          </div>
          <div className="item__content__amount">
            <span>2개</span>
            <span>100개</span>
            <span>밀링, 선반</span>
            <span>알류미늄</span>
          </div>
        </div>
        <div className="item__btn">
          <button className="item__btn__more">요청 내역 보기</button>
          <button className="item__btn__chat">채팅하기</button>
        </div>
      </div>
    </ItemContainer>
  );
};

export default Item;
