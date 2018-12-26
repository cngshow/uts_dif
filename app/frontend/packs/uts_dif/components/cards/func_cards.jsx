import React from 'react';
import axios from '../../axios'

function testAxios() {
    axios.get(gon.routes.fetch_time_path)
        .then(function (response) {
            console.log("this is an axios response with",response.data.time);
        })
        .catch(function (error) {
            console.log(error);
        });
}

const FirstCard = () => {
    testAxios();
    return (
        <div>This is the first card</div>
    )
};

const SecondCard = () => {
    testAxios();
    return (
        <div>This is the second card</div>
    )
};

export {FirstCard, SecondCard}
