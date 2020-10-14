import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen212279Navigator from '../features/CopyOfBlankScreen212279/navigator';
import BlankScreen212278Navigator from '../features/BlankScreen212278/navigator';
import CopyOfBlankScreen012277Navigator from '../features/CopyOfBlankScreen012277/navigator';
import BlankScreen012251Navigator from '../features/BlankScreen012251/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen212279: { screen: CopyOfBlankScreen212279Navigator },
BlankScreen212278: { screen: BlankScreen212278Navigator },
CopyOfBlankScreen012277: { screen: CopyOfBlankScreen012277Navigator },
BlankScreen012251: { screen: BlankScreen012251Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
