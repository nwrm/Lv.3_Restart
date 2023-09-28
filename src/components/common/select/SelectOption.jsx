import React from "react";
import * as St from "../../../styles/Styles";

/*
부모컴포넌트로부터 title, closeModal을 전달받습니다.
title은 SelectGroup.jsx -> Select.jsx를 거쳐서 왔고
closeModal은 Select.jsx로부터 전달받았습니다.
 */
const SelectOption = ({ title, closeModal }) => {
  return (
    <>
      <St.Option onClick={closeModal}>{title}</St.Option>
    </>
  );
};

export default SelectOption;
