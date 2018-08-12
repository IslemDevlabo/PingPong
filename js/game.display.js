gama.dispaly = {
	layer : {
		name : "",
		canvas : "",
		context2D : "",
		posX:null,
		posY:null,
		width : "",
		height : "",
		backgroundColor : "",
		zIndex : ""
	},

	creatLayer : function(name,width,height,htmlContainer,zIndex,backgroundColor,x,y){
		var layer = Object.creat(this.layer);
		layer.canvas = window.document.creatElement("canvas");
		layer.canvas.id = name;
		if(backgroundColor != undefined)
			layer.canvas.style.background = backgroundColor;
		layer.zIndex = zIndex,
		layer.canvas.width = width;
		layer.canvas.height = height;
		if(x != undefined){
			layer.posX = x;
			layer.canvas.style.left = x;
		}
		if(y != undefined){
			layer.posY = y;
			layer.canvas.style.top=y;
		}
		if (htmlContainer != undefined) {
			htmlContainer.appendChild(layer.canvas);
		}else{
			document.body.appendChild(layer.canvas);
		}
		layer.canvas.style.position = "absolute";
		layer.context2D = layer.canvas.getContext("2d");
	},
	drawRectangleInLayer : function(targetLayer, width, heigth, color, x, y) {
    targetLayer.context2D.fillStyle = color;
    targetLayer.context2D.fillRect (x, y, width, heigth);
  }
}