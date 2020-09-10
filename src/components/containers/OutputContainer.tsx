import React from 'react';
import InputOutput from '../presentational/InputOutput'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'

const OutputContainer : React.FC<PropsFromRedux> = ({output}) => {

  return (
    <InputOutput title = "Here you can see transmission from rovers">
      <div>
        {output.map(o => <p>{o}</p>)}
      </div>
    </InputOutput>
  );
}



const mapStateToProps = (state: RootState) => ({
  output: state.OutputReducer
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default  connector(OutputContainer);