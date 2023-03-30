import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SizeMenu() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 400 }} size="small">
      <InputLabel id="demo-select-small">Sizing</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Size: Men's 8.5"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Select Your Size</em>
        </MenuItem>
        <MenuItem value={10}>8</MenuItem>
        <MenuItem value={20}>8.5</MenuItem>
        <MenuItem value={30}>9</MenuItem>
        <MenuItem value={30}>9.5</MenuItem>
        <MenuItem value={30}>10</MenuItem>
        <MenuItem value={30}>10.5</MenuItem>
        <MenuItem value={30}>11</MenuItem>
        <MenuItem value={30}>11.5</MenuItem>
        <MenuItem value={30}>12</MenuItem>
      </Select>
    </FormControl>
  );
}