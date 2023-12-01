import React from 'react'
import image1 from './images/task1.1.png'
import image2 from './images/task1.2.png'
import image3 from './images/task1.3.png'
import image4 from './images/task1.4.png'
import image5 from './images/task4.1.png'
import image6 from './images/task4.1.png'
import image8 from './images/task4_2.2_1.png'
import image7 from './images/task4_2.2_2.png'
import image9 from './images/task4_2.2_3.png'
import image10 from './images/task4_2.2_4.png'
import image11 from './images/task4_2.3_1.png'
import image12 from './images/task4_2.3_2.png'
import image13 from './images/task4_2.3_3.png'
import image14 from './images/task4_2.3_4.png'
import image15 from './images/tcp headers.jpg'
import image16 from './images/UDP-headers.png'

function App() {
  return (
    <>
      <div className="theory">
        <h1 className="section-heading">
          Theoretical Part
        </h1>
        <h1>Task 1.1</h1>

        <h2>TCP protocol</h2>
        <p>
          TCP (Transmission Control Protocol) is one of the main protocols of the Internet protocol suite.
          It lies between the Application and Network Layers which are used in providing reliable delivery services.
          It is a connection-oriented protocol for communications that helps in the exchange of messages between different devices over a network.
          The Internet Protocol (IP), which establishes the technique for sending data packets between computers, works with TCP.
        </p>

        <h2>TCP protocol parameters</h2>
        <p>
          TCP wraps each data packet with a header containing 10 mandatory fields  totalling 20 bytes (or octets).
          Each header holds information about the connection and the current data being sent
        </p>
        <img src={image15} alt="" style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>

        <h2>UDP protocol</h2>
        <p>
          UDP offers a way to identify corrupted data within packets
          but doesn't address issues like lost or disordered packets. Consequently,
          the received data may lack reliability in terms of order, duplicates, and guaranteed packet arrival.
          The key advantage of UDP compared to TCP lies in its faster transmission speed.
        </p>

        <h2>UDP protocol parameters</h2>
        <p>
          UDP Packet contains of data and header. Header consists of information about: source port,
          destination port, length and checksum:
        </p>
        <img src={image16} alt="" style={{ width: '1000px', height: 'auto', maxHeight: '800px', backgroundColor: 'white' }}></img>

        <h2>TCP connection</h2>
        <p>
          A TCP (Transmission Control Protocol) connection refers to a communication link established between two devices over a network,
          enabling reliable data transmission. TCP ensures that data sent from one device
          (such as a computer or server) reaches the intended destination device
          (another computer or server) accurately and in the correct order.
        </p>

        <h2>Three way handshake(Connection Establishment)</h2>
        <p>
          TCP connections operate using a client-server model and involve a series of steps to establish,
          maintain, and terminate the connection. In UDP there is no such thing. Here's an overview of the TCP connection process:
        </p>
        <h4>TCP Connection Establishment</h4>
        <ul>
          <li>
            <strong>Step 1 - SYN:</strong> The process begins with a client initiating a connection request to the server by sending a SYN (Synchronize) packet. This packet contains an initial sequence number.
          </li>
          <li>
            <strong>Step 2 - SYN-ACK:</strong> Upon receiving the SYN packet, the server acknowledges the request by sending back a SYN-ACK (Synchronize-Acknowledge) packet. This packet contains an acknowledgment number and an incremented sequence number.
          </li>
          <li>
            <strong>Step 3 - ACK:</strong> Finally, the client acknowledges the server's response by sending an ACK (Acknowledge) packet. This packet acknowledges the receipt of the server's SYN-ACK packet and completes the three-way handshake. The connection is established, and data transfer can begin.
          </li>
        </ul>

        <h2>Data Transfer (Communication):</h2>
        <p>
          After the TCP connection is established, both the client and server can exchange data packets.
          TCP ensures reliability by employing sequence numbers, acknowledgments, and flow control mechanisms.
          It divides the data into segments, numbers them for order, and manages the flow of data between the sender and receiver.
        </p>

        <h2>Connection Release</h2>
        <p>
          <strong>Normal Termination:</strong> Once the data exchange is complete,
          either the client or server can initiate the connection termination process by sending a FIN (Finish) packet.
          This step signals the intent to close the connection. 
          In UDP there is no such thing as connection release.
        </p>
        <p>
          <strong>Four-Way Handshake:</strong> The termination involves a four-way handshake:
        </p>
        <ul>
          <li>
            <strong>Step 1 - FIN:</strong> Initiator sends a FIN packet to close its side of the connection.
          </li>
          <li>
            <strong>Step 2 - ACK:</strong> Receiver acknowledges the FIN packet.
          </li>
          <li>
            <strong>Step 3 - FIN:</strong> Receiver, if ready, can also send a FIN packet to close its side of the connection.
          </li>
          <li>
            <strong>Step 4 - ACK:</strong> Initiator acknowledges the receiver's FIN packet. Once both sides have acknowledged the termination, the connection is closed.
          </li>
        </ul>

        <h2>Ports</h2>
        <p>
          A port serves as a virtual location within the transport layer, marking the beginning and end points of network connections.
          These ports, controlled by a computer's operating system, are software-defined and linked to particular processes or services.
          They follow a standardized numbering system across all network-connected devices.
          Ports play a crucial role in instructing computers on how to handle incoming data. Commonly recognized network ports encompass:
        </p>

        <table>
          <thead>
            <tr>
              <th>Port Number</th>
              <th>Common Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>FTP Data Transfer</td>
            </tr>
            <tr>
              <td>21</td>
              <td>FTP Command Control</td>
            </tr>
            <tr>
              <td>22</td>
              <td>SSH</td>
            </tr>
            <tr>
              <td>23</td>
              <td>Telnet</td>
            </tr>
            <tr>
              <td>25</td>
              <td>SMTP</td>
            </tr>
            <tr>
              <td>53</td>
              <td>DNS</td>
            </tr>
            <tr>
              <td>80</td>
              <td>HTTP</td>
            </tr>
            <tr>
              <td>110</td>
              <td>POP3</td>
            </tr>
            <tr>
              <td>119</td>
              <td>NNTP</td>
            </tr>
            <tr>
              <td>123</td>
              <td>NTP</td>
            </tr>
            <tr>
              <td>143</td>
              <td>IMAP</td>
            </tr>
            <tr>
              <td>161</td>
              <td>SNMP</td>
            </tr>
            <tr>
              <td>194</td>
              <td>IRC</td>
            </tr>
            <tr>
              <td>443</td>
              <td>HTTPS</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className='screenshots'>
        <h1 className='section-heading'>Practical Part</h1>
        <h2>2.1.1.</h2>
        <img src={image1} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image2} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image3} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image4} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <h2>2.1.2.</h2>
        <img src={image7} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image8} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image9} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image10} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <h2>2.1.3.</h2>
        <img src={image11} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image12} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image13} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image14} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <h2>2.1.4.</h2>
        <img src={image5} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
        <img src={image6} alt='' style={{ width: '1000px', height: 'auto', maxHeight: '800px' }}></img>
      </div>
    </>
  )
}

export default App
