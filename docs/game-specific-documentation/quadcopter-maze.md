---
sidebar_position: 2
title: Quadcopter Maze
---

# [Quadcopter Maze Game](https://github.com/quadcopter-ar/Quadcopter-Maze)

The Maze Game is currently setup as a very basic game with the Wilson Maze generation algorithm. This lets us generate
new mazes every time the game starts.

The game uses [Mirror](../getting-started/system-overview/game-system#networking-and-multiplayer) to build the networking system for the game.

## Maze Generation
The game is built on the Wilson’s Algorithm to generate Mazes. Each maze is a bunch of Wall objects.
There’s a Cell class that keeps track of which walls of a cell are there and which aren’t

:::info
There are no double walls (i.e. two adjacent cells share a single wall object; they don’t each have their own)
:::

All the variables in the code should be straightforward, except for wallSize, wallSize should be set to the length
of the actual Wall object (though it’s better to have the Wall object be slightly bigger so the corners of the
maze don’t look awkward). In essence, it lets you adjust the width of the corridors in the maze.

The size variables are automatically validated to be odd and the hole rows/cols are validated to be less than maze rows/cols (this is in the Validate method)

### 2D vs 3D Maze
To change the maze generation to 2D or 3D, go into the “Maze” Scene, go into the “Maze” object in that scene, and enable the appropriate script (HoleMaze or HoleMaze3D)
You should enable either, not both


## How to run the game

1. Follow the instructions on how to [connect the drone to the game](../guides/connecting-drone-to-game)
2. Navigate to the “OfflineScene” scene
3. Click start
4. Click on “Host” button in the hud (top left) to host a game (and “Client”, on localhost, to join the game with another user)

You should now see the generated maze.

## Libraries used in this game

This game uses two libraries besides the XR one:

### [Mirror](../getting-started/system-overview/game-system#networking-and-multiplayer): used for networking
Here are specifics regarding the Maze game
- The main object is the network manager
- Located in the offline scene but it has DontDestroyOnLoad so it persists between scenes
- It has a custom MyNetworkManager script on it, which simply inherits from the Mirror-provided NetworkManager class in a script.
- It also has the NetworkHUD, which provides the buttons to Host a game or join as a client
- You can make your own by overriding methods in the MyNetworkManager script.
- Every object which should be networked (in this case just the players, but there might be other objects in the future) must have a NetworkIdentity script on them. It’s what makes them “networked”
- The player objects also have the NetworkTransform component which automatically sync the position, scale, and rotation of the object to all other players
- The Maze scene has spawn objects which dictate where the players will spawn

### [ParrelSync](../guides/using-parrelsync-for-games): used to make debugging networking easier
