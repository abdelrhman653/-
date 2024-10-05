// تاريخ البداية: 27 نوفمبر 2020 الساعة 9:57 مساءً
const startDate = new Date('November 27, 2020 21:57:00');

let interval; // لتخزين التوقيت

// دالة لحساب الزمن
function calculateTime() {
    // بدء التوقيت
    interval = setInterval(() => {
        const now = new Date(); // الوقت الحالي
        const timeDiff = now - startDate; // الفرق بين الوقت الحالي وتاريخ البداية

        // حساب الأيام والساعات والدقائق والثواني
        const totalSeconds = Math.floor(timeDiff / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24)); // عدد الأيام
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)) + (days * 24); // عدد الساعات الإجمالية
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60); // عدد الدقائق
        const seconds = totalSeconds % 60; // عدد الثواني
        const fridays = Math.floor(days / 7); // عدد الجمع (الأسابيع)

        // عرض النتائج في HTML
        document.getElementById('days').innerText = `الأيام: ${days}`;
        document.getElementById('hours').innerText = `الساعات: ${hours}`;
        document.getElementById('minutes').innerText = `الدقائق: ${minutes}`;
        document.getElementById('seconds').innerText = `الثواني: ${seconds}`;
        document.getElementById('fridays').innerText = `الجمع التي مرت: ${fridays}`;
    }, 1000); // تحديث القيم كل ثانية
}

// تشغيل الدالة عند تحميل الصفحة
window.onload = calculateTime;
