import React from 'react';
import { FaCloudDownloadAlt, FaListUl } from 'react-icons/fa';

const Downloads = () => {
  return (
    <div className='App'>
    <FaCloudDownloadAlt style={{display: 'inline', fontSize: 40}}/>
      <h1 style={{display: 'inline'}}>Downloading Compiled Contacts</h1>
      <div className='download-box'>
      The download will be made available at around 9:00pm this evening ({new Date().toString()}). Kindly exercise patience as all the contacts are being compiled for you to download
          </div>
    <FaListUl /><h1>Download List</h1>
    <p>Here is a list of previously compiled vCards files for you to download if you want.</p>
    </div>
  );
};

export default Downloads;
