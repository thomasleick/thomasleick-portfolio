import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    // Adicione outras propriedades de paleta conforme necessário
  },
  // Adicione outras configurações de tema conforme necessário
});

export default defaultTheme;