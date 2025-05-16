import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function LoginForm({id, label, type, autoComplete, value, onChange}) {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id={id}
          label={label}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          variant="standard"
          sx={{
            width: '100%',
            marginBottom: '32px',
            '& label.Mui-focused': {
              color: '#999', // 포커스 시 라벨 색상
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#999', // 포커스 시 밑줄 색상
            },
          }}
        />
      </div>
    </Box>
  )
}

export default LoginForm