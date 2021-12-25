import React from "react";
import CategoryCard from "../components/categories/cateCards";
const Categories=({setCategory})=>{
    return (
        <div className="flexing-center page">
            <CategoryCard text={'Shoes'} setCategory={setCategory}/>
            <CategoryCard text={'Skirts'} setCategory={setCategory}/>
            <CategoryCard text={'T-shirts'} setCategory={setCategory}/>
            <CategoryCard text={'Pants'} setCategory={setCategory}/>
        </div>
    )
}
export default Categories;