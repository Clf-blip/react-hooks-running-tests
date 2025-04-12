// src/__tests__/Article.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for toBeInTheDocument()
import Article from '../components/Article'; // adjust if your path is different

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  screen.debug();
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
