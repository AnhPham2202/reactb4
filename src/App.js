import logo from './logo.svg';
import './App.css';
import DemoFunction from './Components/DemoComponent/DemoFunction';
import DemoClass from './Components/DemoComponent/DemoClass';
import CardProduct from './Components/DemoComponent/CardProduct';
import BTLayout1 from './Components/BTLayout1/BTLayout1';
import BT1Header from './Components/BTLayout1/BT1Header';
import BT1Carousel from './Components/BTLayout1/BT1Carousel';
import BT1PhoneList from './Components/BTLayout1/BT1PhoneList';
import BT1LaptopList from './Components/BTLayout1/BT1LaptopList';
import BT1Footer from './Components/BTLayout1/BT1Footer';
import DataBinding from './DataBinding/DataBinding';
import BaiTapThucHanhLayout from './BaiTapthucHanhLayout/BaiTapThucHanhLayout';
import Styles from './Style/Styles';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './State/StateDemo';
import BT from './State/BTCarColorChanging/BT';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App  ">
      {/* <BTLayout1 /> */}
      {/* <DataBinding /> */}
      {/* <BaiTapThucHanhLayout /> */}
      {/* <Styles /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BT /> */}
      <RenderWithMap />
    </div>
  );
}

export default App;
