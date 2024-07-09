import React from 'react';
import './Comp2.css'
import caradeposit from '../img/caradeposit.png'
import caradeposit2 from '../img/caradeposit2.png'

function Comp2
() {
    return(
        <div className='container-deposit'>
            <div className='deposit'>
                <h1>PONDASIBET</h1>
                <h4>agen slot / togel online aman terpecaya</h4>
            </div>
            <div>
                <h5>ingat sebelum deposit hubungi livechat terlebih dahulu </h5>
                <p>live chat ada di menu bar</p>

            </div>
            <div className='container-caradeposit'>
                <img src={caradeposit} alt='click deposit'/>
                <div>
                    <h1>cara deposit</h1>
                    <p>deposit adalah pengisian saldo agar kaka bisa memamasang taruhan / bet di pondasibet </p>
                    <p>dan withdraw adalah penarikan fungsinya untuk menarik saldo / deposit kaka agar masuk ke rekening bank kaka</p>
                    <p>cara melakukan deposit kaka harus klick menu bar ada di pojok kiri atas</p>
                    <p>di dalam menu bar ada pilihan deposit</p>
                    <p>kaka plih deposit</p>
                    <p>contoh ada di gambar samping </p>
                </div>
            </div>
            <div className='container-caradeposit'>
                <img src={caradeposit2} alt='cara deposit img'/>
                <div>
                    <h1>transfer 5.000 buat contoh ya KA</h1>
                    <p>kaka coba isi jumlah 5.000 untuk isi saldo/ deposit contoh ada di gambar samping ya ka setelah kaka isi form jumlah</p> 
                    <p>pilih kirim / submit</p>
                    <p>lalu kaka transfer 5.000 ke no rekening kasir contoh no rekening kasir ada di sebelah kiri gambar</p>
                    <p>buka gopay,dana , linkajh lalu transfer ke no rekening kasir </p>
                    <p>tunggu proses deposit selesai</p>
                    <p>hubungi live chat untuk info selanjutnya ka</p>
                </div>
            </div>
            <div className='bawahdeposit'>
                <a href='https://88pondasi.com/register?referral_code=haham&utm_medium=social&utm_source=heylink.me&utm_medium=social&utm_source=heylink.me'>daftar click di sini kak</a>
            </div> 
        </div>
    )
}

export default Comp2
;