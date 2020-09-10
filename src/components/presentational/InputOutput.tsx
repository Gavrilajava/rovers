import React from 'react';
import PropTypes from 'prop-types'

type Props = {
  title: string;
  children: JSX.Element;
}

const  InputOutput: React.FC<Props> = ({title, children}) => {

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

InputOutput.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}


export default InputOutput;