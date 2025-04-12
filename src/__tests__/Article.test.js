// src/__tests__/Article.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Article from '../components/Article'; 

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  screen.debug();
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
