import ToggleButton from "components/toggleButton";
import { Theme } from "context";
import React, { useContext } from "react";
import { joinClass } from "../../../utils";
import styles from "./index.scss";

type PropType = {
    changeTheme: () => void;
};

const CalculatorHead: React.FC<PropType> = ({ changeTheme }) => {
    const theme = useContext(Theme);

    return (
        <div
            className={joinClass(
                styles["calculator-head"],
                styles[`calculator-head--${theme}`]
            )}
        >
            <label>calc</label>
            <ToggleButton position={theme} onClick={changeTheme} />
        </div>
    );
};

export default CalculatorHead;
