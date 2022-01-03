import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const theme = createTheme();

export default function LoginPage(props){
 
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  async function handleLogin(){
    const {data} = await axios.post('http://localhost:8080/login?id='+account+'&passwd='+password);
    console.log(data);
    if (data.id === 'null' && data.passwd === 'null'){
      alert('账号不存在，请注册账号');
    } else if (data.passwd ===  'null'){
      alert('密码错误');
    } else{
      // alert('登录成功');
      navigate('/mainRouter');
    }
  }
  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            登录
          </Typography>
          <Box component="div"  noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="账户"
              name="id"
              autoComplete="id"
              autoFocus
              // value={account}
              onChange={(e) => {
                setAccount(e.target.value);
                // console.log(account); 
              }}    
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="密码"
              type="password"
              id="password"
              autoComplete="current-password"
              // value={password}
              onChange={(e) => {
                // this.setState({password: e.target.value});
                setPassword(e.target.value)
                // console.log('passwd:',this.state.password);
            }} 

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              登录
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/registerPage" variant="body2">
                  {"注册账户"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
    }
// }

