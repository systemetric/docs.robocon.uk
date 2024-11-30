---
title: Servos
category: Programming
position: 5
---
Servos are a bit like motors, except their position is fixed. This is useful for building an arm mechanism that grabs cubes, or anything else that has fixed states that it needs to be in.

Similarly to motors, the position of a servo is expressed as a percentage. This can be negative.

Servos are plugged into the **Servo** ports on the BrainBox. **Servo 0** represents **servo 0**, **Servo 1** is **servo 1**, etc. They are numbered from 0 to 3.

## Python

You can control servos using the `servos` property of the `Robot` object. To set the first servo to the 50% position use:

```python
R.servos[0] = 50
```

To control the fourth servo instead, replace `servos[0]` with `servos[3]`.

:::tip
Don't forget to setup the servo pin with `R.servos[0].mode = robot.PWM_SERVO` before you control any servos! Otherwise the servos won't be setup, so you can't control them yet. Write this line for every servo you wish to control (replacing the 0 with the servo port you're using).
:::

Here's a more complete example:

```python
import robot

R = robot.Robot()
R.servos[0].mode = robot.PWM_SERVO
R.servos[3].mode = robot.PWM_SERVO

# set servo 0 to the 50% position
R.servos[0] = 50

# set servo 3 to the -100% position
R.servos[3] = -100

# set servos 0 & 3 to the default positions
R.servos[0] = 0
R.servos[3] = 0
```

## Blockly

Blocks for controlling servos can be found in the **Movement** section.

# Default positions

Servos default to a starting position 1/2 way through their travel, for some uses teams may need to start with a different resting position to ensure their robot fits within the set sizes, you can set the position that the servo holds while waiting for the start button to be pressed by initilizing the robot object with `servo_defaults=((servo_number,position)...,(servo_number,position))`

E.g. to set Servo1 to `100%` and Servo3 to `50%` use
```python
import robot

servo_values = {
    1: 100,
    2: 50,
    3: -100
}

R = robot.Robot(servo_defaults=servo_values)
```

