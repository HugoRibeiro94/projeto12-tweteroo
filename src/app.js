import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];

const tweets = [];

app.post('/sign-up', (request, response) => {

    const { username , avatar} = request.body;

    const login = {
        username: username,
	    avatar: avatar
    }

    if( !username ){

        response.status(422).send("UNAUTHORIZED");

    }

    usuarios.push(login);

     response.status(200).send("OK");
})

app.post('/tweets', (request, response) => {

    const { username , tweet} = request.body;

    const novoTweet = {
        username: username,
	    tweet: tweet
    }

    tweets.push(novoTweet);
    response.send(novoTweet);
    
    

})

app.get('/tweets', (req, res) => {

    const array = [];

    tweets.map( tweet => {
        
        let avatar = usuarios.find((item) => item.username === tweet.username );

        array.push({ username: tweet.username, avatar: avatar.avatar, tweet: tweet.tweet})

    })
    
    if (array.length > 10){
        
        for(let contador = 1; array.lenght > 10; contador++){
            
            res.send(array.slice(contador));
        }
        
    }else{
        res.send(array);    
    }
    
});

app.get("/", (req, res) => {
    
    res.send('Executando');
});

app.listen(5000,() => console.log('rodando'));