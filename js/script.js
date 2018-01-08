var map; //Global map variable

//Locations array for markers
var locations = [{
		title: 'Great American Music Hall',
		lat: 37.7849548,
		lng: -122.418871
	},
	{
		title: 'The Fillmore',
		lat: 37.783926,
		lng: -122.433072
	},
	{
		title: 'Bottom of the Hill',
		lat: 37.7650672,
		lng: -122.3964702
	},
	{
		title: 'Slims',
		lat: 37.7715146,
		lng: -122.4132947
	},
	{
		title: 'The Independent',
		lat: 37.7755362,
		lng: -122.4376556
	},
	{
		title: 'Rickshaw Shop',
		lat: 37.7759878,
		lng: -122.4204632
	},
	{
		title: 'Bimbos 365 Club',
		lat: 37.8037214,
		lng: -122.4155764
	},
	{
		title: 'The Warfield',
		lat: 37.7826737,
		lng: -122.410428
	},
	{
		title: 'Amnesia Beer & Music Hall',
		lat: 37.75931,
		lng: -122.421116
	},
	{
		title: 'MEZZANINE',
		lat: 37.78248430000001,
		lng: -122.4080736
	},
	{
		title: 'Thee Parkside',
		lat: 37.765222,
		lng: -122.399911
	},
	{
		title: 'Neck Of The Woods',
		lat: 37.7831219,
		lng: -122.4637525
	},
	{
		title: 'The Hotel Utah Saloon',
		lat: 37.7793954,
		lng: -122.3980837
	},
	{
		title: 'The Masonic',
		lat: 37.791287,
		lng: -122.413186
	},
	{
		title: 'Biscuits & Blues',
		lat: 37.7872975,
		lng: -122.4101395
	},
	{
		title: 'SFJAZZ Center',
		lat: 37.7763257,
		lng: -122.4214361
	},
	{
		title: 'Hemlock Tavern',
		lat: 37.7873893,
		lng: -122.4202587
	},
	{
		title: 'Cafe Du Nord',
		lat: 37.766622,
		lng: -122.430458
	}
];

