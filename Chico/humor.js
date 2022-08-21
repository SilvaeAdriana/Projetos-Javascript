const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
//const lamp = document.getElementById ( 'lamp' );


//function isLampBroken () {
//    return lamp.src.indexOf ( 'quebrada' ) > -1
//}
//

function lampOn () {
    lamp.src = './img/chico-alegre.jpg';
    
}

function lampOff () {
    lamp.src = './img/chico-triste.jpg';
    
}

//function lampBroken () {
//    lamp.src = './img/quebrada.jpg';
//}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
//lamp.addEventListener ( 'mouseover', lampOn );
//lamp.addEventListener ( 'mouseleave', lampOff );
//lamp.addEventListener ( 'dblclick', lampBroken );