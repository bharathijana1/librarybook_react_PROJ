import React from 'react'
import * as yup from "yup";

export const Validation = yup.object().shape({
    title:yup
    .string()
    .required("title is required")
    .min(5,"Minimum 5 character required")
    .max(25,"maximum 20 character required"),
    author:yup.object().shape({
        name:yup
        .string()
        .max(25,"maximum 2 char required")
        .min(5,"minimum 5 char required")
        .required("author name id required"),

        birthYear:yup
        .number()
        .positive("enter a positive year")
        .integer("year must be integer")
        .min(1600,"enter a valid birth year")
        .max(2024,"enter a valid birth year")
        .required("author birth year is required"),

        nationality:yup
        .string()
        .required("Author nationality is requred"),

        biography:yup
        .string()
        .required("author biography is required")
        .min(30,"minimum 30 char")
        .max(50,"maxium 50 char required")
    }),
    genre:yup
    .string()
    .required("Genre is required"),

    publicationYear:yup
    .number()
    .required("publication year is required")
    .min(1000,"enter a valid publication year")
    .max(2024,"enter a valid publication year")
    .integer("year must be integer")
    .positive("enter a positive year"),

    isbn:yup
    .string()
    .required("isbn code is required")
    .min(13, "isbn coode minimum 13 digit required")

});

