import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Category from '../CategoryPage/Category';
import Item from '../ItemPage/Item';
import axios from 'axios';

const Main = () => {
  const [AllData, setAllData] = useState([]);
  const [isOn, setisOn] = useState(false);
  const [MethodChecked, setMethodChecked] = useState([]);
  const [MaterialChecked, setMaterialChecked] = useState([]);

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
      <Category
        AllData={AllData}
        toggleHandler={toggleHandler}
        isOn={isOn}
        MethodChecked={MethodChecked}
        setMethodChecked={setMethodChecked}
        MaterialChecked={MaterialChecked}
        setMaterialChecked={setMaterialChecked}
      />
      <Item
        AllData={AllData}
        isOn={isOn}
        MethodChecked={MethodChecked}
        MaterialChecked={MaterialChecked}
      />{' '}
    </>
  );
};

export default Main;
