import { Theme } from "context";
import React, { ReactNode, useContext } from "react";
import { joinClass } from "../../../utils";
import styles from "./index.scss";

type PropType = {
    children: ReactNode;
    onClick: () => void;
    type?: string;
};

const Button: React.FC<PropType> = ({ children, onClick, type }) => {
    const theme = useContext(Theme);
    return (
        <button
            className={joinClass(
                styles.button,
                styles[`button--${theme}`],
                type && styles[`button--${type}`],
                type && styles[`button--${theme}--${type}`]
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
