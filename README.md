# IOTA.link

IOTA.link is a service for sharing IOTA payment information. It's a simple way
to share receive addresses or accept donations in a user-friendly way.


## Use

1. Go to https://iota.link
2. Enter a receive address, and optionally an amount
3. Press **Copy link** to have the link copied to clipboard

You now how a permalink of the information you entered. By visiting the link and
clicking **Open in wallet**, the user's wallet app will open with a transaction
prefilled. (Note: this depends on `iota:` URI scheme support from the wallet
app, which has not yet been implemented in the Lightwallet app. See
[this issue](https://github.com/iotaledger/wallet/issues/144).)


## Security

This service is 100% client-side, it does not send any information anywhere.

Generally, there are no security issues with sharing a receive address. The
worst thing that can happen is that someone might send you iotas :)

However, be aware that each time you transfer iotas _from_ an address you have
shared (for example by "withdrawing" iotas from a donation address), the
security of that particular address decreases. This is hopefully something that
IOTA wallet apps will one day prevent from happening. Until they do, you should
keep this issue in mind, especially when accepting donations.


## Credits

Developed and hosted by Joakim Stai.

If you found this service useful, you're welcome to
[donate some iotas.](https://iota.link/9LHGWINWAYTSCA9TOIHYHFGSPSVZWWRIWYTDJAGYEQCFRLNGRBPNLGPIGYDYKMX9MQ9JJIJXQRQCSULRQCKTEVCOKG)
Thank you!


## License

MIT
