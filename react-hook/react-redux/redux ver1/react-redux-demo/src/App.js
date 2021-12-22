import logo from './logo.svg';
import './App.css';
import { Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import HookCakeContainer from './components/HookCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {

  return (
/* 
we use provider in order to pass store as an attribute
by passing store as an attribute, we are avoiding having to store as store props

thông thường, khi gọi các children component để execute in react parent component, thì truyền thêm các argument === props, các children component sẽ sử dụng dưới dạng props: this.props.parameter

nhưng, muốn sử dụng argument này cho component này như là attribute, nên từ khóa provider sẽ làm việc đó, như thế các children con có thể truy cập vào store, nhưng không ở dưới dạng props.

 */ 

    /* 
    *the store as attribute not the props because the keyword Provider 
    */
    <Provider store={store}> 
      <div className="App">
          <ItemContainer cake="true"/* we pass cake as props */ />
          <ItemContainer />
          {/* <HookCakeContainer />
          <CakeContainer  />
          <NewCakeContainer /> */}
          <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
