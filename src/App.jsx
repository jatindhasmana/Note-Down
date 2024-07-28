import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Banner from './components/Banner';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import EditNote from './components/EditNote';

function App() {

  return <>
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Banner/>}></Route>
      <Route path='/add' element={<NoteForm></NoteForm>}></Route>
      <Route path='/read' element={<NoteList></NoteList>}></Route>
      <Route path='/edit' element={<EditNote></EditNote>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  </>
}

export default App;
