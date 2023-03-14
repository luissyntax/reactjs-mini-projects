import React from 'react';
import QRCode from 'qrcode-generator';
import './QrCode.css';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  value: string,
  click: Function,
};

const QrCode = ({ value, click }: Props) => {
  
  if (!value) {
    return null
  }

  const qr = QRCode(0, 'H');
  qr.addData(value);
  qr.make();

  const qrImageSrc = qr.createDataURL(10, 15);

  return (
    <div className="container">
      <h1 style={{ margin: 0 }}>QR code gerado com</h1>
      <h1 style={{ color: '#157f0d' }}>sucesso</h1>
      <img src={qrImageSrc} alt="QR Code" />
      <Link to="/">
        <button onClick={()=>{click('')}}>Voltar</button>
      </Link>
    </div>
  );
};

export default QrCode;
