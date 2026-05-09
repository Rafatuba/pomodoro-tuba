import {
  IconHistory,
  IconHome,
  IconSettings,
  IconSun,
} from "@tabler/icons-react";
import style from "./styles.module.css";

export function Menu() {
  return (
    <nav className={style.menu}>
      <a className={style.menuLink} href="#">
        <IconHome />
      </a>
      <a className={style.menuLink} href="#">
        <IconHistory />
      </a>
      <a className={style.menuLink} href="#">
        <IconSettings />
      </a>
      <a className={style.menuLink} href="#">
        <IconSun />
      </a>
    </nav>
  );
}
