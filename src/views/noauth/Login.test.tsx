import Login from "./Login";
import { render, matchMedia } from "../../testUtils";
import useDocumentTitle from "../../common/documentTitle";
import { renderHook } from "@testing-library/react-hooks";
import { cleanup, screen } from "@testing-library/react";

matchMedia("");

describe("Login page", () => {
  let container : HTMLDivElement
  beforeEach(()=>{
    container = document.createElement('div');
    document.body.appendChild(container)
    render(<Login />)
  })
  afterEach(()=>{
    cleanup();
  })
  it("renders the page title correctly", () => {
    renderHook(() => useDocumentTitle("Login Page"));
    expect(document.title).toBe("Login Page");
  });
  it("redners login form correctly", () => {
    const inputs = container.querySelectorAll('input');
    screen.debug(inputs[0])
  });
});