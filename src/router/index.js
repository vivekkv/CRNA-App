import { StackNavigator } from 'react-navigation';
import LoginScreen from '../components/modules/login';
import Dashboard from '../components/modules/dashboard';

export default RouterComponent = StackNavigator({
    Login: { screen: LoginScreen },
    Dashboard: { screen: Dashboard }
})     