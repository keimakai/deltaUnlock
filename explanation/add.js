var linda_url = "http://linda.masuilab.org";
var space = "delta";
var tuple = ["door", "open"];

var io = new RocketIO().connect(linda_url);
var linda = new Linda(io);
var ts = new linda.TupleSpace(space);

function door_open(){
    ts.write(tuple);
};

io.on("connect", function(){    
    ts.watch(["sensor"], function(tuple){
        if(typeof tuple === "undefined" || tuple === null) return;
        if(tuple.length !== 3) return; 
        if(tuple[1]=="temperature"){ $("#temperature").text( tuple[2]+"℃");
  });    
});
