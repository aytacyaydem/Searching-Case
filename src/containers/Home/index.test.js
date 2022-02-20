import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./index";

describe("Home container tests", () => {
  test("Find result by typing a person name", async () => {
    render(<Home />);
    const searchBox = screen.getByRole("textbox");
    fireEvent.change(searchBox, { target: { value: "Aytaç" } });
    expect(searchBox.value).toBe("Aytaç");
    expect(await screen.findByText("Aytaç Sinan Yaydem")).toBeInTheDocument();
    expect(
      await screen.findByText("aytacyaydem@gmail.com")
    ).toBeInTheDocument();
  });

  test("Find result by typing a policy number", async () => {
    render(<Home />);
    const searchBox = screen.getByRole("textbox");
    fireEvent.change(searchBox, { target: { value: "209384923" } });
    expect(searchBox.value).toBe("209384923");
    expect(await screen.findByText("Aytaç Sinan Yaydem")).toBeInTheDocument();
    expect(
      await screen.findByText("aytacyaydem@gmail.com")
    ).toBeInTheDocument();
  });

  test("Collapse does not show when results are empty", async () => {
    render(<Home />);
    const searchBox = screen.getByRole("textbox");
    fireEvent.change(searchBox, { target: { value: "Aytaç" } });
    expect(searchBox.value).toBe("Aytaç");
    expect(await screen.findByText("Aytaç Sinan Yaydem")).toBeInTheDocument();
    await waitFor(() => {
      expect(document.querySelector("#collapseExample")).toHaveClass("show");
    });
    fireEvent.change(searchBox, { target: { value: "" } });
    expect(searchBox.value).toBe("");
    await waitFor(() => {
      expect(document.querySelector("#collapseExample")).not.toHaveClass(
        "show"
      );
    });
  });
});
