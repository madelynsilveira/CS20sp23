			
            
var apiKey = 'UhWSUX8U5j2cYXVWw8RNjWAw8XulKvagAagFGN74U20X8RkBVt'; // assign our key to a variable, easier to read

// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('submitZip').addEventListener('click', function(event){
		event.preventDefault();
		var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
		var url = 'http://api.petfinder.com/pet.getRandom';
		
		// Within $.ajax{...} is where we fill out our query 
		$.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				key: apiKey,
				animal: 'cat',
				'location': zip,
				output: 'basic',
				format: 'json'
			},
            
            // Here is where we handle the response we got back from Petfinder
			success: function( response ) {
				console.log(response); // debugging
				var catName = response.petfinder.pet.name.$t;
				var img = response.petfinder.pet.media.photos.photo[0].$t;
				var id = response.petfinder.pet.id.$t;

				var newName = document.createElement('a');
				var newDiv = document.createElement('div');
				newName.textContent = catName;
				newName.href = 'https://www.petfinder.com/petdetail/' + id;

				var newImg = document.createElement('img');
				newImg.src = img;
				
				var list = document.createElement("div");
				list.setAttribute("id", "List");
				document.body.appendChild(list);

				newDiv.appendChild(newName);
				list.appendChild(newDiv);
				list.appendChild(newImg);
			}
		});
		})

}



// // function getPets() {
// //     const apiKey = 'UhWSUX8U5j2cYXVWw8RNjWAw8XulKvagAagFGN74U20X8RkBVt';
// //     const apiSecret = 'CX6c5TNg13YRr8DMmTgzhvTwgkTQfeSEDfVsBoWA';
// //     const apiUrl = 'https://api.petfinder.com/v2/animals';

// //     fetch(apiUrl, {
// //         headers: {
// //             'Authorization': `Bearer ${apiKey}`
// //         }
// //     })
// //     .then(response => response.json())
// //     .then(data => {
// //         console.log(data);
// //         // Do something with the data
// //     })
// //     .catch(error => console.error(error));
// // }

// const apiKey = 'UhWSUX8U5j2cYXVWw8RNjWAw8XulKvagAagFGN74U20X8RkBVt';
// const apiSecret = 'CX6c5TNg13YRr8DMmTgzhvTwgkTQfeSEDfVsBoWA';
// const apiUrl = 'https://api.petfinder.com/v2/animals';

// // the next line and function set up the button in our html to be clickable and reactive 

// function getPets(){
// 	document.getElementById('submitZip').addEventListener('click', function(event){
// 		event.preventDefault();
// 		var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
// 		var url = 'http://api.petfinder.com/pet.getRandom';
		
// 		// Within $.ajax{...} is where we fill out our query 
// 		$.ajax({
// 			url: url,
// 			jsonp: "callback",
// 			dataType: "jsonp",
// 			data: {
// 				key: apiKey,
// 				animal: 'cat',
// 				// 'location': zip,
// 				output: 'basic',
// 				format: 'json'
// 			},
// 			// Here is where we handle the response we got back from Petfinder
// 			success: function( response ) {
// 				console.log(response); // debugging
// 				var catName = response.petfinder.pet.name.$t;
// 				var img = response.petfinder.pet.media.photos.photo[0].$t;
// 				var id = response.petfinder.pet.id.$t;

// 				var newName = document.createElement('a');
// 				var newDiv = document.createElement('div');
// 				newName.textContent = catName;
// 				newName.href = 'https://www.petfinder.com/petdetail/' + id;

// 				var newImg = document.createElement('img');
// 				newImg.src = img;
				
// 				var list = document.createElement("div");
// 				list.setAttribute("id", "List");
// 				document.body.appendChild(list);

// 				newDiv.appendChild(newName);
// 				list.appendChild(newDiv);
// 				list.appendChild(newImg);
// 			}
// 		});
// 		})

// }