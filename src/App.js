import { Component } from 'react';
import './App.css';

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      excelDownLoad: false,
      showData: false,
    }
  }




  componentDidMount() {

  }

  render() {
    return (
      <>
        <div className='divT'>
          <input type='button' onClick={(e) => { this.setState({ showData: true }) }}></input>
          <span className='exctext'>Excel</span>
        </div>
        {
          this.state.showData &&
          <table>
            <colgroup>
            <col width='15px'/>
            <col width='15px'/>
            <col width='15px'/>
            <col width='15px'/>
            <col width='15px'/>
            <col width='15px'/>
            </colgroup>
            <thead>
              <tr>
                값을 생성
              </tr>
            </thead>
          </table>
        }

      </>

    )
  }
}