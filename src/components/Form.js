import React from "react";

const Form = (props) => {
  return (
    <form className='search-box' onSubmit={props.submit}>
      <input
        type='text'
        className='search-bar'
        placeholder='...'
        value={props.value}
        onChange={props.change}
      />
      <button className='submit'>Search</button>
    </form>
  );
};

export default Form;
