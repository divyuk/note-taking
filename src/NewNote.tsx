import NoteForm from "./NoteForm";

function NewNote({ onSubmit }) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm />
    </>
  );
}

export default NewNote;
