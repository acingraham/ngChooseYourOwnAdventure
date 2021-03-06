# ngChooseYourOwnAdventure
A choose your own adventure game used to teach AngularJS

# Levels
## Level 1 - Set up
1. Adding Angular to project
2. Telling Angular which parts of the page it should manage
3. Display some basic binding
4. Explain how $scope determines execution context

## Level 2 - Intro to what we're going to build
1. Demo project
2. Show story flowchart so it's easy to customize
3. Encourage customization

## Level 2 - First level

## Level 3 - Routing
1. Many ways to add routing to an AngularJS project
2. We're going to stick with the standard Angular routing approach
3. Including angular-route.js
4. Add as dependency to your app
5. Adding routes to project
6. Variable paths in route (e.g. /user/:id)
7. Default route
8. Switching from using template to templateUrl and controller

## Level 4 - Creating some actual levels and linking them together

## Level 4 - Breaking up the project into separate files
1. Installing live-server globally.  Maybe include python simple server as well.

## Level X - Building a backpack component

# Bonuses
1. Making it so the adventurer's name is always displayed up top
2. Add a reset button
3. Style the page
4. Add levels

# Notes
- Make sure to cover nested controllers and scopes
- Could have selecting a crush be a directive
- May want to cover some of the angular convenience functions like angular.extend
- Could change crush picker to companion picker
- Could have the companion picker be a series of questions that results in you getting a specific companion
- Must cover ng-bind and {{}}
- ngRepeat
- ngFocus or ngBlur for input
- ngDisable for button
- ngClass
- ngShow
- Consider creating cheat sheet that covers all the stuff we've covered
- constants and values
- Turn input into custom directive
- May want to discuss track by used with ngRepeat

- Add dragon battle
- Add success ending
- Add death ending
- Incorporate custom directive (maybe tic-tac-toe)
- Make remote dependencies to local (images, bootstrap, jQuery)
- Improve header
- Fix sizing of image
- Remove input elements more cleanly for pages with inputs that disappear
- Improve messaging for success and failure on Troll level.  Must get rid of alerts
- Use only a single ng-repeat for crushes
