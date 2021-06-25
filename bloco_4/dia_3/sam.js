const Tree = (h) => {
    for(var i=0; i<=h; i++){
      var s = '';
      for(var k = 1; k <= h - i; k++){
         s += " ";
      };
      for(var j=0; j<=i; j++) {
        s += " o";
      };
     
      console.log(s);
    };
  };
  
  Tree(7);