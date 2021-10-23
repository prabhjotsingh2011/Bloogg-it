
import { Box } from '@material-ui/core';
import './App.css';
// import AppWithRouterAccess from './AppWithRouterAccess';
import { useState } from 'react'
import Header from './components/Hearder'
import Home from './components/home/Home'
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdtaeView';

import  CategoryProvider  from './context/category-context'
import { BrowserRouter, Switch, Route } from 'react-router-dom'





function App() {

  return (
    <BrowserRouter>
      {/* <AppWithRouterAccess/> */}
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <CategoryProvider>
            <Route exact path='/' component={Home} />
            <Route exact path='/create' component={CreateView} />

          <Route exact path='/details/:id' component={DetailView} />
          {/* <Route exact path='/create' component={CreateView} /> */}
          <Route exact path='/update/:id' component={UpdateView} />
          </CategoryProvider>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
