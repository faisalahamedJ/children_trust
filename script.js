var acc = document.getElementsByClassName("accordion");
        var i;

        for(i=0; i< acc.length; i++){
            acc[i].addEventListener("click", function(){
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if(panel.style.display=== "block"){
                    panel.style.display = 'none';
                }else{
                    panel.style.display = "block";
                }
            });
        }

        function navbar_toggle(){
            var x = document.getElementById("nav-container");
            if(x.style.display === 'none'){
                x.style.display = 'block';
            }
            else{
                x.style.display ='none';
            }
        }
      