import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';

const Home = () => {

    const [products, setProducts] = useState([])
    const [searchFood,setSearchFood]=useState(products)
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${products}`)
        .then(res => res.json())
        .then(data => {
          setProducts(data.meals)
          setSearchFood(data.meals)
          console.log(data.meals)
        })
    }, [])
    const filterfood=(category)=>{
      let result = [];
      console.log(category);
      result = products.filter((data) => {
        console.log(data)
      return data.strCategory===category
      });
      setSearchFood(result)
      console.log('result....',result)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}} onClick={()=>filterfood('Vegetarian')}>Vegetarian</Button>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}}  onClick={()=>filterfood('Miscellaneous')}>Miscellaneous</Button>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}}  onClick={()=>filterfood('Pasta')}>Pasta</Button>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}}  onClick={()=>filterfood('Dessert')} variant="outline-success">Dessert</Button>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}}  onClick={()=>filterfood('Beef')}>Beef</Button>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}}  onClick={()=>filterfood('Seafood')}>Seafood</Button>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}}  onClick={()=>filterfood('Lamb')}>Lamb</Button>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}}  onClick={()=>filterfood('Chicken')}>Chicken</Button>
        <Button sx={{ borderRadius: 1 ,margin:1,color:'#f58b80',border:2}}  onClick={()=>setSearchFood(products)}>All</Button>
        <Grid container spacing={{ xs: 2, md: 2 }} mx='auto' columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            searchFood.map(product =>
              <>
                <SingleItem
                  key={product._id}
                  product={product}
                ></SingleItem>
  
              </>)
          }
        </Grid>
  
  
      </Box>
    );
};

export default Home;