var a = document.getElementById("loc");

                function jsonpCallback(data) { 
                a.innerHTML = "Latitude: " + data.latitude + 
                              "<br/>Longitude: " + data.longitude + 
                              "<br/>Country: " + data.address.country; 
                }