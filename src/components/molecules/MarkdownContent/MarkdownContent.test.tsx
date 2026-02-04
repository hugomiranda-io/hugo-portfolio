import { render, screen } from "@testing-library/react";

import MarkdownContent from "./MarkdownContent";

describe("MarkdownContent", () => {
 it("renders HTML string when contentHtml is provided", () => {
  render(<MarkdownContent contentHtml="<p>Salut</p>" />);

  expect(screen.getByText("Salut")).toBeInTheDocument();
 });

 it("renders children when contentHtml is not provided", () => {
  render(
   <MarkdownContent>
    <span>Children</span>
   </MarkdownContent>,
  );

  expect(screen.getByText("Children")).toBeInTheDocument();
 });
});
