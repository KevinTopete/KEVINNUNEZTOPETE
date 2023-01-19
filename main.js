let input1 = '';
        let input2 = '';
        let list = [];
        let li = document.getElementById("list-Screen");

        let refresh = document.getElementById('clnbbtn');
        refresh.addEventListener('click', _ => {
                    location.reload();
        })

        function contador(){

            input1 = document.getElementById("1").value;
            input2 = document.getElementById("2").value;

            for(let i = 1; i<=100; i++){
                var node = document.createElement('li');
                if(i % 3 == 0 || i % 5 == 0){
                
                    if(i % 5 ==0 && i % 3 == 0 ){ 
                        list.push(input1+input2);
                        node.appendChild(document.createTextNode(input1 +' '+ input2));
                        document.querySelector('ul').appendChild(node);
                    }
                    else if (i % 3 ==0  ){
                        list.push(input1);
                        node.appendChild(document.createTextNode(input1));
                        document.querySelector('ul').appendChild(node);
                    }
                    else if(i % 5==0 ){
                        list.push(input2);
                        node.appendChild(document.createTextNode(input2));
                        document.querySelector('ul').appendChild(node);
                    }
                
                
                    }else{
                        list.push(i);
                        node.appendChild(document.createTextNode(i));
                        document.querySelector('ul').appendChild(node);
                }

                
            }
            
            //

        }
        



        btnFizz.addEventListener('click',contador,true);