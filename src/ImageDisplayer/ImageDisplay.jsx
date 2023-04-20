import { FORMS } from "../MenuList/constant";
import s from "./style.module.css";
//import dog from "../images/pexels-charles-1851164.jpg"

export function ImageDisplay(props) {
  //  let ImageLink = "";
  const pictures = FORMS.map((form) => (
    <div>
      {props.form === form.name ? (
        <img src={require("../images/" + form.image)} alt={form.name} />
      ) : (
        ""
      )}
    </div>
  ));

  return <div className={s.container}>{pictures}</div>;
}
