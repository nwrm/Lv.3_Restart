import React, { useState } from "react";
import Button from "./common/button/Button";
import Modal from "./common/Modal";
import * as St from "../styles/Styles";

const ModalGroup = () => {
  // 배경을 클릭했을 때 모달이 닫히게 하기 위한 useState
  const [isBackgroundClickClose, setIsBackgroundClickClose] = useState(false);
  // 첫번째 모달과 관련된 useState.
  // isFirstModalOpen이 true일 때, 모달이 나타나고
  // false라면 닫힙니다.
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  // 두번째 모달과 관련된 useState.
  // isSecondModalOpen이 true일 때, 모달이 나타나고
  // false라면 닫힙니다.
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  // 모달이 열리는 것과 관련있는 함수입니다.
  const openModal = (isBackgroundClickClose) => {
    setIsBackgroundClickClose(isBackgroundClickClose);
    setIsSecondModalOpen(true);
  };

  // 모달이 닫히는 것과 관련있는 함수입니다.
  const closeModal = () => {
    if (isBackgroundClickClose) {
      setIsSecondModalOpen(false);
    }
  };

  return (
    <St.Container>
      <St.Title>Modal</St.Title>
      <St.Rows>
        <Button
          onClick={() => setIsFirstModalOpen(true)}
          typeButton="negative"
          size="medium"
        >
          open modal
        </Button>
        {isFirstModalOpen && (
          <Modal
            closeModal={() => setIsFirstModalOpen(false)}
            text="닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요."
          />
        )}

        <Button onClick={openModal} typeButton="primary" size="large">
          open modal
        </Button>
        {isSecondModalOpen && (
          <Modal
            closeModal={() => setIsSecondModalOpen(false)}
            backCloseModal={closeModal}
            text="닫기버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요."
          />
        )}
      </St.Rows>
    </St.Container>
  );
};

export default ModalGroup;
