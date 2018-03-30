import axios from 'axios';

import { BASE_URL, AUTH_TOKEN } from 'constants/globals';

axios.defaults.headers.common.Authorization = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default class TabActions {
    static FETCH_ALL_TABS_START = 'FETCH_ALL_TABS_START';
    static FETCH_ALL_TABS_COMPLETE = 'FETCH_ALL_TABS_COMPLETE';

    static getAllTabs = () => {
        return dispatch => {
            dispatch({
                type: TabActions.FETCH_ALL_TABS_START
            });

            axios
                .get(`${BASE_URL}/tabs`)
                .then(response => {
                    dispatch({
                        type: TabActions.FETCH_ALL_TABS_COMPLETE,
                        payload: response.data
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        };
    };
}
