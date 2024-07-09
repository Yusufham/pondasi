import React from 'react';
import './Comp1.css'
import daftar from '../img/daftar.jpg'
import daftarbawah from '../img/daftarbawah.jpg'

function Comp1() {
    return(
        <div className='CaraDaftar'>
            <div className='atas'>
                <h1><span>PONDA</span>SIBET</h1>
            <h4>agen slot / togel online aman terpecaya</h4></div>
            <a className='link-atas' href='https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me'>link dafatar</a>
            <div className='content-img'>
                <img src={daftar} className='imgdaftar' alt='cara daftar' />
                <div className='content-daftar'>
                    <h1>CARA DAFTAR</h1>
                    <h3>dengan gopay, dana, linkajh</h3>
                    <p>di pondasibet bisa daftar dengan dompet digital contoh gopay linkajh dana... 
                     tanpa bank caranya mudah banget
                    </p>
                    <p>kaka hanya perlu isi  formulir </p>
                    <div>
                        <h1>contoh gambar di samping</h1>
                        <p>1.kaka pilih nama bank</p>
                        <p>ada beberapa pilihan ||Nama Bank gopay dana linkajh </p>
                        <p>kaka pilih salah satu pilihan</p> <br></br>
                        <p>2.lalu kaka isi ||Nama Rekening:  dengan nama gopay attau dana kaka</p>
                        <p>contoh di samping nama rekeningnya</p><br></br>
                        <p>3.lalu kaka isi ||Nomor Rekening: dengan nomor hp kaka yang terdaftar di gopay / dana</p>
                        <p>daftar dehhh selesai</p>
                    </div>
                </div>
            </div>
            <div className='linkdaftar'>
                    <a href="https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me">DAFTAR DI SINI KA</a>
            </div>
            <div className='daftarbawah'>
                <img src={daftarbawah} alt='rolate jp besar' />
            </div>
        </div>
    )
}

export default Comp1;