import React, {useEffect, useState,useContext} from "react";
// import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { CardCategory } from "../../components/card-category";
import cn from "classnames";
import { themeContext } from "../../context/theme";
import styles from "./index.module.scss"




export const CategoriesLayout = () => {

  const [categories, setCategories] = useState([]);
  const {theme, switchTheme} = useContext(themeContext);

  useEffect(fetch(`${BASE_URL}/categories/all`)
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    setCategories(data);
  }));

  const filtredCategories = categories.filter(({index})=>{
    if(index < 5 ){
      return true;
    }else{
      return false;
    }
  });

return (
  <>
  <h2 className={cn(styles.categoriesText, {
          [styles.dark]: theme === "dark",
        })}>Categories</h2>
    <div  className={cn(styles.categoriesLayout, {
        [styles.dark]: theme === "dark",
      })}>
      {filtredCategories.map(({ image, id, title }) => (
        <CardCategory image={image} title={title} key={id} id={id}/>
      ))}
    </div>
  </>
);
};

//       return (
//         <>
//              <h1>Categories</h1>
//              <Link to='/categories/1'>category1</Link>
//              <Link to='/categories/2'>category2</Link>
//              <Link to='/categories/3'>category3</Link>
//         </>
//     );
// }


