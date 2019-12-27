import React from 'react';
import { connect } from 'react-redux'
import UserContainer from '../containers/UserContainer'
import PageContainer from '../containers/PageContainer'

const App = () => {
  return (  
    <div className="app">
      <PageContainer />
      <UserContainer />
    </div>    
    
  );
}

export default App
