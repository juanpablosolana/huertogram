import React,{useState} from 'react';
import './index.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Title from './components/title';
// import UploadForm from './components/uploadForm';
import Admin from './components/admin/admin'
import ImageGrid from './components/imageGrid';
import Modal from './components/modal';
import Footer from './components/footer';

// import ReactGA from 'react-ga';


// function initializeReactGA() {
//   ReactGA.initialize('UA-123791717-1');
//   ReactGA.pageview('/');
// }
function App() {
  const [selectedImg, setSelectedImg]= useState(null);

  return (
    <Router>
      <Switch>
      <Route exact path='/admin'  component={Admin}>
      </Route>
      <div className="App">
      <Title/>
      {/* <Spinner /> */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      <Footer/>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
