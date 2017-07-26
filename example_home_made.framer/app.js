// Welcome to Framer

// This is just demo code. Feel free to delete it all.


// imageLayer = new Layer({x:0, y:0, width:128, height:128, image:"images/Icon.png"})
// imageLayer.center()

// // Define a set of states with names (the original state is 'default')
// imageLayer.states = {
// 	second: {y:100, scale:0.6, rotationZ:100},
// 	third:  {y:300, scale:1.3},
// 	fourth:	{y:200, scale:0.9, rotationZ:200}
// }

// // Set the default animation options
// imageLayer.animationOptions = {
// 	curve: "spring(500,12,0)"
// }

// // On a click, go to the next state
// imageLayer.on(Events.Click, function() {
// 	imageLayer.stateCycle()
// })

// var bgcolor = "#0066ff";
var bgcolor = "#000000"; 
var shadowcolor = "#FF0000" 


/* */
var device = new Framer.DeviceComponent();
	device.setupContext();
	
		// Display only the device
		// device.deviceType = "iphone-5c-pink";

		// Display a hand with the device
		device.deviceType = "iphone-5c-pink-hand";
 
		// Change the size
		device.setDeviceScale(0.3);

		// Draw a white square
 
	var whiteSquare = new Layer(
    {
      backgroundColor: ""+bgcolor+"",
      width: 400,
      height: 120,
      y: 0
    }
	);
 
	// Center horizontally
	whiteSquare.centerX();


	// Draw an image
	//imageLayer = new Layer({x:0, y:0, width:128, height:128, image:"images/Icon.png"})
	// imageLayer.center()
 
	var pic = new Layer(
    	{
        image: "images/audrey_in_funny_face_audrey_hepburn_400x400.jpg",
        width: 400,
        height: 300,
        y: 120
    	}
	);
 
	pic.centerX();


	// Write text
 
var text = new Layer(
    {
        backgroundColor: ""+bgcolor+"",
        width: Screen.width,
        height: 160,
        y: 420,
        html: "Who am I ?",
        style: {
            fontSize: "20px",
            textAlign: "center",
            color: "#FFFFFF",
            paddingTop: "15px",
            lineHeight: "50px",
            fontFamily: "Tahoma, Geneva, sans-serif"
            
        }
    }
);

		text.on("click", function(){
    	text.html = "This is Audrey Hepburn<br> in Funny Face";
		});

	// Animate borderRadius
	whiteSquare.animate({
    	properties: {
        borderRadius: whiteSquare.width/8
    },
 
    time: 2, // duration is two seconds
    curve: "ease-in-out" // apply easing
	});

	// Animate Shadow
 
whiteSquare.on("click", function(){
 
    // Set the shadow color first
    whiteSquare.shadowColor = "#555555";
 
    whiteSquare.animate({
        "properties": {            
            shadowBlur: 40,
            shadowSpread: 10,
        }
    });
});

// Add two states
 
pic.states.add({
    "myState1" : {
        borderRadius: 100
    },
 
    "myState2": {
        borderRadius: 200
    }
});

// Change state when clicked
 
pic.on("click", function() {
    // Switch to myState2
    pic.states.switch("myState2");
});


var bg = new BackgroundLayer({
    backgroundColor: ""+bgcolor+""
});




