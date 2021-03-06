import React, { Component } from 'react';
import Routes from "./routes/routes";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faAddressBook, faMapMarkerAlt, faMobileAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook, faClock, faAddressBook, faMapMarkerAlt, faMobileAlt, faEnvelope)

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
