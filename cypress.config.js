const { defineConfig } = require("cypress");
const { Pool } = require('pg'); //postgre için gerekli modül

const dbConfig = {
  user: "select_user",
  host: "managementonschools.com",
  database: "school_management",
  password: "43w5ijfso",
  port: 5432
};
module.exports = defineConfig({
  experimentalStudio: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true, //deger true olursa eski html rapor dosyasını silip yeniden olusturur, true olursa index001 seklinde diğer dosyaları olusturur
    charts: true, // Testlerin pass ve fail durumlarını grafiksel olarak raporlar
    reportPageTitle: 'ToolShop Project Report', // Rapor başlığının custumise edilmesi için kullanılır
    reportFilename: "[status]_[datetime]-[name]-report", //raporlama dosyasının isimlendirmesi için kullanılır fail_08.02.2024.Perşembe-RegisterTest-report.html
    timestamp: "shortDate",//dosya ismindeki tarih alanının düzenlenmesinde kullanılır. shortDate, longDate seklinde kullanılır
    embeddedScreenshots: true, // gömülü ekran görüntüsünü harici bir dosyaya değil direct olarak html rapor dosyasına ekler
    inlineAssets: true, //assets klasorünün html dosyalarını html dosyasına gömülerek eklenmesini saglar
    saveAllAttempts: false,// fail olan testlerde eğer test tekrarı yapıyorsak sadece son teste ait ekran görüntüsünü rapora ekler
    ignoreVideos: false, // true ise testlerin video dosyalarını ignore eder
    videoOnFailOnly: false //true ise sadece fail durumlarında videoyu ekle-false ise tum testlerde videoyu ekle
    //videosOnFailOnly: true/false     komutunun calisabilmesi icin ignoreVideos: false olmasi gerekiyor
  },
  screenshotOnRunFailure: true, // Test fail olduğu durumda ekran dörüntüsü alır (npx cypress run komutu ile test çalıştırıldığında)
  trashAssetsBeforeRuns: true, // Test tekrar çalıştırıldığında önceki testten kalan resim ve videoları siler
  video: true, // Test npx cypress run komutu ile çalıştırıldığında video çeker
  retries: {
    runMode: 0, // npx cypress run komutu ile test çalıştırıldığında, test fail olursa burada belirtilen sayı mitarınca testi tekrar koşar
    openMode: 0, // npx cypress open komutu ile test çalıştırıldığında, test fail olursa burada belirtilen sayı mitarınca testi tekrar koşar
  },
  e2e: {
   //baseUrl:"https://test.salevali.com/auth/login?recaptcha_token=03AAYGu2SpqMrWbLLS6FNvfxgXQ0jc8_YqIRKkJ_4p1JXvZLvtrBp6oHiN7XAgiujUj83_NT3-TfDvLcGEwCHcmKEJg0EjLe4h6rGifbrHTwYalvuqnGcRaM7SM2xAAl9A5bf8AVKliOzNg6dmNRvFFgf__zBy-_SC0DV9igtoGGkmu-IlZUUmYBCb0M0ajkVINBv_7GyAzybNMhMnWgt1JdiA5WU4rGvLlWAQxShz35M4UAtH9Iz55mazZoTkg1urKPbW8u_qz1QClZ2ZFOGuhB3TxlIlvt9H1AycZa-bQyUhRRMHuxPYu8dy-0PtSfKBD0BkZ_h4dn0nFrN-J8rfQuZ61-KH2t4ACk7357rlWUzq2--LrL9UJ_HrfQ2ivtxNnYnS4sFetiDryaQdpmypDT3okWvIVDExH1n2ZkEFF6H8Ir_wknRqiBkGGDTNQk-VrgDImkZEJx7wIh0mEYuKs-ccsUQ1EywfJfJIzw7OdqwtG8dNDpV95KW_0CpE17Csx2qrs_YLc5_tE7J94sAdB0zUNMT5_oXIPSmV44yx6bDafN7kVr80u6k",
  baseUrl: "https://test.salevali.com",
    env: {
      login: '/auth/login?recaptcha_token=03AAYGu2SpqMrWbLLS6FNvfxgXQ0jc8_YqIRKkJ_4p1JXvZLvtrBp6oHiN7XAgiujUj83_NT3-TfDvLcGEwCHcmKEJg0EjLe4h6rGifbrHTwYalvuqnGcRaM7SM2xAAl9A5bf8AVKliOzNg6dmNRvFFgf__zBy-_SC0DV9igtoGGkmu-IlZUUmYBCb0M0ajkVINBv_7GyAzybNMhMnWgt1JdiA5WU4rGvLlWAQxShz35M4UAtH9Iz55mazZoTkg1urKPbW8u_qz1QClZ2ZFOGuhB3TxlIlvt9H1AycZa-bQyUhRRMHuxPYu8dy-0PtSfKBD0BkZ_h4dn0nFrN-J8rfQuZ61-KH2t4ACk7357rlWUzq2--LrL9UJ_HrfQ2ivtxNnYnS4sFetiDryaQdpmypDT3okWvIVDExH1n2ZkEFF6H8Ir_wknRqiBkGGDTNQk-VrgDImkZEJx7wIh0mEYuKs-ccsUQ1EywfJfJIzw7OdqwtG8dNDpV95KW_0CpE17Csx2qrs_YLc5_tE7J94sAdB0zUNMT5_oXIPSmV44yx6bDafN7kVr80u6k',
      register: '/auth/registration'


    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("task", {
        async connectDB(query) {
          const pool = new Pool(dbConfig);
          const results = await pool.query(query);
          return results
        }
      })


    },
  },
});