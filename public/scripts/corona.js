var myForm = document.getElementById('myForm');

        fetch("https://api.covid19api.com/total/dayone/country/turkey").then((res) => res.json())
            .then((res) =>{

                let length = res.length;
                
                let index = length -1 ;
                
                let date = document.getElementById('date');
                let dailycase = document.getElementById('dailycase');
                let dailydeaths = document.getElementById('dailydeaths');
                let confirmed = document.getElementById('confirmed');
                let deaths = document.getElementById('deaths');
                
                date.innerText = "";
                dailycase.innerText = "";
                dailydeaths.innerText = "";
                confirmed.innerText = "";
                deaths.innerText = "";

                date.append((res[index].Date).split("T00:00:00Z") + " " + "TURKEY");
                dailycase.append("Günlük Vaka: "+ (res[index].Confirmed - res[index-1].Confirmed) );
                dailydeaths.append("Günlük Ölüm: " + (res[index].Deaths - res[index-1].Deaths ));
                
                confirmed.append("Toplam Vaka: "+ res[index].Confirmed );
                deaths.append("Toplam Ölüm: " + res[index].Deaths);

            })

        myForm.addEventListener('submit',function(e){
            e.preventDefault();
            
            var country = document.getElementById('country').value;

            var url= "https://api.covid19api.com/total/dayone/country/" + country;
       
            fetch(url).then((res) => res.json())
            .then((res) =>{

                let length = res.length;
                
                let index = length -1 ;
                
                let date = document.getElementById('date');
                let dailycase = document.getElementById('dailycase');
                let dailydeaths = document.getElementById('dailydeaths');
                let confirmed = document.getElementById('confirmed');
                let deaths = document.getElementById('deaths');
                
                date.innerText = "";
                dailycase.innerText = "";
                dailydeaths.innerText = "";
                confirmed.innerText = "";
                deaths.innerText = "";

                date.append((res[index].Date).split("T00:00:00Z") + " " +country.toUpperCase());
                dailycase.append("Günlük Vaka: "+ (res[index].Confirmed - res[index-1].Confirmed) );
                dailydeaths.append("Günlük Ölüm: " + (res[index].Deaths - res[index-1].Deaths ));
                
                confirmed.append("Toplam Vaka: "+ res[index].Confirmed );
                deaths.append("Toplam Ölüm: " + res[index].Deaths);

            })
            
        })
        
            
            