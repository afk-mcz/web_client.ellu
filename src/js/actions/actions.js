import fetch from 'isomorphic-fetch';
import constants from '../constants.js';
const apiURL = constants.APIURL;

export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export function setCategoryFilter(id, name) {
    return {
        type: SET_CATEGORY_FILTER,
        id,
        name
    };
}

export const ADD_TAG_FILTER = 'ADD_TAG_FILTER';
export const DELETE_TAG_FILTER = 'DELETE_TAG_FILTER';
export const CLEAR_ALL_TAG_FILTERS = 'CLEAR_ALL_TAG_FILTERS';

export function addTagFilter(id, name) {
    return { 
        type: ADD_TAG_FILTER,
        id,
        name
    };
}

export function deleteTagFilter(id) {
    return {
        type: DELETE_TAG_FILTER,
        id
    };
}

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
function requestProjects() {
    return {
        type: REQUEST_PROJECTS
    };
}

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export function receivePosts(json) {
    return {
        type: RECEIVE_PROJECTS,
        projects: json,
        receivedAt: Date.now()
    };
}

export function fetchPosts() {

    return function (dispatch) {
        dispatch(requestProjects());
        return fetch(apiURL + 'projects')
        .then(response => response.json())
        .then(json =>
              dispatch(receivePosts(json))
             );
    };
}
