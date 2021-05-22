import React from "react";
import { joinClass } from "../../../utils";
import styles from "./index.scss";

type PropType = {
    position?: string;
    onClick: () => void;
};

const ToggleButton: React.FC<PropType> = ({ position, onClick }) => {
    return (
        <div
            className={joinClass(styles.toggle, styles[`toggle--${position}`])}
            onClick={onClick}
        >
            <div className={styles.toggle__button} />
        </div>
    );
};

export default ToggleButton;
