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
The drone is physically paired with a companion computer, the NVIDIA Jetson Nano. The Nano is connected to 2 cameras, an Intel Realsene T265 and an ZED camera. The T265 gives our drone its current position and orientation, while the ZED relays video feed back to the Unity side. There must be 2 different cameras as the T265's video feed lacks color, and while we can perform SLAM from the ZED's data, it isn't reliable as the T265. Perhaps in the future a newer Realsense can be used which supports a high resolution video feed.

## On the game side
During the game, transform data (position, rotation) of the virtual drone is constantly being sent from Unity to the drone. We do this by sending MAVLINK messages. These MAVLINIK messages tell the drone where to fly and what the rotation should be. Note that the user on the Unity side must be connected to his/her respective drone controller that is paired with his/her respective drone. There is a 1:1 correspondence between the position of the virtual drone with the position of the actual corresponding drone in the physical world. In other words, the designer of the game selects some positive constant which the position of the virtual drone is multiplied by; then that modified position is the position that the physical quadcopter must go to.

Given the varying physical room and virtual environment sizes and that the positions that are sent to the drone are all represented in meters, the constant is useful. For example, if we have a large game environment, but we are flying in a small classroom, specifying a constant less than 1 will allow us to "fit" the environment into the classroom.

It is highly suggested you understand this communication system well as this is currently where majority of the work
is taking place.
