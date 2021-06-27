import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {data} from './books'
import SpecificBook from './Book'






function BookList(){
  return(
    <section className='booklist' >
     {data.map((book,index)=>{
       const {img,title,author} = book;
       return (
        <SpecificBook key={book.id} {...book}></SpecificBook>
       )

     })}
    </section>
    
  );
    
}



ReactDOM.render(<BookList/>, document.getElementById('root'));
