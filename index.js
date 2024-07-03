const { Server } = require('socket.io');
const io = new Server({
    cors: {
        origin: "*",  // Allow requests from any origin
        methods: ["GET", "POST"]  // Specify allowed methods for the initial HTTP handshake
    }
});

io.on('connection', function (socket) {
    socket.on('canvasImage', (data) => {
        socket.broadcast.emit('canvasImage', data);
    });
});

io.listen(5000);
