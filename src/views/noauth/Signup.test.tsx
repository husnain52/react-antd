import Signup from './Signup';
import { matchMedia, render } from '../../testUtils';

matchMedia("");
it("renders Signup page correctly", ()=> {
    render(<Signup />)
})