import axios from "axios";

// Insert Avatar
export const insertAvatar = (avatarData) => {
  axios
    .post("/api/look", avatarData)
    .then((response) => {
        console.log(response);
        console.log("posted");
        console.log(response.data.id);
    })
    // We can still use the `.catch()` method since axios is promise-based
    .catch((error) => {
        console.log(error.response);
    });
};
