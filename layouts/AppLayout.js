import React, { Component } from 'react';
import { Footer, Header } from 'components/layouts';
import PropTypes from 'prop-types';
import Reboot from 'material-ui/CssBaseline';
import muiTheme from 'utils/getMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
// import 'styles/custom.css';

class AppLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <Reboot />
          <Header />
          {children}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.any
};

export default AppLayout;