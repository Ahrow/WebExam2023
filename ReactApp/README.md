## FORMULA 1 EXAM

## BUG FIX:

FUNCTIONALITY:
[x] fix minor typescript complaints
[x] FINISH WIN / LOSE condition game
[x] Implement TOAST messages everywhere

- [] wrong ID / Name does not trigger toastError -> Consider Toast in DriverService
- [] add driver /w-out img trigger toastError even though it works -> Consider same as above

[x] CORS ERROR on 3d HttpGET -> Check [Action] or other options
[x] Search function -> ID works / FIX NAME !!! - DriverService.tsx:17
[x] Still needs Capital letter

[x] Fix Type ERROR searchDriver [driver]
[x] FIX TYPE ERROR Dereference of a possibly null reference.CS8602
string? Driver.Name { get; set; }
'Name' may be null here.
[x]

UI:
[x] FIX HEADER -> whitespace on right when window scales down
[x] FIX mobile/desktop/tablet size
[x] Better Contrast on buttons

## TODO:

Main functionality:
[x] Get all of something
[x] Get something by ID -> Implement search
[x] Get something by name -> Implement search
[x] Delete something
[x] Create something (Including image upload)
[x] Update something
[x] RENDER LIST dynamically based on CRUD

Extra functionality:
RACETRACK -> Number of turns 50, Racetrack length,

F1 Race Car game
[x] Setup backend/database for Car

- Stats: Speed/Acceleration/Handling
- CarName, CarImage

[x] Driver & Car selector

- Choose card/driver from API (render card ?)
- Retrieve stats from API

[x] Race simulation

- Simulate race based on:
  - CarStats
  - RandomNess -> Variation modifier
  - Simulation Loop
  - Use input ?
