import React from 'react';
import PropTypes from 'prop-types'
import InputOutput from '../presentational/InputOutput'
import { connect } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'

const OutputContainer: React.FC<PropsFromRedux> = ({output}) => {

  return (
    <InputOutput title = "Here you can see transmission from rovers">
      <div>
        {output.map((o, i) => <p key= {`output${i}`}>{o}</p>)}
      </div>
    </InputOutput>
  );
}

OutputContainer.propTypes = {
  output: PropTypes.array.isRequired
}

const mapStateToProps = (state: RootState): PropsFromRedux=> ({
  output: state.OutputReducer
})

type PropsFromRedux = {
  output: Array<string>;
}

export default  connect(mapStateToProps)(OutputContainer);