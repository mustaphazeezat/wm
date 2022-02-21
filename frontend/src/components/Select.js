import React from 'react';

const Select = ({value, label, onChange, options,}) => {
    
  return <div className='input-wrapper'>
    <label className='label'>{label}</label>
      <select name={label} value={value} onChange={onChange}>
        {options.map((item, i) => <option value={item} key={i}>{item}</option>)}
      </select>
  </div>;
};

export default Select;
