import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyCode: 'Press Key',
      key: null,
      which: null,
      code: null
    }
    this.setKeyCode = this.setKeyCode.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.setKeyCode);
  }

  setKeyCode(e) {
    this.setState({
      keyCode: e.keyCode,
      key: e.key,
      which: e.which,
      code: e.code
    })
  }

  render() {
    let {keyCode, key, which, code} = this.state;
    return (
      <section id = "app">
        <div className = "container-fluid">
          <div className = "row">
            <div className = "col-md-12">

              <div className = "heading text-center">
                <h1>{keyCode}</h1>
              </div>

            </div>
          </div>

          {
            keyCode !=="Press Key" && <div className = "details">
              <div className = "row">

                <div className = "col-md-4 col-xs-4">
                  <div className = "panel panel-primary">
                    <div className = "panel-heading text-center">e.key</div>
                    <div className = "panel-body text-center">
                      {key}
                    </div>
                  </div>
                </div>

                <div className = "col-md-4 col-xs-4">
                  <div className = "panel panel-primary">
                    <div className = "panel-heading text-center">e.which</div>
                    <div className = "panel-body text-center">
                      {which}
                    </div>
                  </div>
                </div>

                <div className = "col-md-4 col-xs-4">
                  <div className = "panel panel-primary">
                    <div className = "panel-heading text-center">e.code</div>
                    <div className = "panel-body text-center">
                      {code}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          }

        </div>
      </section>
    )
  }
}

export default App;
