import Home from './Home';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { store } from '../../redux-toolkit/store';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
it("renders without crashing", () => {
    let div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><Home /></Provider>,div)
    // expect(true).toBeTruthy();
})
