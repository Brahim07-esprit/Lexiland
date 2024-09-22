const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { NlpManager } = require('node-nlp');


// Importer les documents et les réponses pour le chatbot en arançais
const EnGreetingsForMeDocuments = require('./documents/greetings_for_me');
const EnGreetingsForMeAnswers = require('./answers/greetings_for_me');

// Importer les documents et les réponses pour le chatbot en arançais
const  EnGreetingsDocuments = require('./documents/greetings');
const EnGreetingsAnswer = require('./answers/greetings');

// Importer les documents et les réponses pour le chatbot en arançais
const EnGratefulDocument = require('./documents/grateful');
const EnGratefulAnswer = require('./answers/grateful');


const EnBledaDocument = require('./documents/bleda');
const EnBledaAnswer = require('./answers/bleda');

// Créer le gestionnaire du chatbot avec les langues 'ar', 'ar', et 'en'
const manager = new NlpManager({ languages: ['en'] });

// Créer l'application express, le serveur HTTP, et le socketIo
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Définir le dossier des fichiers statiques pour le site web
app.use(express.static('C:/Users/mouha/OneDrive/Bureau/4DS8/SEM2/Pids/LexiLand/lexiland'));

// Ajouter les documents et les réponses pour le chatbot en arançais

EnBledaDocument.forEach((document)=> {
    manager.addDocument('en', document.input, 'bleda')
});

EnBledaAnswer.forEach((answer)=> {
    manager.addAnswer('en', 'bleda', answer)
});

EnGreetingsForMeDocuments.forEach((document)=> {
    manager.addDocument('en', document.input, 'greetings_for_me')
});

EnGreetingsForMeAnswers.forEach((answer)=> {
    manager.addAnswer('en', 'greetings_for_me', answer)
});


EnGreetingsDocuments.forEach((document)=> {
    manager.addDocument('en', document.input, 'greetings')
});

EnGreetingsAnswer.forEach((answer)=> {
    manager.addAnswer('en', 'greetings', answer)
});

EnGratefulDocument.forEach((document)=> {
    manager.addDocument('en', document.input, 'grateful')
});

EnGratefulAnswer.forEach((answer)=> {
    manager.addAnswer('en', 'grateful', answer)
});

// Entraîner le chatbot et enregistrer le modèle
manager.train().then(() => {
    manager.save();

    // Lorsqu'une connexion au socket est établie
    io.on('connection', (socket) => {
        // Lorsque le chatbot reçoit un message
        socket.on('chat message', async (msg) => {
            let success = true;

            // Faire traiter le message par le chatbot
            let response = await manager.process('en', msg);
            if (!response.answer) {
                success = false;
                response.answer = "lool";
            }
            socket.emit('bot reply', response.answer, response.intent);
        });
    });

    // Démarrer le serveur sur le port 3000
    server.listen(3000, () => {
        const serverUrl = 'http://localhost:3000/';
        console.log(`Le serveur est en cours d'exécution sur le port 3000. Voici le lien : ${serverUrl}`);
    });
});