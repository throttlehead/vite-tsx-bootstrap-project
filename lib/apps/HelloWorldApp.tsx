import { useState } from 'react';
import AppContext from '@contexts/AppContext';
import HelloWorldGreeting from '@components/HelloWorldGreeting/HelloWorldGreeting';
import './HelloWorldApp.scss';

function HelloWorldApp () {
  return (
    <AppContext.Provider
      value={{}}
    >
      <div className="hello-world-app bg-light d-flex align-items-center justify-content-center">
        <HelloWorldGreeting />
      </div>
    </AppContext.Provider>
  );
}

export default HelloWorldApp;
