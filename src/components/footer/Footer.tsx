import styles from "./styles.module.css";
import global from "../../assets/global.png";
import telegram from "../../assets/Telegram.png";
import vk from "../../assets/VK.png";
import whatsapp from "../../assets/Whatsapp.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h1>QPICK</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>Избранное</li>
          <li>Корзина</li>
          <li>Контакты</li>
        </ul>
        <ul className={styles.links}>
          <li>Условия сервиса</li>
          <span className={styles.langContainer}>
            <img src={global} className={styles.icon} />
            <p className={styles.active}>Рус</p>
            <p>Eng</p>
          </span>
        </ul>
      </nav>
      <span className={styles.socialLinks}>
        <a href="https://vk.ru/id386292062">
          <img src={vk} />
        </a>
        <a href="https://t.me/BKbbbbbbbbb">
          <img src={telegram} />
        </a>
        <a href="https://www.whatsapp.com/?lang=ru">
          <img src={whatsapp} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
