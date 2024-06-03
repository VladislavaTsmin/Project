import React from "react";
import {useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
export const DiscountForm = () => {
    const dispatch = useDispatch();

    const {register,
        handleSubmit,
        formState,
        getValues
    } = useForm();

    const onFormSubmit = () => {

    }

    return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="Name"/>
        <input type="tel" placeholder="Phone number"/>
        <input type="email" placeholder="Email"/>
    </form>
    )
};