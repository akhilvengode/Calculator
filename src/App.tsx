import React, { useState } from "react";
import { Theme } from "context";
import CalculatorHead from "components/calculatorHead";
import styles from "./App.scss";
import TextBox from "components/textBox";
import KeyPads from "components/keyPads";
import { joinClass } from "../utils";

const App: React.FC = () => {
    const [result, setResult] = useState("");
    const [theme, setTheme] = useState("primary");

    const handleChange = (value: string) => {
        switch (value) {
            case "DEL":
                setResult((prevState) => prevState.slice(0, -1));
                return;
            case "RESET":
                setResult("");
                return;
            case "=":
                setResult((prevState) => eval(prevState).toString());
                return;
            default:
                setResult((prevState) => prevState + value);
        }
    };

    const handleTheme = () => {
        if (theme === "primary") setTheme("secondary");
        else if (theme === "secondary") setTheme("ternary");
        else setTheme("primary");
    };

    return (
        <Theme.Provider value={theme}>
            <div
                className={joinClass(
                    styles.calculator,
                    styles[`calculator--${theme}`]
                )}
            >
                <div className={styles.calculator__interface}>
                    <CalculatorHead changeTheme={handleTheme} />
                    <TextBox>{result}</TextBox>
                    <KeyPads handleChange={handleChange} />
                </div>
            </div>
        </Theme.Provider>
    );
};

export default App;
