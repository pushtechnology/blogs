/*
 * Copyright 2015 Push Technology
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
 
'use strict';
 angular.module('todoApp').filter('percentFilter', function(){
	return function(percentage, done){
		if(done){
			return 100;
		} else{
			if(percentage <= 0){
				percentage = 0;
			}
			
			if(percentage >= 100){
				percentage = 100;
			}
			
			return percentage;
		}
	};
});