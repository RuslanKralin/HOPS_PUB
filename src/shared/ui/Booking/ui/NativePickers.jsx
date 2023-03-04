import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function NativePickers() {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Выберите дату"
        type="date"
        defaultValue=" "
        sx={{ width: '100%' }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="time"
        label="Выберите время"
        type="time"
        defaultValue=" "
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 600, // 10 min
        }}
        sx={{ width: '100%' }}
      />
    </Stack>
  );
}
