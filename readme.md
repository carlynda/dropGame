REQUIREMENT: 
* User is given 100 free drop objects
* User choose how many objects to drop
* User click "Drop" to have the set amount of objects dropped
* Points is collected as objects land on target
* Closer to bulleyes the higher point: 1-10 scale on target, 0 if outside
* Total points gives user same amount of new objects 
----
Advanced features (future): 
* User can choose style for drops 
* (if deployed)User can get more objects to drop by--- (in real world - buying, watching ads ;) ) 
* (nerd mode 😆) User can get more points (objects) to drop by solving some problems lol 

TODO LIST:  

Design: 
* [x] Create a canvas with target at the bottom of the screen, center of width
* [x] Create objects to drop 
* [x] Score board
* [x] Item input, drop button 
* [ ] Fix drop button's look

Logic: 
* [ ] Dropping mechanism
    * [x] Get random starting point: random x, y = 0
    * [x] Give each object random velocity 
    * [x] If object hits edge: bounce back
* [ ] Scoring mechanism:
    * [ ] Point decreases as user increase the amount of item drops 
    * [ ] Get points and store points based on landing location 
    * [x] Update item amount based on points 
=======
* [x] Create a canvas with target at the bottom of the screen, center of width
* [x] Create objects to drop 
* [x] Score board
* [x] Item input, drop button 
* [ ] Fix drop button's look

Logic: 
* [ ] Dropping mechanism
    * [x] Get random starting point: random x, y = 0
    * [x] Give each object random velocity 
    * [x] If object hits edge: bounce back
* [ ] Scoring mechanism:
    * [ ] Point decreases as user increase the amount of item drops 
    * [ ] Get points and store points based on landing location 
    * [x] Update item amount based on points 
>>>>>>> 9f3d399f9ad035599b07f5d2d6c926a3a58484ec
