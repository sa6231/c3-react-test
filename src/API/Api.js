import {base_url} from '../Config/Config';

export const getFetchData = (page_url) => {
    return fetch(base_url+page_url)
        .then(response => response.json());
}