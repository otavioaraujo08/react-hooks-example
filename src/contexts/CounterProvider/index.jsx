import Props from 'prop-types';
import { reducer } from './reducer';
import { data } from './data';
import { useReducer } from 'react';
import { CounterContext } from './context';

export default function CounterProvider({ children }) {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return <CounterContext.Provider value={{ counterState, counterDispatch }}>{children}</CounterContext.Provider>;
}

CounterProvider.propTypes = {
  children: Props.node.isRequired,
};
