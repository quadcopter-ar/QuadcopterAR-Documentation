---
sidebar_position: 1
title: Quadcopter Pong
---

# [Quadcopter Pong](https://github.com/quadcopter-ar/Quadcopter-Pong)

Currently, Quadcopter Pong is our flagship game. It invoves playing the age old game of [Pong](https://en.wikipedia.org/wiki/Pong)
We modified this game to allow for an added dimension of flight.

The rules of the game are as follows;

The 3D Pong game is played by two players where each player hits the ball with their paddle and moves it to the
opponent’s ground, and the player loses a point once they miss a ball. The game is enclosed in a box-like structure.
All the four sidewalls cannot be seen because they are hidden to get a better view of the game.

:::tip
Before playing the game, please look at the [Initiation Protocol](../guides/connecting-drone-to-game) under the guides section
to connect the drone and the game together.
:::

## Game modes
The game has multiple modes.
  - The keyboard debug mode which allows users to test the game without the Oculus Controllers
  - The Quest mode that allows uses of the controllers.

## Caveats
This game was built on an older method of multiplayer. It used the Photon Unity Networking (PUN) engine. Reasons we
moved away can be found in the [Networking and multiplayer](../getting-started/system-overview/game-system#networking-and-multiplayer)
portion of the documentation
