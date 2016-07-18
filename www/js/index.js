/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	deviceReadyDeferred : $.Deferred(),
	jqmReadyDeferred : $.Deferred(),
	// Application Constructor
	initialize : function() {
		this.bindEvents();
		$.when(this.deviceReadyDeferred, this.jqmReadyDeferred).then(
				this.frameworksInitialized);
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		$(document).on("mobileinit", function() {
			app.jqmReadyDeferred.resolve();
		});
	},
	// deviceready Event Handler
	onDeviceReady : function() {
		app.deviceReadyDeferred.resolve();
	},
	// jQM and PhoneGap initialized
	// place app initialization code here
	frameworksInitialized : function() {
		console.log('Frameworks initialized');
	}
};

app.initialize();

function masseyRd()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/290', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function bairdsRd()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/110', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function SEHighway()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/90', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function greenlaneRd()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/80', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function marketRd()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/225', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function greatnorthRd()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/140', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function maioroSt()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/194', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function hillsboroughRd()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/191', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function onehungaWharf()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/202', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function rimuRd()
{
	var ref = window.open('http://nzta.govt.nz/traffic/cameras/203', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function SH1SouthCams()
{
	var ref = window.open('http://m.aucklandmotorways.co.nz/southerncams.html', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function SH20SWCams()
{
	var ref = window.open('http://m.aucklandmotorways.co.nz/swcams.html', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}
	
function trafficMap()
{
	var ref = window.open('http://m.aucklandmotorways.co.nz/map.html', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}
		
function newmarketRd()
{
	var ref = window.open('https://at.govt.nz/driving-parking/live-traffic-congestion/#{"center":{"lat":-36.88085639961899,"lng":174.77685928344727},"zoom":13,"layers":{"selected":["realtimeCongestion"]}}', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}

function rainRadar()
{
	var ref = window.open('http://www.metservice.com/maps-radar/rain-radar/auckland');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
}
    