import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SvgIcon from '@mui/material/SvgIcon';

function AgreeCheck({className}) {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  function CustomCheckIcon() {
    return (
      <SvgIcon>
        <circle cx="12" cy="12" r="10" fill="#C9B6E4" />
        <path
          d="M11 14l-3-3-1 1 4 4 6-6-1-1-5 5z"
          stroke="white"
          strokeWidth="1"
          fill="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SvgIcon>
    );
  }

  return (
    <div>
      <Checkbox 
        {...label} 
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CustomCheckIcon />}
        sx={{
          padding: 0,
          color: '#d9d9d9',
          stroke: 0,
          '&.Mui-checked': { color: '#C9B6E4'},
        }}
        className={className}
      />
      {/* 체크되면 mui-checked 클래스명이 들어감 */}
    </div>  )
}

export default AgreeCheck