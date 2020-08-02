import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="content">
      <h1>Form Pembelian Buah</h1>
        <form action>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="nama"><strong>Nama Pelanggan</strong></label></td>
                <td><input type="text" id="nama" name="nama" /></td>
              </tr>
              <tr>
                <td><label htmlFor="item"><strong>Daftar Item</strong></label></td>
                <td>
                  <input type="checkbox" id="buah1" name="item" Value="semangka" />
                  <label htmlFor="buah1">Semangka</label><br />        
                  <input type="checkbox" id="buah2" name="item" Value="jeruk" />
                  <label htmlFor="buah2">Jeruk</label><br />
                  <input type="checkbox" id="buah3" name="item" Value="nanas" />
                  <label htmlFor="buah3">Nanas</label><br />
                  <input type="checkbox" id="buah4" name="item" Value="salak" />
                  <label htmlFor="buah4">Salak</label><br />
                  <input type="checkbox" id="buah5" name="item" Value="anggur" />
                  <label htmlFor="buah5">Anggur</label><br />
                </td>
              </tr>
              <tr>
                <td><input type="submit" Value="Kirim" /></td>
              </tr>
            </tbody>
          </table>
        </form>
        </div>
    </div>
  );
}

export default App;
