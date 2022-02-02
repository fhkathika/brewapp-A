import { Grid } from '@mui/material';
import React from 'react';
import './singleItem.css'
const SingleItem = ({product}) => {
    // const {_id,name,description,price,image}=product
    const {idMeal,strMeal,strMealThumb,strCategory,strArea}=product
    return (
        <Grid item xs={4} sm={4} md={4} >
         
        <paper class="column">
    <div class="post-module">
 
       <div class="thumbnail">
         {/* <div class="date">
           <div class="day">27</div>
           <div class="month">Mar</div>
         </div> */}
         <img style={{width:'100%',height:'17.5em'}} src={strMealThumb}/>
       </div>
     
       <div class="post-content">
         <div class="category">{strMeal}</div>
         <h1 class="title">{strCategory}</h1>
         <h2 class="sub_title">{strArea}</h2>
         {/* <p class="description"> {description}</p> */}
     
            
       </div>
     </div>
   </paper>
       </Grid>
    );
};

export default SingleItem;