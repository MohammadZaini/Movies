import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ResloveAuthScreen from "./src/screens/ResloveAuthScreen";
import PersonDetailsScreen from "./src/screens/PersonDetailsScreen";
import { setNavigator } from "./src/navigationActionsRef";
import { MaterialIcons } from '@expo/vector-icons';
import SeriesScreen from "./src/screens/SeriesScreen";
import { Provider } from './src/context/AuthContext'
import MoviesDetailsScreen from "./src/screens/MoviesDetailsScreen";
import { Feather } from '@expo/vector-icons';
import { SafeAreaProvider } from "react-native-safe-area-context";

const homeFlow = createStackNavigator({
  Home: HomeScreen,
  MoviesDetails: MoviesDetailsScreen,
  PersonDetails: PersonDetailsScreen,
})

homeFlow.navigationOptions = {
  title: "Movies",
  headerShown: false,
  tabBarIcon: ({ focused }) => (
    <MaterialIcons name="movie" size={24} color={focused ? 'red' : 'grey'} />
  )
};

const searchFlow = createStackNavigator({
  Search: SearchScreen,
  MoviesDetails: MoviesDetailsScreen
});


searchFlow.navigationOptions = {
  title: "Search",
  tabBarIcon: ({ focused }) => (
    <Feather name="search" size={24} color={focused ? 'red' : 'grey'} />
  )
};

const seriesFlow = createStackNavigator({
  Series: SeriesScreen,
  MoviesDetails: MoviesDetailsScreen
});

seriesFlow.navigationOptions = {
  title: "Series",
  tabBarIcon: ({ focused }) => (
    <Feather name="tv" size={24} color={focused ? 'red' : 'grey'} />
  )
};

const navigator = createSwitchNavigator({
  ResloveAuth: ResloveAuthScreen,
  logInFlow: createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  }),

  mainFlow: createMaterialBottomTabNavigator({
    homeFlow,
    Search: searchFlow,
    Series: seriesFlow,
    Settings: SettingsScreen,
  }, {
    activeColor: 'red',
    inactiveColor: 'grey',
    defaultNavigationOptions: {
      tabBarColor: 'black',
    },
  })

}, {
  initialRouteName: 'ResloveAuth'
});


const App = createAppContainer(navigator);
export default () => {
  return (
    <SafeAreaProvider >
      <Provider>
        <App ref={navigator => setNavigator(navigator)} />
      </Provider>
    </SafeAreaProvider>
  )
}