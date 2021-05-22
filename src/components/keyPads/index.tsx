import Button from "components/button";
import { Theme } from "context";
import React, { useContext } from "react";
import { joinClass } from "../../../utils";
import constants from "./constants";
import styles from "./index.scss";

type PropTypes = {
    handleChange: (value: string) => void;
};

const KeyPads: React.FC<PropTypes> = ({ handleChange }) => {
    const { KEYS } = constants;
    const theme = useContext(Theme);

    return (
        <div className={joinClass(styles.keys, styles[`keys--${theme}`])}>
            {KEYS.map(({ value, type }) => (
                <Button
                    key={value}
                    type={type}
                    onClick={() => handleChange(value)}
                >
                    {value}
                </Button>
            ))}
        </div>
    );
};

export default KeyPads;
