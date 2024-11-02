
// let config = {
//     type: Phaser.AUTO,
//     scale : {
//     width : innerWidth-15,
//     height : innerHeight-15

//     },
//     backgroundColor: '#049cd8',
//     physics: {
//     default:'arcade',
//     arcade: {
//     gravity: {
//     y: 100,
//             },
//         }
//     },
//     scene:{
//     preload,create,update
//     }
// }

// let game = new Phaser.Game(config)

// let PipeUpClass = new Phaser.Class({
//     Extends: Phaser.GameObjects.Image,
//     initialize: function PipeUpClass(scene) {
//         Phaser.GameObjects.Image.call(this,scene,0,0, 'pipeUp')
//     }
// })

// let PipeDownClass = new Phaser.Class({
//     Extends: Phaser.GameObjects.Image,
//     initialize: function PipeDownClass(scene) {
//         Phaser.GameObjects.Image.call(this,scene,0,0, 'pipeDown')
//     }
// })

// function preload(){
//     this.load.image("pipeUp","assets/pipeUp.png");
//     this.load.image("pipeDown","assets/pipeDown.png");
//     this.load.spritesheet('bird','assets/Bird.png',{
//     frameWidth: 8, frameHeight: 8
//     })

// }
// function create() {
//     this.cursor = this.input.keyboard.createCursorKeys();
//     this.physics.add

//     this.bird =  this.physics.add.sprite(100, game.config.height/2,'bird',0);
//     this.anims.create({
//     key:'fly',
//     frames: this.anims.generateFrameNumbers('bird', {
//         start:0,
//         end: 3
//     }),
//     frameRate:15,
//     repeat: -1
//     })
// }
//  function update(){
//     this.bird.anims.play('fly',true);
//     if(this.cursor.up.isDown){
//     this.bird.setVelocityY(-100)
//     }else{
//     this.bird.setVeocityY(200)
//     }

//  }