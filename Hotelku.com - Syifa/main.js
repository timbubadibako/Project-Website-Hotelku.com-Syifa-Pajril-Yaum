document.addEventListener('DOMContentLoaded', function () {
    const tombol = document.getElementById('tombol');

    tombol.addEventListener('change', function () {
      if (this.checked) {
        // Aktifkan mode gelap dengan memodifikasi variabel root CSS
        document.documentElement.style.setProperty('--primary-color', '#003566');
        document.documentElement.style.setProperty('--primary-color-dark', '#001d3d');
        document.documentElement.style.setProperty('--text-dark', '#eaeaea');
        document.documentElement.style.setProperty('--text-light', '#b0b0b0');
        document.documentElement.style.setProperty('--extra-light', '#192938');
        document.documentElement.style.setProperty('--white', '#000408');
        document.documentElement.style.setProperty('--book-container', 'rgba(25, 25, 25, 0.7)');
        document.documentElement.style.setProperty('--overlay', 'rgba(0, 0, 0, 0.8)');
        document.documentElement.style.setProperty('--gradient1', 'rgba(3, 36, 78, 0.9)');
        document.documentElement.style.setProperty('--gradient2', 'rgba(3, 36, 78, 0.8))');
        document.documentElement.style.setProperty('--special-body', '#000f22)');
        
      } else {
        // Aktifkan mode terang dengan mengembalikan nilai variabel root CSS ke default
        document.documentElement.style.setProperty('--primary-color', '#fac402');
        document.documentElement.style.setProperty('--primary-color-dark', '#ffc800');
        document.documentElement.style.setProperty('--text-dark', '#474747');
        document.documentElement.style.setProperty('--text-light', '#646464');
        document.documentElement.style.setProperty('--extra-light', '#ffd95c');
        document.documentElement.style.setProperty('--white', '#f7f7f7');
        document.documentElement.style.setProperty('--book-container', 'rgba(255, 255, 255, 0.7)');
        document.documentElement.style.setProperty('--overlay', 'rgba(0, 0, 0, 0.2)');
        document.documentElement.style.setProperty('--gradient1', 'rgba(250, 196, 2, 0.5)');
        document.documentElement.style.setProperty('--gradient2', 'rgba(255, 201, 0, 0.1)))');
        document.documentElement.style.setProperty('--special-body', '#f7f7f7)');
      }
    });
  });

// document.addEventListener('DOMContentLoaded', function () {
//   const forms = document.querySelectorAll("#bookingForm1, #bookingForm2");

//   if (forms.length > 0) {
//     forms.forEach(function(form) {
//       form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Mencegah form untuk melakukan submit

//         const formId = form.id; // Mendapatkan id form yang sedang diproses
//         const formData = {}; // Objek untuk menyimpan data form

//         if (formId === "bookingForm1") {
//           // Ambil data dari bookingForm1
//           formData.location = form.querySelector('input[name="location"]').value;
//           formData.checkIn = form.querySelector('input[name="check_in"]').value;
//           formData.checkOut = form.querySelector('input[name="check_out"]').value;
//           formData.guests = form.querySelector('input[name="guests"]').value;

//           if (!formData.location || !formData.checkIn || !formData.checkOut || !formData.guests) {
//             Swal.fire({
//               title: 'Error',
//               text: "Semua data di Form 1 harus diisi.",
//               icon: 'error',
//               confirmButtonText: 'OK'
//             });
//             return; // Hentikan eksekusi jika data tidak lengkap
//           }

//           Swal.fire({
//             title: 'Booking Form 1',
//             html: `
//               <p><b>Location:</b> ${formData.location}</p>
//               <p><b>Check In:</b> ${formData.checkIn}</p>
//               <p><b>Check Out:</b> ${formData.checkOut}</p>
//               <p><b>Guests:</b> ${formData.guests}</p>
//             `,
//             icon: 'success',
//             confirmButtonText: 'OK'
//           });
//         } else if (formId === "bookingForm2") {
//           // Ambil data dari bookingForm2
//           formData.namaPemesan = form.querySelector('input[name="nama_pemesan"]').value;
//           formData.jenisKelamin = form.querySelector('select[name="jenis_kelamin"]').value;
//           formData.noIdentitas = form.querySelector('input[name="no_identitas"]').value;
//           formData.tipeKamar = form.querySelector('select[name="tipe_kamar"]').value;
//           formData.checkIn = form.querySelector('input[name="check_in"]').value;
//           formData.checkOut = form.querySelector('input[name="check_out"]').value;
//           formData.durasiMenginap = form.querySelector('input[name="durasi_menginap"]').value;
//           formData.guests = form.querySelector('input[name="guests"]').value;

//           if (!formData.namaPemesan || !formData.jenisKelamin || !formData.noIdentitas ||
//               !formData.tipeKamar || !formData.checkIn || !formData.checkOut || 
//               !formData.durasiMenginap || !formData.guests) {
//             Swal.fire({
//               title: 'Error',
//               text: "Semua data di Form 2 harus diisi.",
//               icon: 'error',
//               confirmButtonText: 'OK'
//             });
//             return; // Hentikan eksekusi jika data tidak lengkap
//           }

//           Swal.fire({
//             title: 'Resume Pemesanan',
//             html: `
//               <p><b>Nama Pemesan:</b> ${formData.namaPemesan}</p>
//               <p><b>Jenis Kelamin:</b> ${formData.jenisKelamin}</p>
//               <p><b>Nomor Identitas:</b> ${formData.noIdentitas}</p>
//               <p><b>Tipe Kamar:</b> ${formData.tipeKamar}</p>
//               <p><b>Check In:</b> ${formData.checkIn}</p>
//               <p><b>Check Out:</b> ${formData.checkOut}</p>
//               <p><b>Durasi Menginap:</b> ${formData.durasiMenginap} hari</p>
//               <p><b>Guests:</b> ${formData.guests}</p>
//             `,
//             icon: 'success',
//             confirmButtonText: 'OK'
//           });
//         }
//       });
//     });
//   } else {
//     Swal.fire({
//       title: 'Error',
//       text: "Form dengan id 'bookingForm1' atau 'bookingForm2' tidak ditemukan.",
//       icon: 'error',
//       confirmButtonText: 'OK'
//     });
//   }
// });

