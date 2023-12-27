//Home of the work 1

const animal = {
  name: "Drogon",
  kind: "Dragon",
  speak: function (message) {
    console.log(this.kind + " says: " + message);
  },
};
animal.speak("hey bro");
