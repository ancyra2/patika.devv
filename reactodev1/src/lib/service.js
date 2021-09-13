import axios from "axios";

const getData = (id) => {
    return new Promise(async (resolve , reject)=>{
      const data = await axios('https://jsonplaceholder.typicode.com/users/' + id);
      resolve(data);
    });

};

export default getData;
