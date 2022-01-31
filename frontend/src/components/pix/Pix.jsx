import React from "react";
import bank from "../../images/Pix/pix-banco-central.svg"

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
    fetch("http://localhost:4000/pix/createCharge")
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
        <img src={bank}  height= " 100px" width="80px"  />
        <h5 >
          Open the Pix app with your registered Pix Key, <br/> choose Pay with pix and
          scan the QR Code or copy and paste the code
        </h5>
		{
			
			 item?.pixCharge.qrcode,
        <img src={item?.pixCharge.imagemQrcode} />

			
		}
       <a href={item.pixCharge.qrcode.toString()} >Copiar codigo</a>
      </div>
    );
  }
}

export default Pix;
