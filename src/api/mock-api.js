import { MOCK_DATA } from "./data";

// export function () {
//   var movies = localStorage.getItem("movies-all");

//   if (!movies) {
//     return MOCK_DATA;
//   } else {
//     return JSON.parse(movies);
//   }
// }

/**
 * Pseudo APIs
 */

const FAKE_API_DELAY = 2e3;

export const getAllMovies = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, FAKE_API_DELAY);
  });
};
