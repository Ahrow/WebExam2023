## FORMULA 1 EXAM

## BUG FIX:

FUNCTIONALITY:
[x] CORS ERROR on 3d HttpGET -> Check [Action] or other options
[x] Search function -> ID works / FIX NAME !!! - DriverService.tsx:17
[] Still needs Capital letter

- GET http://localhost:5292/api/Drivers/name/Verstappen 404 (Not Found)
- This is path is wrong -> Need check for partial string aswell!!! "verst" should return verstappen etc.

[x] Fix Type ERROR searchDriver [driver]
[] FIX TYPE ERROR Dereference of a possibly null reference.CS8602
string? Driver.Name { get; set; }
'Name' may be null here.
[]

UI:
[] FIX HEADER -> whitespace on right when window scales down
[] FIX mobile/desktop/tablet size
[]

## TODO:

Main functionality:
[x] Get all of something
[x] Get something by ID -> Implement search
[x] Get something by name -> Implement search
[x] Delete something
[x] Create something (Including image upload)
[] Update something

[] RENDER LIST dynamically based on CRUD

Extra functionality:
RACETRACK -> Number of turns 50, Racetrack length,

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
