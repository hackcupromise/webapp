import * as React from 'react'
import Sidebar from '../Sidebar'
import CardContainer from '../CardContainer'

import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <CardContainer />
      </div>
    );
  }
}

export default App;
