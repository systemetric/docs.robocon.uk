---
title: GPIO
category: Programming
sidebar:
  order: 5
---
The GPIO (General Purpose Input Output) allows you to turn on LEDs, react to button presses, or do just about anything.

Our BrainBox has 4 GPIO pins that you can control. Before you do anything with a pin, you must first set its mode. GPIO control is provided by the `IO` class in the `robocon.brain` submodule.

There are 5 modes:
|Mode|Python|Description|
|-|-|-|
|Digital Output|`robocon.brain.OUTPUT`|Allows you to write a high or low signal|
|Digital Input|`robocon.brain.INPUT`|Allows you to read a high or low signal|
|Analog Input|`robocon.brain.INPUT_ANALOG`|Allows you to read a voltage, like a voltmeter|
|Pullup Input|`robocon.brain.INPUT_PULLUP`|Like input, but uses a [weak pullup resistor](#pull-ups)|
|PWM Output|`robocon.brain.PWM_SERVO`|Outputs a servo signal, set the position in the same way as [a servo](/programming/servos). Generation 3 BrainBoxes only|

:::tip
The GPIO are numbered 0-3. On generation 2 BrainBoxes they are numbered 1-4 instead, so add one to the pin numbers in the examples below.
:::

:::tip
The `IO` class and the mode constants are provided by the `robocon.brain` submodule. The examples below assume you have imported them and created your `IO` object first:

```python
from robocon.brain import IO, OUTPUT, INPUT, INPUT_ANALOG, INPUT_PULLUP, PWM_SERVO

I = IO()
```

If you choose not to import the constants by name, use `import robocon.brain` and add the prefix `robocon.brain.` to each one. A plain `import robocon` is not enough, as it does not load the submodule.
:::

## Python

To write a digital signal on pin 0:

```python
I.gpio[0].mode = OUTPUT
I.gpio[0].digital = True
```

To read a digital signal on pin 1:

```python
I.gpio[1].mode = INPUT
print(I.gpio[1].digital)
```

To read an analog signal on pin 2:

```python
I.gpio[2].mode = INPUT_ANALOG
print(I.gpio[2].analog)
```

To read a pullup signal on pin 3
```python
I.gpio[3].mode = INPUT_PULLUP
print(I.gpio[3].digital) # Note that this output will be inverted - True when the connnection is open, and False when closed.
```

:::tip
All modes can be used on all pins, except that `PWM_SERVO` needs a generation 3 BrainBox. Note that you only need to set this mode once in your code, not every time you read an input or send an output.
:::

Here's a more complete example:

```python
from robocon.brain import *
import time

I = IO()

I.gpio[0].mode = INPUT
I.gpio[1].mode = INPUT_ANALOG
I.gpio[2].mode = OUTPUT
I.gpio[3].mode = INPUT_PULLUP

outputState = False

while True:
    # Read the values of 0 and 1
    print(I.gpio[0].digital)
    print(I.gpio[1].analog)

    # Switch output state and send it to 2
    outputState = not outputState
    I.gpio[2].digital = outputState

    # Read the value of 3
    print(I.gpio[3].digital)

    # Pause for 2 seconds
    time.sleep(2)
```

## Blockly

The GPIO blocks can be found in the **GPIO** section, and function similarly to the python.

## Pull-ups

The BrainBox possesses the ability to enable a built-in pull-up resistor on any input pin. This takes a small amount of explanation.

Normally, input pins are not connected to anything - known as “floating”. In this state, they might read high or low, or different values depending on their environment (due to anything from cosmic rays to the wiring in the building). This is obviously not good for consistent control.

Many pieces of off-the-shelf electronics that have some form of standard I/O output will connect this pin to 5V (high) and 0V (low) when required, so this is not a problem. However, for simple electronics, a microswitch for example, you would normally be required to connect a resistor between the input pin and 5V (a pull-up resistor), or between the input pin and 0V (a pull-down resistor) to keep the input in a known state until the switch overrides it by connecting directly to the opposite state.

However, the built-in pull-up resistor alleviates this need. It essentially wires in a resistor connected to 5V, meaning that when this option is enabled, an input pin will “default” to being high. This means you can simply connect a switch between the input pin and a ground pin without any need of resistors - when the switch is open, the pin will read high; when closed, it will read low.

![An example weak pull up](/images/capture.png)
