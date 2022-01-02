import './App.css';
import LoginRouter from './pages/loginPages/loginRouter';
import MainRouter from './pages/mainPages/mainRouter';
import Button from '@mui/material/Button';
function App() {
  function getImage() {
    console.log('getImage');
    var video = document.getElementsByTagName('video')[0];
    video.crossOrigin = 'anonymous'
    var canvas = document.getElementById('canvas');
    var cobj = canvas.getContext('2d'); //获取绘图环境
    cobj.drawImage(video, 0, 0, 200, 300);
    let base64 = canvas.toDataURL('image/jpeg', 0.5)
    console.log(base64)
  }
  return (
    <div>
      {/* <div >
      <Button onClick = {getImage}>点击截图</Button>
      <div >
          <video
          controls = "controls"
          crossOrigin = "anonymous"
          width='1000'
          height='700'>
            <source src="./video/test.mp4"  type="video/mp4"/>
          </video>
          <canvas id="canvas" width = "200" height = "300"   ></canvas>
      </div>
  </div> */}
    <LoginRouter />
    {/* <Test/> */}
    {/* <MainRouter/> */}
    </div>
   );
}

export default App;
