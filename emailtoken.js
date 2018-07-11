const tokenDivStyle = {
  float: 'left',
  margin: '5px',
  background: '#ccc',
  border: '1px solid #555',
  borderRadius: '5px',
}
const textStyle = {
  padding: '5px',
  display: 'inline-block',
}
const crossStyle = {
  cursor: 'pointer',
  background: '#555',
  color: '#fff',
  padding: '5px',
  display: 'inline-block',
  borderRadius: '0 5px 5px 0',
}
const highlightStyle = {
  background: '#555',
  color: '#fff',
}

class Token extends React.Component {
  deleteToken = () => {
    this.props.deleteToken(this.props.data.text)
  }

  render() {
    let cls = 'Token'
    if (this.props.data.highlight) {
      cls += ' highlight'
    }
    return (
      <div className={cls} style={Object.assign({}, tokenDivStyle, this.props.data.highlight && highlightStyle)}>
        <span style={textStyle}>{this.props.data.text}</span>
        <span onClick={this.deleteToken} style={crossStyle}>X</span>
      </div>
    )
  }
}

const inputDivStyle = {
  float: 'left',
  padding: '2px',
  margin: '5px',
  font: '14px Arial',
}

const inputStyle = {
  border: '0px',
  font: '15px Arial',
  height: '22px',
  outline: 'none',
}

class InputBox extends React.Component {
  state = {
    value: '',
  }

  componentDidMount() {
    this.focusTextInput()
  }

  focusTextInput = () => {
    this.refs.emailInput.focus();
  }

  handleChange = event => {
    const v = event.target.value
    const x = (v.indexOf(' ') >= 0 || v.indexOf(',') >= 0)

    if (x == true) {
      const emails = v.split(/,| /)
      for (let i = 0; i < emails.length; i++) {
        const isValid = this.validateEmail(emails[i])
        if (isValid === true) {
          this.addToken(emails[i]);
        }
      }
      this.setState({value: ''})
      this.props.changeInputText('')
    } else {
      this.setState({value: v})
      this.props.changeInputText(v)
    }
  }

  checkTokenRemoval = () => {
    if (this.state.value.length == 0) {
      this.props.backToken()
    }
  }

  validateEmail = email => {
    if (email.length > 0) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    } else {
      return false
    }
  }

  addToken = token => {
    console.log(token)
    this.props.addToken(token)
  }

  keyDown = event => {
    switch (event.keyCode) {
      case 13: // enter
      case 32: // space
      case 188: // comma
        event.preventDefault()
        if (this.validateEmail(this.state.value)) {
          this.addToken(this.state.value)
        } else {
          alert('Invalid Email')
        }
        this.setState({value: ''})
        break
      case 8: // backspace
        this.checkTokenRemoval()
        break

      default:
        // console.log(event.keyCode);
    }
  }

  render() {
    return (
      <div className="InputBox" style={inputDivStyle}>
        <input ref="emailInput" style={inputStyle} type="text" value={this.state.value} onKeyDown={this.keyDown} onChange={this.handleChange} />
      </div>
    )
  }
}

const tokenBoxDivStyle = {
  border: '1px solid #ccc',
  width: '500px',
  height: 'auto',
  minHeight: '100px',
  font: '14px Arial',
  cursor: 'text',
}

const clearStyle = {
  clear: 'both',
  borderBottom: 'none',
}

class TokenBox extends React.Component {
  state = {
    tokens: [],
    inputText: '',
  }

  onTokenAdded = newToken => {
    newToken = newToken.toLowerCase()
    const t = this.state.tokens
    let newT = true
    for (let i = 0; i < t.length; i++) {
      if (t[i].text == newToken) {
        newT = false
        return false
      }
    }
    if (newT) {
      t.push({text: newToken, highlight: false})
      this.setState({ tokens: t })
    }
  }

  changeHightlight = h => {
    const ta = this.state.tokens
    if (ta && ta.length > 0) {
      const lastToken = ta[ta.length - 1]
      if (!h) {
        ta[ta.length - 1].highlight = h
      } else {
        if (lastToken && lastToken.highlight) {
          // delete
          ta.pop()
        } else {
          ta[ta.length - 1].highlight = h
        }
      }
      this.setState({ tokens: ta })
    }
  }

  onBackKey = () => {
    this.changeHightlight(true)
  }

  onInputTextChange = text => {
    this.setState({ inputText: text })
    if (text.length > 0) {
      this.changeHightlight(false)
    }
  }

  onClicked = () => {
    this.inputBox.focusTextInput()
  }

  onTokenDelete = token => {
    const t = this.state.tokens.slice()
    let match = false
    for (let i = 0; i < t.length; i++) {
      if (t[i].text == token) {
        match = i + 1
      }
    }
    if (match) {
      const to = this.state.tokens.filter(function(t) { return t.text != token })
      this.setState({ tokens: to })
    }
  }

  render() {
    return (
      <div className="TokenBox" style={tokenBoxDivStyle} onClick={this.onClicked}>
        {this.state.tokens.map(function(t) {
          return <Token deleteToken={this.onTokenDelete} key={t.text} data={t} />
        }.bind(this))}
        <InputBox ref={ref => { this.inputBox = ref }} changeInputText={this.onInputTextChange} addToken={this.onTokenAdded} backToken={this.onBackKey} />
        <div style={clearStyle} />
      </div>
    )
  }
}


ReactDOM.render(
  <TokenBox />,
  document.getElementById('example')
);
