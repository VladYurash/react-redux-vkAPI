import React from 'react';
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import { getPhotos  } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

const App = ({ user, page, getPhotosAction, handleLoginAction  }) => {
  return (
    <div className='row'>      
      <Page photos={page.photos} year={page.year} isLoading={page.isLoading} getPhotos={getPhotosAction} error={page.error}/>
      <User name={user.name} isLoading={user.isLoading} error={user.error} handleLogin={handleLoginAction}/>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => ({
  
  getPhotosAction: year => dispatch(getPhotos(year)),
  handleLoginAction: () => dispatch(handleLogin()),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
