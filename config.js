// config.js
// File konfigurasi untuk data statis yang bisa diubah tanpa menyentuh logic

const TILAWAH_CONFIG = {
    // Konfigurasi Admin
    ADMIN_PASSWORD: 'adminqu',
    
    // Daftar Bulan
    MONTHS: [
        { value: '2025-01', label: 'Januari 2025' },
        { value: '2025-02', label: 'Februari 2025' },
        { value: '2025-03', label: 'Maret 2025' },
        { value: '2025-04', label: 'April 2025' },
        { value: '2025-05', label: 'Mei 2025' },
        { value: '2025-06', label: 'Juni 2025' },
        { value: '2025-07', label: 'Juli 2025' },
        { value: '2025-08', label: 'Agustus 2025' },
        { value: '2025-09', label: 'September 2025' },
        { value: '2025-10', label: 'Oktober 2025' },
        { value: '2025-11', label: 'November 2025' },
        { value: '2025-12', label: 'Desember 2025' },
    ],
    
    // Motivasi Hadits
    MOTIVATIONS: [
        '"Sebaik-baik kalian adalah yang mempelajari Al-Quran dan mengajarkannya." (HR. Bukhari)',
        '"Bacalah Al-Quran, karena ia akan datang pada hari kiamat sebagai pemberi syafaat." (HR. Muslim)',
        '"Orang yang membaca satu huruf dari Al-Quran akan mendapat satu kebaikan." (HR. Tirmidzi)',
        '"Al-Quran adalah perjamuan Allah, maka pelajarilah perjamuan-Nya." (HR. Hakim)',
        '"Barangsiapa membaca Al-Quran dan mengamalkannya, maka Allah akan memberikan mahkota cahaya." (HR. Hakim)',
        '"Rumah yang dibacakan Al-Quran di dalamnya dipenuhi keberkahan." (HR. Tirmidzi)',
        '"Sesungguhnya hati-hati itu berkarat seperti besi. Penyemirnya adalah membaca Al-Quran." (HR. Daruquthni)',
    ],
    
    // Keys untuk Storage
    STORAGE_KEYS: {
        PARTICIPANTS: 'participants',
        TRACKING: 'tracking'
    },
    
    // Pesan Error
    ERROR_MESSAGES: {
        USERNAME_EMPTY: 'Username tidak boleh kosong',
        USERNAME_NOT_FOUND: 'Username tidak terdaftar',
        USERNAME_EXISTS: 'Username sudah ada',
        WRONG_PASSWORD: 'Password salah'
    },
    
    // Pesan Sukses
    SUCCESS_MESSAGES: {
        PARTICIPANT_ADDED: (name) => `Peserta ${name} berhasil ditambahkan`,
        PARTICIPANT_DELETED: (name) => `Peserta ${name} berhasil dihapus`,
        REPORT_COPIED: 'Laporan berhasil disalin! Silakan paste ke WhatsApp'
    }
};