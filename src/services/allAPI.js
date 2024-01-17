// Upload a video

import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"

export const uploadVideo = async(reqBody)=>{
    // call POST http request to "http://localhost:4000/videos" to add video tp json server and return responce
    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}


// get all videos from json server

export const getAllVideo = async ()=>{
    // make get http request to "http://localhost:4000/videos" to get all video from json server to view component

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}


// get a video from json server

export const getAVideo = async (id)=>{
    // make get http request to "http://localhost:4000/videos" to get a video from json server to view component

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}


// remove video from json server

export const deleteVideo = async (id)=>{
    // make get http request to "http://localhost:4000/videos" to remove a video from json server to view component

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}

// Store watch history in json server

export const addToHistory = async(videoDetails) => {
    // make POST http request to "http://localhost:4000/history" to add watchhistory to the json server and return the response to VideoCard.jsx component
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}


// get all watching video history

export const getAllHistory = async() => {
    // make get http request to "http://localhost:4000/history/" to get all video watchhistory from the json server to watchHistory.jsx component
    return await commonAPI("GET",`${serverUrl}/history`,"")
}


// delete watching video history

export const deleteHistory = async(id) => {
    // make delete http request to "http://localhost:4000/history/id" to delete video watch video history from the json server to watchHistory component
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}



// Add a category to JSON server

export const addCategory = async(reqBody) => {
    // make POST http request to "http://localhost:4000/categories" to add category to the json server and return the response to category component
    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}


// GET all  category to JSON server

export const getAllCategory = async() => {
    // make GET http request to "http://localhost:4000/categories" to get video to json server and return response category component
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}


// DELETE category to JSON server

export const deleteCategory = async(id) => {
    // make DELETE http request to "http://localhost:4000/categories/id" to delete video from json server and return response category component
    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}


// UPDATE category to JSON server

export const updateCategory = async(id,body) => {
    // make UPDATE http request to "http://localhost:4000/categories/id" to UPDATE particular category to json server and return response category component
    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)
}