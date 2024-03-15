let obj = {
  name: "John",

  first() {
    console.log(this.name + "is a doctor"); //Outputs John is a doctor
  },

  second: () => {
    console.log(this.name + "is a doctor"); //is a doctor
  },
};
