import { useState } from 'react';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { auth } from '../../firebase';
import "../style.css";

function ChangePassword() {
    const [actualPassword, setActualPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = async () => {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(
            user.email, 
            actualPassword
        );

        try {
            await reauthenticateWithCredential(user, credential);
        } catch (error) {
            console.error(error);
            return;
        }

        // Cambiar la contraseña
        try {
            await updatePassword(user, newPassword);
            alert('Contraseña actualizada con éxito');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div>
                <input 
                    type="password" 
                    value={actualPassword} 
                    className="input"
                    onChange={e => setActualPassword(e.target.value)} 
                    placeholder="Contraseña actual"
                />
                <input 
                    type="password" 
                    className="input"
                    value={newPassword} 
                    onChange={e => setNewPassword(e.target.value)} 
                    placeholder="Nueva contraseña"
                />
                <button className='extrabutton' onClick={handleChangePassword}>
                    Cambiar Contraseña
                </button>
            </div>
        </div>
    );
}

export default ChangePassword;
