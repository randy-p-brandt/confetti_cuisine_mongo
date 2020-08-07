
exports.showSignUp = (req, res) => {
    console.log("in showSignUp");
    res.render("contact");
};

exports.postedSignupForm = (req, res) => {
    res.render("thanks");
};
//
var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artivhoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }

];

exports.showCourses = (req, res) => {
    res.render("courses", { offeredCourses: courses })
};

/*
app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
     console.log("veggy"); xxxx 
    res.send(`this is the page for vegetable ${veg}`)
});
*/
exports.sendReqParams = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`and the veggy is: ${veg}`);
};


exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render("index", { name: paramsName });
};