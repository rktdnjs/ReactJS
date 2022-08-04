import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button ({text}) {
    return (
        <button className={styles.btn}>{text}</button>
    )
}

Button.propTypes = {
    text : PropTypes.string.isRequired
}

export default Button;
// 다른데서 이 Button을 가져올 수 있도록 함