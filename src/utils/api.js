// src/utils/api.js
import axios from 'axios';

export const fetchQuestions = async (amount = 10, type = 'multiple') => {
    const response = await axios.get('https://opentdb.com/api.php?amount=10', {
        params: {
            amount,
            type,
        },
    });
    return response.data.results;
};
