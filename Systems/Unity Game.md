# Unity Games

All the games are built on the Unity Game engine. You are going to have to have the Unity Game engine installed. The 2020 LTS, as of this writing it is set to be [2020.3.29](unityhub://2020.3.29f1/2ff179115da0), version should work for our use case.

To use the above link, make sure the Unity Hub application is installed. If you cannot develop on your own machine please let someone know so we can give you access to the lab computers to work remotely.

---
The main idea is to first understand the idea of what a [Prefab](https://docs.unity3d.com/Manual/Prefabs.html) is in Unity.  In essence, a prefab is a modular component that can be used across projects to create a cohesive expereince.
Ideally we would want the prefabs to be a self hosted Unity Package that we could install onto our games. However, the current functionality relies on having pre-written scripts and models that can be extended.

The current system focuses on packaging the important sub-systems used across games to easily extensible Prefabs. Our prefabs can be found at the [Quadcopter-Prefab](https://github.com/quadcopter-ar/Quadcopter-Prefabs) repository.

---
