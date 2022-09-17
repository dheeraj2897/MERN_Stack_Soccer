import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/soccerDB',{
    
},(err) => {
    if(err){
        console.log('...---**^**---...data_base connection fails...---**^**---...')
        console.log(err);
    }
    else{
        console.log("successfully connected");
    }
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/',(request,response) => {
    response.send(`Our Soccer application is running ${PORT}`)
});

app.listen(PORT,() =>{
    console.log(`Your soccer server is running on port ${PORT}`);
});