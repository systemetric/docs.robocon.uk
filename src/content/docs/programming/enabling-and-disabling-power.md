---
title: Toggling 12v and 5v power
category: Programming
sidebar:
    order: 10
---

Output power at both 12v and 5v can be toggled on and off using your code. This can be done in a couple different ways. 

## Toggling 12v power
The BrainBox provides 12v power to the Aux 12v port on the side of the BrainBox next to the motors. In your code you can toggle whether this power is being supplied using the `I.enable_12v` property as shown below:

```python
from robocon.brain import IO
I = IO()

# ...Your code

I.enable_12v = False

# ...Rest of your code
```
This will disable the Aux 12v port until you re-enable it using `I.enable_12v = True`.
You can also check whether the 12v is currently enabled or disabled.

```python
from robocon.brain import IO
I = IO()

I.enable_12v = False
print(I.enable_12v) # Outputs "False"
```

## Toggling 5v power
The BrainBox supplied 5v power to multiple outputs. These are the Servos (all 0-3), as well as the 5v GPIO pin. You can disable these similarly to the 12v power by using the following code:

```python
from robocon.brain import IO
I = IO()

# ...Your code

I.enable_5v = False

# ...Rest of your code
```
This will disable the Servo ports as well as the 5v GPIO pin until you re-enable them using `I.enable_5v = True`.
You can also check whether the 5v is currently enabled or disabled.
```python
from robocon.brain import IO
I = IO()

I.enable_5v = False
print(I.enable_5v) # Outputs "False"
```

## Enabling or disabling power by default.

The BrainBox can automatically enable/disable the 5v and 12v power before your code starts running using the project attributes `enable_5v` and `enable_12v` respectively, setting them to either `true` or `false` as desired.
