const getWeather = () => {
    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude + ' ' + longitude);
        const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + latitude + "&lon=" + longitude + "&appid=c809f8fa15bde511a38eac9f50ac2467"
        fetch(weatherUrl)
        .then((response) => response.json()) // grabs the response in a json file
        .then((data) => showWeather(data))
        }
        function showWeather(data) {
          const { name } = data;
          const { temp, humidity } = data.main;
          console.log(name, temp, humidity)
          document.querySelector(".location").innerText = "Weather in " + name;
          document.querySelector(".temp").innerText = temp + "°F";
          document.querySelector(".hum").innerText = "Humidity is " + humidity +"%";

          document.querySelector(".hum")
          .style.display = "block";

          document.querySelector(".temp")
          .style.display = "block";

          document.querySelector(".location")
          .style.display = "block";
          



      };
    
      
      
      const error = (error) => {
        console.log(error);
        document.querySelector(".location").innerText = "Unable to retrieve your location \ncheck your location is allowed";
        
        document.querySelector(".location")
        .style.display = "block";
        document.querySelector(".location")
        .style.lineHeight = "1.5";
        

      };
    
    navigator.geolocation.getCurrentPosition(success, error);


    }


  
 

