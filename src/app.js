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

    usuarios.push(login);

    response.send("OK");
    
})

app.post('/tweets', (request, response) => {

    const { username , tweet} = request.body;

    const novoTweet = {
        username: username,
	    tweet: tweet
    }

    if( !username ){

        response.send("UNAUTHORIZED");

    }else{

        tweets.push(novoTweet);
        response.send("OK");
    }
    

})

app.get('/tweets', (req, res) => {

    const array = [];

    tweets.map( tweet => {
        console.log(usuarios);
        let avatar = usuarios.find((item) => item.username === tweet.username );
        console.log(avatar);
        
        if (array < 10)

            array.push({ username: tweet.username, avatar: avatar.avatar, tweet: tweet.tweet})

    console.log(array);
    })

    res.send(array);
});

app.get("/", (req, res) => {
    
    res.send('Executando');
});

app.listen(5000,() => console.log('rodando'));