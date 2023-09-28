import React from "react";
import Button from "./common/button/Button";
/* 
  여기서 * as St가 뜻하는 것은
  * : 모든 것을 가져와라"라는 의미를 가집니다. 
      즉, 해당 모듈에서 내보내는 모든 변수, 함수, 클래스 등을 
      가져오겠다는 뜻입니다.
  as St : 가져온 모든 내용을 St라는 이름의 객체로 별칭 지어줍니다. 
          이렇게 하면 St 객체를 통해 해당 모듈의 내용에 접근할 수 있습니다.
  St가 붙어있는 컴포넌트들은 src/styles/Styles.jsx에서 볼 수 있습니다.
*/
import * as St from "../styles/Styles";
import { IconArrow, IconBell } from "./common/button/Icon";

const ButtonGroup = () => {
  return (
    <St.Container>
      <St.Title>Button</St.Title>
      <St.ButtonGroup>
        <Button
          icon={<IconArrow />}
          typeButton="primary"
          size="large"
          onClick={() => alert("버튼을 만들어보세요")}
        >
          Large Primary Button
        </Button>
        <Button typeButton="primary" size="medium">
          Medium
        </Button>
        <Button typeButton="primary" size="small">
          Small
        </Button>
      </St.ButtonGroup>

      <St.ButtonGroup>
        <Button
          icon={<IconBell />}
          typeButton="negative"
          size="large"
          onClick={() => console.log(prompt("어렵나요?"))}
        >
          Large Negative Button
        </Button>
        <Button typeButton="negative" size="medium">
          Medium
        </Button>
        <Button typeButton="negative" size="small">
          Small
        </Button>
      </St.ButtonGroup>
    </St.Container>
  );
};

export default ButtonGroup;
