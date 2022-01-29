import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import Routes from './components/routes/Routes';
import SimpleForm from './components/view/demo/forms/SimpleForm';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
    <div id="main-wrapper">
        <Routes/>
        {/* <SimpleForm/> */}
    </div>
  );
}

export default App;
