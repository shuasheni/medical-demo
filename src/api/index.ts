import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './table.json',
        method: 'get'
    });
};

export const orgData = () => {
    return request({
        url: './organization.json',
        method: 'get'
    });
};
