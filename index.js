const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

const port = 8081;
const host = "127.0.0.1";
const folder_public = "public";
const folder_views = "views";
const view_engine = "ejs";

var app = express();

var views = path.resolve(__dirname, folder_views);
app.set("views", views);
app.set("view engine", view_engine);

app.use(bodyParser.urlencoded({ extended: true }));     
app.use(bodyParser.json());

//Error Handler
/* app.use(function(error, request, response, next){
    // Just basic, should be filled out to next()
    // or respond on all possible code paths
    response.status(error.status || 500);
    //Print stacktrace
    if (app.get('env') === 'development') {
        response.render('error_page', {
            error_message: error.message,
            error: error
        });
    } else{
        response.render('error_page', {
            error_message: error.message,
            error: {}
        });
    }
}); */

const testPage = "testForm";

app.get('/', function(req, res) {
    res.render(testPage, {page_title: "PDF Request Test Page"});
});

//Catch error 404
app.get('*', function(request, response) {
    response.status(404).send("Page not found.");
    })

//Poner servidor en modo pasivo
app.listen(port, host, function checkConecction(error) {
if (error) {
    return error;
}
console.log("Server running on " + host + ':' + port.toString());
});