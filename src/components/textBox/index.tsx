import { Theme } from "context";
import React, { useContext } from "react";
import { joinClass } from "../../../utils";
import styles from "./index.scss";

const TextBox: React.FC = ({ children }) => {
    const theme = useContext(Theme);

    return (
        <div
            className={joinClass(
                styles["text-box"],
                styles[`text-box--${theme}`]
            )}
        >
            {children}
        </div>
    );
};

export default TextBox;
