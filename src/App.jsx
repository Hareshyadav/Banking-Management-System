import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListAccountComponent from './Components/ListAccountComponent'
import AccountComponent from './Components/AccountComponent'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListAccountComponent />} />
        <Route path="/all-accounts" element={<ListAccountComponent />} />
        <Route path="/add-account" element={<AccountComponent />} />
        <Route path="/update-account/:id" element={<AccountComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
