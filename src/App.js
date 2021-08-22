import './App.css';
//Cấu hình routing
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Header from './components/HomePage/Header';
import UseStateDemo from './pages/Hook/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/Hook/UseEffectDemo/UseEffectDemo';
import ReduxHookDemo from './pages/Hook/ReduxHookDemo/ReduxHookDemo';
import AxiosDemoRCC from './pages/AxiosDemo/AxiosDemoRCC';
import AxiosDemoRFC from './pages/AxiosDemo/AxiosDemoRFC';
import ApiMiddleWare from './pages/AxiosDemo/ApiMiddleWare';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import HOC from './pages/HOC/HOC';
import { HomeTemplate } from './Templates/HomeTemplate';
import { UserTemplate } from './Templates/UserTemplate';
import AntDemo from './pages/AntDemo/AntDemo';
import { AdminTemplate } from './Templates/AdminTemplate';


function App() {
  return (
    <BrowserRouter>
      {/* <HomeTemplate path="/home" component={HomeTemplate}/> */}
      <Switch>
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />

        <UserTemplate path="/login" component={Login} />
        <UserTemplate path="/register" component={Register} />

        {/* <HomeTemplate path="/antd" component={AntDemo} /> */}
        
        <HomeTemplate exact path="/usestate" component={UseStateDemo} />
        <HomeTemplate exact path="/useeffect" component={UseEffectDemo} />
        <HomeTemplate exact path="/reduxhook" component={ReduxHookDemo} />
        <HomeTemplate exact path="/ajaxrcc" component={AxiosDemoRCC} />
        <HomeTemplate exact path="/ajaxrfc" component={AxiosDemoRFC} />
        <HomeTemplate exact path="/apimiddleware" component={ApiMiddleWare} />
        <HomeTemplate exact path="/detail/:id" component={Detail} />
        <HomeTemplate exact path="/profile" component={Profile} />
        <HomeTemplate exact path="/" component={ApiMiddleWare} />
        <HomeTemplate exact path="/hoc" component={HOC} />

        <AdminTemplate path="/antd" component={AntDemo}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
