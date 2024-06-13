import React, { FC, ReactNode, useEffect } from "react";
type PopupProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};
const Popup: FC<PopupProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Установка стилей для body при открытии Popup
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Удаление стилей при закрытии Popup
    }

    // Очистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    isOpen && (
      <div className=" flex justify-center items-center fixed top-0 left-0 w-full h-full z-[200] bg-black bg-opacity-40">
        <div className="flex items-center justify-between p-[35px] rounded-[15px] relative bg-white container">
          <img src="images/popup.png" alt="" />
          {children}
          <button
            onClick={() => onClose()}
            className=" absolute top-[10px] right-[10px]"
          >
            <img className="w-[22px] h-[22px]" src="x-mark.svg" alt="" />
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
