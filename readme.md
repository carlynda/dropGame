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
* [ ] Create a canvas with target at the bottom of the screen, center of width
* [ ] Create objects to drop 
* [ ] Score board
* [ ] Item input, drop button 

Logic: 
* [ ] Dropping mechanism
    * [ ] Get random starting point: random x, y = 0
    * [ ] Give each object random velocity 
    * [ ] If object hits edge: bounce back
* [ ] Scoring mechanism:
    * [ ] Point decreases as user increase the amount of item drops 
    * [ ] Get points and store points based on landing location 
    * [ ] Update object amount based on points 
