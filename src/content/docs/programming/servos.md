---
title: Servos
category: Programming
sidebar:
  order: 5
---
Servos are a bit like motors, except their position is fixed. This is useful for building an arm mechanism that grabs cubes, or anything else that has fixed states that it needs to be in.

Similarly to motors, the position of a servo is expressed as a percentage. This can be negative.

Servos are plugged into the **Servo** ports on the BrainBox. The numbers present on each port correspond to the index used in your code.

## Python

Servo control is provided by the `io` subsystem of the robot library. You will need to import the `IO` object and various constants from this module before using servos.

You can control servos using the `servos` property of the `IO` object. To set the servo 0 to the 50% position use:

```python
I.servos[0].mode = PWM_SERVO
I.servos[0] = 50
```

:::tip
For example, to control servo 3 instead, replace `servos[0]` with `servos[3]`. Again, remember that indexes start at 0.
:::

Here's a more complete example, controlling servos 0 and 1:

```python
from robocon.io import *
import time

I = IO()
I.servos[0].mode = PWM_SERVO
I.servos[1].mode = PWM_SERVO

# set servo 0 to the 50% position
I.servos[0] = 50

# wait for the servo to finish moving
time.sleep(1)

# set servo 1 to the -100% position
I.servos[1] = -100

time.sleep(1)

# set servos 0 & 1 to the default positions
I.servos[0] = 0
I.servos[1] = 0
```

:::tip
Add a delay with `time.sleep` to wait for the servos to finish moving into their new positions.
:::

## Blockly

Blocks for controlling servos can be found in the **Movement** section.

## Setting initial servo position

The initial position of servos can be set before your code starts running using project attributes. Values can be any integer between -100 and 100 inclusive.

|Attribute|Values||
|-|-|-|
|`servo0_pos`|x ∈ [-100, 100] ∩ ℤ|Initial position of servo 0|
|`servo1_pos`|x ∈ [-100, 100] ∩ ℤ|Initial position of servo 1|
|`servo2_pos`|x ∈ [-100, 100] ∩ ℤ|Initial position of servo 2|
|`servo3_pos`|x ∈ [-100, 100] ∩ ℤ|Initial position of servo 3|
