import React from "react";
import CategoryCard from "../components/categories/cateCards";
const Categories=()=>{
    return (
        <div className="flexing-center page">
            <CategoryCard text={'Shoes'}/>
            <CategoryCard text={'Skirts'}/>
            <CategoryCard text={'T-shirts'}/>
            <CategoryCard text={'Pants'}/>
        </div>
    )
}
export default Categories;