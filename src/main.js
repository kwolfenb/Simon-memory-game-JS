import { generateSequence } from './simon';
import './styles.css';
import unlit1 from './img/1_off.png';
import unlit2 from './img/2_off.png';
import unlit3 from './img/3_off.png';
import unlit4 from './img/4_off.png';
import lit1 from './img/1_on.png';
// import lit2 from './img/2_on.png';
// import lit3 from './img/3_on.png';
// import lit4 from './img/4_on.png';

$(document).ready(function() {
    $('#1').attr('src', unlit1);
    $('#2').attr('src', unlit2);
    $('#3').attr('src', unlit3);
    $('#4').attr('src', unlit4);
    $('#start-button').click(function(event) {
        event.preventDefault();
        var sequence = generateSequence();


        
        lightUp();
        $('#test').append(sequence[0]);
        setTimeout(lightDown, 2000);
            
        });
        function lightUp(){
            $('#1').attr('src', lit1);
        }

        function lightDown(){
            $('#1').attr('src', unlit1);
        }

    });


// $(document).ready(function() {
//   $('#ping-pong-form').submit(function(event) {
//     event.preventDefault();
//     var goal = $('#goal').val();
//     var output = pingPong(goal);
//     output.forEach(function(element) {
//       $('#solution').append("<li>" + element + "</li>");
//     });
//   });
// });