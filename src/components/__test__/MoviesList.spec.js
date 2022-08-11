import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import { MoviesContextProvider } from "../../context/movies-context";
import { MoviesList } from "../MoviesList";

const MockComponent = () => {
  window.scrollTo = jest.fn();
  return (
    <MoviesContextProvider>
      <MoviesList
        movies={[
          { title: "D", image: "D", comment: "D" },
          { title: "A", image: "A", comment: "A" },
          { title: "C", image: "C", comment: "C" },
        ]}
        listType="watch"
        onClick={() => {}}
      />
    </MoviesContextProvider>
  );
};

describe("MovieList component tests", () => {
  beforeEach(() => {
    render(<MockComponent />);
  });
  afterEach(cleanup);
  it("Should render table as expected", () => {
    expect(screen.getAllByText(/A/i).length).not.toBe(0);
    expect(screen.getAllByText(/C/i).length).not.toBe(0);
    expect(screen.getAllByText(/D/i).length).not.toBe(0);
  });
  it("Should display sorted data as expected", () => {
    /**
     *
     * The unsorted order is: D, A, C
     */
    const divs = screen.getAllByTestId("movie_item");

    /**
     *
     * The Sorted order should be:
     */
    expect(divs[0].textContent).toBe("AA");
    expect(divs[1].textContent).toBe("CC");
    expect(divs[2].textContent).toBe("DD");
  });
});
