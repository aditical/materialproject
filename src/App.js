import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Component/Login';

class App extends Component {
  render() {
    return (
      
         <MuiThemeProvider>
             <Login />
          </MuiThemeProvider>

    );
  }
}

export default App;
