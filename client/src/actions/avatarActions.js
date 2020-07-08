import axios from "axios";

// Insert Avatar
export const insertAvatar = (avatarData) => {
  axios
    .post("/api/look", avatarData)
    .then((response) => {
        console.log(response);
        console.log("posted");
        console.log(response.data.id);
        // axios
        //     .post(`/api/look/populate/${response.data.id}`)
        //     .then((res) => {
        //         console.log("this is what YOU ARE LOOKING FOR");
        //         console.log(res);
        //     })
        //     // We can still use the `.catch()` method since axios is promise-based
        //     .catch((error) => {
        //         console.log(error.response);
        //     });
    })
    // We can still use the `.catch()` method since axios is promise-based
    .catch((error) => {
        console.log(error.response);
    });
};

// export const assignUser = (req,res) => {
//     axios
//       .post(`/api/look/populate/${req.params}`)
//       .then((response) => {
//           console.log(response);
//       })
//       // We can still use the `.catch()` method since axios is promise-based
//       .catch((error) => {
//           console.log(error.response);
//       });
// };
