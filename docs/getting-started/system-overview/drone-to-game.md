---
sidebar_position: 4
title: Drone ⇌  Game
---
# Drone &#8652; Game communication {#drone-to-game}
:::note WIP
The names and usage of the files listed can change. If they have changed please update the following information to have
the correct information.
:::

:::caution
All this information is old. At the current moment we are in development to improve the existing system.
:::

The communication system consists of two main sub systems.
- The connection scripts on the drone and the video transmission setup
- The connection script from the game to the drone

## On the drone side
There are two main scripts that run on the drone. [`unity_test.py`](https://github.com/quadcopter-ar/QuadcopterAR-Jetson-Nano-Unity-Bridge/blob/main/unity_test.py)
is responsible in handling communication that it receives from unity, for example a player sending an input command,
and sending these commands to the drone. This script is also responsible to make sure that Unity gets an updated relative positional
data from the quadcopter.

Since there is no current way to figure out where exactly the drone is, we currently send information from the game
about positioning the drone. The drone then responds with orientation and *relative* position, from where it started.
We use this data to then move the player around in the game world.

![Drone Communicating with game](/img/getting-started/drone_communication.svg)

---
The other is [`client_opencv.py`](https://github.com/quadcopter-ar/QuadcopterAR-Jetson-Nano-Unity-Bridge/blob/main/client_opencv.py).
The role of `client_opencv` is to take any images within the ZED camera and send them over to Unity so that Unity can display
the image internally. Rather than the game asking, the drone is always sending up to date video data from its cameras
to the game.

![Drone sending video to game](/img/getting-started/drone_video_communication.svg)

## On the game side
The game uses [DroneConnection.cs](https://github.com/quadcopter-ar/Quadcopter-Prefabs/blob/master/Assets/Scripts/Drone%20Connection/DroneConnection.cs)
to communicate with the drone. This script is responsible to take any inputs being made by the game and to send those inputs
to the drone. The script also keeps track of the Drones' position and orientation. This is then also used to change the
players orientation and position.


It is highly suggested you understand this communication system well as this is currently where majority of the work
is taking place.
