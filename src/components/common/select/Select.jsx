import React, { useState } from "react";
/* 
  여기서 * as St가 뜻하는 것은
  * : 모든 것을 가져와라"라는 의미를 가집니다. 
      즉, 해당 모듈에서 내보내는 모든 변수, 함수, 클래스 등을 
      가져오겠다는 뜻입니다.
  as St : 가져온 모든 내용을 St라는 이름의 객체로 별칭 지어줍니다. 
          이렇게 하면 St 객체를 통해 해당 모듈의 내용에 접근할 수 있습니다.
  St가 붙어있는 컴포넌트들은 src/styles/Styles.jsx에서 볼 수 있습니다.
*/
import * as St from "../../../styles/Styles";
import SelectOption from "./SelectOption";

/*
부모컴포넌트로부터 title, icon, options, selectedOption, setSelectedOption을 전달받습니다.
*/
const Select = ({
  title,
  icon,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  // select의 option을 보여지고, 숨기기 위해 useState를 사용합니다.
  // isSelectOptionOpen가 true라면 SelectOption.jsx가 보이고, false면 보이지 않습니다.
  const [isSelectOptionOpen, setSelectOptionOpen] = useState(false);

  // 특정 option을 클릭했을 때
  // secSelectedOption(optionTitle) : 해당 option의 내용이 부모컴포넌트(SelectGroup)의 useState인 selectedOption에 할당됩니다.
  // setSelectOptionOpen(false) : SelectOption.jsx가 닫힙니다.
  const handleOptionSelect = (optionTitle) => {
    setSelectedOption(optionTitle);
    setSelectOptionOpen(false);
  };

  return (
    <>
      <St.SelectButton
        onClick={() => setSelectOptionOpen(true)}
        typeButton="negative"
      >
        <St.Rows>
          <St.SelectTitle>{selectedOption || title}</St.SelectTitle>
          <div>{icon}</div>
        </St.Rows>
      </St.SelectButton>
      {/* isSelectOptionOpen 이 true일 때 SelectOption.jsx가 보입니다. */}
      {isSelectOptionOpen && (
        <St.SelectOptionGroup>
          {options.map((option) => (
            <SelectOption
              key={option}
              title={option}
              closeModal={() => handleOptionSelect(option)}
            />
          ))}
        </St.SelectOptionGroup>
      )}
    </>
  );
};

export default Select;
