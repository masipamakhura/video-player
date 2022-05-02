 import axios  from "axios";
 
 const KEY = 'AIzaSyDLKGg9-W-Wrxn11vGTGMnmkgBbPq4zZEw';
 
  const youtube =  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});

export default youtube;