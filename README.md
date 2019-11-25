**Oscilloscope Part 1**
</br > imgur.com/a/eZuhNUJ This is a video of part 1 of the Oscilloscope assignment 8 project. It displays the final set up and results of connecting probes to CH1. </br >
**PWM**
imgur.com/a/5MZe7pv
</br > In this video, PWM pulses are being emitted and captured on the oscilloscope. I was able to emit the PWM waves through creating a line of code on the microbit. 
##**Loop**##
imgur.com/a/LbV16Hv
In this task, I used code to create a loop that varied the duty cycle between 5% and 95 % (In increments of 5%). Above is the link for the video of the oscilloscope I captured. 
**Writeup**
**1. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?**

1A. I2C uses addresses and a shared bus, which means connecting other devices to the wires is much easier and faster. SPI lacks in the way that it is limited to the amount of master and slave devices and the number of pins it needs to function, whereas I2C can use multiple slaves and masters. UART is a basic communication system, it is weak in the sense that it is only suitable for communication between two devices, which means that additional communication devices may overwhelm it. 
**2. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?**
2A. I2C uses two pins, SCL and SDA, one is a clock and one is a data signal. 
**3. What distinguishes the master and the slaves?**
3A. A master is a device that controls multiple other deivces, whereas a slave is a device that is controlled by the master device. 
4. **How are the two types of protocol frames different?**
4A.The difference between the two protocol systems is relatively complex, The I2C communication has much more demanding protocol to follow than the UART and SPI. I2C protocol revolves around a system of the SCL and SDA lines switching between each other going high and low. 
**5. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?**
5A.The most appropriate trigger for capturing an I2C frame on the oscilloscope is using "single" to capture a single frame on the readings. It is very easy to visualize the data when you can decipher between individual frames. </br >


**First Steps I2C**
</br >
imgur.com/a/Az18LqW
**What does the I2C write function do when there is nothing connected?**
A. When the I2C is not write function is running but there is nothing connected, nothing appears on the screen of the oscilloscope.
**Is there a difference in what you capture if you write a number to one of the internal device addresses?**
A. Yes, there is; and it the difference is very apparent. It can be noticed in the next step of the project where I cycle between three different addresses. 

**Last Three Videos**
1. imgur.com/a/sUZLAcH
  A. In this video, I have the address 	0x1D (0x3A/0x3B) displayed on the oscilloscope while it is connected to the microbit. 
2. imgur.com/a/CW55egC
  B. In this video, I have the address 0x19 (0x32/0x33) displayed on the oscilloscope. This is the address where I noticed the largest amount of change. 
3. imgur.com/a/yQPjZs6
  C. Finally, this video displays the address of 0x1E (0x3C/0x3D) displayed on the oscilloscope. 

                           ##In Progress of being formatted and updated##
