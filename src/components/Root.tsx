import * as React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  counter: {
    fontSize: 42,
    fontWeight: 'bolder'
  }
} as { [key: string]: React.CSSProperties}

interface IState {
  counter: number
}

export default class Root extends React.Component<{}, IState> {
  state = { counter: 0 }
  private intervalID: number

  componentDidMount() {
    this.intervalID = window.setInterval(
      () => this.setState({ counter: this.state.counter + 1}),
      1e3
    )
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalID)
  }

  render() {
    return (
      <div style={styles.container}>
        <span style={styles.counter}>
          {this.state.counter}
        </span>
      </div>
    )
  }
}