# CAPA_CodingTest

🎭 2021.12.15(수)\_CAPA_codingTest

### 21.12.16

<br/>

> Error

- TypeError: Method.map is not a function.

> Solve

- useState쓸 때 initialValue 설정에 신경쓰자. initialValue와 State의 타입이 다르면 Error가 난다. Array면 []로, String이면 ""로 신경쓰기.
- https://www.pluralsight.com/guides/typeerror-handling-in-react.js-for-map-function

<br/>

> Problem

- checkbox를 선택함에 따라 데이터를 배열에 저장시켜 다른 용도로 활용하려는 의도.
- 조건으로,
- checked의 여부에 따라 배열에 추가, 제거가 되야함.

> Solve

- 출처는 팀 프로젝트에서 사용한 것을 인용함.

```js
{
  /*
input에는 checked={Checked.includes(el) ? true : false} 를 이용해서
Checked라는 배열 안에 el(요소)가 있는지 여부를 판단해서 없으면 false를 뱉는 식으로 로직을 구현한다.

handler에는 onChange={(e) => handleSingleCheck(e.target.checked, el)}를 이용해서 
첫번째 인자는 checked의 참,거짓 여부
두번째 인자는 사용자가 선택한 el(요소)

checked의 여부를 판단해서 
참이면 setChecked([...Checked, list])로직을 이용해서 Checked를 업데이트 해주고 
거짓이면 setChecked(Checked.filter((el) => el !== list))로직을 이용해서 Checked에서 제거한다.
*/
}
<div key={i}>
  <input
    type="checkbox"
    id="method__body__checkbox"
    value={el}
    onChange={(e) => handleSingleCheck(e.target.checked, el)}
    checked={Checked.includes(el) ? true : false}
  />
  <label htmlFor="method__body__checkbox" className="method__label">
    {el}
  </label>
</div>;

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
```

### 21.12.17

<br/>

> Problem

- 선택된 checkbox를 해제시키려는 의도.

> Solve

- 출처는 팀 프로젝트에서 사용한 것을 인용함.

```js
{
  /*
새로운 배열을 선언하고, checked가 true라면 선택된 값을 배열에 담아준다.
checked가 false라면 빈 배열을 리턴한다.
*/
}
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
```

### 21.12.17

<br/>

> Problem

- 가공방식, 재료가 2개 이상일 경우 띄어쓰기 및 쉼표해주어야 함.

> Solve

- 로직이 좋은 것은 아니나 계속 시도해봤는데 마땅히 좋은 로직이 떠오르지 않아서 강제로 데이터를 뽑음.

```js
// 가공방식이 2개 이상일 경우
const longMethod = AllData.map((el) => {
  let result = [];
  if (el.method.length > 1) {
    result.push(el.method);
  }
  return result[0];
});

// 재료가 2개 이상일 경우
const longMaterial = AllData.map((el) => {
  let result = [];
  if (el.material.length > 1) {
    result.push(el.material);
  }
  return result;
});
let MaterialLong = [];
for (let i = 0; i < longMaterial.length; i++) {
  if (longMaterial[i].length) {
    MaterialLong.push(longMaterial[i]);
  }
}
let MaterialFlat = MaterialLong.flat(Infinity);

{
  /* 대입 결과 */
}
<>
  <span>{el.method.length > 1 ? longMethod[0].join(', ') : el.method}</span>
  <span>{el.material.length > 1 ? MaterialFlat.join(', ') : el.material}</span>
</>;
```

### 21.12.18

<br/>

> Problem

- 가공방식, 재료가 2개 이상일 경우 띄어쓰기 및 쉼표해주어야 함.

> Solve

- 처음 시도했지만 불필요하게 전체 데이터에서 뽑아서 다시 설정함.
- 선반을 클릭했을 때 배열 요소의 위치가 변경되어 filter를 이용해서 따로 배열로 넣어줌.

```js
// 가공방식, 재료가 2개 이상일 경우
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
longMaterial = longMaterial.filter((el) => el !== undefined);

{
  /* 대입 결과 */
}
<>
  <span>{el.method.length > 1 ? longMethod[0].join(', ') : el.method}</span>
  <span>
    {el.material.length > 1 ? longMaterial[1].join(', ') : el.material}
  </span>
</>;
```

<br/>

> Problem

- 사이드바 만들 때 외부 영역 클릭하면 사이드바 닫힘 현상.

> Solve

- 전체 영역을 따로 만들어줌으로써 해결함

```js
<SideBar>
  <div id="page-wrapper" onClick={handlePageWrapperClick}></div>
  <div id="btn">
    <FontAwesomeIcon
      icon={faBars}
      className="btn__icon"
      onClick={handleSideBarClick}
    />
  </div>
  <div id="box">
    <div id="items">
      <div className="item__title">
        <div className="item__logo">CAPA</div>
        <div className="item__name"> 파트너스</div>
      </div>
      <div class="item">
        <FontAwesomeIcon icon={faGopuram} style={{ paddingRight: '10px' }} />
        파트너정밀가공
      </div>
      <div class="item">로그아웃</div>
    </div>
  </div>
</SideBar>
```
