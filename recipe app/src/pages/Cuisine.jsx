

import React,{useState,useEffect} from 'react';
import styled from "styled-components";
// import {motion} from "framer-motion";
import{useParams,Link} from "react-router-dom";

function Cuisine() {
    const[cuisine,setCuisine]=useState([]);
    let params=useParams();
    const getCuisine=async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ddf73d090b754d0aa4a6617539ad429f&cuisine=${name}&number=20`);
        const recipes=await data.json();
        setCuisine(recipes.results);
    }
    useEffect(()=>{
        getCuisine(params.type);
    },[params.type]);
  return (
    <Grid>
        {
            cuisine.map((item)=>{
                return(
                    <Link to={"/recipe/"+item.id}>
                    <Card key={item.id}>
                        <img src={item.image} alt="title" />
                        <h4>{item.title}</h4>
                    </Card>
                    </Link>
                )
            })
        }
    </Grid>
  )
}


const Grid=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;
`
const Card=styled.div`
    img{

        width:90%;
        border-radius:2rem;
    a{
        text-decoration: none;
    }
    h4{
        text-align:center;
        padding:1rem;
    }
    }
`

export default Cuisine;