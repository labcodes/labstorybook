/* eslint-disable no-console */
import html from "svelte-htm";
import { render, fireEvent } from "@testing-library/svelte";
import EmailInput from "./EmailInput.svelte";

jest.mock("lodash/isUndefined", () => ({
  default: jest.fn((value) => value === undefined),
}));

describe("EmailInput", () => {
  it("renders with base props and type=email", async () => {
    const { container } = render(
      html`<${EmailInput} id="test" label="Some text"//>`
    );
    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll("input[type='email']").length).toBe(1);
  });

  it("sets state with isValid if it is passed by props", async () => {
    const { container } = render(
      html`<${EmailInput} id="test" label="Some text" isValid=${false} //>`
    );

    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll(".lab-input--invalid").length).toBe(1);
    expect(
      container.querySelector("input[type='email']").validity.valid
    ).toBeFalsy();
  });

  it("adds invalid css class when going from valid to invalid", async () => {
    const { container } = render(
      html`<${EmailInput} id="test" label="Some text" required //>`
    );
    expect(container.querySelectorAll(".lab-input--invalid").length).toBe(0);

    await fireEvent.input(container.querySelector("input"), {
      target: { value: "test@example.com" },
    });

    expect(container.querySelectorAll(".lab-input--invalid").length).toBe(0);

    await fireEvent.input(container.querySelector("input"), {
      target: { value: "" },
    });

    expect(container.querySelectorAll(".lab-input--invalid").length).toBe(1);
  });

  it("shows help text", async () => {
    const { container, findByText } = render(
      html`<${EmailInput}
        id="testInput"
        label="Test Input"
        value="testvalue@g.com"
        helpMessage="help message"
        required
      />`
    );

    expect(findByText("help message")).toBeTruthy();
    expect(
      container.querySelectorAll(".lab-input__message--required").length
    ).toBe(1);
    expect(
      container.querySelectorAll(".lab-input__message--error").length
    ).toBe(0);

    await fireEvent.input(container.querySelector("input"), {
      target: { value: "" },
    });

    expect(findByText("help message")).toBeTruthy();
    expect(
      container.querySelectorAll(".lab-input__message--required").length
    ).toBe(0);
    expect(
      container.querySelectorAll(".lab-input__message--error").length
    ).toBe(1);
  });

  it("shows custom error message when input is invalid", async () => {
    const { container } = render(
      html`<${EmailInput}
        id="testInput"
        label="Test Input"
        value="testvalue@g.com"
        customErrorMsg="error message"
        required
      />`
    );

    expect(
      container.querySelectorAll(".lab-input__message--error").length
    ).toBe(0);

    await fireEvent.input(container.querySelector("input"), {
      target: { value: "" },
    });

    expect(
      container.querySelector(".lab-input__message--error").innerHTML
    ).toBe("error message");
  });

  it("renders prefix", async () => {
    const { container } = render(
      html`<${EmailInput} id="testInput" label="Test Input" prefix="R$" />`
    );

    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll("span.lab-input__prefix").length).toBe(2);
  });

  it("renders suffix", async () => {
    const { container } = render(
      html`<${EmailInput} id="testInput" label="Test Input" suffix=".com" />`
    );

    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll("span.lab-input__suffix").length).toBe(1);
  });

  it("renders icon", async () => {
    const { container } = render(
      html`<${EmailInput} id="testInput" label="Test Input" icon="star" />`
    );

    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll("span.lab-icon").length).toBe(1);
  });

  it("renders required icon", async () => {
    const { container } = render(
      html`<${EmailInput} id="testInput" label="Test Input" required />`
    );

    expect(container).toMatchSnapshot();
    expect(
      container.querySelectorAll("span.lab-input__required-icon").length
    ).toBe(1);
  });
});
