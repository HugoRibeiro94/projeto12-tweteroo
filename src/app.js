import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];

const tweets = [];

app.post('/sign-up', (request, response) => {

    const login = {
        username: request.body.username,
	    avatar: request.body.avatar
    }

    usuarios.push(login);

    response.send(login);
})

app.post('/tweets', (request, response) => {
    
    const novoTweet = {
        username: request.body.username,
	    tweet: request.body.tweet,
        avatar: request.body.tweet
    }

    tweets.push(novoTweet);

    response.send(novoTweet);

})

app.get('/tweets', (request, response) => {

    
                                               
    //const tweet = tweets.find( t => t.id === Number(id));

    response.send(tweets);
})


app.listen(5000,() => console.log('rodando'));