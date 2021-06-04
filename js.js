let bad = "bad dog";

function sendNow(){
    if(document.getElementById('textInput').value != "" ){
        if(document.getElementById('textInput').value != bad){}
        let val = document.getElementById('textInput').value;
        
        

           if(val != bad){
            document.getElementById("imageFile").src = 'good boi.png';
        }  else{

            
            document.getElementById("imageFile").src = 'gun.png';
            document.getElementById('hidden').innerHTML = '! Your Mistake Can Not Be Fixed !'
        }

          


    }
    else{
        alert("Put something in the box")
    }
 
}