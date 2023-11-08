import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";

export default function Layout({ children, navigation }) {
  const [value, setValue] = useState("/");

  const handleChange = (val) => setValue(val);

  navigation(value);

  return (
    <div className="layout">
      <ToggleButtonGroup
        type="radio"
        name="tabs"
        value={value}
        onChange={handleChange}
      >
        <ToggleButton variant="outline-dark" id="tbg-radio-home" value="/">
          Home
        </ToggleButton>
        <ToggleButton
          variant="outline-dark"
          id="tbg-radio-about"
          value="/About"
        >
          Sobre
        </ToggleButton>
        <ToggleButton
          variant="outline-dark"
          id="tbg-radio-lucas"
          value="/Lucas"
        >
          Lucas
        </ToggleButton>
        <ToggleButton variant="outline-dark" id="tbg-radio-igor" value="/Igor">
          Igor
        </ToggleButton>
      </ToggleButtonGroup>
      <main>{children}</main>
    </div>
  );
}
