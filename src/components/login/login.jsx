import (AppRegistry) from 'react-native';
import App from './app';
import (Name a AppName) from './app.json';

AppRegistry . Register component (AppName , ()=>App);
function Login () {

return (

<div className = "loginPage">

<h1 className = "loginPage-title">Log in</h1>
<form>

<input type = "text" name= "username"></input>

<input type= "password" name= "password"/>
<Button type="button"
css = { Buttonstyle }
onClick =  { OnClick }
disabled = { indisabled }>
LOGIN

<Button/>
</form>

</div>

);

}