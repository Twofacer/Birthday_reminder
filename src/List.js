import React from 'react';
const cron = require('node-cron');
cron.schedule(' * * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});
const List = ({people}) => {
  return (
    <>
     {people.map((person)=>{
       let today = new Date();  
       let date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

       const {id, name,age, image, links, date} = person;
       if(date === 'December 17, 1995'){
         console.log(date1)
       }
       return <article key={id} className="person">
         <img src={image} alt={name}></img>
         <div>
     <h4>{name}</h4>
     <p>{age} years</p>
     <p>{date}</p>
     {links ?(
       <>
       <a href={links.telegram}>Telegram links</a>
       <br/>
       <a href={links.instagram}>Instagram links</a>
       </>
     ): null}
         </div>
       </article>
     })}
    </>
  );
};

export default List;
