var sequence = [];

export function generateSequence() {
        var x = Math.floor((Math.random() * 4) + 1);
        sequence.push(x);
        return sequence;

        //loop through sequence and light up corresponding lights (with a delay)
        // for (i=0; i<=sequence.length; i+=1){
        //     setInterval(lightUp(sequence[i]), 1000);
        // }
    }
