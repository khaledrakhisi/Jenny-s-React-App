import React from "react";
import { BrowserRouter } from "react-router-dom";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";

import App from "../App";
import { MoviesContextProvider } from "../context/movies-context";

const MockApp = () => {
  window.alert = () => {}; // provide an empty implementation for window.alert

  return (
    <BrowserRouter>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </BrowserRouter>
  );
};

afterEach(cleanup);
const renderComponent = () => render(<MockApp />);
test("if it renders without crashing", async () => {
  const { getByText } = renderComponent();
  await waitFor(() => getByText(/Codest Movies!/i));
  await waitFor(() => getByText(/Already watched:/i));

  expect(getByText(/Codest Movies!/i)).toBeInTheDocument();
  expect(getByText(/Already watched:/i)).toBeInTheDocument();
});

test("if it adds new item as expected", () => {
  const { getAllByTestId, getAllByRole, getByText } = renderComponent();

  // Checking the existing movies before adding new item
  const beforeAddingTotal = getAllByTestId("movie_item").length;

  // Targeting inputs
  const inputs = getAllByRole("textbox");

  // Checking if the inputs are relevant as expected
  expect(inputs[0].id).toBe("title");
  expect(inputs[1].id).toBe("image");
  expect(inputs[2].id).toBe("comment");

  // Targeting submit button
  const submit = getAllByRole("button")[0];

  // Enter some value into the textboxes
  fireEvent.change(inputs[0], { target: { value: "Movie title" } });
  fireEvent.change(inputs[1], { target: { value: "Movie Image" } });
  fireEvent.change(inputs[2], { target: { value: "Movie comment" } });
  // Add new item
  fireEvent.click(submit);

  // Checking the existing movies before adding new item
  const afterAddingTotal = getAllByTestId("movie_item").length;

  expect(afterAddingTotal).toBeGreaterThan(beforeAddingTotal);
});

test("if it prevent duplicate item to be added as expected", () => {
  const { getAllByTestId, getAllByRole, getByText } = renderComponent();

  // Targeting inputs
  const inputs = getAllByRole("textbox");

  // Checking if the inputs are relevant as expected
  expect(inputs[0].id).toBe("title");
  expect(inputs[1].id).toBe("image");
  expect(inputs[2].id).toBe("comment");

  // Targeting submit button
  const submit = getAllByRole("button")[0];

  // Enter some value into the textboxes
  fireEvent.change(inputs[0], { target: { value: "New title" } });
  fireEvent.change(inputs[1], { target: { value: "New image" } });
  fireEvent.change(inputs[2], { target: { value: "New comment" } });
  // Add new item
  fireEvent.click(submit);

  expect(getByText(/new title/i)).toBeInTheDocument();

  // Checking the existing movies before adding new item
  const beforeAddingTotal = getAllByTestId("movie_item").length;

  // Enter some value into the textboxes
  fireEvent.change(inputs[0], { target: { value: "New title" } });
  fireEvent.change(inputs[1], { target: { value: "New image" } });
  fireEvent.change(inputs[2], { target: { value: "New comment" } });
  // Add new item
  fireEvent.click(submit);

  expect(getAllByTestId("movie_item").length).toBe(beforeAddingTotal);
});
