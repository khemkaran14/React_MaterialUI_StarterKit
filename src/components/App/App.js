import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Button from '@material-ui/core/Button';
import ButtonAppBar  from '../ButtonAppBar/ButtonAppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CPUData from '../CPUData/CPUData';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Container maxWidth="false" disableGutters={true}>
          <ButtonAppBar />
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <CPUData />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CPUData />
            </Grid>
            </Grid>
          </Container>
      </div>
    );
  }
}

export default hot(module)(App);