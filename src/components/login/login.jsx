port react from 'react';6.9k (gripped:2.7k)
import {css} from '@emotions/core';
import propTypes from 'propTypes'; 1.4k (gripped: 769)
function Login () {

return (

<div className = "loginPage">

<h1 className = "loginPage-title">Log in</h1>
<form>

<input type = "text" name= "username"></input>

<input type= "password" name= "password"/>
<Button type="button"
css ={ buttonstyle }

variant="primary">

Login

<Button/>
</form>

</div>

);

}