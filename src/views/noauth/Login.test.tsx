import Login from "./Login";
import { render, matchMedia } from "../../testUtils";
import useDocumentTitle from "../../common/documentTitle";
import {renderHook} from '@testing-library/react-hooks'

matchMedia("");

describe("Login page", () => {
  it("renders login page correctly", () => {
    render(<Login />);
  });
  it("renders the page title correctly", () => {
      renderHook(()=>useDocumentTitle('Login Page'))
      expect(document.title).toBe('Login Page')
  })
  it("redners login form correctly", ()=>{
      
  })
});
