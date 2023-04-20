import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "../MenuListItem/style.module.css";
import { FORMS } from "./constant";
export function MenuList(props) {
  return (
    <div className={s.container}>
      {FORMS.map((form) => (
        <MenuListItem
          isSelected={props.form === form.name}
          onClick={props.onItemClick}
          form={form.name}
        />
      ))}
    </div>
  );
}
