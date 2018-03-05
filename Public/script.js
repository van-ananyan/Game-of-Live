var matrix = []
var side = 20;
var xotArr = [];
var eatArr = [];
var gishatich = [];
var patastak = [];
var tuynot = [];

var xotCount =1000;
var eatCount=300;
var gishCount=200;
var patCount =20;
var tuynCount = 50;
var matrix = [];

var L =50;
var K =50;



function setup() {
    for(var i=0;i<L;i++){
        matrix.push([]);
        for(var j=0;j<K;j++){
            matrix[i][j]=0;
        }
    }
    var h =0;
    while(h < xotCount)
    {
        var x = Math.floor(random(0,L));
        var y = Math.floor(random(0,K));
        if(matrix[y][x] == 0)
        {
            matrix[y][x]=1;
            h++;
        }
    }
    
    h=0;
       while(h < eatCount)
    {
        var x = Math.floor(random(0,L));
        var y = Math.floor(random(0,K));
        if(matrix[y][x] == 0)
        {
            matrix[y][x]=2;
            h++;
        }
    }
    
    h = 0;
       while(h <gishCount)
    {
        var x = Math.floor(random(0,L));
        var y = Math.floor(random(0,K));
        if(matrix[y][x] == 0)
        {
            matrix[y][x]=3;
            h++;
        }
    }
    h =0;
       while(h < patCount)
    {
        var x = Math.floor(random(0,L));
        var y = Math.floor(random(0,K));
        if(matrix[y][x] == 0)
        {
            matrix[y][x]=4;
            h++;
        }
    }
    tuynCounth=0;
       while(h < tuynCount)
    {
        var x = Math.floor(random(0,L));
        var y = Math.floor(random(0,K));
        if(matrix[y][x] == 0)
        {
            matrix[y][x]=5;
            h++;
        }
    }
    noStroke();
    frameRate(60);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var xotutox = new Predator(j, i, 3);
                gishatich.push(xotutox);
            } else if (matrix[i][j] == 4) {
                var patavor = new Pat(j, i, 4);
                patastak.push(patavor);
            } else if (matrix[i][j] == 5) {
                var tunavor = new Tunavorxot(j, i, 5);
                tuynot.push(tunavor);
            }

        }
    }
}

function draw() {




    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill("blue");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill("#8B4513");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
        }
    }

 

    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishatich) {
        gishatich[i].eat();
    }
    for (var i in tuynot)   {
        tuynot[i].mul();
    }
       for (var i in xotArr) {
        xotArr[i].mul();
    }

}