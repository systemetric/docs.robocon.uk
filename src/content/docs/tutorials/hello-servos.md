---
title: Hello Servos
category: Tutorials
position: 6
---
Servos are a type of motor with internal feedback they can move to a set position, but they are limited in range. This is useful for building mechanisms to manipulate objects, or anything else that needs to move between multiple fixed positions.

You can control servos in a similar way to motors:

```python
import robot
import time

R = robot.Robot()
R.servos[1].mode = robot.PWM_SERVO

# Input range -100 to 100
while True:
    R.servos[1] = -50
    time.sleep(2)

    R.servos[1] = 50
    time.sleep(2)
```
