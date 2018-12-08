import { GET_ITEM, GET_ERRORS } from './types';
import axios from 'axios';

export const getItem = (items) => dispatch => {
    axios.get("http://localhost:5000/items")
        .then(res => dispatch({
            type: GET_ITEM,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        })
}