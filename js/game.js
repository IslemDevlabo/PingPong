var game = {
	groundWidth : 700,
	groundHeight : 400,
	groundColor : "#000000",
	netWidth : 6,
	netColor : "#FFFFFF",
	groundLayer : null,

	init : function(){
		this.groundLayer = game.display.creatLayer("terrain",this.groundWidth,this.groundHeight,undifined,0,"#000000",0,0);
		game.display.drawRectangleInLayer(this.groundLayer,this.netWidth,this.groundHeight,this.netColor,this.groundWidth/2-thi.netWidth/2,0);
	}
};