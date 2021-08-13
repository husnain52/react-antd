import Login from './Login';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
it("renders login page correctly", ()=> {
    const div = document.createElement("div")
    ReactDOM.render(<Router><Login /></Router>, div)
})
export {}