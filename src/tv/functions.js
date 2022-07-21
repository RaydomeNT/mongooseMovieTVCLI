const TV = require("./model");

exports.createTV = async (tvObj) => {
    try {
        const newTV = await TV.create(tvObj);
        console.log(newTV);
    }   catch (error) {
        console.log(error);
    }
}; // use node src/app --createTV --title"" --actor"" --year""

exports.readTV = async (yargsObj) => {
    try {
        const readTV = await TV.find({ title: yargsObj.title });
        console.log(readTV);
    }   catch (error) {
        console.log(error);
    }
}; //use node src/app --readTV --title""

exports.listTV = async (yargsObj) => {
    try {
        const listTV = await TV.find({ studio: yargsObj.studio });
        console.log(listTV);
    }   catch (error) {
        console.log(error);
    }
}; //use node src/app --listTV --studio""

exports.updateTV = async (yargsObj) => {
    try {
        const updateTV = await TV.updateMany(
            { title: yargsObj.title },
      { $set: { studio: yargsObj.studio, series: yargsObj.series } },
        );
        console.log(updateTV);
    }   catch (error) {
        console.log(error);
    }
}; //use node src/app --updateTV --title "" --studio "" --series ""

exports.deleteTV = async (yargObj) => {
    try {
        const deleteTV = await TV.deleteOne({ title: yargObj.title });
        console.log(deleteTV);
    }   catch (error) {
        console.log(error);
    }
} //use node src/app --deleteTV --title""