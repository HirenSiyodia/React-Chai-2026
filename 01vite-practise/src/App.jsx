import {React,  useState } from 'react';
import StateHook from './Components/stateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseRefHook from './Components/UseRefHook';
import UseConHook from './Components/UseConHook';
import ChildA from './Components/ChildA';

function App() {

  return (
  <>
  <StateHook/>
  <UseEffectHook/>
  <UseRefHook/>
  <ChildA/>
  </>
  );
}

export default App;