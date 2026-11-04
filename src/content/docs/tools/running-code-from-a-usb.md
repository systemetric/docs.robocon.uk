---
title: USB Tricks
category: Tools
sidebar:
  order: 4
---

![USB Stick](/images/usbstick.png)

:::tip
The BrainBox only checks for the presence of USB sticks at boot - only plug and unplug USB sticks when the BrainBox is off (front panel blue light off).
:::

:::caution
During the competition **RoboCon** requires unrestricted access to at least one USB port. If you are running a **red BrainBox**, only one USB port is available, and this must be unused during the competition.
If you have a **green BrainBox** and want to use a USB stick during the competition it must leave enough space around at least one port to insert our low profile arena stick.
:::

## Running your code from a USB:

When started, using the start button the robot will default to running the last piece of code written in the editor. In some cases at the competition it can be useful to be able to run code from a USB stick.

1. Place a file called `main.py` or `code.zip` (which must include a file called `main.py`) in the root directory of the USB stick on another computer.
2. Turn on the robot using the red power button.
3. The file will be automatically copied from the USB stick
4. Press the black start button

## Getting Logs

When running your robot code you can see the logs from the robot in the editor. Sometimes it's useful to be able to view the logs later to analyse what happened.

:::caution
* Be careful when reusing USB sticks to avoid accidentally running code from the USB Stick!
:::

1. Insert a USB stick in the robot before turning it on.
2. The log file will be automatically written to the USB stick as `logs.txt`
3. Remember to fully power down the robot before removing the USB stick

:::tip
* Logs are collected whatever way the code is run, but only the most recent logs are preserved
* The log files are also collected during system shutdown, which can lead to worrying messages such as a traceback ending in `Remote I/O error`. These can safely be ignored unless you also see them on the web interface.
:::

## Collecting images and raw analysis

Every time the robot takes a picture it is updated on the web interface, during development it is occasionally useful to be able to also keep a log of pictures that have been analysed to check camera focus, motion blur etc.

1. Add a file with the name "collect_images.txt" to the USB stick to collect the images
2. Add a file with the name "log_markers.txt" to the USB stick to collect analysis of images
3. Insert the stick before turning the robot on
4. Remember to fully shut down the robot before removing the USB stick
   WARNING: Collecting all images may slow down the processing time from your robot - Use with care!

