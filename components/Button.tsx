import React from 'react';

const Button = (props: any) => {
  const { text, onClick, dataTestId, disabled, className } = props;
  return (
    <button
      type="button"
      onClick={ onClick }
      disabled={ disabled }
      data-testid={ dataTestId }
      className={ className }
    >
      { text }
    </button>
  );
};



export default Button;
