import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function LoginForm({id, label, type, autoComplete, value, onChange, maxLength, minLength}) {
  return (
    <Box
      component="div"
      sx={{ '& .MuiTextField-root': { } }}
      noValidate
      autoComplete="off"
    >
      <div className='login-textfield'>
        <TextField
          id={id}
          label={label}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          variant="standard"
          inputProps={{
            maxLength: maxLength,
            minLength: minLength,
          }}
          sx={{
            width: '100%',
            '& label.Mui-focused': {
              color: '#555', // 포커스 시 라벨 색상
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#555', // 포커스 시 밑줄 색상
              borderBottomWidth: '1.5px', // 포커스 시 두께
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: '#999',
              borderBottomWidth: '2px', // 호버 시 두께
            },
            '& .css-1yrc8ca-MuiInputBase-input-MuiInput-input' : { color: '#333', fontSize: '16px', fontFamily: 'S-CoreDream-4Regular'},
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 1000px white inset',
              WebkitTextFillColor: '#000',
              transition: 'background-color 5000s ease-in-out 0s',
            },
          }}
        />
      </div>
    </Box>
  )
}

export default LoginForm