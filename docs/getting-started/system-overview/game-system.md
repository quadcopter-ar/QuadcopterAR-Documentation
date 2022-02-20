---
sidebar_position: 2
---
# Game System {#game-system}
All the games are built on the Unity Game engine. You are going to have to have the Unity Game engine installed.
The 2020 LTS, as of this writing it is set to be [2020.3.29](unityhub://2020.3.29f1/2ff179115da0), version should work
for our use case.

To use the above link, make sure the Unity Hub application is installed. If you cannot develop on your own machine
please let someone know so we can give you access to the lab computers to work remotely.

### Prefabs
The main idea is to first understand the idea of what a [Prefab](https://docs.unity3d.com/Manual/Prefabs.html) is in
Unity.  In essence, a prefab is a modular component that can be used across projects to create a cohesive expereince.
Ideally we would want the prefabs to be a self hosted Unity Package that we could install onto our games. However,
the current functionality relies on having pre-written scripts and models that can be extended.

The current system focuses on packaging the important sub-systems used across games to easily extensible Prefabs.
Our prefabs can be found at the [Quadcopter-Prefab](https://github.com/quadcopter-ar/Quadcopter-Prefabs) repository.

### Unity XR
The way we employ the use of Virtual Reality in our games is to use the
[Unity XR System](https://docs.unity3d.com/Manual/XR.html).

:::note
We follow the Unity XR implementation due to the fact that Oculus' VR package in Unity does not support the same
feature parity as XR supports.
:::

To add, we use a very specific
version of the Unity VR system to enable access without the need to have the hedset plugged in.
This is taken care for you in the Template Repository.

Some useful places to learn more about Unity XR apart from the documentation are listen below:
- [VR with Andrew](https://www.youtube.com/watch?v=ndwJHpxd9Mo&list=PLmc6GPFDyfw90Xo_T69Va6kw07qJ8nLz7) has some exceptional tutorials on how to use the Unity XR interaction toolkit
- [Dilmer Valecillos](https://www.youtube.com/watch?v=Hnoad3DM_pA) has a wonderful video on the setup for Unity XR (This has been done for you if you use the template)

### Networking and Multiplayer
For networking multiple games together we use the [Mirror](https://github.com/vis2k/Mirror) Unity package. The Mirror package is a high level networking package that supports making multiplaying games easier.

Our games use a simple, client server protocol. However, with Mirror, the first player who loads into the game is considered as the host of the game. And therefore Player One is considered the host.

:::tip PUN vs Mirror
Previously we had worked on using the PUN networking engine. The reason we switched was due to the need to have an
active internet connection when working with the PUN networking engine. I suggest you continue using the Mirror engine
:::

A great resource to start understanding Mirror is the [Mirror Docs](https://mirror-networking.gitbook.io/docs/) and [Shrine](https://www.youtube.com/watch?v=8VVgIjWBXks) on YouTube. This documentation will not go into the description of how Mirror works.
We really reccommend watching and reading these resources before getting started.
