import { IconStopwatch } from "@tabler/icons-react";
import style from "./styles.module.css";

export function Logo() {
  return (
    <div className={style.logo}>
      <a className={style.logoLink} href="#">
        <IconStopwatch />
        <span>
          Tuba <span className={style.flow}>Flow</span>
        </span>
      </a>
    </div>
  );
}
