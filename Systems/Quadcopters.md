# Quadcopter Unit

The quadcopter unit includes the quadcopter itself, a Nvidia Jetson Nano, a Zed camera, an Intel Real Sense Camera and, a battery pack. All of these together form the quadcopter unit.

The Jetson nano is a single board computer, much like a raspberry pi. It is, in a way, the brains of the [[Drone Connection subsystem]]. 

We have two camera systems on board. The zed camera is responsible to send video data to the game to be displayed. The Real sense camera is setup to give us accurate mapping system to understand how the world looks around us.

The current project uses two 3DR Solo Drones. The drones communicate to a remote control unit through their own communication protocol. The wireless controllers give access to a wifi network, usually called `xxx_Sololink`.  Any and all communication comes into the quadcopter through this wireless signal.