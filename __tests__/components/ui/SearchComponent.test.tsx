import { screen, render, fireEvent } from "@testing-library/react";

import { SearchComponent } from "../../../components/ui/SearchComponent";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Search Component", () => {
  it("<SearchComponent /> debe hacer match con el snapshot", () => {
    const { container } = render(<SearchComponent />);
    expect(container).toMatchSnapshot();
  });

  test("Search input get value", () => {
    render(<SearchComponent />);
    const searchInput = screen.getByTestId("inputsearch") as HTMLInputElement;
    fireEvent.input(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toEqual("test"); // OR
  });

  test("onSearchTerm no devuelve nada", () => {
    const signinMock = jest.fn();
    const props: any = {
      signin: signinMock,
    };
    const component = render(<SearchComponent {...props} />);
    component.getByTestId("buttonsearch").click();
    setTimeout(() => {
      expect(signinMock.mock.calls.length).to.equal("");
    }, 0);
  });
});
