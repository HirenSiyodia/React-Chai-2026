import {React,  useState } from 'react';
import StateHook from './Components/stateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseRefHook from './Components/UseRefHook';
import ChildA from './Components/ChildA';
import UseHookMemo from './Components/UseHookMemo';
import UseCalHook from './Components/UseCalHook';

function App() {

  return (
  <>
  <StateHook/>
  <UseEffectHook/>
  <UseRefHook/>
  <ChildA/>
  <UseHookMemo/>
  <UseCalHook/>
  </>
  );
}

export default App;