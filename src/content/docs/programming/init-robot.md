---
title: Initialising the Robot
category: Programming
sidebar:
  order: 2
---
When using Python to program your robot, you must remember to initialise the robot. If you're using Blockly, this is done automatically.

All of the code required to control the Robot is located in the `robocon` Python module.
The `robocon` module is composed of various submodules that control various aspects of the robot.

|Name|Function|Notable Classes|
|-|-|-|
|`brain`|Hardware control|`IO`|
|`vision`|Camera and marker detection|`Camera`|
|`game`|Game specific information||


To import the various modules, and initialise robot subsystems, use the following code:

```py
from robocon.vision import Camera
from robocon.io import IO

I = IO()        # initialise i/o controller
C = Camera()    # initialise camera controller
```

The `IO` and `Camera` classes are completely separate, you don't need to initialise them if you don't plan on using the features of the robot they provide.

Unlike in previous versions of the robot library, the startup wait occurs before your
code is executed. When in this state, the blue "user" LED will flash rapidly, either
the hardware start button, or Sheep run button can be used to start your code.
