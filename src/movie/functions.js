const Movie = require("./model");

exports.createMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
}; // use node src/app --create --title"" --actor"" --year""

exports.readMovie = async (yargsObj) => {
    try {
        const readMovie = await Movie.find({ title: yargsObj.title });
        console.log(readMovie);
    } catch (error) {
        console.log(error);
    }
}; //use node src/app --read --title""

exports.listMovie = async (yargsObj) => {
    try {
        const listMovie = await Movie.find({ year: yargsObj.year });
        console.log(listMovie);
    } catch (error) {
        console.log(error);
    }
}; //use node src/app --list --year""

exports.bulkMovie = async (yargObj) => {
    try {
        const bulkMovie = await Movie.find({ actor: yargObj.actor });
        console.log(bulkMovie);
    } catch (error) {
        console.log(error);
    }
}; //node src/app --bulk --actor ""

exports.updateMovie = async (yargsObj) => {
    try {
        const updateMovie = await Movie.updateMany(
            { title: yargsObj.title },
      { $set: { actor: yargsObj.actor, year: yargsObj.year } },
        );
        console.log(updateMovie);
    } catch (error) {
        console.log(error);
    }
}; //use node src/app --update --title "" --actor "" --year ""

exports.deleteMovie = async (yargObj) => {
    try {
        const deleteMovie = await Movie.deleteOne({ title: yargObj.title });
        console.log(deleteMovie);
    } catch (error) {
        console.log(error);
    }
} //use node src/app --delete --title""