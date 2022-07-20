//These components will be making seperate API call from the app 
//component to server specific data about our artist
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ArtistView() {
    //adding the react-router-dom
    const { id } = useParams();
    //setting up useState
    const [artistData, setArtistData]= useState([])

    return (
        <div>
            <h2> The Artist id passed was: {id}</h2>
            <p> Artist Data goes here! 🎵 </p>
        </div>
    )
}