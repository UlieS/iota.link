# IOTA.link

IOTA.link is a service for sharing IOTA payment information. It's a simple way
to share receive addresses or accept donations in a user-friendly way.


## Use

1. Go to https://iota.link
2. Enter a receive address (required) and optionally an amount
3. Press **Copy link** to have a permalink copied to the clipboard

When the link is later opened, the same information is displayed. By clicking
**Open in wallet**, the visitor's wallet will open with the transaction
pre-filled (note: this depends on `iota:` URI scheme support from the wallet
app, which has not yet been implemented in the Lightwallet).


## Security

This service is 100% client-side, it does not send any information anywhere.

Generally, there are no security issues with sharing a receive address. The
worst thing that can happen is that someone might send you iotas :)

However, be aware that each time you transfer iotas _from_ an address (for
example by "withdrawing" iotas from a donation address), the security of that
address decreases. This is hopefully something that IOTA wallet apps one day
will warn about, and ensure that best practices are followed. Until then, you
should keep this issue in mind.


## Credits

Developed and hosted by Joakim Stai.

If you found this service useful, you're welcome to
[donate some iotas.](https://iota.link/9LHGWINWAYTSCA9TOIHYHFGSPSVZWWRIWYTDJAGYEQCFRLNGRBPNLGPIGYDYKMX9MQ9JJIJXQRQCSULRQCKTEVCOKG)
Thank you!


## License

MIT
