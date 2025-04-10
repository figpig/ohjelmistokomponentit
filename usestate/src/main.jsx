import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'
import ItemList from './itemlist.jsx'
import UserProfile from './userprofile.jsx'
import Form from './form.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App />
    <Counter />
    <ItemList />
    <UserProfile />
    <Form /> 
  </StrictMode>,
)
