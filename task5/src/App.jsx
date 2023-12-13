import React from 'react';

function App() {
  return (
    <>
      <div className="theory">
        <h1 className="section-heading">
          Theoretical Part
        </h1>
      </div>

      <div>
        <h2>DNS system</h2>
        
        <h4>Top Level Domains</h4>
        <p>IANA distinguishes the following group of top-level domains:</p>

        <h4>Infrastructure Top-Level Domains (ARPA)</h4>
        <p>These domains manage technical network infrastructure. Includes subdomains like in-addr.arpa for reverse DNS lookup of IPv4 addresses.</p>

        <h4>Generic Top-Level Domains (gTLD)</h4>
        <p>Initially called “general purpose domains.” Unrestricted gTLDs are available for registration by any person or organization for any use.</p>

        <h4>Generic-Restricted Top-Level Domains (grTLD)</h4>
        <p>Similar to gTLDs but have specific requirements for registration.</p>

        <h4>Sponsored Top-Level Domains (sTLD)</h4>
        <p>Specialized domains with sponsors representing a specific community served by the domain.</p>

        <h4>Country Code Top-Level Domains (ccTLD)</h4>
        <p>Domains generally used or reserved for countries, sovereign states, or dependent territories identified with a country code. All ASCII ccTLD identifiers are two-letter longs.</p>

        <h4>Internationalized Top-Level Domains (IDNs)</h4>
        <p>Specially encoded domains displayed in an end-user application, like a web browser, in language-native scripts (e.g., Arabic alphabet) or non-alphabet writing systems (e.g., Chinese characters).</p>

        <h4>Test Top-Level Domains (tTLD)</h4>
        <p>Domains reserved by the Internet Engineering Task Force (IETF) for software testing.</p>

        <h4>Early Generic Top-Level Domains</h4>
        <p>In the early Internet stages before ICANN, seven gTLDs were created:</p>

        <h4>Hierarchical Structure of Domain Name System (DNS)</h4>
        <p>The DNS uses a hierarchy in a tree structure. The root domain sits at the top, followed by top-level domains, then further divided into subdomains.</p>

      <h2>Mail system</h2>

      <p><strong>POP3, known as Post Office Protocol version 3</strong> -
        serves as a widely adopted method to fetch emails from a mail server to a user's email client.
        It's a straightforward and commonly used protocol supported by numerous email servers and clients.
        Typically, it operates on port 110 for unencrypted connections and 995 for SSL/TLS encrypted connections.
        When a client uses POP3 to connect to a server, it downloads email messages and labels them as "read" on the server's end,
        preventing their retrieval in subsequent attempts. With a simple set of commands like "USER," "PASS" for authentication, and "RETR" to access messages,
        POP3 streamlines the email retrieval process.
        </p>
        
        <p>
          <strong>IMAP, known as Interactive Mail Access Protocol,</strong>
          serves as a means to transmit emails from the user to the SMTP server.
          Similar to POP3, it enables a client to retrieve email messages stored on a server. However,
          a key distinction between POP3 and IMAP lies in IMAP's capability to grant the client direct access and control over the server's mailbox.
          With IMAP, users can actively organize and manage email messages,
          including tasks such as relocating messages between folders and conducting specific message searches on the server. Moreover,
          IMAP supports concurrent access by multiple clients to the same mailbox, whereas POP3 is typically designed for single-user access.
          IMAP works on ports 143 and 993.
        </p>

        <p><strong>SMTP, which stands for Simple Mail Transfer Protocol,</strong>
          functions as the mechanism for transporting emails between Mail Servers across the internet.
          Usually operating on port 25 for unencrypted communications and 465 for SSL/TLS encrypted connections,
          SMTP is responsible for transmitting emails between servers.
        </p>

        <p><strong>Client-Server Communication, </strong>
          in the context of networking, client-server communication refers to a network architecture where a client (a device or program)
          requests services or resources from a server (another device or program). It's a common paradigm in which the client sends a request,
          and the server processes that request and sends back a response.
        </p>

        <h3><strong>Basic Commands:</strong></h3>

        <h4><strong>POP3 Commands:</strong></h4>
        <ul>
          <li><strong>USER:</strong> Provides the username.</li>
          <li><strong>PASS:</strong> Provides the password.</li>
          <li><strong>LIST:</strong> Lists messages on the server .</li>
          <li><strong>RETR:</strong> Retrieves a specific message.</li>
          <li><strong>DELE:</strong> Deletes a specific message.</li>
          <li><strong>QUIT:</strong> Ends the session.</li>
        </ul>

        <h4><strong>IMAP Commands:</strong></h4>
        <ul>
          <li><strong>LOGIN:</strong> Authenticates the user.</li>
          <li><strong>SELECT:</strong> Selects a specific mailbox.</li>
          <li><strong>FETCH:</strong> Retrieves a specific message.</li>
          <li><strong>STORE:</strong> Changes flags on messages.</li>
          <li><strong>LOGOUT:</strong> Ends the session.</li>
        </ul>

        <h4><strong>SMTP Commands:</strong></h4>
        <ul>
          <li><strong>EHLO:</strong> Initiates the SMTP session.</li>
          <li><strong>MAIL FROM:</strong> Specifies the sender of the email.</li>
          <li><strong>RCPT TO:</strong> Specifies the recipient(s) of the email.</li>
          <li><strong>DATA:</strong> Begins the data transfer of the email message.</li>
          <li><strong>QUIT:</strong> Ends the SMTP session.</li>
        </ul>

        <h4>Aliases</h4>
        <p>Additional email addresses that users add to their primary email address. Emails sent to the alias automatically land in the mailbox of the primary email account.</p>

        <h4>Email Address</h4>
        <p>It serves as the identification for an electronic mailbox, composed of a local part (usually the username) and a domain part (dependent on the email service provider). The local part can include words, numbers, or periods, while the domain is determined by the service provider.</p>

        <h4>Email Header and Separator</h4>
        <p>An email header comprises lines with ASCII text indicating field name, colon, and value. Key fields include To (primary recipient), CC (carbon copy for secondary recipients), BCC (blind carbon copy for discreet recipients), From (sender's name), Sender (sender's email address), Received (message routing details), and Return-Path (specifies the sender).</p>

        <h4>Email Separator</h4>
        <p>A segment within an email that distinguishes one message from another within an email conversation thread. Typically added when replying or forwarding emails.</p>

        <h4>Attachments</h4>
        <p>Computer files sent along with an email message, allowing users to share documents and images.</p>

        <h4>Email Coding</h4>
        <p>HTML email enables formatting and markup capabilities, unlike plain text. It permits linking text, in-line inclusion of images, tables, and complex content like diagrams or mathematical formulae.</p>

        <h4>MIME (Multipurpose Internet Mail Extension)</h4>
        <p>It converts non-ASCII data into 7-bit ASCII for transfer through SMTP. Enables the transfer of video, audio, and other data types. </p>

        <h4>Mailing Lists</h4>
        <p>A collection of names and addresses used to send material to multiple recipients, often inclusive of the subscribers to the list.</p>

        <h4>Email Gateway</h4>
        <p>A defensive system providing real-time email security by filtering content (attachments, addresses, URLs) to prevent malicious software or harmful links.</p>

        <h4>Email Security</h4>
        <p>Measures protecting email accounts, content, and communication against unauthorized access, including SSL and TLS protocols that ensure privacy and authenticity.</p>

        <h4>PGP (Pretty Good Privacy)</h4>
        <p>Encryption program ensuring cryptographic privacy and authentication for various data types, including emails, files, and directories.</p>

        <h4>Spam</h4>
        <p>Unwanted emails primarily used for advertising but can contain harmful links, malware, or deceptive content.</p>

        <h4>Blacklists</h4>
        <p>Lists used to block entities, IP addresses, or behavior to safeguard systems from threats and malware.</p>

        <h4>Greylists</h4>
        <p>Lists for items or entities yet to be categorized into blacklists or whitelists, often used to temporarily allow access for newcomers.</p>

        <h4>Spam Filtering</h4>
        <p>Algorithms detecting and blocking unsolicited or infected emails from reaching inboxes, using various detection methods, including pattern matching and machine learning.</p>

      </div>

      <div className="screenshots">
        <h1 className="section-heading">
          Practical Part
        </h1>
      </div>
    </>
  );
}

export default App;
