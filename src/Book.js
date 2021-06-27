import React from 'react'

const Book = ({img,title,author}) => {
    //const {img, title, author}= props;
    const clickHandler = () =>{
      alert('hello world')
    };
    const compleExample = (author) =>{
      
    }
    return ( 
    <article className='book'>
      <img src={img} alt='' />
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>referance example</button>
      <button type="button" onClick={() =>compleExample(author)}>more complex</button>
      
    </article>) 
  };

export default Book