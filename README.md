# CAPA_CodingTest

🎭 2021.12.15(수)\_CAPA_codingTest

### 21.12.16

<br/>

> Error

- TypeError: Method.map is not a function.

> Solve

- useState쓸 때 initialValue 설정에 신경쓰자. initialValue와 State의 타입이 다르면 Error가 난다. Array면 []로, String이면 ""로 신경쓰기.
- https://www.pluralsight.com/guides/typeerror-handling-in-react.js-for-map-function
