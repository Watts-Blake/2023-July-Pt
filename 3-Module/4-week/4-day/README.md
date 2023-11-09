# Let's Talk IP, TCP, and UDP
## IP (Internet Protocol)
  - style of communication known as 'packet-switching'
  - IPv4 : `192.18.1.1` aka `11000000.00010010.00000001.00000001`
    - 4 octets aka 4 8-bit binary numbers
    - ~4 billion IP Addresses
  - IPv6 : `2600:6c5e:157f:d48c:138f:e0ba:6fa7:d859` aka `0010011000000000:0110110001011110:0001010101111111:1101010010001100:0001001110001111:1110000010111010:0110111110100111:1101100001011001`
    - 8 colon-ed hex numbers aka 8 sets of 16-bit binary numbers
    - 350 undecillion addresses

## Transport Protocols
### TCP (Transmission Control Protocol)
  - It's Reliable, worries about order and completeness
  - Data can't get lost
  - Verifies if the packets made it
  - Slower than UDP

  - Examples:
    - File Transfers
    - Web Browsing
    - CRUD Operations
### UDP (User Datagram Protocol)
  - Newer than TCP
  - Traded reliability for raw speed
  - Connectionless and Does not verify

  - Example:
    - Real-Time Video Sharing ( Twitch )
    - Voice-Over-IP (VOIP) Calls ( FaceTime, Zoom )
    - Continuous Data Broadcasts ( Smart Home Devices )