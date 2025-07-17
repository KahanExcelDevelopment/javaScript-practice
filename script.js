// javascript object practice
// created an object that lets me know how many flyers are left
let flyerMission = {
  people: 144,
  flyer: 50,
  checkHowManyFlyerLeft: function () {
    return this.people - this.flyer;
  },
};
console.log(flyerMission.checkHowManyFlyerLeft());
