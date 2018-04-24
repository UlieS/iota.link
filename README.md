# iota.link

> [iota.link](https://iota.link) is a simple and user-friendly way to request
[IOTA](https://www.iota.org/) payments.

More specifically, it's a free web service for sharing an IOTA receive address
with a requested amount. It provides a secure link that may be shared by
chat, email or in other ways.

Once the link is clicked, the user is presented with the payment request and a
button that opens his or her IOTA wallet with the information pre-filled,
ready to make the transaction. (Note: This requires that the wallet supports
the [URI scheme](https://github.com/joakim/iota-uri-scheme).)


### Contents

- [Instructions](#instructions)
- [Terms of use](#terms-of-use)
- [Privacy policy](#privacy-policy)
- [On security and privacy](#on-security-and-privacy)
  - [Note on address reuse (donations)](#note-on-address-reuse-donations)
- [Credits](#credits)


## Instructions

1. Go to [iota.link](https://iota.link)
2. Enter your receive address and an amount
3. Press **Copy link** to have the link copied to your clipboard
4. Share the link

> Due to a [limitation](#note-on-address-reuse-donations) in IOTA, you should
not accept multiple payments to the same address, so don't create donation
links (yet).


## Terms of use

The service may not be used for illegal purposes or with the intent of causing
harm.

The service is provided "as is", without warranty of any kind, express or
implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose and noninfringement. In no event shall the
authors or copyright holders be liable for any claim, damages or other
liability, whether in an action of contract, tort or otherwise, arising from,
out of or in connection with the service or the use or other dealings in the
service.


## Privacy policy

Information collected or shared with 3rd parties: None


## On security and privacy

Sharing an IOTA receive address with others is essentially safe. It's an
integral part of IOTA, and absolutely necessary for others to send you iotas.
Sharing an [iota.link](https://iota.link) URL is in principle equivalent to
sharing the information that it contains (ie. a receive address and a value).

However, there is one limitation with IOTA itself that one should be aware of,
please see [the note below](#note-on-address-reuse-donations).

In addition, there are various security and privacy aspects to a web service
like this, someting I take very seriously. I've done my best to identify and
mitigate potential vulnerabilities, and all code is made available for review.
Any feedback is very welcome.

Here I'll address some potential issues and how they're mitigated:

A service like this _could_ collect or share the information passed through it
(the receive address and value, plus your IP address and browser fingerprint).
That's not the case for [iota.link](https://iota.link), being 100% client-side
and with no external resources, analytics or trackers. This claim is easily
verified by reviewing the source code on the website and in this repository.

> This service does not collect or send your information anywhere, as can be
verified by reviewing its source code.

A service like this _could_ also be malicious, silently altering the receive
address to one belonging to the malicious actor. The unsuspecting recipient of
the link would probably not even notice. This is why it is important to be
cautious of 3rd party services like this, and only trust ones with a good
track record and a source code that you can easily check.

> This service is not malicious, as can be verified by reviewing its source
code.

To protect against man-in-the-middle attacks, HTTPS is used and enforced
(using Let's Encrypt). As long as you share the resulting link as it is
presented, with `https://`, the whole URL will be encrypted by TLS to protect
against eavesdropping.

To protect against evil maid attacks, write access to this repository has only
been granted to my GitHub account, protected by a strong password and
two-factor authentication.

In the end, it always comes down to trust. I trust GitHub, Netlify and Let's
Encrypt in order to provide this service. I trust you not to misuse the
service. In turn, you have to make a decision whether to trust me.


### Note on address reuse (donations)

Be aware that each time you transfer iotas _out of_ a receive address (for
example by "withdrawing" iotas from a donation address), the security of that
particular address (and the iotas that it holds) decreases. Hopefully, this is
something that IOTA wallets will soon prevent. Until then, you should keep
this issue in mind, and for example not use [iota.link](https://iota.link) to
receive donations.


## Credits

Developed and provided by Joakim Stai.
