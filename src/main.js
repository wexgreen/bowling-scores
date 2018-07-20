/*
Copyright [2018] [Matthew B White]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

/* global Image */
console.log('hellow world')
// Bring in the CSS for the formatting, and the animation library
require('bulma/css/bulma.css');
require('animate.css/animate.css');

// any additional styling should go into this file
require('./style.css');


function addEvent(el, type, handler) {
	    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
	}
	function removeEvent(el, type, handler) {
	    if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
	}

document.addEventListener('DOMContentLoaded', function(){
	    // do something
       var el = document.querySelector('#select3');
       var selectValued = document.querySelector('#select3').value;
       // attach anonymous function to click event
      addEvent(el, 'click', function(event){ 
        console.log(event.currentTarget.value); 
        document.querySelector('#ScoreTot').value="%"
      })
      console.log('hellow world')
	});


