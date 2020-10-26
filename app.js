
const express = require('express')

const port = 3000
var request = require("request")
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req , res){
	res.sendFile(__dirname + "/test.html");
});

app.post('/', (req, res) => {

 var number = req.body.number
 var text = req.body.text

 
    var options = {
        method: 'POST',
        url: 'https://panel.rapiwha.com/send_message.php',
    
        qs: {apikey: 'WNCFI2SNF2BWJ1617NV6', number:number, text:text}
        
      };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);0
      
        console.log(body);
      });
  
  

})

app.listen(port, () => {
  console.log(`sever is runinng on port ${port}`)
})