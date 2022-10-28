import Home from './Home';
import { matchMedia, render } from '../../testUtils';

matchMedia('');
it("renders without crashing", () => {
   render(<Home />)
})
