const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (data) => {
  let tampung = 0;
  try {
    let arrIxx = await promiseTheaterIXX();
    let arrVgc = await promiseTheaterVGC();

    tampung += arrIxx.filter(element => (element.hasil === data)).length;
    tampung += arrVgc.filter(element => (element.hasil === data)).length;
    return tampung;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