//Styles array for map
var styles = [{
		"featureType": "administrative.country",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#ffe605"
		}]
	},
	{
		"featureType": "administrative.country",
		"elementType": "labels.text.stroke",
		"stylers": [{
				"color": "#cbcbcb"
			},
			{
				"gamma": "0.53"
			},
			{
				"lightness": "-39"
			},
			{
				"weight": "1.4"
			}
		]
	},
	{
		"featureType": "administrative.province",
		"elementType": "all",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "administrative.province",
		"elementType": "geometry.stroke",
		"stylers": [{
				"visibility": "on"
			},
			{
				"color": "#ffe605"
			},
			{
				"weight": "2"
			}
		]
	},
	{
		"featureType": "administrative.province",
		"elementType": "labels.text",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "administrative.province",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "labels.text",
		"stylers": [{
			"visibility": "on"
		}]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#383838"
		}]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "labels.text.stroke",
		"stylers": [{
				"color": "#2c2c2c"
			},
			{
				"gamma": "1"
			},
			{
				"weight": "1.5"
			},
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [{
				"saturation": -100
			},
			{
				"lightness": 65
			},
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "all",
		"stylers": [{
				"saturation": -100
			},
			{
				"lightness": 51
			},
			{
				"hue": "#ff0000"
			},
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "poi",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [{
				"saturation": -100
			},
			{
				"visibility": "simplified"
			},
			{
				"color": "#ffd900"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [{
			"visibility": "simplified"
		}]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [{
			"visibility": "simplified"
		}]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road.arterial",
		"elementType": "all",
		"stylers": [{
				"saturation": -100
			},
			{
				"lightness": 30
			},
			{
				"visibility": "simplified"
			},
			{
				"color": "#ffe761"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "road.local",
		"elementType": "all",
		"stylers": [{
				"saturation": -100
			},
			{
				"lightness": 40
			},
			{
				"visibility": "simplified"
			},
			{
				"color": "#bfbfbf"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "all",
		"stylers": [{
				"saturation": -100
			},
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{
				"lightness": -25
			},
			{
				"saturation": -97
			},
			{
				"color": "#bdcfd8"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels",
		"stylers": [{
				"visibility": "on"
			},
			{
				"lightness": -25
			},
			{
				"saturation": -100
			},
			{
				"color": "#050505"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [{
				"lightness": "60"
			},
			{
				"color": "#de1010"
			},
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.stroke",
		"stylers": [{
			"visibility": "off"
		}]
	}
];


// view model function for knockoutjs
function viewModel() {

	var self = this;
	this.markers = [];

	// function to populate info windows using foursqure api calls
	this.populateIW = function (marker, infowindow) {
		if (infowindow.marker != marker) {
			infowindow.setContent('');

			var clientID = "FLB5ZCXOORRQLSL2VXOUDW4BWX5EBP1VKUIXTD4F2TXQNHU5";
			var clientSecret = "IGXQZMANJDCIBWZAOX1UC5UGRBJGHLRXT0F3VJQVQVOCM44T";

			var url = 'https://api.foursquare.com/v2/venues/search?v=20171216&ll=' +
				marker.lat + ',' + marker.lng + '&query=' + marker.title + '&intent=checkin' +
				'&client_id=' + clientID + '&client_secret=' + clientSecret;


			$.getJSON(url).done(function (marker) {
				var result = marker.response.venues[0];
				self.street = result.location.address;
				self.name = result.name;
				self.url = result.url;
				venue_id = result.id;
				self.content = '<div id = info-window>' + self.name + '<br>' + self.street +
					'<br>' + '<a href="' + self.url + '">' + self.url + '</a>' + '</div>';
				infowindow.setContent(self.content);
			}).fail(function () {
				alert(
					"We're sorry, there was an issue loading the page"
				);
			});

			infowindow.open(map, marker);
			infowindow.addListener('closeclick', function () {
				infowindow.marker = null;
			});
		}
	};

	//bounce function to animate markers on click
	this.bounce = function () {
		self.populateIW(this, self.infowindow);
		this.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout((function () {
			this.setAnimation(null);
		}).bind(this), 1000);
	};

	//function to initialize map using google maps api
	this.initMap = function () {

		var options = {
			center: new google.maps.LatLng(37.7815106, -122.4251308),
			zoom: 13,
			styles: styles
		};

		map = new google.maps.Map(document.getElementById('map'), options);
		// resize map based on its center 
		google.maps.event.addDomListener(window, 'resize', function () {
			var center = map.getCenter()
			google.maps.event.trigger(map, "resize")
			map.setCenter(center)
		});


		this.infowindow = new google.maps.InfoWindow();
		// loop to add to markers array and populate infowindows
		for (var i = 0; i < locations.length; i++) {
			this.lat = locations[i].lat;
			this.lng = locations[i].lng;
			this.title = locations[i].title;
			this.marker = new google.maps.Marker({
				map: map,
				position: {
					lat: this.lat,
					lng: this.lng
				},
				lat: this.lat,
				lng: this.lng,
				title: this.title,
				animation: google.maps.Animation.DROP,
				id: i
			});
			this.markers.push(this.marker);
			this.marker.addListener('click', self.bounce);
		}
	};
	this.initMap();

	errorAlert = function errorAlert() {
		alert(
			"There was an error loading the Google maps"
		);
	};

	//filter function for search bar, list, and markers
	this.search = ko.observable("");
	this.filter = ko.computed(function () {
		var list = [];
		for (var i = 0; i < this.markers.length; i++) {
			var marker = this.markers[i];
			if (marker.title.toLowerCase().includes(this.search()
					.toLowerCase())) {
				list.push(marker);
				this.markers[i].setVisible(true);
			} else {
				this.markers[i].setVisible(false);
			}
		}
		return list;
	}, this);
}

//open and close function for nav sidebar
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("map").style.marginLeft = "0";
}

function startApp() {
	ko.applyBindings(new viewModel());
}