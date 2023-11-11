(function() {
  var _id = "210df92593819f2a2c3fe2c4159d5a2d";
  while (document.getElementById("timer" + _id))
    _id = _id + "0";
  document.write("<div id='timer" + _id + "' style='min-width:314px;height:62px;'></div>");
  var _t = document.createElement("script");
  _t.src = "./timer.min.js";
  var _f = function(_k) {
    var l = new MegaTimer(_id,{
      "view": [1, 1, 1, 1],
      "type": {
        "currentType": "1",
        "params": {
          "usertime": false,
          "tz": "6",
          "utc": 1699102800000
        }
      },
      "design": {
        "type": "plate",
        "params": {
          "round": "10",
          "background": "solid",
          "background-color": "#ffffff",
          "effect": "flipchart",
          "space": "2",
          "separator-margin": "9",
          "number-font-family": {
            "family": "Comfortaa",
            "link": "<link href='https://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
          },
          "number-font-size": "30",
          "number-font-color": "#434343",
          "padding": "8",
          "separator-on": true,
          "separator-text": ":",
          "text-on": true,
          "text-font-family": {
            "family": "Comfortaa",
            "link": "<link href='https://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
          },
          "text-font-size": "12",
          "text-font-color": "#434343"
        }
      },
      "designId": 2,
      "theme": "white",
      "width": 314,
      "height": 62
    });
    if (_k != null)
      l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function() {
    if (_t.readyState == "loaded")
      _f(1);
  }
  ;
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}
).call(this);
