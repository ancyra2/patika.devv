import getData from "./src/lib/service.js";

const data = getData(1).then((data) => console.log(data));
