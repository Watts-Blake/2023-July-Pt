# Let's Talk IP, TCP, and UDP
## IP (Internet Protocol)
  - style of communication is known as 'packet-switching
  - IPv4 : `192.18.1.1` aka `11000000.00010010.00000001.00000001`
    - 4 octets aka 4 sets of 8-bit binary numbers
    - 4 billion IP Addresses
  - IPv6 : `2600:6c5e:157f:d48c:138f:e0ba:6fa7:d859` aka `0010011000000000:0110110001011110:0001010101111111:1101010010001100:0001001110001111:1110000010111010:0110111110100111:1101100001011001`
    - 8 colon-ed hexadecimals
    - 350 undecillion IP addresses

# Transfer Protocols
## TCP (Transmission Control Protocol)
  - It's reliable, worries about order and completeness
  - Data can't get lost
  - Verifies if the packets made it
  - Little slower than UDP

  - Examples
    - File Transfer
    - Web Browser
    - CRUD Operations
## UDP (User Datagram Protocol)
  - New than TCP
  - Traded reliablity for raw speed
  - Connectionless and does not verify

  - Examples
    - Real-Time Video Sharing (Twitch)
    - Voice Over IP Calls (FaceTime, Zoom)
    - Continuous Data Broadcasts (Smart Home Devices)