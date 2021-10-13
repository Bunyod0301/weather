
let d= new Date()
document.getElementById("data").innerText = d.toDateString(Date)
let weather = fetch("https://api.openweathermap.org/data/2.5/weather?q=urganch&appid=11383a422946d6690d8e97982829c739&units=metric")
    weather.then( res =>
        res.json()).then(d => {
            document.getElementById("gradus").innerText = parseInt(d.main.temp)+"°"
            document.getElementById("bosim").innerText = d.main.pressure + " "+"mm"+" "+"Hg"
            document.getElementById("miqdor").innerText = d.main.humidity +"%"+" " +"humidity"
            document.getElementById("tezlik").innerText = d.wind.speed +"m/s"
            if(d.main.humidity>60) {
                document.getElementById("")
            }
        })
let fetchers = fetch("https://api.openweathermap.org/data/2.5/forecast?q=Urganch&appid=11383a422946d6690d8e97982829c739&units=metric")
    fetchers.then(res =>
        res.json()).then(b =>{
            let s = ""
            let s1 = ""
            let s2 = ""
            let s3 = ""
            let s4 = ""
            let dt_txt
            for(let i=0;i<10;i++) {
                s+= b.list[10].dt_txt[i]
                s1+= b.list[18].dt_txt[i]
                s2+= b.list[26].dt_txt[i]
                s3+= b.list[34].dt_txt[i]
                s4+= b.list[39].dt_txt[i]
            }
            console.log(b)
            document.getElementById("data1").innerText = s
            document.getElementById("data2").innerText = s1
            document.getElementById("data3").innerText = s2
            document.getElementById("data4").innerText = s3
            document.getElementById("data5").innerText = s4
            document.getElementById("weather1").innerText = b.list[10].main.temp +"°"
            document.getElementById("weather2").innerText = b.list[18].main.temp +"°"
            document.getElementById("weather3").innerText = b.list[26].main.temp +"°"
            document.getElementById("weather4").innerText = b.list[34].main.temp +"°"
            document.getElementById("weather5").innerText = b.list[39].main.temp +"°"
        })
preloader=()=> {
    setInterval( function(){
        document.getElementById("grid").style.transform = "translate(0, -30px)"
        document.getElementById("grid").style.opacity = "1"
        document.getElementById("gradus").style.transform = "translate(0,0)"
        document.getElementById("tezliklar").style.transform = "translate(0,0)"
        document.getElementById("gradus").style.opacity = "1"
        document.getElementById("tezliklar").style.opacity = "1"
    },1000)
}
ok=()=> {
    let search = document.getElementById("search").value
    let ff = "https://api.openweathermap.org/data/2.5/weather?q="+search+"&appid=11383a422946d6690d8e97982829c739&units=metric"
    let fd = "https://api.openweathermap.org/data/2.5/forecast?q="+search+"&appid=11383a422946d6690d8e97982829c739&units=metric"
    let weather = fetch(ff)
    weather.then( res =>
        res.json()).then(d => {
            document.getElementById("gradus").innerText = parseInt(d.main.temp)+"°"
            document.getElementById("bosim").innerText = d.main.pressure + " "+"mm"+" "+"Hg"
            document.getElementById("miqdor").innerText = d.main.humidity +"%"+" " +"humidity"
            document.getElementById("tezlik").innerText = d.wind.speed +"m/s"
        })
        let fetchers = fetch(fd)
        fetchers.then(res =>
            res.json()).then(b =>{
                let s = ""
                let s1 = ""
                let s2 = ""
                let s3 = ""
                let s4 = ""
                let dt_txt
                for(let i=0;i<10;i++) {
                    s+= b.list[10].dt_txt[i]
                    s1+= b.list[18].dt_txt[i]
                    s2+= b.list[26].dt_txt[i]
                    s3+= b.list[34].dt_txt[i]
                    s4+= b.list[39].dt_txt[i]
                }
                console.log(b)
                document.getElementById("data1").innerText = s
                document.getElementById("data2").innerText = s1
                document.getElementById("data3").innerText = s2
                document.getElementById("data4").innerText = s3
                document.getElementById("data5").innerText = s4
                document.getElementById("weather1").innerText = b.list[10].main.temp +"°"
                document.getElementById("weather2").innerText = b.list[18].main.temp +"°"
                document.getElementById("weather3").innerText = b.list[26].main.temp +"°"
                document.getElementById("weather4").innerText = b.list[34].main.temp +"°"
                document.getElementById("weather5").innerText = b.list[39].main.temp +"°"
                document.getElementById("hududlar").innerText = b.city.name
                if(b.city.name =="Urgench" || b.city.name =="Khiva") {
                    document.getElementById("hududlar").innerText = "Xorazm"
                    document.getElementById("section").style.backgroundImage = "url('./khiva-boyjon-ota-urganch-1609730935.jpg')"
                    document.getElementById("section1").style.backgroundImage = "url('./khiva-boyjon-ota-urganch-1609730935.jpg')"
                }
                else {
                    document.getElementById("section").style.backgroundImage = "url('./photo-1592210454359-9043f067919b.jpeg')"
                    document.getElementById("section1").style.backgroundImage = "url('./photo-1592210454359-9043f067919b.jpeg')"
                }
            })
       
        document.getElementById("grid").style.transform = "translate(0, 40px)"
        document.getElementById("grid").style.opacity = "0"
        document.getElementById("gradus").style.transform = "translate(-150px,0)"
        document.getElementById("tezliklar").style.transform = "translate(150px,0)"
        document.getElementById("gradus").style.opacity = "0"
        document.getElementById("tezliklar").style.opacity = "0"
document.getElementById("search").value = ""
}
document.onkeydown=function(b) {
    if(b.ctrlKey && b.keyCode =='U'.charCodeAt(0) ) {
        return false;
    }
    if(b.keyCode ==123) {
        return false;
    }
}
window.oncontextmenu=function(){
    alert("Code Zashitalangan")
    return false;
}
