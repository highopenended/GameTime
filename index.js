
const backgroundLayer=document.getElementById('background-layer');
var backgroundImg;

var floorHeight_min;
var floorHeight_max;

var max_Xval;
var max_Yval;

var defaultMove_X;
var defaultMove_Y;

const pikminArr=[];

// Initialize Game
(function Initialize(){

    floorHeight=(window.innerHeight*.05);
    defaultMove_X=window.innerWidth*.05;
    defaultMove_Y=window.innerHeight*.05;

    floorHeight_min=floorHeight-floorHeight*.1;
    floorHeight_max=floorHeight+floorHeight*.1;

    // alert(floorHeight + " : " + floorHeight_min + " : " + floorHeight_max);

    add_pikmin();

    function add_pikmin(){

        let newPikmin;
        let newImg;

        newPikmin = document.createElement('div');
        newImg = document.createElement('img');

        newPikmin.classList.add('pikmin-model');
        newImg.classList.add('pikmin-img');
        newImg.setAttribute('src',"Images/pikmin_red_left.png");
        newPikmin.appendChild(newImg);
        document.body.append(newPikmin);
        newPikmin.style.top=window.innerHeight-floorHeight - newImg.height + 'px';
        newPikmin.style.left='400px'        
        newPikmin.addEventListener('mouseover', (evt) =>{
        });
        pikminArr.push(newPikmin);
    }
}());

window.addEventListener('keydown', (evt) =>{
    let pressedKey=evt.key;
    switch(pressedKey){
        case 'ArrowUp':
            move_up();
            break;
        case 'ArrowDown':
            move_down();
            break;
        case 'ArrowLeft':
            move_left();
            break;
        case 'ArrowRight':
            move_right();
            break;
    }

    function move_left(){
        let pikmin_img;
        let xy;
        for (let index = 0; index < pikminArr.length; index++) {
            const pikmin = pikminArr[index];
            xy=getTranslateXY(pikmin);    
            pikmin_img=pikmin.getElementsByClassName('pikmin-img')[0];
            pikmin_img.style.transform='scaleX(1)';
            transformStr='translate(' + -defaultMove_X +'px,0px)'          
            pikmin.style.transform+=transformStr;  
        }
    }

    function move_right(){
        let pikmin_img;
        for (let index = 0; index < pikminArr.length; index++) {
            const pikmin = pikminArr[index];
            pikmin_img=pikmin.getElementsByClassName('pikmin-img')[0];
            pikmin_img.style.transform='scaleX(-1)';   
            transformStr='translate(' + defaultMove_X +'px,0px)'          
            pikmin.style.transform+=transformStr;
        }
    }

    function move_up(){
        let pikmin_img;
        for (let index = 0; index < pikminArr.length; index++) {
            const pikmin = pikminArr[index];             
            pikmin.style.transform+='translate(0px,' + -defaultMove_Y + 'px)';
        }
    }

    function move_down(){
        let pikmin_img;
        for (let index = 0; index < pikminArr.length; index++) {
            const pikmin = pikminArr[index];             
            pikmin.style.transform+='translate(0px,' + defaultMove_Y + 'px)';
        }
    }

    function getTranslateXY(element) {
        const style = window.getComputedStyle(element)
        const matrix = new DOMMatrixReadOnly(style.transform)
        return {
            translateX: matrix.m41,
            translateY: matrix.m42
        }
    }    
})