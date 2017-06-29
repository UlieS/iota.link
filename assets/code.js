(function (window, document, history, undefined) {

  // Aliases for query selector functions.
  var $ = document.querySelector.bind(document)
  var $$ = document.querySelectorAll.bind(document)

  // Specify a function to execute when the DOM is fully loaded.
  function ready (cb) {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
      cb()
    }
    else {
      document.addEventListener('DOMContentLoaded', cb)
    }
  }

  // Encode query string.
  function queryEncode (obj) {
    return '?' + Object.keys(obj).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    }).join('&')
  }

  // Decode query string.
  function queryDecode (str) {
    return str.substr(1).split('&').reduce(function (obj, item) {
      var parts = item.split('=')
      var key = decodeURIComponent(parts[0])
      var value = decodeURIComponent(parts[1])
      obj[key] = value
      return obj
    }, {})
  }

  // Imports state from a query string.
  function importState (str) {
    var query = str ? queryDecode(str) : {}

    // Prefer data from the path parameter if it is provided
    if (query.path) {
      var path = query.path.split('/')
      query = {
        address: path[0],
        amount: path[1],
        currency: undefined,
        tag: path[2],
      }
    }

    // Extract amount and currency from the "amount" parameter
    if (query.amount) {
      var amount = query.amount.match(/(\d+)?(\D+)?/)
      if (amount[1]) query.amount = amount[1]
      if (amount[2]) query.currency = amount[2]
    }

    var state = {
      address  : query.address  || '',
      amount   : query.amount   || '',
      currency : query.currency || 'i',
      tag      : query.tag      || '',
    }

    return state
  }

  // Updates the history state object.
  function updateState (changes) {
    var state = {}

    if (history.state) {
      Object.keys(history.state).forEach(function (key) {
        state[key] = history.state[key]
      })
    }

    Object.keys(changes).forEach(function (key) {
      state[key] = changes[key]
    })

    // Compose the path for this state
    var path = []
    if (state.address) {
      path.push(state.address)

      if (state.amount) {
        path.push(state.amount + state.currency)
      }
      else if (state.tag) {
        path.push('')
      }

      if (state.tag) path.push(state.tag)

      // Disable buttons
      $('#copy').disabled = false
      $('#open').disabled = false
    }
    else {
      // Enable buttons
      $('#copy').disabled = true
      $('#open').disabled = true
    }

    history.replaceState(state, '', '/' + path.join('/'))
  }

  // Build an iota: URI for opening wallet with new transaction.
  function getWalletURI (state) {
    var params = {}

    if (state.amount) params.amount = convert(state.amount, state.currency)
    if (state.tag) params.tag = state.tag

    return 'iota:' + state.address + (Object.keys(params).length ? queryEncode(params) : '')
  }

  // Convert between currencies (currently only SI prefixes).
  function convert (amount, from) {
    var rates = {
        i: 1,
       Ki: 1000,
       Mi: 1000000,
       Gi: 1000000000,
       Ti: 1000000000000,
    }

    return amount * rates[from]
  }

  // Initiate.
  function init () {
    var state = importState(location.search)

    updateState(state)

    // Focus the address field if empty, otherwise the amount field if empty 
    if (!state.address) {
      $('#address').focus()
    }
    else if (!state.amount) {
      $('#amount').focus()
    }

    // If no address, show the "copy link" button
    var copyHidden = true
    if (!state.address) {
      $('#copy').classList.remove('hidden')
      var copyHidden = false
    }

    // Initiate fields
    $$('main input, main select').forEach(function (field) {
      field.value = history.state[field.id]

      // Update state when the field's value changes
      field.addEventListener('input', function () {
        if (this.id === 'amount' && this.value === '0') this.value = ''

        updateState({ [this.id]: this.value })

        // Show "copy link" button once a field has been changed
        if (copyHidden) {
          $('#copy').classList.remove('hidden')
          copyHidden = false
        }
      })

      // Select text of input fields when clicked
      if (field.tagName === 'INPUT') {
        field.addEventListener('click', function () {
          this.select()
        })
      }
    })

    // Attach "open in wallet" functionality to button
    $('#open').addEventListener('click', function () {
      location.href = getWalletURI(history.state)
    })

    // Attach "copy link" functionality to button
    if (Clipboard.isSupported()) {
      var clipboard = new Clipboard('#copy', {
        text: function (trigger) {
          return location.href
        }
      })

      // Give visual feedback
      clipboard.on('success', function (event) {
        var trigger = event.trigger

        trigger.style.width = trigger.offsetWidth + 'px'
        trigger.innerHTML = 'Copied!'
        trigger.classList.add('success')
        trigger.disabled = true

        setTimeout(function () {
          trigger.style.width = null
          trigger.innerHTML = 'Copy link'
          trigger.classList.remove('success')
          trigger.disabled = false
        }, 2500)
      })

      // Fallback to manual instructions
      clipboard.on('error', function () {
        var btn = (~window.navigator.platform.indexOf('Mac') ? 'Cmd' : 'Ctrl')
        alert('After clicking OK, press ' + btn + '+C.')
      })
    }
  }

  ready(init)

} (window, window.document, window.history))
