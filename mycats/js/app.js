
var cats = {
    currentcat: null,
    catlist: [{
    name:"Miumiu",
    image:"https://goo.gl/ytzhjy"
    }, 

    {
    name:"Chocolate",    
    image:"https://goo.gl/u4QWN1"    
    }

    ]
};


var octopus = {
    init: function() {
        cats.currentcat = cats.catlist[0];
        catlistview.init();
        catview.init();
    },

    showcurrentcat: function() {
        return cats.currentcat;
    },

    togetcats: function() {
        return cats.catlist;
    }, 

    setcurrentcat: function() {
        cats.catlist = cat;
    }


};

var catview = {
    init: function(){
        this.catelement = document.getElementById('cat');
        this.catNameelemnt = document.getElementById('cat-name');
        this.catImageelemnt = document.getElementById('cat-image');

    this.render();    

    },

    render: function(){

        var currentcat = octopus.showcurrentcat();
        this.catname.textContent = currentcat.name;
        this.catimage.src = currentcat.image;

    }


};

var catlistview = {

    init: function(){
        this.listelem = document.getElementById('cat-list');
        this.render();
    },

    render: function() {

        var cat, elem, i;

        var cats = octopus.togetcats();

        this.listelem.innerHTML = ' ';

        for(i=0; i<cats.length; i++) {
            cat = cats[i];
        

        elem = document.createElement('li');
        elem.textContent = cat.name; 


            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setcurrentcat(catCopy);
                    catview.render();
                };
            })(cat));

            // finally, add the element to the list
            this.listelem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();




















/*
var showcat = {

    catsection: [{
    count:0,
    name: 'Mimi',
    image: 'https://goo.gl/ytzhjy'

    },{
    count:0,    
    name: 'Kitty',
    image: 'https://goo.gl/ytzhjy'

    },{
    count:0,    
    name: 'Hello',
    image: 'https://goo.gl/ytzhjy'

    }

    ]

};



showcat.showkittycat = function() {

    showcat.catsection.forEach(function(cat) {

    var image = document.createElement('img');
    image.src = cat.image;
    image.width = 200;

    var showcatimage = document.getElementById('cat-image');
    showcatimage.appendChild(image);


    var text = document.createElement('p');
    text.innerHTML = cat.name;

    var showcatname = document.getElementById('cat-name');
    showcatname.appendChild(text);

    var text = document.createElement('p');
    text.innerHTML = cat.count;

    var showcount = document.getElementById('countnumber');
    showcount.appendChild(text);

        });

};

showcat.showkittycat();




showcat.hidecat = function() {
    //document.getElementById("cat-name").innerHTML = "";
    document.getElementById("cat-image").innerHTML = "";
};

showcat.hidecat();


showcat.showonecat = function() {

    document.getElementById("myImg").src = catsection.image;
};


showcat.showonecat();


























/////////////////////////////HIDE 

/*
var showcat = {

    'name': 'Mimi',
    'image': 'https://goo.gl/ytzhjy'

};


function catImage() {
 var image = document.createElement('img');
 image.src = showcat.image;
 image.width = 200;

 var showcatimage = document.getElementById('cat-image');
 showcatimage.appendChild(image);

};

catImage();



function catName() { 

 var text = document.createElement('p');
 text.innerHTML = showcat.name;

 var showcatname = document.getElementById('cat-name');
 showcatname.appendChild(text);


};

catName();







/*  ////////////////////   ANOTHER FUNCTION TO CALL  

function catName() { 

 var text = document.createElement('p');
 text.innerHTML = 'Mimi';

 var showtextinDiv = document.getElementById('cat-name');
 showtextinDiv.appendChild(text);

}

catName();




function showCatimage() {

///draw the cat image
var myImage = document.createElement('img');
myImage.src = 'https://goo.gl/ytzhjy';
myImage.width = 200;

///Image show on the div id="cat" (very importent menthod)
var catImageDiv = document.getElementById('cat-image');
catImageDiv.appendChild(myImage);

//Another way to show the image >>>>>  document.body.appendChild(myImage);

}

showCatimage();


*/