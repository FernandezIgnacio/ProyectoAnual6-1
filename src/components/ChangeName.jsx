import { useState } from 'react';
import { auth } from '../../firebase';
import { updateProfile } from "firebase/auth";

const ChangeName = () => {
  const [newName, setNewName] = useState('');

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    if (user) {
      updateProfile(user, {
        displayName: newName
      }).then(() => {
        alert('se cambio el nombre');
      }).catch((error) => {
        alert(error);
      });
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <label>
        New name:
        <input className="input" type="text" value={newName} onChange={handleChange} />
      </label>
      <button className='extrabutton' type="submit">Change name</button>
      
    </form>
    </div>
    
  );
}

export default ChangeName;

