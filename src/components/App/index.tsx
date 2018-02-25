import * as React from 'react'
import Sidebar from '../Sidebar'
import CardContainer from '../CardContainer'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import './index.css'
import { Route } from 'react-router';
import { Charity } from '../../objects';

@observer
class App extends React.Component {
  @observable selectedCharity: Charity
  render() {
    return (
      <div className="App">
        <Route
          render={routeProps => (
            <Sidebar {...routeProps} charity={this.selectedCharity} />
          )}
        />
        <Route
          render={routeProps => (
           <CardContainer {...routeProps} setCharity={this.setCharity.bind(this)} />
          )}
        />
      </div>
    );
  }

  @action
  private setCharity(charity: Charity) {
    this.selectedCharity = charity
  }
}

export default App;
