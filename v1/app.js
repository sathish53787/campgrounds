var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  var campgrounds = [
    {
      name: "ronaldo",
      image: "https://razzonline.com/wp-content/uploads/2017/04/croo.jpg"
    },
    {
      name: "dhoni",
      image:
        "http://images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg"
    },
    {
      name: "messi",
      image:
        "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-with-the-match-ball-after-scoring-three-picture-id460102914?s=612x612"
    }
  ];

  res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(process.env.port || 7000, function() {
  console.log("the telpcamp Server Has started!");
});
