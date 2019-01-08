import { generateSequence } from './simon';
import './styles.css';
import unlit1 from './img/1_off.png';
import unlit2 from './img/2_off.png';
import unlit3 from './img/3_off.png';
import unlit4 from './img/4_off.png';
import lit1 from './img/1_on.png';
import lit2 from './img/2_on.png';
import lit3 from './img/3_on.png';
import lit4 from './img/4_on.png';

$(document).ready(function() {
    var sequence = [];
    $('#1').attr('src', unlit1);
    $('#2').attr('src', unlit2);
    $('#3').attr('src', unlit3);
    $('#4').attr('src', unlit4);
    $('#start-button').click(function(event) {
        event.preventDefault();
        sequence = generateSequence();
        
        sequence.forEach(function(x){
            setInterval(selectiveLightUp(x), 3000);
        });


        
        function selectiveLightUp(x){
            if (x === 1)
            {
                lightUp1();
            }
            else if (x === 2)
            {
                lightUp2();
            }
            else if (x === 3)
            {
                lightUp3();
            }
            else if (x === 4)
            {
                lightUp4();
            } 
            
        }

        function lightUp1(){
            $('#1').attr('src', lit1);
        }

        function lightUp2(){
            $('#2').attr('src', lit2);
        }

        function lightUp3(){
            $('#3').attr('src', lit3);
        }

        function lightUp4(){
            $('#4').attr('src', lit4);
        }



        function lightDown(){
            $('#1').attr('src', unlit1);
            $('#2').attr('src', unlit2);
            $('#3').attr('src', unlit3);
            $('#4').attr('src', unlit4);
        }

    });

});