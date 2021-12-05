import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should show the home page", () => {
    render(<App />);
    expect(screen.getByText(/Home Task #3/i)).toBeInTheDocument();
});
