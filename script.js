const config = {
    width: 500,
    height: 500,
    type: Phazer.AUTO,
    parent: 'game',
    backgroundColor: '#0000000',
    scene: { preload, create,  update},
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: true,
        }
    }

};

new Phaser.Game(Config);