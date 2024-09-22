document.addEventListener('DOMContentLoaded', function () {
    // Establishing a socket connection
    const socket = io.connect('http://localhost:3000');

    // Function to send the user's message to the server
    window.sendMessage = function () {
        const input = document.getElementById('messageInput');
        const message = input.value;
        if (message.trim() !== "") {
            // Emitting the chat message event with the user's message
            socket.emit('chat message', message);
            input.value = "";
        }
    };

    // Listening for space key press
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 32) { // 32 is the keyCode for the spacebar
            startListening();
        }
    });

    window.startListening = function () {
        // Check if the browser supports the Web Speech API
        if (window.SpeechRecognition || window.webkitSpeechRecognition) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'en'; // Set the language to Arabic

            // Once the user stops speaking, the 'result' event is triggered
            recognition.addEventListener('result', (event) => {
                const transcript = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');

                if (transcript.trim() !== "") {
                    const input = document.getElementById('messageInput');
                    input.value = transcript; // Display the voice transcript in the input box
                    sendMessage(); // Send the message
                }
            });

            recognition.start(); // Start listening to the user's voice
        } else {
            alert("Your browser doesn't support voice recognition. Please type your message.");
        }
    };

    function getVideoPathForReply(replyText, intent) {
        // Map your intents to video paths here, for example:
        const videoMapping = {
            "greetings_for_me": "avatar_videos/greetings_for_me.mp4",
            "bleda": "avatar_videos/bleda.mp4",
            "grateful": "avatar_videos/grateful.mp4",
            "greetings": "avatar_videos/greetings.mp4"
            // ... other mappings
        };
        return videoMapping[intent];
    }

    function playVideo(path) {
        const videoElement = document.getElementById('avatarVideo');
        const avatarElement = document.querySelector('.avatar');

        avatarElement.style.display = 'none';  // Hide avatar
        videoElement.style.display = 'block';  // Show video element

        videoElement.src = path;
        videoElement.play();

        videoElement.onended = function () {
            avatarElement.style.display = 'block';  // Show avatar
            videoElement.style.display = 'none';  // Hide video
        };
    }

    socket.on('bot reply', function (replyText, intent) {
        const responseElement = document.getElementById('avatarResponse');
        responseElement.innerHTML = replyText;

        // Use the function to map intent to a video path
        const videoPath = getVideoPathForReply(replyText, intent);

        if (videoPath) {
            playVideo(videoPath);
        }
    });

    // Listening for enter key press in the input field
    document.getElementById('messageInput').addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            sendMessage();
        }
    });
});