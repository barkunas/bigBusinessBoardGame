(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"assets_atlas_", frames: [[1344,1315,13,10],[0,0,2110,1313],[192,1315,190,49],[1152,1315,190,45],[0,1315,190,49],[576,1315,190,45],[768,1315,190,45],[384,1315,190,49],[960,1315,190,45]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.board_bg = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.green_button00 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.green_button01 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.green_button02 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.green_button03 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.grey_button00 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.grey_button01 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.grey_button02 = function() {
	this.spriteSheet = ss["assets_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3300").ss(7.3,1,1).p("AAAhpIAABBIAAAlIAAAkIAyA+AAAgDIBJAAAAAgDIhHAAAAAAhIg1BJ");
	this.shape.setTransform(1,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AAKBIgAAABIQgWAAgUgHQgOgFgNgJQgcgVAAgeQAAgcAcgWQAdgVAoAAQAoAAAcAVQAeAWAAAcQAAAegeAVQgJAIgMAEQgRAIgUABIAAhBIAABBIgKAAg");
	this.shape_1.setTransform(0,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-14.5,21.7,32.7);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3300").ss(7.3,1,1).p("AAAgDIBJAAAAAgDIAAAkIg1BJAAAhpIAABBIAAAlIhHAAAAAAhIAyA+");
	this.shape.setTransform(1,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AAKBIgAAABIQgWAAgUgHQgOgFgNgJQgcgVAAgeQAAgcAcgWQAdgVAoAAQAoAAAcAVQAeAWAAAcQAAAegeAVQgJAIgMAEQgRAIgUABIAAhBIAABBIgKAAg");
	this.shape_1.setTransform(0,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-14.5,21.7,32.7);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-26,-16.3,3.415,6.485,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-47.7,77.3,77.3);


(lib.Symbol21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5CsIAAi5QAAghgNgUQgMgUgdgBQgUABgNAMQgOAMgFAPIgDAMIgBAOIAADBIhpAAIAAjlIAAg6IgCgxIBbAAIAEAuIACAAQAHgLAOgMQAOgNAVgIQAUgJAcAAQAjAAAbAPQAbAQAQAgQAPAgAAAxIAADHg");
	this.shape.setTransform(618.5,53);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaCbQgogVgWgnQgXgmAAg3QAAg1AWgoQAWgoApgWQAogWA2AAQA0AAAnAWQAmAWAVAmQAWAnABAzQgCA8gZApQgZAogoASQgpAUgtAAQgxgBgogUgAgmhWQgQAPgGAXQgIAXABAZQAAAcAIAYQAIAWAPAOQAPANAWAAQAfgBASgbQARgcABgtQAAgZgHgXQgHgXgOgPQgPgOgYAAQgYAAgPAOg");
	this.shape_1.setTransform(578.5,53.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0DyIAAlQIBoAAIAAFQgAgoiXQgOgPAAgWQAAgXAOgPQAPgPAZAAQAaAAAOAPQAPAPABAXQAAAWgQAPQgOAPgaAAQgaAAgOgPg");
	this.shape_2.setTransform(549.2,46);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEDUQgUgHgNgNQgOgPgHgZQgIgZAAgkIAAiIIgsAAIAAhOIAsAAIAAhJIBmgXIAABgIBLAAIAABOIhLAAIAAB5QAAAeAJAOQAJAPAYAAIARgBIAOgCIAABPQgKAFgSACQgSACgWAAQgaAAgTgIg");
	this.shape_3.setTransform(526.7,48.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzCaQgpgUgWgnQgWgmABg1QgBgxAWgoQAXgpAqgYQArgYA+AAQAWAAAVACQAUAEASAGIgRBPQgJgEgPgEQgOgDgVAAQgqABgXAaQgYAaAAApQAAAeANAVQAMAWAUAKQAUALAaAAQATAAAOgDQAQgDALgEIANBMQgOAHgZAEQgZAFgeAAQg2AAgngWg");
	this.shape_4.setTransform(499.3,53.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhwCCQgvguAAhQQAAgfAKggQAKggAVgaQAVgaAggPQAggRArABQA2AAAhAZQAhAYAQAmQAPAmgBAqIgBAYIgCARIjYAAQACAVANAOQANAPAVAHQAUAHAZAAQAaAAAXgDQAXgEAVgHIAOBHQgaALgfAEQgfAGgiAAQhWgBgugtgAA/glQAAgNgFgQQgEgQgOgLQgMgLgYgBQgVAAgOAMQgOALgHAPQgHAPgBAPIB7AAIAAAAg");
	this.shape_5.setTransform(465.2,53.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhlCsIAAjhIgBg/IgCgwIBaAAIAEA+IADAAQAIgYAPgPQAPgQARgHQASgHARAAIAMAAIAKABIAABjIgNgCIgQgBQgdAAgSAOQgTAOgFAZIgCALIAAALIAACrg");
	this.shape_6.setTransform(435.1,53);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0DyIAAlQIBoAAIAAFQgAgoiXQgOgPAAgWQAAgXAOgPQAPgPAZAAQAaAAAOAPQAPAPAAAXQAAAWgPAPQgPAPgZAAQgaAAgOgPg");
	this.shape_7.setTransform(411.3,46);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhmDjQghgVgTgnQgTgnAAg0QAAg5AUgnQAVgoAigVQAigVAqAAQAdAAAYAKQAXAKALASIACAAIAAi4IBpAAIAAGFIAAA4IADAsIheAAIgEgyIgBAAQgSAdgbAOQgdAPgfAAQgpgBgggVgAgjgJQgQALgJAWQgHAWAAAaQAAAsATAYQAUAZAgAAQAWAAARgOQAQgOAFgWIADgMIAAgMIAAgsIAAgKIgCgJQgFgWgQgNQgPgPgZAAQgXAAgQANg");
	this.shape_8.setTransform(380.4,46.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhwCCQgvguAAhQQAAgfAKggQAKggAVgaQAVgaAggPQAggRArABQA2AAAhAZQAhAYAQAmQAPAmgBAqIgBAYIgCARIjYAAQACAVANAOQANAPAVAHQAUAHAZAAQAaAAAXgDQAXgEAVgHIAOBHQgaALgfAEQgfAGgiAAQhWgBgugtgAA/glQAAgNgFgQQgEgQgOgLQgMgLgYgBQgVAAgOAMQgOALgHAPQgHAPgBAPIB7AAIAAAAg");
	this.shape_9.setTransform(328.6,53.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhPCpQgcgGgUgLIAThLQAKAGAPAGQAPAGARADQASAFAPAAQAXAAALgIQALgHgBgNQABgNgLgJQgLgIgbgJQg0gSgXgaQgWgaABgfQAAgfARgZQARgZAegOQAfgOApAAQAegBAYAGQAZAGAQAIIgSBIQgMgHgUgGQgUgGgVAAQgUAAgJAHQgLAIAAANQAAALAMAIQALAIAfALQAwARAVAYQAWAZABAlQAAAggRAYQgQAYghAOQggAOgwABQghAAgcgHg");
	this.shape_10.setTransform(295.3,53.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhaCbQgogVgWgnQgXgmgBg3QABg1AWgoQAXgoAogWQAogWA2AAQA0AAAmAWQAnAWAWAmQAVAnAAAzQgBA8gZApQgZAogpASQgnAUguAAQgygBgngUgAgnhWQgPAPgGAXQgHAXAAAZQAAAcAIAYQAIAWAPAOQAQANAVAAQAfgBARgbQATgcAAgtQAAgZgHgXQgGgXgQgPQgPgOgXAAQgYAAgQAOg");
	this.shape_11.setTransform(260.4,53.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhaCbQgngVgXgnQgXgmgBg3QABg1AWgoQAXgoAogWQAogWA2AAQAzAAAnAWQAnAWAWAmQAVAnAAAzQAAA8gaApQgZAogoASQgpAUgtAAQgygBgngUgAgnhWQgOAPgHAXQgHAXAAAZQAAAcAIAYQAIAWAPAOQAQANAVAAQAfgBARgbQASgcABgtQAAgZgHgXQgHgXgOgPQgPgOgYAAQgYAAgQAOg");
	this.shape_12.setTransform(220.6,53.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA4D1IAAi6QAAghgNgUQgNgUgdAAQgTABgOAKQgNAKgFAOQgDAGgBAGIAAAMIAADIIhpAAIAAnpIBpAAIAADBIABAAQAJgLAKgIQAKgJAMgHQAMgGAOgEQAOgCAOAAQAiAAAbAPQAaAQAQAhQAPAgAAAyIAADFg");
	this.shape_13.setTransform(180.5,45.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhKDQQg3gdgbg1Qgbg0AAhCQABhPAhg3QAig3A5gcQA5gdBHAAQApAAAdAGQAeAHAOAHIgVBUQgQgHgXgFQgWgFgcgBQgqABggAQQgiARgTAjQgUAhAAAzQAABGAnApQAmAoBHABQAZAAAXgEQAYgFAQgHIAPBTQgOAIgfAFQgfAHgrAAQhPgBg2gfg");
	this.shape_14.setTransform(140.1,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21copy, new cjs.Rectangle(0,0,758.1,89.5), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8DdQgugQgggfQghgegQgrQgRgsAAg0QABhMAig2QAjg2A7gcQA8gdBLAAQAuAAAhAHQAhAHASAJIgXBTQgSgIgagFQgagGgmAAQgsAAgiARQgiAQgUAhQgUAhAAAyQAAAwASAiQATAiAgASQAgASAsABQASAAANgDQAOgCAGgCIAAhiIhHAAIAAhRICtAAIAAD0QgRAFgYAGQgZAHgdAEQgeAEgfAAQg+AAgvgQg");
	this.shape.setTransform(587,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABSDpIhiizIgrhQQgUgqgSgqIgCAAIADBgIABBrIAACMIhhAAIAAnQIB7AAIBgCqQAVAlATAoQAUAqAQAoIACAAQgFgugCgxQgCguAAg1IAAiHIBgAAIAAHQg");
	this.shape_1.setTransform(540.3,47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0DpIAAnQIBpAAIAAHQg");
	this.shape_2.setTransform(506.7,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AicDqQgdgCgUgCIAAnIQAegFAkgCQAkgDAoAAQBBABAuAMQAuANAhAZQAkAaAVArQAVAsABA9QgBBCgVAvQgWAugiAdQglAeg2APQg2APhEAAQgpgBgegCgAhRiZIgSACIAAEvQAHACAKAAIATAAQAwABAjgRQAjgSATgkQATglABg2QgBhJgmglQgnglhEAAQgRAAgMABg");
	this.shape_3.setTransform(474,47.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiQDpIAAnQIBpAAIAAF3IC4AAIAABZg");
	this.shape_4.setTransform(432.7,47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0DpIAAnQIBpAAIAAHQg");
	this.shape_5.setTransform(403.8,47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiMC5QgxgzAAhvIAAkCIBqAAIAAEKQAAA8AVAfQAVAeApAAQApAAAWgeQAWgdAAg+IAAkKIBpAAIAAEEQgBBrgzA0QgyA0hbAAIgCAAQhXAAgwgzg");
	this.shape_6.setTransform(370.4,47.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah9DqQgdgBgRgDIAAnIQAOgCAVgCIAwgEQAagBAbgBQAuAAAhAHQAgAFAYAPQAaANAPAXQAPAXAAAgQAAAfgSAbQgTAagnAPIAAABQApAMAZAcQAZAdACAtQgBAggNAYQgNAZgWASQgZAUgsALQgtALhEAAQgngBgcgCgAhECeIASABIAYAAQAYAAATgHQAUgGAMgOQAMgPABgZQAAgYgNgOQgNgOgUgHQgVgGgbgBIgkAAgAgyieIgSACIAABtIAjAAQAogBAWgQQAWgOAAgbQAAgagUgOQgSgOgkAAIgbABg");
	this.shape_7.setTransform(327,47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3DpIAAi/IiTkRIB4AAIAwBvIATAuIAQArIABAAIARgrIATguIAuhvIB2AAIiZEOIAADCg");
	this.shape_8.setTransform(256.6,47);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiMC5QgxgzAAhvIAAkCIBpAAIAAEKQABA8AVAfQAWAeAoAAQApAAAWgeQAWgdAAg+IAAkKIBpAAIAAEEQgBBrgzA0QgyA0hbAAIgCAAQhXAAgwgzg");
	this.shape_9.setTransform(212.2,47.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah+DqQgcgBgSgDIAAnIQAOgCAWgCIAwgEQAagBAagBQAvAAAgAHQAhAFAZAPQAZANAPAXQAQAXAAAgQAAAfgTAbQgSAagoAPIAAABQAoAMAaAcQAaAdABAtQgBAggNAYQgNAZgWASQgZAUgsALQgtALhEAAQgmgBgegCgAhDCeIARABIAXAAQAYAAAUgHQAUgGAMgOQANgPAAgZQgBgYgMgOQgMgOgWgHQgUgGgagBIgkAAgAgyieIgRACIAABtIAjAAQAngBAXgQQAVgOAAgbQAAgagUgOQgSgOgjAAIgcABg");
	this.shape_10.setTransform(168.8,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,758.1,89.5), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.8)").s().p("EhutA7xQijABh1h1QhzhzAAikMAAAhrLQAAikBzh0QB1hzCjgBMDdbAAAQCkABBzBzQB0B0AACkMAAABrLQAACkh0BzQhzB1ikgBg");
	this.shape.setTransform(748.1,382.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,1496.2,765.1), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grey_button00();
	this.instance.parent = this;

	this.instance_1 = new lib.grey_button01();
	this.instance_1.parent = this;

	this.instance_2 = new lib.grey_button02();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,45);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.green_button00();
	this.instance.parent = this;

	this.instance_1 = new lib.green_button02();
	this.instance_1.parent = this;

	this.instance_2 = new lib.green_button01();
	this.instance_2.parent = this;

	this.instance_3 = new lib.green_button03();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,49);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol15, null, null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBKIAAiTIBaAAIAAAcIg5AAIAAAeIA2AAIAAAaIg2AAIAAAjIA8AAIAAAcg");
	this.shape.setTransform(151.2,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBDQgRgKgJgRQgJgQAAgWQAAgYALgSQALgRASgJQASgJAWAAQANAAAKACQAJACAFACIgHAbIgMgEQgIgCgJAAQgNAAgKAGQgKAFgGALQgGALAAAPQAAAXAMANQAMAMAWABQAIAAAIgCIAMgDIAFAaIgPAEQgKACgNAAQgZAAgRgJg");
	this.shape_1.setTransform(138.6,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBKIAAiTIAhAAIAACTg");
	this.shape_2.setTransform(128.8,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBLIgPgCIAAiQIAUgCIAZgBQAUAAAPADQAOAFALAIQALAIAHAOQAHAOgBAUQAAATgGAQQgHAPgLAIQgMAKgRAFQgQAFgWAAIgXgBgAgZgwIgGABIAABgIAFAAIAHABQAPAAALgGQALgGAGgMQAGgLAAgQQAAgYgMgMQgNgLgVAAIgJAAg");
	this.shape_3.setTransform(118.4,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBKIAAiTIBaAAIAAAcIg5AAIAAAeIA2AAIAAAaIg2AAIAAAjIA8AAIAAAcg");
	this.shape_4.setTransform(100.4,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBKIAAg+Ig3AAIAAA+IghAAIAAiTIAhAAIAAA4IA3AAIAAg4IAhAAIAACTg");
	this.shape_5.setTransform(86.6,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBKIAAh3IgnAAIAAgcIBxAAIAAAcIgpAAIAAB3g");
	this.shape_6.setTransform(73.1,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBKIAAiTIAhAAIAAB3IA6AAIAAAcg");
	this.shape_7.setTransform(57.4,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtBKIAAiTIAhAAIAAB3IA6AAIAAAcg");
	this.shape_8.setTransform(46.1,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBCQgQgKgIgQQgIgSgBgVQABgVAJgSQAIgRARgKQAQgKAVAAQAWAAARAKQAPAKAIARQAIARAAAVQAAAXgJARQgJARgRAKQgPAKgWAAQgVgBgQgKgAgTgrQgHAHgEALQgFAMAAANQAAAPAFALQAEALAIAHQAIAFAKABQAMAAAHgHQAIgGAFgMQAEgLAAgOQAAgNgEgLQgFgMgIgGQgHgHgMAAQgKAAgJAGg");
	this.shape_9.setTransform(32.2,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVBLIgDgMIgHgXQgDgNgFgGQgFgFgKAAIgKAAIAAA7IghAAIAAiRIAUgDIAZgBQAPAAAMADQAMADAIAGQAGAFADAIQAEAIAAAKQAAAKgEAHQgEAHgFAFQgHAEgGADIAAAAQAIADAFAIQAEAHADAKIAEARIAFAPIADAKgAgQgwIgGAAIAAApIAOAAQALAAAHgGQAHgFAAgKQAAgKgGgFQgHgGgLAAIgJABg");
	this.shape_10.setTransform(18.3,24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC3300").s().p("AsMDjQhFAAAAhFIAAk7QAAhFBFAAIYZAAQBFAAAABFIAAE7QAABFhFAAg");
	this.shape_11.setTransform(85,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,170.1,45.5), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgWC0IAAgqQgXgBgTgGQgUgFgNgHIANg0QAOAJASAFQATAGAWAAQASAAALgHQAMgHABgOQAAgLgMgKQgLgJgYgIQgjgLgWgSQgVgTAAgfQAAgeATgUQATgWAkgGIAAgqIAqAAIAAAmQAWABAQAFQAPAEALAFIgNAxIgYgJQgPgFgZAAQgUAAgIAIQgJAHAAAJQAAALANAJQANAIAaAKQAoAOAQASQASAUAAAeQAAATgJARQgJARgSAMQgRAMgaAEIAAAtg");
	this.shape.setTransform(30.4,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgXC0IAAgqQgWgBgTgGQgVgEgMgIIANg0QAOAJASAFQATAGAWAAQASAAAMgHQALgHAAgOQAAgLgLgJQgLgJgYgIQgjgMgVgSQgWgSgBggQAAgeAUgVQATgUAjgIIAAgpIArAAIAAAmQAWABAPAFQAQAEAKAFIgMAxIgZgJQgOgFgYgBQgVABgIAHQgJAHABAKQAAALAMAIQAMAJAcAKQAmAOASASQARAUAAAeQAAATgJARQgJARgRAMQgSAMgaAEIAAAtg");
	this.shape_1.setTransform(30.9,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgWCzIAAgpQgXgBgTgFQgVgGgMgHIANgzQAOAHASAGQATAFAWABQASAAALgHQAMgHABgNQAAgMgMgKQgLgIgYgIQgjgMgWgSQgVgTAAgfQAAgdATgWQATgVAkgGIAAgrIAqAAIAAAoQAWABAQADQAPAEALAGIgNAyIgYgKQgQgFgYgBQgTABgJAIQgIAGgBALQAAAKANAJQANAIAbAKQAnANAQAUQASATAAAdQAAAUgJARQgJARgSALQgRAMgaAFIAAAsg");
	this.shape_2.setTransform(31.7,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ai/D7QgRgNgPgPQhchcgBiDQABiCBchdQBdhdCCAAQB4ABBXBNIARAPQBcBdAACCQAACDhcBcQhdBeiDAAQhsAAhThCgAisisQhGBIgBBkQABBlBGBHQAMALANALQBAAyBTAAQBlgBBHhHQBIhHAAhlQAAhkhIhIIgMgLQhDg8hdAAQhkAAhIBHgAiHDAQgMgKgKgLQhEhEAAhgQAAhfBEhEQBDhDBfAAQBYAABAA5IAMAKQBEBEAABfQAABghEBEQhEBEhgAAQhOAAg+gvg");
	this.shape_3.setTransform(31.7,32.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AjrDRQBTBBBtAAQCCAABdhdQBchdAAiCQAAiDhchdIgRgPQARANAPAPQBdBdgBCDQABCChdBcQhdBeiCAAQh4AAhXhOgAi/CXQgNgKgMgMQhGhHgBhkQABhkBGhIQBIhHBlAAQBcgBBDA9IAMALQBIBIAABkQAABkhIBHQhHBIhkAAQhUAAhAgygAjJjGQhEBEAABgQAABfBEBEQAKALAMAJQA+AvBPABQBfAABEhEQBEhEAAhfQAAhghEhEIgMgLQhAg5hXAAQhgAAhDBEg");
	this.shape_4.setTransform(36.1,36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,64.8,65.3), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape.setTransform(43.7,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACLApQgRgRAAgYQAAgXARgRQARgRAYAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgYAAgRgRgAjcApQgRgRAAgYQAAgXARgRQARgRAYAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgYAAgRgRg");
	this.shape_1.setTransform(44.6,22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPCrQgRgRAAgYQAAgYARgRQAQgRAYAAQAYAAARARQARARAAAYQAAAYgRARQgRARgYAAQgYAAgQgRgAgpAsQgQgRgBgYQABgXAQgRQARgRAYAAQAXAAARARQARARAAAXQAAAYgRARQgRARgXAAQgYAAgRgRgAhBhYQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAAQARQARARAAAYQAAAYgRARQgQARgYAAQgYAAgRgRg");
	this.shape_2.setTransform(45.2,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXCTQgRgSAAgYQAAgYARgQQARgSAXABQAYgBARASQARAQAAAYQAAAYgRASQgRARgYAAQgXAAgRgRgAkTAzQgRgRAAgXQAAgYARgRQARgQAYgBQAYABARAQQARARAAAYQAAAXgRARQgRARgYABQgYgBgRgRgADCAQQgRgQAAgXQAAgZARgRQARgQAYgBQAYABARAQQARARAAAZQAAAXgRAQQgRARgYAAQgYAAgRgRgAg3hAQgRgRAAgXQAAgZARgRQARgQAYgBQAXABARAQQARARAAAZQAAAXgRARQgRARgXAAQgYAAgRgRg");
	this.shape_3.setTransform(45.1,21.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgICuQgRgRAAgYQAAgYARgRQAQgRAYAAQAYAAARARQARARAAAYQAAAYgRARQgRARgYAAQgYAAgQgRgAkTA7QgRgRAAgYQAAgXARgRQARgRAYAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgYAAgRgRgAgeAnQgRgRAAgXQAAgYARgRQARgRAXAAQAYAAARARQARARAAAYQAAAXgRARQgRARgYAAQgXAAgRgRgADCAYQgRgRAAgXQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYQAAAXgRARQgRARgYAAQgYAAgRgRgAg3hbQgRgRAAgYQAAgYARgRQARgRAYAAQAXAAARARQARARAAAYQAAAYgRARQgRARgXAAQgYAAgRgRg");
	this.shape_4.setTransform(44.5,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUCoQgRgRAAgYQAAgYARgRQARgRAXAAQAYAAARARQARARAAAYQAAAYgRARQgRARgYAAQgXAAgRgRgABaBeQgRgQAAgYQAAgZARgRQARgQAYAAQAYAAARAQQARARAAAZQAAAYgRAQQgRASgYgBQgYABgRgSgAkfBUQgRgRAAgXQAAgZARgRQARgPAYgBQAYABARAPQARARAAAZQAAAXgRARQgRARgYAAQgYAAgRgRgADOAVQgRgRAAgWQAAgZARgRQARgQAYgBQAYABARAQQARARAAAZQAAAWgRARQgRARgYAAQgYAAgRgRgAimAFQgRgQAAgYQAAgYARgRQARgRAYAAQAYAAARARQARARAAAYQAAAYgRAQQgRARgYAAQgYAAgRgRgAgthVQgRgRAAgYQAAgYARgRQARgRAYAAQAXAAARARQARARAAAYQAAAYgRARQgRARgXAAQgYAAgRgRg");
	this.shape_5.setTransform(45.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIHNIldiFQgsgQgHgyIg3mCQgHgxAsASIFeCDQAsARAHAwIA2GDQAFAlgYAAQgHAAgLgEgABDGqIgVmTQgCgyAngYIEwjAQAngZADAzIAUGSQADA0gnAYIkwDAQgNAIgJAAQgTAAgBgjgAghguImEiNQgygSApgbIFAjXQAogcAyASIGDCNQAxASgoAbIk/DYQgZAQgbAAQgSAAgUgHg");
	this.shape_6.setTransform(48,46.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0.3,89.9,93);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("ACpCJIm0jeQgZgNAagNIAugYQAbgNAZAMIG0DeQAZANgbANIguAYQgNAHgOAAQgMAAgMgGg");
	this.shape.setTransform(28,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("ACpCJIm0jeQgZgNAagNIAugYQAbgNAZAMIG0DeQAZANgbANIguAYQgNAHgOAAQgMAAgMgGg");
	this.shape_1.setTransform(28,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9933FF").s().p("ACpCJIm0jeQgZgNAagNIAugYQAbgNAZAMIG0DeQAZANgbANIguAYQgNAHgOAAQgMAAgMgGg");
	this.shape_2.setTransform(28,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990066").s().p("ACpCJIm0jeQgZgNAagNIAugYQAbgNAZAMIG0DeQAZANgbANIguAYQgNAHgOAAQgMAAgMgGg");
	this.shape_3.setTransform(28,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9900").s().p("ACpCJIm0jeQgZgNAagNIAugYQAbgNAZAMIG0DeQAZANgbANIguAYQgNAHgOAAQgMAAgMgGg");
	this.shape_4.setTransform(28,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("ACpCJIm0jeQgZgNAagNIAugYQAbgNAZAMIG0DeQAZANgbANIguAYQgNAHgOAAQgMAAgMgGg");
	this.shape_5.setTransform(28,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("ACpCJIm0jeQgZgNAagNIAugYQAbgNAZAMIG0DeQAZANgbANIguAYQgNAHgOAAQgMAAgMgGg");
	this.shape_6.setTransform(28,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CC33").s().p("ACpCJIm0jeQgZgNAagNIAugYQAbgNAZAMIG0DeQAZANgbANIguAYQgNAHgOAAQgMAAgMgGg");
	this.shape_7.setTransform(28,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgXgBIgXAKIgQgIIBAggIAQAIIgWAMIBDAiIgTAJg");
	this.shape.setTransform(72.9,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3300").s().p("AhIgHIAKgHIAOgHIARgIIAQgDQAHgBAHACQAFABAGADQAFADACADQACADgBADQAAAEgDACIABAAQAGgBAHABIAOADIAMADIALADIAHABIgTAKIgJgCIgQgFQgKgDgGAAQgGAAgFADIgFADIAgARIgTAKgAgTgTQgGAAgHAEIgGACIgCACIAXALIAHgDQAHgEABgDQABgEgGgDQgEgDgGAAIgCABg");
	this.shape_1.setTransform(67.2,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AhCgVIAYgMIBuAdIgVAJIgcgGIgXAMIAOAOIgTAKgAgjgOIAHAFIAMALIARgJIgVgHIgLgCIgKgDIAGAFg");
	this.shape_2.setTransform(60.4,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AgXgBIgXAKIgQgIIBAggIAQAIIgWAMIBDAiIgTAJg");
	this.shape_3.setTransform(50.5,33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3300").s().p("AgCAYIAMgDQAHgCAGgEQAHgDABgDQABgDgEgCQgEgCgGAAIgRADQgNAEgMAAQgMAAgJgEQgIgEgBgEQgCgFAEgFQADgGAKgFIAOgFIAMgEIALALIgKACIgMAFQgFADgBACQgBADAEACQADACAGgBQAHAAALgDQAOgEAMABQALAAAIAFQAIADACAEQACAFgEAGQgEAFgLAGIgQAHIgNADg");
	this.shape_4.setTransform(44.9,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhAAHIgfgPIAAAAIgfAPIgfAQIgfAQIggAQIgeAPIgOAHIAAgBIgBjRIGigCIgfAQIgfAQIgfAQIgfAPIgeAQIgPAIIAdAQID9B/IhPApg");
	this.shape_5.setTransform(51.8,27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Aj4BvIASgKIAAABIAOgHIAeAQIgfAQgAi6BvIAfgQIgfgPIAggQIAeAQIgfAPIAfAQIgfAQgAh8BQIAfgQIgegQIAfgQIAfAPIggARIAfAPIgfAQgAg9AvIAfgPIgfgQIAAAAIAfAQIAAAAIAeAPIgeAQgAA+gPIAfgQIgegQIAfgPIAfAPIggAQIAfAQIgfAPgAARgXIAPgIIAeAQIgPAIgAB9gvIAfgPIAfAPIgfAQgAB9gvgAB9hOIAfgQIAfAQIgfAQgAC7hOIAfgRIgfgQIAfgPIAfAQIgfAPIAfAQIgfAQg");
	this.shape_6.setTransform(48.4,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,1,1).p("An3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgLAn3gZQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgIIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABg");
	this.shape_7.setTransform(50.4,28.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_8.setTransform(50.4,42.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_9.setTransform(50.4,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8CD4D4").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGg");
	this.shape_10.setTransform(50.4,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol5copy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC99").ss(0.5,1,1).p("ABRh6IBkgCQgCAFgBAEQAAADAAACQAAACACACQADAGAOACIgfA0ADVhKQAEABAGABIghA0AAVAWQArgwgZgvQgBgDgCgCAAyhTQAOAfAWAJQATAIAZgFABrBHQgCACAAADIhBgEACHABIgVAnQgUgGgIAVIhAAAAAnAVQAFgJAIgIQAIgHAKgGQASgLAXgBQAEAAAFAAAChBRIgdAjQgSgKgLATIhAgMADmggQgQAUAaAHIgoAtACdAYIgYAnQgDgBgBAAAjDguIAbgoQAHAAAHgBQAEgBADgBQASgHAHgSQAAAAAAgBIBGgBAibgdQAQACAMAHQAWAMAGAYAi9A3IgkAAQAKgUgOgFQgDAAgBgBQgDgBgEAAIAig4AhVAUQgEgKgCgKQgFgXAHgVQAIgXAWgTAhGhbQgxAxgcAA");
	this.shape.setTransform(49,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC99").s().p("AjLBPIAZABIEqA3ICbipIgugHIADgDIA1AJIigCtgAgbBPICXADICCi7IgagBIADgDIAgABIiHDBgAilh+IGQgLIh8DIImLAGgAihh8IhzC9IF/gEIB4jDgAgzAlIgEgCQgKgEgFgHQgKgKgDgNQgGgaALgbIACgEQANgZAVgLQAYgNAUAJQAKAFAHAJQAIAIACANQAIAbgNAbQgMAbgXAMQgNAHgNAAQgHAAgHgCg");
	this.shape_1.setTransform(49.4,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("Aj3BNIglgBIABgBIgSAAIB+jQIGqgMIgRAeIAtABIgsBAIBDALIiqC5gAB8CKICgiuIg1gIIgCADIAuAHIicCoIkqg2IgZgBgABjB7QAGgMAKAAIABAAIAAAAQAFAAAFADIACABIAdgkIgdAkIgCgBQgFgDgFAAIAAAAIgBAAQgKAAgGAMIhAgMgAB/BVICHjCIggAAIgCADIAZABIiCC7IiXgEgABkBLIADgGIgDAGIhAgFgAilh+Ih4DDIGLgGIB8jJgACAA9IAYgmIgYAmIgDgBIADABgADEAmIAogtQgRgEABgKQAAgFAFgIQgFAIAAAFQgBAKARAEgAC6gWIAgg0IgJgBIAJABgAiih8IGEgKIh4DDIl/AEgABSA2QAGgQANgBIAAAAIAAAAIAIACIAWgnIgWAnIgIgCIAAAAIAAAAQgNABgGAQIhAAAgAjlA1IAkABIgkgBQAEgIAAgFQAAgIgIgDIgEgBIgHgBIAig4IgiA4IAHABIAEABQAIADAAAIQAAAFgEAIIAAAAgAgqhdQgWAMgMAYIgDAFQgLAbAGAZQAEAOAJAJQAGAIAJAEIAEACQAUAGAUgLQAXgMAMgbQANgcgHgaQgDgNgHgIQgHgJgLgFQgIgEgJAAQgNAAgNAHgAARAVQAbgfAAgeQgBgRgJgSIgCgFIACAFQAJASABARQAAAegbAfgABrgWQgXABgSALQgKAFgIAIQgIAHgGAKQAGgKAIgHQAIgIAKgFQASgLAXgBIAJgBIgJABgAhfAAIAFATIgFgTQgCgKAAgKQAAgNAEgNQAIgXAWgTQgWATgIAXQgEANAAANQAAAKACAKgAiDgVQAVALAGAZQgGgZgVgLQgMgHgQgDQAQADAMAHgABrgnIAQgCIABAAIAAAAIABAAIgBAAIAAAAIgBAAIgQACIAAAAIAAAAQgNAAgKgFIgBAAIgBAAQgXgKgNgeQANAeAXAKIABAAIABAAQAKAFANAAIAAAAIAAAAgAiXgrQAcAAAwgyQgwAygcAAgACigvIAeg1QgOgBgDgGIgBgEIgBgDIABgDIADgIIhkACIBkgCIgDAIIgBADIABADIABAEQADAGAOABgAh+h0IAAABQgIASgRAGIgHACQgHACgHAAIgbAoIAbgoQAHAAAHgCIAHgCQARgGAIgSIAAgBIBGgCg");
	this.shape_2.setTransform(49.4,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("An3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgLAn3gZQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgIIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABg");
	this.shape_3.setTransform(50.4,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3300").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGg");
	this.shape_4.setTransform(50.4,25.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_5.setTransform(50.4,42.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_6.setTransform(50.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy9, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol5copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AikCyIiihQQgPgIAQgMIAigVIDCBjIgkAVQgHAEgJAAQgHAAgIgDgAgoCxIgugUIC0hgIAsAUQANAJgNAJIiVBOQgHADgIAAQgHAAgHgDgAhFBPIgghnQgCgPAMgJIB+hAIAqCTIhtg2IAcBbQgEAXgSAFIAAAAQgfAAgMgVgAB0A0ICBhDIAyAbIh9BGgABHh/QAigNAhAQIC4BaQAUASgMAKQgMALgegJIi2hcIgIAHIBxA/IheAugAiZhlIgVAKIABgQIBug8QA7APgGAdQgGAegwAHQgOACgNAAQgkAAgagRgAjlh9IB/g0QAVgHAKAJIhzA9g");
	this.shape.setTransform(56.5,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("An3gZQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgIAn3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgLIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABg");
	this.shape_1.setTransform(50.4,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033CC").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGg");
	this.shape_2.setTransform(50.4,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_3.setTransform(50.4,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_4.setTransform(50.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy8, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol5copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC99").ss(0.5,1,1).p("ABRh6IBkgCQgCAFgBAEQAAADAAACQAAACACACQADAGAOACIgfA0ADVhKQAEABAGABIghA0AAyhTQAOAfAWAJQATAIAZgFAAVAWQArgwgZgvQgBgDgCgCAAnAVQAFgJAIgIQAIgHAKgGQASgLAXgBQAEAAAFAAABrBHQgCACAAADIhBgEACHABIgVAnQgUgGgIAVIhAAAAChBRIgdAjQgSgKgLATIhAgMACdAYIgYAnQgDgBgBAAADmggQgQAUAaAHIgoAtAibgdQAQACAMAHQAWAMAGAYAjDguIAbgoQAHAAAHgBQAEgBADgBQASgHAHgSQAAAAAAgBIBGgBAhVAUQgEgKgCgKQgFgXAHgVQAIgXAWgTAi9A3IgkAAQAKgUgOgFQgDAAgBgBQgDgBgEAAIAig4AhGhbQgxAxgcAA");
	this.shape.setTransform(49,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC99").s().p("AjLBPIAZABIEqA3ICbipIgugHIADgDIA1AJIigCtgAgbBPICXADICCi7IgagBIADgDIAgABIiHDBgAilh+IGQgLIh8DIImLAGgAihh8IhzC9IF/gEIB4jDgAgzAlIgEgCQgKgEgFgHQgKgKgDgNQgGgaALgbIACgEQANgZAVgLQAYgNAUAJQAKAFAHAJQAIAIACANQAIAbgNAbQgMAbgXAMQgNAHgNAAQgHAAgHgCg");
	this.shape_1.setTransform(49.4,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("Aj3BNIglgBIABgBIgSAAIB+jQIGqgMIgRAeIAtABIgsBAIBDALIiqC5gAB8CKICgiuIg1gIIgCADIAuAHIicCoIkqg2IgZgBgABjB7QAGgMAKAAIABAAIAAAAQAFAAAFADIACABIAdgkIgdAkIgCgBQgFgDgFAAIAAAAIgBAAQgKAAgGAMIhAgMgAB/BVICHjCIggAAIgCADIAZABIiCC7IiXgEgABkBLIADgGIgDAGIhAgFgAilh+Ih4DDIGLgGIB8jJgACAA9IAYgmIgYAmIgDgBIADABgADEAmIAogtQgRgEABgKQAAgFAFgIQgFAIAAAFQgBAKARAEgAC6gWIAgg0IgJgBIAJABgAiih8IGEgKIh4DDIl/AEgABSA2QAGgQANgBIAAAAIAAAAIAIACIAWgnIgWAnIgIgCIAAAAIAAAAQgNABgGAQIhAAAgAjlA1IAkABIgkgBQAEgIAAgFQAAgIgIgDIgEgBIgHgBIAig4IgiA4IAHABIAEABQAIADAAAIQAAAFgEAIIAAAAgAgqhdQgWAMgMAYIgDAFQgLAbAGAZQAEAOAJAJQAGAIAJAEIAEACQAUAGAUgLQAXgMAMgbQANgcgHgaQgDgNgHgIQgHgJgLgFQgIgEgJAAQgNAAgNAHgAARAVQAbgfAAgeQgBgRgJgSIgCgFIACAFQAJASABARQAAAegbAfgABrgWQgXABgSALQgKAFgIAIQgIAHgGAKQAGgKAIgHQAIgIAKgFQASgLAXgBIAJgBIgJABgAhfAAIAFATIgFgTQgCgKAAgKQAAgNAEgNQAIgXAWgTQgWATgIAXQgEANAAANQAAAKACAKgAiDgVQAVALAGAZQgGgZgVgLQgMgHgQgDQAQADAMAHgABrgnIAQgCIABAAIAAAAIABAAIgBAAIAAAAIgBAAIgQACIAAAAIAAAAQgNAAgKgFIgBAAIgBAAQgXgKgNgeQANAeAXAKIABAAIABAAQAKAFANAAIAAAAIAAAAgAiXgrQAcAAAwgyQgwAygcAAgACigvIAeg1QgOgBgDgGIgBgEIgBgDIABgDIADgIIhkACIBkgCIgDAIIgBADIABADIABAEQADAGAOABgAh+h0IAAABQgIASgRAGIgHACQgHACgHAAIgbAoIAbgoQAHAAAHgCIAHgCQARgGAIgSIAAgBIBGgCg");
	this.shape_2.setTransform(49.4,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("An3gZQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgIAn3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgLIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABg");
	this.shape_3.setTransform(50.4,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC99").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGg");
	this.shape_4.setTransform(50.4,25.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_5.setTransform(50.4,42.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_6.setTransform(50.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy5, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol5copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AH4ggIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgIgAn3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgL");
	this.shape.setTransform(50.4,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgWBLIjnA3IBihoIjFhMIEJAHIBuhmIBCBtIEIAMIjgA8IA0Bug");
	this.shape_1.setTransform(52.6,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCC00").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGgADLB6Ig1huIDgg8IkHgMIhDhuIhtBnIkJgHIDEBLIhiBpIDng3IDMBHg");
	this.shape_2.setTransform(50.4,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_3.setTransform(50.4,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_4.setTransform(50.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy4, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol5copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhxCrIBIgkIhIglIBIgkIBIAkIhIAlIBHAlIhHAkgAkBBiIBIgkIBIAkIhIAlgAi5A+IhIglIBJgjIBHAjIhIAlgAmQAZIBHgkIBIAkIhHAlgAECgYIBHglIBIAlIhHAkgABxgYIBJglIhIgkIBHglIBIAlIhHAkIBIAlIhJAjgAECgYgAgehhIBIglIhHglIBGgkIBIAlIhHAkIBIAlIhJAkg");
	this.shape.setTransform(51,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("An3gZQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgIAn3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgLIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABg");
	this.shape_1.setTransform(50.4,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGg");
	this.shape_2.setTransform(50.4,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_3.setTransform(50.4,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_4.setTransform(50.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy3, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol5copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFygcIgggEIhBgJIhggNIhegNIhPgLIgPgCIgjgFIgagEIgagDIgJgBIgmgGIhFgJIhDgJIgUgDAGEA1IhUgOIhTgOIhUgOIhSgNIgSgDIgKgBIg0gJIgXgEIgXgEIg9gKIhKgNIhJgMIhFgMIgngGAhCikIgVghIgIgMIgHgKAhuhiQgIgRgJgQQgBgBAAgBIgDgGIgDgFIgBgCIgYgtAgLhQIgUgeAgihyIgegvAA4DcIgihBIghhBIghg+IgbgzACYCsIguhHIguhGIgXgk");
	this.shape.setTransform(57,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AH4ggIAAgBQAAgHgJgHIg7gfImZjNQgQgKgXALIgZAMIg4AdIiOBHIgrAWIgrAWIirBWQgKAHgBAGQAAABAAABQAAAGAKAFIHRDpQAfAMAXgMIBggxIBggwIDsh3IAngTQALgIAAgIgAn3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgL");
	this.shape_1.setTransform(50.4,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABRBdIAuBGIhgAxgAgkBSIAmhhIAJACIAYAjIglB9gAE4goIAgAEIA8AeQAJAHAAAHIAAABQAAAIgLAIIgnAUgADEARIgshPIBgANIAfBQgAhggfIAXAEIAXADIgTArgAAegKIgyhMIBOALIA2BOgAhggfIg9gLIgOhBIAmAGIAKABIgKgBIgCgFIgRgiIgBgCIgDgFIADAFIgDgFIAAAAIAnhAIAEAGIAWAhIggBIIAaADIAYBGgAkwhCIgCg7IBCAJIAJA+gAmchVIArgVIgEAcgAhHhdIAMgdIADAEIATAeg");
	this.shape_2.setTransform(59.5,24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AgDD7InRjqQgKgFAAgGIAAgCQABgFAKgHICrhWIAnAGIBGAMIBIAMIBKANIA9AKIAaAyIAhA/IAiBBIAiBBIhgAxQgLAGgOAAQgNAAgQgGgADGBTIguhGIgYgkIASADIBSAOIBUANIBUAOIBTAOIjrB3gAGtgyIhBgJIhggNIhegNIhPgLIgQgCIgUgeIgDgEIgegvIgCgDIgVghIgHgMIgHgKIAAgBIAXgMQAYgLARAKIGYDNgAg2h1IhFgJIhDgJIgUgDICOhHIAZAtIAAACIADAFIADAGIABACIARAhIADAFgAAAjdIgEgGIAHAMgAgEjjg");
	this.shape_3.setTransform(47.9,25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AACCbIAnh8IAuBGIgzB3gAhAAcIATgrIA1AJIgnBggAEdAnIgfhQIBAAJIAyBVgAB2ALIg3hOIBeANIAtBPgAARgFIgJgBIg1gJIgWgEIgZhFIAbADIAiAFIAQACIAyBMgAjiguIgIg+IBFAKIANBBgAlvhGIAEgcIArgWIATADIADA7gAhchYIgagEIAghIIACADIAfAvIgMAdgAhchYgAiaiQIADAFIgDgFIAAgBIgYguIA4gcIAAAAIAHAKIAEAGIgoBAIAAAAg");
	this.shape_4.setTransform(59,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIBggwIBggwIDsh2IAngUIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_5.setTransform(50.4,42.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_6.setTransform(50.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy2, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("An3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgLIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgI");
	this.shape.setTransform(50.4,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_1.setTransform(50.4,42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_2.setTransform(50.4,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CD4D4").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGg");
	this.shape_3.setTransform(50.4,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.board_bg();
	this.instance.parent = this;
	this.instance.setTransform(14,-50,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-50,584.7,354.5), null);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AAqD1IhQiKIgbAgIAABqIhpAAIAAnpIBpAAIAAEmIABAAIAMgVIAMgUIBEhkIB+AAIh4CHICJDJg");
	this.shape.setTransform(247,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("Ag0CaQgogUgWgnQgVgmAAg1QAAgxAVgoQAXgpAqgYQAsgYA9AAQAVAAAWACQAUAEARAGIgQBPQgKgEgOgEQgOgDgVAAQgpABgYAaQgYAaAAApQAAAeAMAVQANAWAUAKQAVALAZAAQATAAAPgDQAPgDAMgEIALBMQgNAHgZAEQgZAFgeAAQg2AAgogWg");
	this.shape_1.setTransform(210.6,53.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("AhnChQgYgPgNgWQgNgYAAgbQAAgtAZgcQAYgcAsgOQAtgOA7ABIAAgFQAAgKgFgJQgEgKgOgIQgNgGgZgBQgaABgZAHQgZAHgQALIgUhDQASgLAhgKQAhgIAugBQA4ABAgATQAhATAOAhQAOAhAAAoIAAB0IABAvIADAkIheAAIgHgiIgBAAQgRATgZALQgYALgfAAQgigBgYgOgAgBANQgXAFgMAMQgOAMAAAUQAAAUAMAKQAMAKASAAQASAAAPgLQAPgLAFgQIACgJIAAgJIAAglIgFAAQgYAAgTAEg");
	this.shape_2.setTransform(175.6,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AgjDtQgagNgTgeIgBAAIgEAvIhZAAIACgsIAAg4IAAmFIBpAAIAADBIABAAQAQgWAagMQAZgNAjAAQAoAAAgAVQAfAVASAmQASAlAAA0QgBA8gWApQgWAogjAUQgjAVgnAAQgdAAgbgMgAgqgHQgRANgGAXIgCAJIAAAKIAAAyQAAAKACAIQAGAWAQAOQARANAXABQAhgBATgYQATgYAAguQAAgbgHgUQgJgWgQgLQgQgMgXgBQgWABgRAOg");
	this.shape_3.setTransform(138.4,46.1);

	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(123,29.2,2,2,0,0,0,61.5,14.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol17(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(0,0,380,98), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AimDqIAAnJQAYgFAjgCQAjgDAwAAQAwAAAiAJQAkAJAYATQAWASANAcQAOAbAAAjQAAAigLAcQgLAbgVAUQgbAZgnAMQgmAMguAAIgUgBIgQgBIAACmgAguiYIgQACIAACKIAPACIAUAAQApAAAZgUQAYgTAAgkQAAghgWgRQgUgSgogBQgQAAgLACg");
	this.shape.setTransform(240.9,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("Ag0DpIAAnQIBpAAIAAHQg");
	this.shape_1.setTransform(209.8,47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("ABEDpIhxjKIgoAyIAACYIhoAAIAAnQIBoAAIAADNIACAAIAQgaIAQgZIBoiaICBAAIiaDGICiEKg");
	this.shape_2.setTransform(181.2,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AhnDnQgkgJgUgKIAWhYQAVAMAeAIQAfAJAjAAQAiAAATgNQATgOAAgWQABgWgTgPQgSgPgpgPQg7gTgighQgighgBgzQABgoAVgfQAUggAogSQAngSA3AAQAmAAAeAGQAeAIAUAJIgYBVQgOgHgYgIQgYgHgjAAQghABgQANQgSAMABASQgBAWAVAOQAVAOAsAQQA9AXAeAhQAdAgABAyQgBAngTAhQgVAggpAUQgqATg/ABQgoAAgkgJg");
	this.shape_3.setTransform(139.1,47);

	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(123,29.2,2,2,0,0,0,61.5,14.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol17(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,380,98), null);


(lib.Symbol19copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AhmDjQghgVgTgnQgUgnAAg0QABg5AUgnQAVgoAigVQAigVAqAAQAeAAAXAKQAXAKAMASIABAAIAAi4IBpAAIAAGFIABA4IACAsIheAAIgEgyIgBAAQgSAdgbAOQgdAPggAAQgogBgggVgAgjgJQgQALgIAWQgJAWABAaQAAAsATAYQATAZAhAAQAWAAARgOQAQgOAGgWIACgMIAAgMIAAgsIAAgKIgBgJQgFgWgRgNQgQgPgYAAQgWAAgRANg");
	this.shape.setTransform(291.5,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AhlCsIAAjhIgBg/IgCgwIBaAAIAEA+IADAAQAIgYAPgPQAPgQARgHQASgHARAAIAMAAIAKABIAABjIgNgCIgQgBQgdAAgSAOQgTAOgFAZIgCALIAAALIAACrg");
	this.shape_1.setTransform(260,55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("AhnChQgYgPgNgWQgNgYAAgcQAAgrAZgdQAYgcAsgOQAtgOA7ABIAAgGQABgIgFgLQgFgJgNgIQgOgGgZgBQgaABgZAHQgZAHgQALIgUhDQASgLAhgJQAhgKAuAAQA4ABAgATQAhAUAOAhQAOAgAAAoIAAB1IABAuIADAkIheAAIgHgjIgBAAQgRAUgZALQgYALgfAAQghAAgZgPgAgBAOQgXAEgNAMQgMAMAAAUQgBAVAMAJQAMAKASAAQASAAAPgLQAPgLAFgRIACgIIAAgKIAAgkIgFAAQgZAAgSAFg");
	this.shape_2.setTransform(226.5,55.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AA0CpIgfh3IgLgxIgKg3IgBAAIgKA4QgFAZgHAXIgiB3IhiAAIhjlRIBrAAIAbCLIAKA1IAKA4IABAAIAMg5IANg0IAkiLIBRAAIAiCHIANA4IAMA5IACAAIAIg5IALg5IAdiGIBnAAIhoFRg");
	this.shape_3.setTransform(183,55.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.498)").s().p("AhlCsIAAjhIgBg/IgCgwIBaAAIAEA+IADAAQAIgYAPgPQAPgQARgHQASgHARAAIAMAAIAKABIAABjIgNgCIgQgBQgdAAgSAOQgTAOgFAZIgCALIAAALIAACrg");
	this.shape_4.setTransform(145,55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.498)").s().p("AhaCbQgogVgWgmQgXgngBg3QABg1AWgoQAWgoApgWQAogWA2AAQA0AAAmAWQAnAWAVAnQAWAmABAzQgCA9gZAoQgZAogpASQgnAUguAAQgxgBgogUgAgmhWQgQAQgGAWQgIAXABAZQAAAcAIAYQAIAWAPAOQAPANAWAAQAfgBARgbQATgcAAgtQAAgZgHgXQgGgXgQgPQgPgPgXABQgYgBgPAPg");
	this.shape_5.setTransform(110.7,55.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("AhJD5IAAkDIgsAAIAAhOIAsAAIAAgNQAAgfAKgeQAKgeAXgWQAUgSAYgIQAZgIAXAAQARAAAOACQAOACALADIgEBRIgPgDQgJgCgKAAQgaABgMARQgLARAAAZIAAARIBEAAIAABOIhDAAIAAEDg");
	this.shape_6.setTransform(80,47.4);

	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(123,29.2,2,2,0,0,0,61.5,14.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol16(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19copy, new cjs.Rectangle(0,0,380,98), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Ag3DpIAAi/IiTkSIB4AAIAwBxIATAtIAQArIABAAIARgrIATgtIAuhxIB2AAIiZEPIAADCg");
	this.shape.setTransform(234.5,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AiMC5QgwgzgBhvIAAkCIBpAAIAAEKQABA8AVAfQAWAeAoAAQApAAAWgeQAWgdAAg+IAAkKIBpAAIAAEEQgBBrgzA0QgyA0hbAAIgCAAQhXAAgwgzg");
	this.shape_1.setTransform(190,49.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Ah+DrQgcgDgSgCIAAnIQAOgDAWgBIAwgEQAagBAagBQAvAAAgAHQAhAFAZAPQAYANAQAXQAQAXAAAgQAAAfgTAbQgSAagoAPIAAABQAoAMAaAcQAZAdACAtQgBAggNAYQgNAZgWARQgZAVgtALQgsALhDAAQgoAAgdgCgAhDCdIARACIAXAAQAYAAAUgHQAUgGANgPQAMgOAAgZQAAgYgNgOQgMgPgWgGQgUgHgaAAIgkAAgAgyieIgRACIAABsIAjAAQAoAAAWgQQAVgPAAgaQAAgbgTgNQgUgOgiAAIgcABg");
	this.shape_2.setTransform(146.6,49.1);

	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(123,29.2,2,2,0,0,0,61.5,14.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol16(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,380,98), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(85,22.7,1,1,0,0,0,85,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({regY:22.8,scaleX:0.8,scaleY:0.8,y:22.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.1,45.5);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{empty:0,active:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.diceBtn = new lib.Symbol13();
	this.diceBtn.parent = this;
	this.diceBtn.setTransform(85,22.7,1,1,0,0,0,85,22.7);
	this.diceBtn.alpha = 0;
	new cjs.ButtonHelper(this.diceBtn, 0, 1, 2, false, new lib.Symbol13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.diceBtn).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.1,45.5);


(lib.userIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0,jump:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3300").ss(7.3,1,1).p("AAAhpIAABBIAAAlIAAAkIAyA+AAAgDIBJAAAAAgDIhHAAAAAAhIg1BJ");
	this.shape.setTransform(0.7,-11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AAKBIgAAABIQgWAAgUgHQgOgFgNgJQgcgVAAgeQAAgcAcgWQAdgVAoAAQAoAAAcAVQAeAWAAAcQAAAegeAVQgJAIgMAEQgRAIgUABIAAhBIAABBIgKAAg");
	this.shape_1.setTransform(-0.2,-22.8);

	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-34.4);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true,y:-15.4},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-30,21.7,32.7);


(lib.Symbol5copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(52.2,25.5,0.81,0.81,0,63,23,32.4,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("An3gZQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgIAn3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgLIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABg");
	this.shape.setTransform(50.4,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGg");
	this.shape_1.setTransform(50.4,25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_2.setTransform(50.4,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_3.setTransform(50.4,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy7, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.buildName = new cjs.Text("buildingCell", "bold 8px 'Myriad Pro'");
	this.buildName.name = "buildName";
	this.buildName.textAlign = "center";
	this.buildName.lineHeight = 12;
	this.buildName.lineWidth = 44;
	this.buildName.parent = this;
	this.buildName.setTransform(73.8,13.8,0.999,1,0,63,27);

	this.timeline.addTween(cjs.Tween.get(this.buildName).wait(1));

	// Layer 3
	this.type = new lib.Symbol7();
	this.type.parent = this;
	this.type.setTransform(41.1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.type).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("An3gZIAAAGIAAAcQAAABAAACIAAARQAAABAAABQAAAMALAHIHQDpQAfAMAXgMIHTjsQALgFAAgKQAAgBAAgBIAAgTQAAgBAAAAIAAgfIAAgLIAAgBQAAgHgJgHInUjsQgQgKgXALIngDyQgKAHgBAGQAAABAAABQAAAGAKAFIHRDpQAfAMAXgMIHTjrQALgIAAgI");
	this.shape.setTransform(50.4,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#38CCCC","#008E8E"],[0,1],-13.3,-3.9,27.2,-12.3).s().p("AgcCVInQjoQgLgGAAgNIAAgCIAAgRIAAgDIAAgcIAKAFIHRDoQAfANAXgNIHTjqIALgGIAAAgIAAACIAAASIAAACQAAAKgLAGInTDqQgMAHgNAAQgNAAgQgHg");
	this.shape_1.setTransform(50.4,42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCCC").s().p("An3AEIAAgFQAAAFAKAFgAH4gIIAAAKIgLAFQALgHAAgIg");
	this.shape_2.setTransform(50.4,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CD4D4").s().p("AgcD7InRjqQgKgFAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAABQAAAHgLAIInTDsQgMAGgNAAQgNAAgQgGg");
	this.shape_3.setTransform(50.4,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy, new cjs.Rectangle(-1,-1,102.9,59.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgcD7InbjvIAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAALIneDxQgLAGgOAAQgNAAgQgGg");
	var mask_graphics_21 = new cjs.Graphics().p("AgcD7InbjvIAAgGIAAgCQABgFAKgHIHgjyQAXgLAQAKIHUDsQAJAHAAAHIAAALIneDxQgLAGgOAAQgNAAgQgGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:52.2,y:26.7}).wait(21).to({graphics:mask_graphics_21,x:52.2,y:26.7}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer 2
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(97.5,7.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-24.7,y:61.2},21).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.5,1.1,31.1,36);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{startCell:0,"startCell":1,buildingCell:2,loseCell:3,taxiCell:4,successCell:5,outFondCell:6,salaryCell:7,customCell:8,inFondCell:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// blesk
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(55.5,29,1,1,0,0,0,51.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer 2
	this.defaultCell = new lib.Symbol5();
	this.defaultCell.parent = this;
	this.defaultCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.startCell = new lib.Symbol6();
	this.startCell.parent = this;
	this.startCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.buildingCell = new lib.Symbol5copy();
	this.buildingCell.parent = this;
	this.buildingCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.loseCell = new lib.Symbol5copy2();
	this.loseCell.parent = this;
	this.loseCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.taxiCell = new lib.Symbol5copy3();
	this.taxiCell.parent = this;
	this.taxiCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.successCell = new lib.Symbol5copy4();
	this.successCell.parent = this;
	this.successCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.outFondCell = new lib.Symbol5copy5();
	this.outFondCell.parent = this;
	this.outFondCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.salaryCell = new lib.Symbol5copy7();
	this.salaryCell.parent = this;
	this.salaryCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.customCell = new lib.Symbol5copy8();
	this.customCell.parent = this;
	this.customCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.inFondCell = new lib.Symbol5copy9();
	this.inFondCell.parent = this;
	this.inFondCell.setTransform(55.4,30,1,1,0,0,0,50.4,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.defaultCell}]}).to({state:[{t:this.startCell}]},1).to({state:[{t:this.buildingCell}]},1).to({state:[{t:this.loseCell}]},1).to({state:[{t:this.taxiCell}]},1).to({state:[{t:this.successCell}]},1).to({state:[{t:this.outFondCell}]},1).to({state:[{t:this.salaryCell}]},1).to({state:[{t:this.customCell}]},1).to({state:[{t:this.inFondCell}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,-40.2,148,99.3);


(lib.buildPopup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 3
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(0,-313.3,0.34,1,0,0,0,378.9,44.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:379.1,scaleX:1.23,x:0.1,alpha:1},6,cjs.Ease.quadInOut).to({scaleX:1},3).wait(7));

	// Symbol 19
	this.btn_yes = new lib.Symbol19();
	this.btn_yes.parent = this;
	this.btn_yes.setTransform(-260,260,0.16,1,0,0,0,189.7,49);
	this.btn_yes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_yes).wait(15).to({_off:false},0).to({regX:190,scaleX:1.34,x:-259.9},6,cjs.Ease.quadInOut).to({regX:189.9,scaleX:1,x:-260},3).wait(1));

	// Symbol 20
	this.btn_no = new lib.Symbol20();
	this.btn_no.parent = this;
	this.btn_no.setTransform(260,264,0.2,1,0,0,0,190.3,49);
	this.btn_no._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_no).wait(9).to({_off:false},0).to({regX:190.1,scaleX:1.21,x:260.1},5,cjs.Ease.quadInOut).to({regX:190,scaleX:1,x:260},3).wait(8));

	// Layer 1
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.34,0.34,0,0,0,748.1,382.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:382.6,scaleX:1,scaleY:1,y:0.1,alpha:1},9,cjs.Ease.quadInOut).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-887,-436.5,1774,873);


(lib.taxiPopup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 3
	this.instance = new lib.Symbol21copy();
	this.instance.parent = this;
	this.instance.setTransform(0,-313.3,0.34,1,0,0,0,378.9,44.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:379.1,scaleX:1.23,x:0.1,alpha:1},6,cjs.Ease.quadInOut).to({scaleX:1},3).wait(7));

	// Symbol 19
	this.btn_yes = new lib.Symbol19copy();
	this.btn_yes.parent = this;
	this.btn_yes.setTransform(-260,260,0.16,1,0,0,0,189.7,49);
	this.btn_yes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_yes).wait(15).to({_off:false},0).to({regX:190,scaleX:1.34,x:-259.9},6,cjs.Ease.quadInOut).to({regX:189.9,scaleX:1,x:-260},3).wait(1));

	// Symbol 20
	this.btn_no = new lib.Symbol20copy();
	this.btn_no.parent = this;
	this.btn_no.setTransform(260,264,0.2,1,0,0,0,190.3,49);
	this.btn_no._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_no).wait(9).to({_off:false},0).to({regX:190.1,scaleX:1.21,x:260.1},5,cjs.Ease.quadInOut).to({regX:190,scaleX:1,x:260},3).wait(8));

	// Layer 1
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.34,0.34,0,0,0,748.1,382.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:382.6,scaleX:1,scaleY:1,y:0.1,alpha:1},9,cjs.Ease.quadInOut).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-887,-436.5,1774,873);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup_placeholder
	this.popup_placeholder = new lib.Symbol15();
	this.popup_placeholder.parent = this;
	this.popup_placeholder.setTransform(928.6,478.1,1,1,0,0,0,43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.popup_placeholder).wait(1));

	// Layer 7
	this.cell_0 = new lib.Symbol1();
	this.cell_0.parent = this;
	this.cell_0.setTransform(971.6,687.1,1,1,0,0,0,54.5,28);

	this.cell_1 = new lib.Symbol1();
	this.cell_1.parent = this;
	this.cell_1.setTransform(917.1,659.1,1,1,0,0,0,54.5,28);

	this.cell_2 = new lib.Symbol1();
	this.cell_2.parent = this;
	this.cell_2.setTransform(862.6,631.1,1,1,0,0,0,54.5,28);

	this.cell_3 = new lib.Symbol1();
	this.cell_3.parent = this;
	this.cell_3.setTransform(808.1,603.1,1,1,0,0,0,54.5,28);

	this.cell_4 = new lib.Symbol1();
	this.cell_4.parent = this;
	this.cell_4.setTransform(753.6,575.1,1,1,0,0,0,54.5,28);

	this.cell_5 = new lib.Symbol1();
	this.cell_5.parent = this;
	this.cell_5.setTransform(699.1,547.1,1,1,0,0,0,54.5,28);

	this.cell_6 = new lib.Symbol1();
	this.cell_6.parent = this;
	this.cell_6.setTransform(644.6,519.1,1,1,0,0,0,54.5,28);

	this.cell_7 = new lib.Symbol1();
	this.cell_7.parent = this;
	this.cell_7.setTransform(590.1,491.1,1,1,0,0,0,54.5,28);

	this.cell_8 = new lib.Symbol1();
	this.cell_8.parent = this;
	this.cell_8.setTransform(535.6,463.1,1,1,0,0,0,54.5,28);

	this.cell_39 = new lib.Symbol1();
	this.cell_39.parent = this;
	this.cell_39.setTransform(1027.1,659.1,1,1,0,0,0,54.5,28);

	this.cell_38 = new lib.Symbol1();
	this.cell_38.parent = this;
	this.cell_38.setTransform(1080.6,631.1,1,1,0,0,0,54.5,28);

	this.cell_37 = new lib.Symbol1();
	this.cell_37.parent = this;
	this.cell_37.setTransform(1136.1,603.1,1,1,0,0,0,54.5,28);

	this.cell_36 = new lib.Symbol1();
	this.cell_36.parent = this;
	this.cell_36.setTransform(1189.6,575.1,1,1,0,0,0,54.5,28);

	this.cell_35 = new lib.Symbol1();
	this.cell_35.parent = this;
	this.cell_35.setTransform(1245.1,547.1,1,1,0,0,0,54.5,28);

	this.cell_34 = new lib.Symbol1();
	this.cell_34.parent = this;
	this.cell_34.setTransform(1298.6,519.1,1,1,0,0,0,54.5,28);

	this.cell_33 = new lib.Symbol1();
	this.cell_33.parent = this;
	this.cell_33.setTransform(1354.1,491.1,1,1,0,0,0,54.5,28);

	this.cell_9 = new lib.Symbol1();
	this.cell_9.parent = this;
	this.cell_9.setTransform(481.1,435.1,1,1,0,0,0,54.5,28);

	this.cell_10 = new lib.Symbol1();
	this.cell_10.parent = this;
	this.cell_10.setTransform(426.6,407.1,1,1,0,0,0,54.5,28);

	this.cell_32 = new lib.Symbol1();
	this.cell_32.parent = this;
	this.cell_32.setTransform(1407.6,463.1,1,1,0,0,0,54.5,28);

	this.cell_31 = new lib.Symbol1();
	this.cell_31.parent = this;
	this.cell_31.setTransform(1463.1,435.1,1,1,0,0,0,54.5,28);

	this.cell_11 = new lib.Symbol1();
	this.cell_11.parent = this;
	this.cell_11.setTransform(481.1,379.1,1,1,0,0,0,54.5,28);

	this.cell_12 = new lib.Symbol1();
	this.cell_12.parent = this;
	this.cell_12.setTransform(534.6,351.1,1,1,0,0,0,54.5,28);

	this.cell_13 = new lib.Symbol1();
	this.cell_13.parent = this;
	this.cell_13.setTransform(590.1,323.1,1,1,0,0,0,54.5,28);

	this.cell_14 = new lib.Symbol1();
	this.cell_14.parent = this;
	this.cell_14.setTransform(643.6,295.1,1,1,0,0,0,54.5,28);

	this.cell_15 = new lib.Symbol1();
	this.cell_15.parent = this;
	this.cell_15.setTransform(699.1,267.1,1,1,0,0,0,54.5,28);

	this.cell_16 = new lib.Symbol1();
	this.cell_16.parent = this;
	this.cell_16.setTransform(752.6,239.1,1,1,0,0,0,54.5,28);

	this.cell_17 = new lib.Symbol1();
	this.cell_17.parent = this;
	this.cell_17.setTransform(808.1,211.1,1,1,0,0,0,54.5,28);

	this.cell_18 = new lib.Symbol1();
	this.cell_18.parent = this;
	this.cell_18.setTransform(861.6,183.1,1,1,0,0,0,54.5,28);

	this.cell_19 = new lib.Symbol1();
	this.cell_19.parent = this;
	this.cell_19.setTransform(917.1,155.1,1,1,0,0,0,54.5,28);

	this.cell_30 = new lib.Symbol1();
	this.cell_30.parent = this;
	this.cell_30.setTransform(1516.6,407.1,1,1,0,0,0,54.5,28);

	this.cell_29 = new lib.Symbol1();
	this.cell_29.parent = this;
	this.cell_29.setTransform(1462.1,379.1,1,1,0,0,0,54.5,28);

	this.cell_28 = new lib.Symbol1();
	this.cell_28.parent = this;
	this.cell_28.setTransform(1407.6,351.1,1,1,0,0,0,54.5,28);

	this.cell_27 = new lib.Symbol1();
	this.cell_27.parent = this;
	this.cell_27.setTransform(1353.1,323.1,1,1,0,0,0,54.5,28);

	this.cell_26 = new lib.Symbol1();
	this.cell_26.parent = this;
	this.cell_26.setTransform(1298.6,295.1,1,1,0,0,0,54.5,28);

	this.cell_25 = new lib.Symbol1();
	this.cell_25.parent = this;
	this.cell_25.setTransform(1244.1,267.1,1,1,0,0,0,54.5,28);

	this.cell_24 = new lib.Symbol1();
	this.cell_24.parent = this;
	this.cell_24.setTransform(1189.6,239.1,1,1,0,0,0,54.5,28);

	this.cell_23 = new lib.Symbol1();
	this.cell_23.parent = this;
	this.cell_23.setTransform(1135.1,211.1,1,1,0,0,0,54.5,28);

	this.cell_22 = new lib.Symbol1();
	this.cell_22.parent = this;
	this.cell_22.setTransform(1080.6,183.1,1,1,0,0,0,54.5,28);

	this.cell_21 = new lib.Symbol1();
	this.cell_21.parent = this;
	this.cell_21.setTransform(1026.1,155.1,1,1,0,0,0,54.5,28);

	this.cell_20 = new lib.Symbol1();
	this.cell_20.parent = this;
	this.cell_20.setTransform(971.6,127.1,1,1,0,0,0,54.5,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cell_20},{t:this.cell_21},{t:this.cell_22},{t:this.cell_23},{t:this.cell_24},{t:this.cell_25},{t:this.cell_26},{t:this.cell_27},{t:this.cell_28},{t:this.cell_29},{t:this.cell_30},{t:this.cell_19},{t:this.cell_18},{t:this.cell_17},{t:this.cell_16},{t:this.cell_15},{t:this.cell_14},{t:this.cell_13},{t:this.cell_12},{t:this.cell_11},{t:this.cell_31},{t:this.cell_32},{t:this.cell_10},{t:this.cell_9},{t:this.cell_33},{t:this.cell_34},{t:this.cell_35},{t:this.cell_36},{t:this.cell_37},{t:this.cell_38},{t:this.cell_39},{t:this.cell_8},{t:this.cell_7},{t:this.cell_6},{t:this.cell_5},{t:this.cell_4},{t:this.cell_3},{t:this.cell_2},{t:this.cell_1},{t:this.cell_0}]}).wait(1));

	// Layer 9
	this.dice_btn_status = new lib.Symbol12();
	this.dice_btn_status.parent = this;
	this.dice_btn_status.setTransform(998.7,488.5,1,1,0,0,0,85,22.7);

	this.timeline.addTween(cjs.Tween.get(this.dice_btn_status).wait(1));

	// kibiki
	this.dice_1 = new lib.Symbol8();
	this.dice_1.parent = this;
	this.dice_1.setTransform(1048.5,411.3,1,1,-10,0,0,48,52.5);

	this.dice_0 = new lib.Symbol8();
	this.dice_0.parent = this;
	this.dice_0.setTransform(939,415.4,1,1,14,0,0,48,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dice_0},{t:this.dice_1}]}).wait(1));

	// Layer 3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(719.7,440,3.068,2.36,-1,0,0,246.2,128.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(885.5,435,1819.1,867.1);
// library properties:
lib.properties = {
	id: '915F48D7493A9947A2E697D8A433BA25',
	width: 1771,
	height: 870,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/assets_atlas_.png", id:"assets_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['915F48D7493A9947A2E697D8A433BA25'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;