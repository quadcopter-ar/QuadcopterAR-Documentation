---
sidebar_position: 3
---
# Drone System {#drone-system}
The quadcopter unit is built up of the following
- The Quadcopter, a 3DR Solo Quadcopter
- A Nvidia Jetson Nano
- A Zed 2 camera + A T265 Intel Real Sense Camera
- A battery pack


The current project uses two 3DR Solo Drones. The drones communicate to a remote control unit through their own communication protocol.
The wireless controllers give access to a wifi network, usually called `xxx_Sololink`.
Any and all communication comes into the quadcopter through this wireless signal.


The Jetson nano is a single board computer, much like a raspberry pi. It is, in a way, the brains of the Drone section
in the [Drone Connection subsystem](#drone-to-game).

We have two camera systems on board. The Zed camera is responsible to send video data to the game to be displayed.
The Real sense camera is setup to give us accurate mapping system to understand how the world looks around us.

We are also in the process of developing a new battery to deal with the requirements of the Zed 2 and T265 Intel Real Sense Cameras on the
Nvidia Jetson Nano. This new battery will be a 5v and 4a power supply outputing from a DC power jack.

![Drone System](/img/getting-started/drone_system.svg)
