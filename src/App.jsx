import { useState } from "react";
import { ImageDisplay } from "./ImageDisplayer/ImageDisplay";
import { FORMS } from "./MenuList/constant";
import { MenuList } from "./MenuList/MenuList";
import s from "./style.module.css";

export function App() {
  const [currentform, setCurrentform] = useState(FORMS[0].image);
  const onMenuListItemClick = (form) => {
    setCurrentform(form);
  };
  return (
    <>
      <div>
        <h1>
          <u>Evolution of Goku!</u>
        </h1>
        <div className={s.workspace}>
          <MenuList onItemClick={onMenuListItemClick} form={currentform} />
          <ImageDisplay form={currentform} />
        </div>
      </div>
    </>
  );
}
