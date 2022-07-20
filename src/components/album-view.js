//These components will be making seperate API call from the app 
//component to server specific data about our artist
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function AlbumView() {
    //
    const { id } = useParams();
    //setting up useState
    const [albumData, setAlbumData]= useState([])

    return (
        <div>
            <h2> The Album id passed was: {id}</h2>
            <p> Album Data goes here! 🎹  </p>
        </div>
    )
}