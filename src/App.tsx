import React from 'react';
import './App.scss';
import InputContainer from './components/containers/InputContainer'
import OutputContainer from './components/containers/OutputContainer'


const App: React.FC = () => {
  return (
    <div className='container'>
      <InputContainer/>
      <OutputContainer/>
    </div>
  );
}

export default App;
