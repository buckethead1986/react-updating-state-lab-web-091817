// // Code YouTubeDebugger Component Here
// import React from "react";
//
// class YouTubeDebugger extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       js: {
//         errors: [],
//         user: null,
//         settings: {
//           bitrate: 8,
//           video: {
//             resolution: "1080p"
//           }
//         }
//       }
//     };
//     this.handleBitrate = this.handleBitrate.bind(this);
//     this.handleResolution = this.handleResolution.bind(this);
//   }
//   //-----------handlebitrate with spread operator--------
//   handleBitrate() {
//     this.setState(
//       {
//         js: {
//           settings: {
//             ...this.state.js.settings,
//             bitrate: 12
//           }
//         }
//       },
//       () => console.log(this.state)
//     );
//   }
//   //-----------handleBitrate with object.assign---------
//
//   // handleBitrate() {
//   //   this.setState(
//   //     {
//   //       js: {
//   //         settings: Object.assign({}, this.state.js.settings, {
//   //           bitrate: 12
//   //         })
//   //       }
//   //     },
//   //     () => console.log(this.state)
//   //   );
//   // }
//   //----------------handleResolution with spread operator
//   // handleResolution() {
//   //   this.setState(
//   //     {
//   //       js: {
//   //         settings: {
//   //           ...this.state.js.settings,
//   //           video: {
//   //             ...this.state.js.settings.video,
//   //             resolution: "720p"
//   //           }
//   //         }
//   //       }
//   //     },
//   //     () => console.log(this.state)
//   //   );
//   // }
//   //------------handleResolution with object.assign
//   handleResolution() {
//     this.setState({
//       js: {
//         settings: Object.assign({}, this.state.js.settings, {
//           video: Object.assign({}, this.state.js.settings.video, {
//             resolution: "720p"
//           })
//         })
//       }
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <button className="bitrate" onClick={this.handleBitrate}>
//           Button {this.state.js.settings.bitrate}
//         </button>
//         <button className="resolution" onClick={this.handleResolution}>
//           Resolution {this.state.js.settings.video.resolution}
//         </button>
//       </div>
//     );
//   }
// }
// export default YouTubeDebugger;

import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleChangeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  };

  handleChangeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: "720p"
        })
      })
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.handleChangeResolution}>
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
