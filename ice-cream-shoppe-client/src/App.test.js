import { render, screen } from "@testing-library/react";
import App from "./App";

test("displays images from the server", async () => {
    render(<App />);
    //saying that we want all images that end in alt text of `flavor` that are case insensitive
    const images = await screen.findAllByRole("img", { name: /flavor$/i});
    expect(images).toHaveLength(2);
});
