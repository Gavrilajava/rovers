import React from 'react';


type Props = {
  title: string,
  children: JSX.Element
}

const  InputOutput : React.FC<Props> = ({title, children}) => {

  return (
    <div className= 'console'>
      <form>
        <fieldset>
          <legend>
            {title}
          </legend>
            {children}
        </fieldset>
      </form>
    </div>
  );
}



export default InputOutput;