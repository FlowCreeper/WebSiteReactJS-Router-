import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation()

  const [value, setValue] = useState(location.pathname);  

  const navigate = useNavigate();

  const handleChange = (val) => {
    setValue(val);
    navigate(val);
  }


  return (
    <div className="d-grid gap-1">
      <h1>{}</h1>
          <ToggleButtonGroup
          type="radio"
          name="tabs"
          value={value}
          onChange={handleChange}>

            <ToggleButton 
            variant="outline-dark"
            id="tbg-radio-home"
            value="/">
              Home
            </ToggleButton>
            
            <ToggleButton
            variant="outline-dark"
            id="tbg-radio-about"
            value="/about">
              Sobre
            </ToggleButton>

            <ToggleButton
            variant="outline-dark"
            id="tbg-radio-lucas"
            value="/lucas">
              Lucas
            </ToggleButton>

            <ToggleButton 
            variant="outline-dark" 
            id="tbg-radio-igor" 
            value="/igor">
              Igor
            </ToggleButton>

          </ToggleButtonGroup>

        <Outlet />
    </div>
  );
}
