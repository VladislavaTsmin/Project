import React, { useEffect } from "react";
import { CardItem } from "../../components/card-item";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPercent } from "../../utils/getDicsountPercent";
import { getAllItems } from "../../store/selectors";
import { fetchAllItems } from "../../store/async-actions";

export const AllProducts = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(getAllItems);

    useEffect(() => {
        dispatch(fetchAllItems());
      }, [dispatch]);
    
    return(
        <div>
            {allProducts.map(({ price, discont_price, description, image, id }) => (
            <CardItem 
                  key={id}
                  price={price}
                  discont={discont_price}
                  discontPercent={getDiscountPercent(price, discont_price)}
                  description={description}
                  image={image}
                  id={id}
            />))}
        </div>
    );
}


// {saleItems.map(({ price, discont_price, description, image, id }) => (
//     <CardItem
    //   key={id}
    //   price={price}
    //   discont={discont_price}
    //   discontPercent={getDiscountPercent(price, discont_price)}
    //   description={description}
    //   image={image}
    //   id={id}
//     />