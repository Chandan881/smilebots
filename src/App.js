import './App.css';
import Header from './components/Header';
import Headers from './components/Headers';
import LeftContent from './components/LeftContent';
import MidContent from './components/MidContent';
import RightContent from './components/RightContent';

function App() {
  return (
    <div className="App">
     <div className='container'>
        <div className='navs'>
            <div className='upnav'>
               <Header />
            </div>
            <div className='lwnav'>
               <Headers />
            </div>
        </div>
        <div className='allcontent'>
         <div className='leftcont'>
            <LeftContent />
         </div>
         <div className='midcont'>
            <MidContent />
         </div>
         <div className='rightcont'>
            <RightContent />
         </div>
        </div>
     </div>
    </div>
  );
}

export default App;
