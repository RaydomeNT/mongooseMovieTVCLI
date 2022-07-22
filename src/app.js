require("./db/connections");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, readMovie, listMovie, bulkMovie, updateMovie, deleteMovie } = require("./movie/functions")
const { createTV, readTV, listTV, updateTV, deleteTV } = require("./tv/functions")

const app = async (yargsObj) => {
  try {
    //Movies CRUD
  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year });
    //add a movie from the terminal into an object and save in database

  } else if (yargsObj.read) {
    await readMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year });
    //search a movie with title

  } else if (yargsObj.list) {
    await listMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year });
    //lists movies from a specified year

  } else if (yargsObj.bulk) {
    await bulkMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year })
    //search for an actor and return a list of movies they are in
  
  } else if (yargsObj.update) {
    await updateMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year });
    //update one database entry

  } else if (yargsObj.delete) {
    await deleteMovie({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year });
    //delete one database entry

    //TV CRUD
  }  else if (yargsObj.createTV) {
      await createTV({ title: yargsObj.title, studio: yargsObj.studio, series: yargsObj.series });
    //add a TV show from the terminal into an object and save in database

  } else if (yargsObj.readTV) {
    await readTV({ title: yargsObj.title, studio: yargsObj.studio, series: yargsObj.series });
    //search for a show by title

  } else if (yargsObj.listTV) {
    await listTV({ title: yargsObj.title, studio: yargsObj.studio, series: yargsObj.series });
    //search a studio to bring a list of TV shows they made

  } else if (yargsObj.updateTV) {
    await updateTV({ title: yargsObj.title, studio: yargsObj.studio, series: yargsObj.series });
    //update TV show data

  } else if (yargsObj.deleteTV) {
    await deleteTV({ title: yargsObj.title, studio: yargsObj.studio, series: yargsObj.series });
    //delete TV show data
  
  } else {
    console.log("Incorrect command");
  }

  } catch (error) {
    console.log(error);
  }
  await mongoose.disconnect();
};

app(yargs.argv);