import moment from "moment";
import React from "react";


export const formatDate = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};