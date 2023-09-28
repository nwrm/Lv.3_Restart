import React from "react";
import * as St from "../../styles/Styles";

// input에 작성된 콤마(,)를 제거하는 함수.
// 정규표현식을 이용했습니다.
// 정규표현식은 반복문을 사용했을 때보다 빠른 처리를 할 수 있으며 러닝커브가 높을 수 있기에
// 이런 것이 있구나~하고 우선 넘기면 됩니다.
export const removeCommas = (str) => str.replace(/[^\d]+/g, "");

// 세 자리 숫자마다 콤마(,)를 추가하는 함수
// 정규표현식을 이용했습니다.
// input에 입력된 number타입의 값을 string으로 바꾼뒤 (toString) 세 자리 숫자마다 콤마를 추가할 수 있도록 정규표현식을 이용했습니다.
const addCommas = (num) =>
  num.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

// 부모 컴포넌트(InputGroup.jsx)로 부터 value, setValue, isNumber, title를 전달받습니다.
const Input = ({ value, setValue, isNumber, title }) => {
  // input에 값이 입력될 때
  const onChangeHandler = (e) => {
    // 부모 컴포넌트(InputGroup.jsx)로부터 isNumber를 전달받지 않았다면,
    // setValue에 입력된 숫자가 그대로 할당되고
    if (!isNumber) return setValue(e.target.value);
    // 그렇지 않다면 세자릿수마다 콤마가 포함된 값이 setValue에 할당됩니다.
    const num = Number(removeCommas(e.target.value));
    setValue(addCommas(num));
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{title}</p>
      <St.InputBox value={value} onChange={(e) => onChangeHandler(e)} />
    </div>
  );
};

export default Input;
