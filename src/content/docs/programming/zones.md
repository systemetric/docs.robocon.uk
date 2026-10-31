---
title: Zones
category: Programming
sidebar:
  order: 8
---
Your code will probably need to look for different markers depending on the zone your robot starts in. Whilst you could have different files for each zone, the `robocon` module also tells you this.

## Python

`robocon.zone` will indicate the starting zone of your robot, this is the same as your team colour in the arena. Zones also have names, which are not used in code, but may be used in arena commentary and game backstory.

|**Team**|**Code**|**Name**|
|-|-|-|
|Red|`robocon.TEAM.RED`|Flemish Gas|
|Yellow|`robocon.TEAM.YELLOW`|Mollusc|
|Green|`robocon.TEAM.GREEN`|Kraken Fission|
|Blue|`robocon.TEAM.BLUE`|Cheval|

Here's an example:

```python
import robocon

if robocon.zone == robocon.TEAM.RED:
    print("Do something!")
else:
    print("Do something else!")
```

## Blockly

You can find the zone block in the **Movement** section.

## Mode

`robocon.mode` will indicate the [mode](/tools/editor#using-the-settings-panel) your code is being run in. This is either `robocon.MODE.COMP` or `robocon.MODE.DEV`.

```python
import robocon

if robocon.mode == robocon.MODE.DEV:
    print("Running in development mode")
```
