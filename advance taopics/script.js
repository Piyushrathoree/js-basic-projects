const requestUrl = "https://api.github.com/users/hiteshchoudhary";
      const xhr = new XMLHttpRequest();//creating a xml/api request 
      xhr.open("GET", requestUrl);//this method shows what you have to perform and from where 
      xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
          const data = JSON.parse(this.responseText);//converting the data into object form because everything which is recieved from request is come in the form of string
          console.log(typeof data);
          console.log(data.followers);
          console.log(data.location)

        }
      };
      xhr.send();//most important -it actually print all the logs which has been used in the code 
      //this code simply define how to access data from a basic api which is in form of object 