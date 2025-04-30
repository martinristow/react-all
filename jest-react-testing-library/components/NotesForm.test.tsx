import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react'
import NotesForm from "@/components/NotesForm";

describe('Testing NotesApp component', () => {
    beforeEach(() => {
        render(<NotesForm/>)
    })

    it("renders a title", () => {
        const text = screen.getByText(/Notes App/);
        expect(text).toBeInTheDocument();
    })

    it("renders a description", () => {
        const text = screen.getByTestId("desc");
        expect(text).toBeInTheDocument();
    })

    it("renders input textBox", () => {
        const textInput = screen.getByPlaceholderText(/Enter a note/);
        expect(textInput).toBeInTheDocument();
    })

    it("add note button renders", () => {
        const addNoteButton = screen.getByRole("button");
        expect(addNoteButton).toBeInTheDocument();
    })

    it("check add note button disabled", () => {
        const addNoteButton = screen.getByRole("button");
        expect(addNoteButton).toBeDisabled();
    })

    it("fill the input note textbox to make button enabled", () => {
        const textInput = screen.getByPlaceholderText(/Enter a note/);
        fireEvent.change(textInput, {target: {value: "Test Note 1"}});
        const addNoteButton = screen.getByRole("button");
        expect(addNoteButton).not.toBeDisabled();
    })

    it("test notes list doesn't appear when empty", () => {
        const notesList = screen.queryByTestId("noteslist");
        expect(notesList).not.toBeInTheDocument();
    });

    it("test adding a note to the list", () => {

        const textInput = screen.getByPlaceholderText(/Enter a note/);
        const addNoteButton = screen.getByRole("button");

        // enter a text and click on button
        fireEvent.change(textInput, {target: {value: "Test Note 1"}});
        fireEvent.click(addNoteButton);
        fireEvent.change(textInput, {target: {value: "Test Note 2"}});
        fireEvent.click(addNoteButton);

        // we check if the list has appeared
        const notesList = screen.getByTestId("noteslist");
        expect(notesList).toBeInTheDocument();

        // we check if there is a note in the list
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(2);
    })

})