import React from 'react';
import './AddBuildingForm.css';

const TextField = props=> {
  const { title, placeholder, onChange, defaultValue } = props;
  const myInputRef = React.useRef(null);

  React.useEffect(() => {
    if (defaultValue.length === 0) {
      myInputRef.current.value = '';
    }
    return () => {}
  });

  return  (
    <div className="textfield">
      <label>{title}</label>
      <input
        ref={myInputRef}
        defaultValue={defaultValue}
        onChange={onChange} 
        placeholder={placeholder}/>
    </div>);
};

const AddBuildingForm = props => {
  const { onHide, data } = props;
  const [state, setState] = React.useState({
    code: '',
    name: '',
    address: ''
  });

  const handleChangeCode = (e) => {
    setState({...state, code: e.target.value });
  }

  const handleChangeName = (e) => {
    setState({...state, name: e.target.value });
  }

  const handleChangeAddress = (e) => {
    setState({...state, address: e.target.value });
  }

  const handleAdd = (e) => {
    data.unshift(state);
    onHide();
    setState({...state, code: '', name: '', address: ''});
  }

  return (
    <div>
      <TextField 
          title={'Code'}
          placeholder={'WSCL'}
          onChange={handleChangeCode}
          defaultValue={state.code}
        />

      <TextField 
          title={'Name'}
          placeholder={'Animal Sciences'}
          onChange={handleChangeName}
          defaultValue={state.name}
        />

      <TextField 
          title={'Address'}
          placeholder={'Gainesville, FL 32608, United States'}
          onChange={handleChangeAddress}
          defaultValue={state.address}
        />

      <button className="dark-primary" onClick={handleAdd}>Add</button>
    </div>);
  
};

export default AddBuildingForm;