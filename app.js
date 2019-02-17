new Vue({
	el: "#app",
	data : {
		user: 100,
		monster: 100,
		"startGame": true,
		scores: []
	},
	methods: {
		updateScore: function(){
			this.user = Math.floor(this.user),
			this.monster = Math.floor(this.monster)
			this.scores.unshift("user health : "+ this.user +" ,monster health : " + this.monster)
		},
		attack: function(){
			this.user -= Math.random()*10;
			this.checkWin();
			this.monster -= Math.random()*10;
			this.checkWin();
			this.updateScore()
		},
		specialAttack: function(){
			this.user -= Math.random()*10;
			this.checkWin();
			this.monster -= 10;	
			this.checkWin();
			this.updateScore()
		},
		heal: function(){
			if(this.user<=100)
			this.user += 10;
			this.attack();
		},
		giveUp: function(){
			this.user = 100,
			this.monster = 100;
			this.startGame = true;
			this.scores = [];
		},
		checkWin: function(){
			if(this.monster <= 0 || this.user <=0){
				(this.monster < this.user)?alert("You Won"):alert("You Lost");
				this.giveUp()
				return;
			}
		}
	}
})