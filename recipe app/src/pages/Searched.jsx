

import React,{useState,useEffect} from 'react';
import {useParams,Link} from "react-router-dom";
import styled from "styled-components";

function Searched() {
    const[searchRecipes,setSearchRecipes]=useState([]);
    const params=useParams();

    const getSearched=async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ddf73d090b754d0aa4a6617539ad429f&query=${name}`);
        const recipes=await data.json();
        setSearchRecipes(recipes.results);
    }
    useEffect(()=>{
        getSearched(params.search)
    },[params.search]);
    
  return (

      <Grid>
          
              {searchRecipes.map((recipe)=>{
                  return(
                      <Card>
                          <Link to={"/recipe/"+recipe.id}>
                          <img src={recipe.image} alt="..."/>
                          <h4>{recipe.title}</h4>
                          </Link>
                      </Card>
                  )
              })}
          
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

export default Searched;