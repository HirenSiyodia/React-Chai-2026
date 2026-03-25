import {React,  useState } from 'react';
import StateHook from './Components/stateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseRefHook from './Components/UseRefHook';
import UseConHook from './Components/UseHookMemo';
import ChildA from './Components/ChildA';
import UseHookMemo from './Components/UseHookMemo';

function App() {

  return (
  <>
  <StateHook/>
  <UseEffectHook/>
  <UseRefHook/>
  <ChildA/>
  <UseHookMemo/>
  </>
  );
}

export default App;