import React from "react";
import * as St from "../../styles/Styles";
import Button from "./button/Button";

const Modal = ({ closeModal, backCloseModal, text }) => {
  const okClick = () => {
    console.log("OK!");
  };

  return (
    <>
      {/*Style.jsx에 있는 BackGround 컴포넌트에 bc="rgba(0, 0, 0, 0.1)을 전달합니다.*/}
      <St.BackGround bc="rgba(0, 0, 0, 0.1)" onClick={backCloseModal} />
      <St.Modal>
        Modal
        {text}
        <Button
          style={{ display: backCloseModal ? "none" : "block" }}
          onClick={okClick}
          typeButton="primary"
          size="medium"
        >
          확인
        </Button>
        <Button onClick={closeModal} typeButton="negative" size="medium">
          Close
        </Button>
      </St.Modal>
    </>
  );
};

export default Modal;
