import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function PayMemo({className}) {

    const [age, setAge] = React.useState('1');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
    <Box sx={{ minWidth: 120 }} className={className}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label=""
          onChange={handleChange}
          className='custom-selectbox'
        >
          <MenuItem className='custom-menuitem' value={1}>문 앞에 놓아주세요.</MenuItem>
          <MenuItem className='custom-menuitem' value={2}>경비실에 맡겨주세요.</MenuItem>
          <MenuItem className='custom-menuitem' value={3}>부재 시 연락주세요.</MenuItem>
          <MenuItem className='custom-menuitem' value={4}>배송 전 연락 부탁드립니다.</MenuItem>
          <MenuItem className='custom-menuitem' value={5}>벨 누르지 말아주세요.</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default PayMemo