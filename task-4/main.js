let figure = {
  title: "rectangle",
  length: 10,
  width: 6,
  area : function() {
      return figure.length*figure.width
  },
  perimeter: function(){
      // Write code here
      return 2*(figure.length+figure.width)
  }
};
console.log(figure.perimeter()); 
console.log(figure.area());

