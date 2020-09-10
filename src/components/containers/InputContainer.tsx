import React, { ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types'
import InputOutput from '../presentational/InputOutput'
import { connect } from 'react-redux'
import translate from '../../logic/translate'



const  InputContainer: React.FC<PropsFromRedux> = ({addOutput}) => {

  const [input, setInput] = useState('')
  const [counter, setCounter] = useState(0)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const currentInput = e.target.value
    if (!!currentInput.slice(-1).match(/\n/)){
      const commands = currentInput.split(/\n/).filter((val: string, ind: number) => ind+1 > counter)
      commands.forEach((val: string) =>{
        if (val){
          setCounter(counter + 1)
          addOutput(translate(val))
        }
      })
      setInput(currentInput)
    }
    else {
      setInput(currentInput)
    }
  }

  return (
    <InputOutput title = "Input your commands here">
      <textarea onChange = {handleChange}>{input}</textarea>
    </InputOutput>
  );
}

InputContainer.propTypes = {
  addOutput: PropTypes.func.isRequired
}

const mapStateToProps = (): object => ({})

const mapDispatchToProps = {
  addOutput: (output: string): InputDispatch => ({ type: 'addOutput', output: output })
}

type InputDispatch = {
  type: string;
  output: string;
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = {
  addOutput: Function;
}


export default  connector(InputContainer);