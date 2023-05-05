import React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

function ControlledSwitches({ onChange }) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked)
  };

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </div>
  );
}

export default ControlledSwitches;