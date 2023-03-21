import axios from "axios";

export default axios.create({

    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzVmNGIyYjNmODAxYTNlYWQ4N2MxY2Y5NmVlZjhmZSIsInN1YiI6IjYzZmNlYWE0MzQ0YThlMDA4ZWM2NmZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wpv3rzcYNNsHgnc7sLkqN3CEkXBfKiYW54T-dGItgK4'
        ,'Content-Type': 'application/json;charset=utf-8'
    }
});
