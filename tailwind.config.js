const { Component } = require('react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
    colors:{
      primbg: "#495E57",
      btnbg: "#F4CE14",
      primf: "#F4CE14",
      seconf: "#FFFFFF",
      menubg: "#EDEFEE",
      pricef: "#EE9972",
    },
    fontFamily:{
      prim: 'Marlazi Text',
      secon: 'Karla'
    },
    letterSpacing:{
      descp: "1px",
    },
    // height:{
    //   // comph:"440px"
    // }
    
  },
  plugins: [],
}

