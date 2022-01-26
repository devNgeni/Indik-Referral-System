import React from "react";
import QRCode from "qrcode.react";

class Pix extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      DataisLoaded: false,
    };

  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/createCharge")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          item: json,
          DataisLoaded: true,
        });
        console.log(json);
      });
	 

  }
  render() {
    const { DataisLoaded, item } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Please wait the data is loading!!</h1>
        </div>
      );

    return (
      <div className="Pix">
        <h3>
          Open the Pix app with your registered Pix Key, choose Pay with pix and
          scan the QR Code or copy and paste the code
        </h3>
		{
			
			<img src={item?.pixCharge.imagemQrcode} />,
			item?.pixCharge.qrcode
			
		}
       
      </div>
    );
  }
}

export default Pix;
