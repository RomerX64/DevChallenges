const app = require("./server");
const dbCon = require('./config/dbCon');

dbCon().then(
    app.listen(3000, () =>{
        console.log('server escuchando en el puerto 3000');

    })

)

module.exports = dbCon