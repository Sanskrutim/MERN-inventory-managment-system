import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const EditBooks = () => {
    const {id} = useParams();
    const {bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl} = useLoaderData();
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children",
        "Travel",
        "Religion",
        "Art and Design"
      ]
    
      const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    
      const handleChangeSelectedValue = (event) => {
        setSelectedBookCategory(event.target.value);
      }
      const handleUpdate = (event) => {
          event.preventDefault();
          const form = event.target;
    
          const bookTitle = form.bookTitle.value;
          const authorName = form.authorName.value;
          const imageUrl = form.imageUrl.value;
          const category = form.categoryName.value;
          const bookDescription = form.bookDescription.value;
          const bookPdfUrl = form.bookPdfUrl.value;
    
          const updateBookObj = {
            bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
          }
        //   console.log(bookObj);
    
          //send data to database
          fetch(`https://mern-backend-ys3qkr446-amanverma2202.vercel.app/book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateBookObj)
          }).then(res => res.json()).then(data => {
            alert("Book updated successfully!!")
          })   
          
      }
    
      return (
        <div className='px-4 my-12'>
          <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>
    
            <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
            <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book Title" />
              </div>
              <TextInput id="bookTitle" type="bookTitle" placeholder= "Book Name" required defaultValue={bookTitle}/>
            </div>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="authorName" value="Author Name" />
              </div>
              <TextInput id="authorName" type="authorName" placeholder= "Author Name" required defaultValue={authorName}/>
            </div>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imageUrl" value="Book Image" />
              </div>
              <TextInput id="imageUrl" type="imageUrl" placeholder= "Book Image" required defaultValue={imageUrl}/>
            </div>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>
              <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                  {
                    bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                  }
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bookDescription" value="Book Description" />
              </div>
              <Textarea id="bookDescription" name="bookDescription" placeholder='write your book description...' rows={6} className='w-full'defaultValue={bookDescription}/>
            </div>
            </div>
            <div>
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
            </div>
            <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="book pdf url" required defaultValue={bookPdfUrl}/>
          </div>
    
          <Button type="submit" className='mt-5'>Update Book</Button>
          </form>
        </div>
      )
}

export default EditBooks
