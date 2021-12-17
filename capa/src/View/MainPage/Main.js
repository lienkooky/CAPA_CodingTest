import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Category from '../CategoryPage/Category';
import Item from '../ItemPage/Item';
import axios from 'axios';

const Main = () => {
  const [AllData, setAllData] = useState([]);
  const [isOn, setisOn] = useState(false);

  useEffect(() => {
    handleAllData();
  }, []);

  // toggle
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  const handleAllData = () => {
    axios.get('http://localhost:4000/requests').then((res) => {
      setAllData(res.data);
    });
  };

  return (
    <>
      <NavBar />
      <Category toggleHandler={toggleHandler} isOn={isOn} />
      <Item AllData={AllData} isOn={isOn} />
    </>
  );
};

export default Main;
