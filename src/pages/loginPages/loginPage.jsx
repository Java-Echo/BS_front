import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {Component} from 'react';
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

export default class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      account : '',
      password : '',
    }
  }
  
  handleLogin = () => { 
    axios.post('http://localhost:8080/login?id='+this.state.account+'&passwd='+this.state.password)
    .then(res =>{
      alert('ddd');
      if (res.data.id === 'null' && res.data.passwd === 'null'){
        alert('账号不存在，请注册账号');
        return;
      } else if (res.data.passwd ===  'null'){
        alert('密码错误');
        return ;
      } else{
        // this.props.history.push('/mainPage');
        alert('fw');
        console.log("sccuses");
      }

    })
    .catch(err =>{
      console.log('err:',err);
      alert(err);
    })
    if (this.state.account === 'admin' && this.state.password === '123456'){
      alert('登录成功');
      // this.props.history.push('/mainRouter');
    }
    console.log(this.props);

    // alert('登录成功');
    // this.props.history.push('/mainRouter');
    // alert('ddd');

  }
  
  render(){
  console.log(this.props.history);

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
          <Box component="form"  noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="账户"
              name="id"
              autoComplete="id"
              autoFocus
              value={this.state.account}
              onChange={(e) => {
                this.setState({account: e.target.value});
                // console.log('account:',this.state.account);
              }}    
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwd"
              label="密码"
              type="passwd"
              id="passwd"
              autoComplete="current-password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({password: e.target.value});
                // console.log('passwd:',this.state.password);
            }} 

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={this.handleLogin}
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
}

