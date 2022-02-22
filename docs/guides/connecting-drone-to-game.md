---
sidebar_position: 1
---
# Inititiation Protocol

## Prepare the Drone and Wifi Connection
1. Press and hold power button on the controller until it shows opensolo loading screen
2. Press and hold power button on the battery installed on the drone until the battery light is on
3. You will hear sounds from the drone, wait for an up tone and then a down tone
4. Turn on Jetson Nano by connecting the power cable to power bank
5. On PC, connect to the wifi SoloLink_xxxx using password “sololink”
6. You can try to ping the Jetson Nano to see if it is connected to the SoloLink WiFi automatically. If not, you should connect Jetson Nano to a monitor, a keyboard and a mouse to use the GUI.
Use this command `$ ping -t 10.1.1.148`
:::info
The ip address here would be the ip address of the Jetson Nano. To find it, you can either look at the WiFi router config page OR
connect a monitor to the Nano and run `$ ifconfig`
:::

7. Use this command to enable GUI `$ sudo systemctl start gdm3.service`
:::note
Starting the GUI is usually not required
:::

8. Connection should be ready

## Running scripts
1. SSH into the Jetson nano with `$ ssh quadcopter@10.1.1.148` or using the IP address you previously found and go to the home directory with `$ cd ~`.

2. Run `python3 unity_test.py`

3. Open Unity project on PC
:::caution
Currently only the [Quadcopter-Pong](game-specific/quadcopter-pong) game has the ability to use the [`DroneConnection.cs`](system-overview/drone-to-game#on-the-game-side) script.
:::

4. Play the game in editor
:::tip
Make sure the Oculus app is running on the machine. This is required for Unity to communicate with the game
:::

5. Check if the camera is moving with the motion of drone

6. Run `$ python3 client_opencv.py` to enable video stream

7. Check if you get video in the game
:::info
If steps 5 or 7 do not work, check the WiFi connection and IP of both PC and Jetson Nano. Rerun the scripts and games to initialize the TCP connection again.
:::
