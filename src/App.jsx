import React from 'react'

const App = () => {
  const submitted=(e)=>{
    e.preventDefault();
    console.log(e.target.username.value)
    console.log("form sumbited");

  }
  return (
    <div className='w-[80%]  bg-slate-600 mx-auto mt-10 p-5' >
      <form onSubmit={submitted} >
        <input className='' type="text"placeholder='username'name='username' />
        <input className='bg-blue-900 ml-14 px-4 py-2' type="submit"/>
      </form>
    </div>
  )
}

export default App