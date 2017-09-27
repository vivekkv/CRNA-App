import { StackNavigator } from 'react-navigation';
import RootComponent from '../components/root';
import Dashboard from '../components/modules/dashboard';

const Routes = {
    Root: {
        name: 'Root',
        description: 'index root',
        screen: RootComponent,
    },
    Dashboard: {
        name: 'Dashboard',
        description: 'dashboard',
        screen: Dashboard,
    },
}

export default RouterComponent = StackNavigator({
    ...Routes,

},
    {
        'initialRouteName': 'Root', 
        'headerMode': 'none', 
        'mode': 'card'
        /*
       * Use modal on iOS because the card mode comes from the right,
       * which conflicts with the drawer example gesture
       */
        // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    });