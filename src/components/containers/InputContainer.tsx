import React, { ChangeEvent, useState } from 'react';
import InputOutput from '../presentational/InputOutput'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'
import translate from '../../logic/translate'


const  InputContainer : React.FC<PropsFromRedux> = ({addOutput}) => {

  const [input, setInput] = useState('')
  const [counter, setCounter] = useState(0)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const currentInput = e.target.value
    if (!!currentInput.slice(-1).match(/\n/)){
      const commands = currentInput.split(/\n/).filter((val:string, ind:number) => ind+1 > counter)
      commands.forEach((val:string) =>{
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


const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  addOutput: (output: string) => ({ type: 'addOutput', output: output })
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>


export default  connector(InputContainer);