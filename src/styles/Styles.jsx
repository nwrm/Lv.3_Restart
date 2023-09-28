import { styled, css } from "styled-components";

// features 스타일
export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  margin: 40px 0 0 20px;
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ bc }) => bc};
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: row;
`;

// feature 제목
export const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

// 아이콘 + 버튼글자
export const ButtonInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

/* [버튼] 스타일
- typeButton : 예를 들어, Button에 typeButton="primary"란 속성이 있다면
  55 ~ 58번째 줄에 있는 CSS 속성과 더불어서 63 ~ 65번째 줄의 CSS 속성이 적용됩니다.
  typeButton 속성이 없다면 75 ~ 76번 줄의 CSS 속성이 버튼에 적용됩니다.
  
- size : 버튼에서 size의 속성이 추가되었을 때 "large" 또는 "midium" 또는 "small"에 따라
  적용되는 CSS 속성이 다릅니다.
  이 size 속성이 없다면 기본적으로 104 ~ 106번째 줄의 CSS 속성이 적용됩니다.
*/
export const Button = styled.button`
  /* 기본적으로  */
  cursor: pointer;
  margin: 5px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  ${({ typeButton }) => {
    switch (typeButton) {
      case "primary":
        return css`
          background-color: #89caff;
          color: #000052;
          border: 5px solid #89caff;
        `;
      case "negative":
        return css`
          background-color: #ffcbcb;
          color: #a84141;
          border: 5px solid #ffcbcb;
        `;
      default:
        return css`
          background-color: #89caff;
          color: #000052;
          border: 5px solid #89caff;
        `;
    }
  }};

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 60px;
          width: 200px;
          background-color: white;
        `;
      case "medium":
        return css`
          height: 40px;
          width: 100px;
          border: none;
        `;
      case "small":
        return css`
          height: 25px;
          width: 80px;
          border: none;
        `;
      default:
        return css`
          height: 40px;
          width: 100px;
          border: none;
        `;
    }
  }};
`;

// 버튼 한 줄
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

// input 그룹
export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const InputBox = styled.input`
  height: 20px;
  width: 180px;
  margin-left: 5px;
  border-radius: 5px;
  border: none;
  background-color: #ececec;
  padding: 5px;

  &:focus {
    outline: none;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 700px;
  height: 200px;
  border: 3px solid lightgray;
  margin: 20px;
  overflow: hidden;
`;

export const SelectButton = styled.button`
  width: 320px;
  height: 40px;
  border-radius: 7px;
  border: none;
  background-color: white;
  box-shadow: 1px 1px 3px 1px #ececec;
  margin: 5px;
  cursor: pointer;
`;

export const SelectTitle = styled.div`
  width: 250px;
  text-align: left;
  margin-left: 20px;
  font-size: 18px;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1000;
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 10px;
`;

export const SelectOptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: auto;
  left: auto;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 3px 1px #ececec;
  background-color: white;
`;

export const HiddenList = styled.div`
  position: relative;
`;

export const Option = styled.button`
  width: 325px;
  background-color: white;
  height: 50px;
  font-size: 18px;
  border: none;

  &:first-child {
    border-radius: 10px 10px 0 0;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }

  &:hover {
    background-color: #ececec;
  }
`;
