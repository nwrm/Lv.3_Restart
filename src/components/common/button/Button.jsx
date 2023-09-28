import React from "react";
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

/*이 BasicButton 컴포넌트는 부모 컴포넌트로(ButtonGroup)부터
  children, icon, ...props 등을 전달받습니다.

  ButtonGroup 컴포넌트의 21 ~ 26번째 줄을 보시면
  icon={<IconArrow/>}
  typeButton="primary"
  size="large"
  "Large Primary Button"
  를 자식 컴포넌트(BasicButton)에 전달합니다.

  이 때, BasicButton 컴포넌트에서
  children은 "Large Primary Button"
  icon은 <IconArrow/>(Icon.jsx에 있습니다)
  ...props는 이를 제외한 {typeButton: 'primary', size: 'large'} 입니다.
*/
const BasicButton = ({ children, icon, ...props }) => {
  return (
    <St.Button {...props}>
      <St.ButtonInner>
        <>{children}</>
        <>{icon}</>
      </St.ButtonInner>
    </St.Button>
  );
};

export default BasicButton;
