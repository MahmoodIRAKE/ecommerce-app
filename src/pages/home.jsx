import React from "react";
import '../utils/utils.css'
import './style.css'
import HomeCard from "../components/homecards/homecard";
const Home=({setCategory})=>{
    
    return (
        <div className="flexing-center page">
            <HomeCard text='Men' image='https://giovannicosmetics.com/wp-content/uploads/2020/04/For-Men.jpg' callback={setCategory} />
            <HomeCard text='Women' image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_494346582_2000133020009280104_303351.jpg"  callback={setCategory}/>
        </div>
    )
}
export default Home;