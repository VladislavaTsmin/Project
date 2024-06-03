import React, { useEffect } from "react";
import { CardItem } from "../../components/card-item";
import { CardCategory } from "../../components/card-category";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDicsountPercent";
import { SiteHeader } from "../../components/site-header";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountItems, getIsLoading, getError, getCategoriesMain } from "../../store/selectors";
import { fetchAllCategories, fetchAllItems } from "../../store/async-actions";
import { Link } from "react-router-dom";
import { DiscountForm } from "../../components/discount-form";


export const Main = () => {
  const dispatch = useDispatch(); //Этот хук возвращает ссылку на функцию dispatch из Redux хранилища(store).
  // Вы можете использовать его для отправки(dispatch) действий по мере необходимости.
  const saleItems = useSelector(getDiscountItems);
  const categoriesMain = useSelector(getCategoriesMain); //извлекать данные из состояния(state) хранилища(store)
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  if (error) {
    return <div>ERROR</div>
  }

  return isLoading ? (
    <div>LOADING...</div>
  ) : (
    <>
      <Link to="products/2"> go see product </Link>
      <SiteHeader />
      <div className={styles.categories}>
        {categoriesMain.map(({ id, title, image }) => (
          <CardCategory
            key={id}
            titel={title}
            image={image}
            id={id} />
        ))}

        <DiscountForm />

      </div>
      <div className={styles.sales}>
        {saleItems.map(({ price, discont_price, title, image, id }) => (
          <CardItem
            key={id}
            price={price}
            discont={discont_price}
            discontPercent={getDiscountPercent(price, discont_price)}
            title={title}
            image={image}
            id={id}
          />
        ))}
      </div>
    </>
  );
};