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

### 21.12.16

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
