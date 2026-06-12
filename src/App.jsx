import React, { useState } from 'react'
import Header from './components/Header/Header'
import Newtask from './components/Header/Newtask'
import Categories from './components/Categories/Categories'
import Tasktype from './components/Mytasks/Tasktype'
import Footer from './components/Footer/Footer'
import AddTask from './components/Dialog/AddTask'
import Options from './components/moreOptions/Options'
import EditTask from './components/Dialog/EditTask'


const App = () => {

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [del, setDel] = useState(false);

  // console.log(open);

  return (
    <div>
      <Header open={open} del={del} editOpen={editOpen} setOpen={setOpen}/> 
      <Categories open={open} del={del} editOpen={editOpen} />
      <Tasktype open={open} del={del} setDel={setDel} setEditOpen={setEditOpen} editOpen={editOpen}/>
      <Footer />
      {open && <AddTask open={open} setOpen={setOpen} />}
    </div>
  )
}

export default App