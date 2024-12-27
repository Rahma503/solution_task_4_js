var i = 0;
        var images = [];
        
        var timer;
        
        images[0] = 'images/1.png';
        images[1] = 'images/2.png';
        images[2] = 'images/3.png';
        images[3] = 'images/4.png';

       
        function sliderimg() {
            timer = setInterval(function (){
                var imge = document.getElementById("slide");
                imge.src = images[i];
                if (i < images.length - 1) {
                    i++;
                } else {
                    i = 0;
                }
            }, 500);
        }

        function stop() {
            clearInterval(timer);
            //reset 1st image
            var img =document.getElementById("slide");
            img.src = images[0]
        }
