import Signup from './Signup';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux-toolkit/store'

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
it("renders Signup page correctly", ()=> {
    const div = document.createElement("div")
    ReactDOM.render(<Provider store={store}><Router><Signup /></Router></Provider>, div)
})
export {}