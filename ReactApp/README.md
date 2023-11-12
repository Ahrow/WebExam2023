## FORMULA 1 EXAM

## BUG FIX:

FUNCTIONALITY:
[] CORS ERROR on 3d HttpGET -> Check [Action] or other options
[] Search function -> ID works / FIX NAME !!! - DriverService.tsx:17

- GET http://localhost:5292/api/Drivers/name/Verstappen 404 (Not Found)
- This is path is wrong, should be drivers/verstappen -> Need check for partial string aswell!!! "verst" should return verstappen etc.
  [] Fix Type ERROR searchDriver [driver]
  []
  []

UI:
[] FIX HEADER -> whitespace on right when window scales down
[] FIX mobile/desktop/tablet size
[]

## TODO:

Main functionality:
[x] Get all of something
[] Get something by ID -> Implement search
[] Get something by name -> Implement search
[x] Delete something
[x] Create something (Including image upload)
[] Update something

Extra functionality:
Quiz Game:

- Basic quiz game

F1 Race Car game
[] Setup backend/database for Car

- Stats: Speed/Acceleration/Handling
- CarName, CarImage

[] Driver & Car selector

- Choose card/driver from API (render card ?)
- Retrieve stats from API

[] Race simulation

- Simulate race based on:
  - CarStats
  - RandomNess -> Variation modifier
  - Simulation Loop
  - Use input ?
