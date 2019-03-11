import React, { Component } from 'react';
import backArrow from "./images/back-arrow.png";
import switctimg from "./images/switch.png";

import minusImg from "./images/minus.png";
import circleImg from "./images/circle-logo.png";

import plushImg from "./images/plus.png";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: "Putlin FM",
        range: "66,6",
        expand: true
      }, {
        name: "Dribble FM",
        range: "101,2",
        expand: false
      }, {
        name: "Doge FM",
        range: "99,4",
        expand: false
      }, {
        name: "Ballads FM",
        range: "87,1",
        expand: false
      }, {
        name: "Maximum FM",
        range: "142,2",
        expand: false
      },
      ],

      sinleRowdata: {
        name: "Putlin FM",
        range: "66,6",
        expand: false
      }
    }
  }


  handleClick(e) {

    let rowObjdata = this.state.data;
    rowObjdata.map(function(data, i){
            if(data.name===e.name){

             return data.expand = true;

            }
           return data.expand = false;

        });

    this.setState({
      sinleRowdata: e,
      data: rowObjdata
    })
    console.log(e)
  }
  render() {

    let self = this;

    const rowdata = this.state.data.map(function (data, i) {
      return (
        <p onClick={e => self.handleClick(data)} key={i} className="split-para hrline">{data.name}<span>{data.range}</span></p>

      )
    });


    return (
    
      <div className="container">
        <section id="recentjobs">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="box">
                <div className="top-content">
                  <div className="row">
                    <div className="col-sm-4 topimg">
                      <img alt=""  src={backArrow} />
                    </div>
                    <div className="col-sm-4 p-0">
                      <p className="text-center title">STATIONS</p>
                    </div>
                    <div className="col-sm-4 topimg text-right">
                      <img alt=""  src={switctimg} />
                    </div>
                  </div>
                </div>
                <div className="middle-content">

                  {rowdata}

                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="box">
                <div className="top-content">
                  <div className="row">
                    <div className="col-sm-4 topimg">
                      <img alt=""  src={backArrow} />
                    </div>
                    <div className="col-sm-4 p-0">
                      <p className="text-center title">STATIONS</p>
                    </div>
                    <div className="col-sm-4 topimg text-right">
                      <img alt=""  src={switctimg} />
                    </div>
                  </div>
                </div>
                <div className="middle-content">

                  {
                    this.state.data.map(function (data, i) {

                      return (<div key={i}>

                        {data.expand? (<div className="row">
                          <div className="col-sm-4 topimg">
                            <img alt=""  src={minusImg} />
                          </div>
                          <div className="col-sm-4 p-0 middle">
                            <img alt=""  src={circleImg} />
                          </div>
                          <div className="col-sm-4 topimg text-right">
                            <img alt=""  src={plushImg} />
                          </div>
                        </div>) : null}
                        <p className="split-para hrline">{data.name} <span>{data.range}</span></p>
                      </div>)
                    })
                  }
                </div>
                <p className="text-center playingStatus">CURRENTLY PLAYING</p>
                <p className="text-center stationName"> {this.state.sinleRowdata.name}</p>
              </div>
            </div>
          </div>
          <div className="row">
          </div>
        </section>
      </div>
    );
  }
}

export default App;