import React, { useEffect } from "react";
import { getAllCategories } from "../../store/selectors";
import { CardCategory } from "../../components/card-category";
import { fetchAllCategories } from "../../store/async-actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";

export const CategoriesLayout = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);


  return (
    <>
      <div className={styles.wrapper}> 
        <h2 className={styles.categoriesText}>Categories</h2>
        <div className={styles.categoriesLayout}>
          {categories.map(({ image, id, title }) => (
            <CardCategory
              image={image}
              title={title}
              key={id}
              id={id} />
          ))}
        </div>
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


