import { useState } from "react";

import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Category } from "@mui/icons-material";

const SideBar = ({selectedCategory, setSelectedCategory}) => {
    return (
        <Stack 
            direction="row"
            sx={{
                overflow:"auto",
                height:{sx:'auto', md:'95%'},
                flexDirection:{md:'column'},
            }}>
            {categories.map((category) => (
                <button 
                    className="category-btn"
                    style={{
                        color:"white",
                        background:category.name === selectedCategory && '#FC1503'    
                    }}
                    onClick={() => setSelectedCategory(category.name)}
                    key={category.name}
                    >
                    <span style={{
                        color:Category.name === selectedCategory ? "white": "red",
                        marginRight:'15px'
                    }}>{category.icon}</span>
                    <span style={{opacity:category.name === selectedCategory ? '1':'0.8'}}>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default SideBar;