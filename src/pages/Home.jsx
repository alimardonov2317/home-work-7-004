import React, { useRef } from 'react'
import { useCreateBookMutation, useDeleteBookMutation, useGetBooksQuery } from '../redux/api/book.api'

const Home = () => {
  const { data, isLoading } = useGetBooksQuery() // return {}
  const [createBook, { isLoading: isCreateLoading }] = useCreateBookMutation() // return [func, {}]
  const [deleteBook] = useDeleteBookMutation()

  const title = useRef(null)
  const desc = useRef(null)
  const author = useRef(null)
  const soldCount = useRef(null)

  const handleCreateBook = e => {
    e.preventDefault()
    let newBook = {
      title: title.current.value,
      desc: desc.current.value,
      author: author.current.value,
      soldCount: soldCount.current.value,
    }

    createBook(newBook)
      .unwrap()
      .then(() => {
        title.current.value = ""
        desc.current.value = ""
        author.current.value = ""
        soldCount.current.value = ""
      })
  }
  const handleDeleteBook = id => {
    deleteBook(id)
  }

  return (
    <div className='flex container mx-auto gap-5 py-5'>
      <section className="max-w-[375px] w-full">
        <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow bg-gray-800 ">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white">
            Create products
          </h1>
          <form onSubmit={handleCreateBook} className="space-y-6">
            <div>
              <label htmlFor="BookName" className="block mb-2 text-sm font-medium text-white">Book Name</label>
              <input type="text" ref={title} name="BookName" className="block w-full p-2.5  border  rounded-lg bg-gray-700 border-gray-600 placeholder-white text-white" placeholder="Book Name" required />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
              <input ref={desc} type="text" name="description" className="block w-full p-2.5 border  rounded-lg bg-gray-700 border-gray-600 placeholder-white text-white " placeholder="Description" required />
            </div>
            <div>
              <label htmlFor="Author" className="block mb-2 text-sm font-medium text-white">Author</label>
              <input ref={author} type="text" name="Author" className="block w-full p-2.5  border  rounded-lg bg-gray-700 border-gray-600 placeholder-white text-white " placeholder="Author" required />
            </div>
            <div>
              <label htmlFor="sold" className="block mb-2 text-sm font-medium text-white">Sold Count</label>
              <input ref={soldCount} type="number" name="sold" className="block w-full p-2.5  border  rounded-lg bg-gray-700 border-gray-600 placeholder-white text-white " placeholder="Sold Count" required />
            </div>
            <button type="submit" disabled={isCreateLoading} className="w-full py-2.5 px-5 text-sm font-medium text-white text-[20px] bg-emerald-400 rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50 disabled:cursor-default cursor-pointer">{isCreateLoading ? "Loading" : "Create"}</button>
          </form>
        </div>
      </section>

      {
        isLoading && <div className='text-center text-3xl'>Loading....</div>
      }
      <div className='grid grid-cols-4 gap-4 w-full h-fit'>
        {
          data?.map((book) => (
            <div className='shadow bg-gray-800 text-white p-4 rounded max-h-[900px] h-full max-w-[400px] w-full' key={book.id}>
              <h3 className='text-xl font-bold pb-3 mb-1 border-gray-200 text-center'>{book.title}</h3>
              <p>{book.desc}</p>
              <p>{book.author}</p>
              <p className='mb-2'>Sold Count: {book.soldCount}</p>
              <button onClick={() => handleDeleteBook(book.id)} className="py-1 px-5 bg-red-600 rounded ">Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home

