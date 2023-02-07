// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAV70152L0u6QO83UOOcTLycozn60iH2eU",
    authDomain: "demo2-378d6.firebaseapp.com",
    databaseURL: "https://demo2-378d6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "demo2-378d6",
    storageBucket: "demo2-378d6.appspot.com",
    messagingSenderId: "644860204624",
    appId: "1:644860204624:web:d2a88b32aab89dc79b2355",
    measurementId: "G-377GL88PNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
const db = getDatabase();


function InsertData(temp, hum) {
    set(ref(db, 'Data/'), {
        Temp: document.querySelector('#tempInput').value,
        Hum: document.querySelector('#humInput').value
    })
        .then(() => {
            console.log("DONE")
        })
        .catch((e) => {
            console.log("ERROR " + e)
        })
}

function ReadData(where = "Data") {
    get(child(ref(db), where + '/')).then((dataReceive) => {
        if (dataReceive.exists()) {
            document.querySelector('#temp').innerText = dataReceive.toJSON().Temp;
            document.querySelector('#hum').innerText = dataReceive.toJSON().Hum;
        }
    })
}

document.querySelector('#update').addEventListener('click', () => {
    InsertData(50, 20);
    ReadData();
})


