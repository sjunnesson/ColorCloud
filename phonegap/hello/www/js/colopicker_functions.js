  Raphael(function() {
     
          // this is where colorpicker created
          var _pickerPadding=$(window).width()/20;
          console.log( $(window).width());
          cp = Raphael.colorpicker(_pickerPadding,  $(window).height()*0.15, $(window).width()-_pickerPadding*2, "#eee"),
         // cp2 = Raphael.colorwheel(360, 20, 300, "#eee"),

      out.onkeyup = function() {
          cp.color(this.value);
         // cp2.color(this.value);
      };
      // assigning onchange event handler
      var onchange = function(item) {
          return function(clr) {
              item.color(clr);
              out.style.background = clr;
              out.style.color = Raphael.rgb2hsb(clr).b < .5 ? "#fff" : "#000";
              clr = Raphael.color(clr);
          };
      };
  });