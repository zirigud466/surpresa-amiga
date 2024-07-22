document.getElementById('surpriseButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    message.classList.toggle('hidden');

    var audio = document.getElementById('bgMusic');
    audio.play();
});
