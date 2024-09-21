const mongoose = require('mongoose')

const dbCon = async () => {
   await mongoose.connect('mongodb+srv://RomerDio:meKl6YnZIEos4Dwk@project0.o8jmw.mongodb.net/TaskBoard');
};

module.exports = dbCon;
