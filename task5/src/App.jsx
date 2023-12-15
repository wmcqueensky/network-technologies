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
        
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>.com</td>
                <td>Commercial websites</td>
            </tr>
            <tr>
                <td>.org</td>
                <td>Organizations (typically non-profit)</td>
            </tr>
            <tr>
                <td>.net</td>
                <td>Network infrastructure</td>
            </tr>
            <tr>
                <td>.int</td>
                <td>International organizations</td>
            </tr>
            <tr>
                <td>.edu</td>
                <td>Educational institutions</td>
            </tr>
            <tr>
                <td>.gov</td>
                <td>U.S. government entities</td>
            </tr>
            <tr>
                <td>.mil</td>
                <td>U.S. military</td>
            </tr>
        </tbody>
    </table>

    <h2>Domain Hierarchy</h2>
    
    <p><strong>Root Domain:</strong> The root domain is at the top of the DNS tree structure, denoted by a single dot (.). It signifies the beginning of the hierarchy and is the starting point for all DNS resolutions.</p>

    <p><strong>Top-Level Domains (TLDs):</strong> Below the root domain are the TLDs, such as .com, .org, .net, and country-specific TLDs like .uk or .de. Different organizations manage TLDs and are responsible for specific types of websites.</p>

    <p><strong>Second-Level Domains:</strong> After the TLDs, we have second-level domains, the primary domains individuals or organizations register.</p>

    <p><strong>Subdomains:</strong> Subdomains are additional levels within a domain. They can be used to create distinct website sections or serve specific purposes.</p>

    <table>
        <thead>
            <tr>
                <th>Domain Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Root Domain</td>
            </tr>
            <tr>
                <td>Top-Level Domain (TLD)</td>
            </tr>
            <tr>
                <td>Second-Level Domain</td>
            </tr>
            <tr>
                <td>Subdomain</td>
            </tr>
        </tbody>
    </table>

<br /><br />
    
    <p><strong>Top-Level Domains(TLDs)</strong> are the highest level of domain names in the Domain Name System (DNS) hierarchy. They are the last segment of a domain name, appearing after the last dot in the domain. TLDs play a crucial role in organizing and categorizing the vast number of domain names on the internet.</p>
<p><strong>A DNS query</strong> is a demand for information sent from a user's computer (DNS client) to a DNS server. In most cases a DNS request is sent, to ask for the IP address associated with a domain name. An attempt to reach a domain, is actually a DNS client querying the DNS servers to get the IP address, related to that domain.</p>

<p><strong>DNS delegation</strong> is the process by which a parent DNS zone indicates to DNS resolvers that it has delegated the authority for a DNS subzone (or child zone) to a different set of DNS servers. This allows the DNS resolvers to locate and query the delegated DNS servers for the subzone’s DNS records.</p>

<p><strong>DNS records</strong> (aka zone files) are instructions that live in authoritative DNS servers and provide information about a domain including what IP address is associated with that domain and how to handle requests for that domain</p>

<p><strong>Reverse DNS</strong> lookup is a DNS query for the domain name associated with a given IP address. This accomplishes the opposite of the more commonly used forward DNS lookup, in which the DNS system is queried to return an IP address.</p>

<p><strong>Authoritative answer</strong> comes from a nameserver that is considered authoritative for the domain which it's returning a record for (one of the nameservers in the list for the domain you did a lookup on), and a <strong>non-authoritative answer</strong> comes from anywhere else (a nameserver not in the list for the domain you did a lookup on).</p>

<p><strong>DNS resolver</strong> , also known as a resolver, is a server on the Internet that converts domain names into IP addresses. Below is an example of your computer's communication with DNS (Domain Name System) to resolve a domain name into an IP address.</p>

<p><strong>DNS cache</strong> is a temporary DNS storage on a device (your computer, smartphone, server, etc.) that contains DNS records of already visited domain names (A records for IPv4 addresses, AAAA records for IPv6, etc.). It keeps those records, depending on their time-to-live (TTL). </p>

<p><strong>/etc/hosts file</strong> contains the Internet Protocol (IP) host names and addresses for the local host and other hosts in the Internet network. This file is used to resolve a name into an address (that is, to translate a host name into its Internet address). When your system is using a name server, the file is accessed only if the name server cannot resolve the host name.</p>

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
