/* Crie uma classe que se chama CannonBall 
Com um construtor que recebe os atributos x e y*/
//???
    var options = {
      isStatic: true
    };
    //Defina o raio da bola para 30
    this.r = ???;
    //Utilize o código 'Bodies.circle' para que o corpo que irá ser criado seja um círculo
    this.body = ???(x, y, this.r, options);
    //Utilize o código 'loadImage' para carregar uma imagem
    this.image = ???("./assets/cannonball.png");
    //Utilize o símbolo ' [] ', pois ele cria uma lista
    this.trajectory = ???;
    //Utilize o código 'World.add' para adicionar esse corpo ao mundo
    ???(world, this.body);
  }

  shoot() {
   var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    //Utilize o código ' Matter.Body.setVelocity' para aplicar uma velocidade no corpo
    ???(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    
    if (this.body.velocity.x > 0 && pos.x > 10) {
      var position = [pos.x, pos.y];
      //Adicione o código 'position' para adicionar a posição da bola, dentro da lista 
      this.trajectory.push(???);
    }

    //Coloque que o fim do loop for será ' this.trajectory.length'
    for (var i = 0; i < ???; i++) {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }
}
