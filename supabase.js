// File: config.js

// 1. Dapatkan URL dan Kunci 'anon' dari Pengaturan Supabase Anda
// Masuk ke Supabase > Proyek Anda > Settings (roda gigi) > API

const SUPABASE_URL = 'https://vosaiialqhrtdaenglhp.supabase.co'; //
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvc2FpaWFscWhydGRhZW5nbGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNzE5NDYsImV4cCI6MjA4Mzk0Nzk0Nn0.lVBsrYaL__XslvQRdNo1820La09BdmE-c8aozSekDYA'; // 

// Inisialisasi Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Validasi koneksi (opsional, untuk debugging)
if (!SUPABASE_URL.includes('supabase.co') || SUPABASE_ANON_KEY === 'your-anon-key-here') {
    console.warn('⚠️ PERINGATAN: Database belum diatur!');
    console.warn('Silakan update SUPABASE_URL dan SUPABASE_ANON_KEY di file supabase.js');
}
