window.scrollTo(0,0)

// for home page...........................................

HomePage()
// destinationCall()

function HomePage(){

    window.scrollTo(0,0)

    HomeImgChange();

    document.getElementById("homeBut").parentElement.style.backgroundColor = "rgb(229, 229, 229)";

    document.getElementById("homeContainer").style.display="block";

    for(let i=0;i<4;i++){
        document.getElementsByClassName("homeInner")[i].addEventListener("click", ()=>{
            document.getElementById("homeContainer").style.display = "none"
            document.getElementsByClassName("homeInnerPage")[i].style.display = "flex";
            window.scrollTo(0,0)

        })

        document.getElementsByClassName("back")[i].addEventListener("click", ()=>{
            document.getElementById("homeContainer").style.display = "block"
            document.getElementsByClassName("homeInnerPage")[i].style.display = "none";
            window.scrollTo(0,10100)

        })

        document.getElementsByClassName("home")[i].addEventListener("click", ()=>{
            location.reload()
        })
    }

    window.addEventListener("scroll", ()=>{
        const scrolled = window.scrollY;
        console.log(scrolled)
        document.getElementById("homeTop").style.display="flex"
        document.getElementById("homeTop").style.marginTop="0px";
            // if(scrolled<800 && (!scrolled>800)){
            //     document.getElementById("homeTop").style.marginTop="100px";
            //     document.getElementById("homeTop").addEventListener("mouseout", ()=>{
            //         document.getElementById("homeTop").style.marginTop="100px";
            //     })
            //     document.getElementById("visibleHomeTop").addEventListener("mouseout", ()=>{
            //         document.getElementById("homeTop").style.marginTop="100px";
            //     })
            // }

            if((scrolled>800) && (!scrolled<800)){
                document.getElementById("homeTop").style.marginTop="-10vh";

                document.getElementById("visibleHomeTop").addEventListener("mouseover", ()=>{
                    document.getElementById("homeTop").style.marginTop="0px";
                
                })
            }

        if(scrolled>800){
            document.getElementById("backToTop").style.display = "block";
        }

        if(scrolled<800){
            document.getElementById("backToTop").style.display = "none";
        }

    })


    document.getElementById("destBut").addEventListener("click", ()=>{          //render other pages
        $("#wholeContainer").empty();
        destinationCall();
    })
    document.getElementById("expBut").addEventListener("click", ()=>{          //render other pages
        $("#wholeContainer").empty();
        experiencesCall();
    })
    document.getElementById("districtBut").addEventListener("click", ()=>{          //render other pages
        $("#wholeContainer").empty();
        districtCall();
    })
    document.getElementById("galleryBut").addEventListener("click", ()=>{          //render other pages
        $("#wholeContainer").empty();
        galleryCall();
        
    })
    // document.getElementById("homeBut").addEventListener("click", ()=>{          //render other pages
    //     location.reload()
    //     window.scrollTo(0,0)

    // })




    document.getElementById("expDist").addEventListener("click",()=>{
        $("#wholeContainer").empty();
        districtCall();
        $(".but").css({"background-color":"white"})
        $("#but4").css({"background-color":"rgb(230, 230, 230)"})        
    })

    document.getElementById("expGallery").addEventListener("click",()=>{
        $("#wholeContainer").empty();
        galleryCall();       
        $(".but").css({"background-color":"white"})
        $("#but5").css({"background-color":"rgb(230, 230, 230)"})      
    })

    document.getElementById("expExperi").addEventListener("click",()=>{
        $("#wholeContainer").empty();
        experiencesCall();   
        $(".but").css({"background-color":"white"})
        $("#but3").css({"background-color":"rgb(230, 230, 230)"})          
    })

    document.getElementById("expDest").addEventListener("click",()=>{
        $("#wholeContainer").empty();
        destinationCall();   
        $(".but").css({"background-color":"white"})
        $("#but2").css({"background-color":"rgb(230, 230, 230)"})        
    })




    
}







function HomeImgChange(){
    $(document).ready(function(){
        $("#holeImgDiv").ready(function(){
          $("#holeImgDiv").css({"background-image": "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/1-1658836440_e22b34e778a0d0cc8f59.webp')"})
        });
    });

    const timeOut2 = setTimeout(function(){
        $(document).ready(function(){
            $("#holeImgDiv").ready(function(){
              $("#holeImgDiv").css({"background-image": "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/discover-the-divine-at-thanjavur-1658836390_3b3d1f591810747cb4a8.webp')"})
            });
        });
    }, 5000)


    const timeOut3 = setTimeout(function(){
        $(document).ready(function(){
            $("#holeImgDiv").ready(function(){
            $("#holeImgDiv").css({"background-image": "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/indian-dance-festival-1671194076_bd8fc0f4cc4b9877d7d4.webp')"})
            });
        });
    }, 10000)


    const timeOut4 = setTimeout(function(){
        $(document).ready(function(){
            $("#holeImgDiv").ready(function(){
            $("#holeImgDiv").css({"background-image": "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/the-azure-seascape-of-rameswaram-1658836197_d56c9e70ad4258416600.webp')"})
            });
        });
    }, 15000)


    const timeOut5 = setTimeout(function(){
        $(document).ready(function(){
            $("#holeImgDiv").ready(function(){
            $("#holeImgDiv").css({"background-image": "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/mamallapuram-shore-temple-1655101102_fbd673811083794f29eb.webp')"})
            });
        });
    }, 20000)


    const timeOut = setTimeout(function(){
        HomeImgChange()
    }, 25000)

        

}



// unesco image change..........


let unescoImg = ["homeImg/UNESCO img/img1.png","homeImg/UNESCO img/img2.png","homeImg/UNESCO img/img3.png","homeImg/UNESCO img/img4.png","homeImg/UNESCO img/img5.png"]
let nowImg = 0;
function next(){
        nowImg++;
        nowImg = (nowImg > 4) ? 0 : nowImg;
        document.getElementById("unesImg").setAttribute("src", unescoImg[nowImg])
}

function back(){
        nowImg--;
        nowImg = (nowImg < 0) ? 4 : nowImg;
        document.getElementById("unesImg").setAttribute("src", unescoImg[nowImg])
}



//top page change

$(document).ready(function(){
    $(".innerBut").click(function(){
        $(".but").css({"background-color":"white"})
        $(this.parentElement).css({"background-color":"rgb(230, 230, 230)"})
    })
})









// destination page......................................



async function destinationCall(){
    let myPromise = new Promise(function(resolve){
        let req = new XMLHttpRequest();
        req.open("GET", "destination.html");
        req.onload = function(){
            if(req.status==200){
                resolve(req.response);
            }
            else{
                resolve("Page not found")
            }
        }
        req.send()
    }) 
    document.getElementById("wholeContainer").innerHTML = await myPromise;

    // window.scrollTo(0,0)
    document.getElementById("homeBut").addEventListener("click", ()=>{   
           //render other pages
        location.reload()
        window.scrollTo(0,0)

    })






    //hills page..................

    document.getElementById("hillsDiv").addEventListener("click",()=>{
        document.getElementById("destTopUp").style.display="none"
        document.getElementById("hillsPage").style.display="block"
        document.getElementById("destMainVideoDiv").style.display="none"
        // document.getElementById("destMainVideo").pause();


        let hillsPageTextArr = ["Ooty", "Meghamalai","Kodaikanal","Kotagiri","Doddabetta","Coonoor","Valparai","Yercaud","Gudalur"]


        for(let i=0;i<9;i++){
            let a = document.createElement("div");
            a.setAttribute("id", `hillsPageImgDiv${i}`)
            a.setAttribute("class", `hillsPageImgDiv`)
            document.getElementById("hillsPageBodyInner").appendChild(a);

            let b = document.createElement("img");
            b.setAttribute("src", `destinationImg/destHillsImg/img${i+1}.webp`)
            a.appendChild(b)
            b.setAttribute("class", "hillsPageImg")

            let c = document.createElement("h1");
            c.setAttribute("class", "hillsPageText")
            a.appendChild(c)
            c.innerHTML = hillsPageTextArr[i]



            // inner hills page


            document.getElementById(`hillsPageImgDiv${i}`).addEventListener("click",()=>{
                document.getElementById("hillsPage").style.display = "none";
                document.getElementsByClassName("innerHillsPage")[i].style.display = "block";

                document.getElementsByClassName("backHomehills")[i].addEventListener("click", ()=>{
                    location.reload();
                })
            
                document.getElementsByClassName("backDesthills")[i].addEventListener("click", ()=>{
                    document.getElementById("homeTop").style.display="flex"
                    destinationCall();
                    window.scrollTo(0,1200)
                })
            
                document.getElementsByClassName("backBefore")[i].addEventListener("click", ()=>{
                    document.getElementById("hillsPage").style.display = "block";
                    document.getElementsByClassName("innerHillsPage")[i].style.display = "none";
        
                })
            })
        }
    })



    //beaches page.........


    document.getElementById("beachesDiv").addEventListener("click",()=>{
        document.getElementById("destTopUp").style.display="none"
        document.getElementById("beachesPage").style.display="block"
        document.getElementById("destMainVideoDiv").style.display="none"
        // document.getElementById("destMainVideo").pause();



        let beachesPageTextArr = ["Poompuhar Beach", "Kanniyakumari Beach","Mahabalipuram Beach","Covelong Beach","Marina Beach","Dhanushkodi Beach","Rameswaram Beach"]


        for(let i=0;i<7;i++){
            let a = document.createElement("div");
            a.setAttribute("id", `beachesPageImgDiv${i}`)
            a.setAttribute("class", `beachesPageImgDiv`)
            document.getElementById("beachesPageBodyInner").appendChild(a);

            let b = document.createElement("img");
            b.setAttribute("src", `destinationImg/destBeachesImg/img${i+1}.webp`)
            a.appendChild(b)
            b.setAttribute("class", "beachesPageImg")

            let c = document.createElement("h1");
            c.setAttribute("class", "beachesPageText")
            a.appendChild(c)
            c.innerHTML = beachesPageTextArr[i]



            // inner beaches page


            document.getElementById(`beachesPageImgDiv${i}`).addEventListener("click",()=>{
                document.getElementById("beachesPage").style.display = "none";
                document.getElementsByClassName("innerBeachesPage")[i].style.display = "block";

                document.getElementsByClassName("backHomebeach")[i].addEventListener("click", ()=>{
                    location.reload();
                })
            
                document.getElementsByClassName("backDestbeach")[i].addEventListener("click", ()=>{
                    document.getElementById("homeTop").style.display="flex"
                    destinationCall();
                    window.scrollTo(0,1200)
                })
            
                document.getElementsByClassName("backBeforebeach")[i].addEventListener("click", ()=>{
                    document.getElementById("beachesPage").style.display = "block";
                    document.getElementsByClassName("innerBeachesPage")[i].style.display = "none";
        
                })
            })
        }
    })


    //pilgrim page..........


    document.getElementById("pilgrimDiv").addEventListener("click",()=>{
        document.getElementById("destTopUp").style.display="none"
        document.getElementById("pilgrimPage").style.display="block"
        document.getElementById("destMainVideoDiv").style.display="none"
        // document.getElementById("destMainVideo").pause();



        let pilgrimPageTextArr = ["Airavatesvara Temple", "Alagar Kovil","Peruvudaiyar Temple","Arulmigu Dhandayuthapani Swamy Temple, Palani","Gangaikonda Cholapuram","Rameswaram","Mamallapuram Shore Temple","Meenakshi Amman Temple"]


        for(let i=0;i<8;i++){
            let a = document.createElement("div");
            a.setAttribute("id", `pilgrimPageImgDiv${i}`)
            a.setAttribute("class", `pilgrimPageImgDiv`)
            document.getElementById("pilgrimPageBodyInner").appendChild(a);

            let b = document.createElement("img");
            b.setAttribute("src", `destinationImg/destPilgrimImg/img${i+1}.webp`)
            a.appendChild(b)
            b.setAttribute("class", "pilgrimPageImg")

            let c = document.createElement("h1");
            c.setAttribute("class", "pilgrimPageText")
            a.appendChild(c)
            c.innerHTML = pilgrimPageTextArr[i]



            // inner pilgrim page


            document.getElementById(`pilgrimPageImgDiv${i}`).addEventListener("click",()=>{
                document.getElementById("pilgrimPage").style.display = "none";
                document.getElementsByClassName("innerPilgrimPage")[i].style.display = "block";

                document.getElementsByClassName("backHomepilgrim")[i].addEventListener("click", ()=>{
                    location.reload();
                })
            
                document.getElementsByClassName("backDestpilgrim")[i].addEventListener("click", ()=>{
                    document.getElementById("homeTop").style.display="flex"
                    destinationCall();
                    window.scrollTo(0,1200)
                })
            
                document.getElementsByClassName("backBeforepilgrim")[i].addEventListener("click", ()=>{
                    document.getElementById("pilgrimPage").style.display = "block";
                    document.getElementsByClassName("innerPilgrimPage")[i].style.display = "none";
        
                })
            })
        }
    })


    //water falls page...........


    document.getElementById("waterfallsDiv").addEventListener("click",()=>{
        document.getElementById("destTopUp").style.display="none"
        document.getElementById("waterfallsPage").style.display="block"
        document.getElementById("destMainVideoDiv").style.display="none"
        // document.getElementById("destMainVideo").pause();


        let waterfallsPageTextArr = ["Catherine Waterfalls", "Coutrallam Waterfalls","Fairy Falls","Manimuthar Falls","Papanasam Agasthiyar Falls","Thirparappu Falls"]


        for(let i=0;i<6;i++){
            let a = document.createElement("div");
            a.setAttribute("id", `waterfallsPageImgDiv${i}`)
            a.setAttribute("class", `waterfallsPageImgDiv`)
            document.getElementById("waterfallsPageBodyInner").appendChild(a);

            let b = document.createElement("img");
            b.setAttribute("src", `destinationImg/destWaterfallsImg/img${i+1}.webp`)
            a.appendChild(b)
            b.setAttribute("class", "waterfallsPageImg")

            let c = document.createElement("h1");
            c.setAttribute("class", "waterfallsPageText")
            a.appendChild(c)
            c.innerHTML = waterfallsPageTextArr[i]



                    // inner waterfalls page


                    document.getElementById(`waterfallsPageImgDiv${i}`).addEventListener("click",()=>{
                        document.getElementById("waterfallsPage").style.display = "none";
                        document.getElementsByClassName("innerWaterfallsPage")[i].style.display = "block";
        
                        document.getElementsByClassName("backHomeWaterfalls")[i].addEventListener("click", ()=>{
                            location.reload();
                        })
                    
                        document.getElementsByClassName("backDestWaterfalls")[i].addEventListener("click", ()=>{
                            document.getElementById("homeTop").style.display="flex"
                            destinationCall();
                            window.scrollTo(0,1200)
                        })
                    
                        document.getElementsByClassName("backBeforeWaterfalls")[i].addEventListener("click", ()=>{
                            document.getElementById("waterfallsPage").style.display = "block";
                            document.getElementsByClassName("innerWaterfallsPage")[i].style.display = "none";
                
                        })
                    })
        }



    })


    for(let i=0;i<4;i++){
        document.getElementsByClassName("backHome")[i].addEventListener("click", ()=>{
            location.reload();
        })
    
        document.getElementsByClassName("backDest")[i].addEventListener("click", ()=>{
            document.getElementById("homeTop").style.display="flex"
            destinationCall();
            window.scrollTo(0,1200)
        })
    
        // document.getElementsByClassName("backBefore")[i].addEventListener("click", ()=>{
        //     $(".innerPage").empty();
        //     document.getElementsByClassName("destInnerPages")[i].style.display="none";
        //     document.getElementById("destBottomBody").style.display="block";
        //     document.getElementById("backToTop").style.display="block"
        //     document.getElementById("destMainVideoDiv").style.display="block"

        // })
    }




}













async function districtCall(){
    let myPromise = new Promise(function(resolve){
        let req = new XMLHttpRequest();
        req.open("GET", "district.html");
        req.onload = function(){
            if(req.status==200){
                resolve(req.response);
            }
            else{
                resolve("Page not found")
            }
        }
        req.send()
    }) 
    document.getElementById("wholeContainer").innerHTML = await myPromise;


    document.getElementById("homeBut").addEventListener("click", ()=>{          //render other pages
        location.reload()
        window.scrollTo(0,0)

    })

    //district outer page............



    let districtTextArr = ["Madurai", "Chennai", "Coimbatore", "Tenkasi","Tirunelveli","Thoothukudi","Thanjavur","Kanniyakumari","Ramanathapuram","Chengalpattu","Dindigul","Nilgiri"]


    for(let i=0;i<12;i++){
        let a = document.createElement("div");
        a.setAttribute("id", `districtImgDiv${i}`)
        a.setAttribute("class", `districtImgDiv`)
        document.getElementById("districtBody").appendChild(a);

        let b = document.createElement("img");
        b.setAttribute("src", `districtImg/distImg/img${i+1}.webp`)
        a.appendChild(b)
        b.setAttribute("class", "districtImg")

        let c = document.createElement("h1");
        c.setAttribute("class", "districtText")
        a.appendChild(c)
        c.innerHTML = districtTextArr[i]

        let d = document.createElement("span");
        d.setAttribute("class", "districtTextPara")
        a.appendChild(d)
        d.innerHTML = "Explore";
    }


    window.addEventListener("scroll", ()=>{
        const scrolled = window.scrollY;

        for(let i=0, a=700; i<12; i++){
            if(scrolled > i+a){
                $(`#districtImgDiv${i}`).fadeIn(2000);
                $(`#districtImgDiv${i}`).css({"margin-left":"10vw"})
                a = a + 200;
            }
            else{
                $(`#districtImgDiv${i}`).css({"margin-left":"0vw"})
                $(`#districtImgDiv${i}`).fadeOut(2000);
            }
        }
    })




    // inner pages

    for(let i=0; i<12; i++){
        document.getElementsByClassName("districtImgDiv")[i].addEventListener("click", ()=>{
            document.getElementById("districtContainer").style.display="none";
            document.getElementsByClassName("distInnerPages")[i].style.display="block";
            document.getElementsByClassName("distInnerMainImg")[i].setAttribute("src",`districtImg/distInnerPageHeadImg/img${i+1}.webp`);
            document.getElementsByClassName("distName")[i].innerHTML = districtTextArr[i];
            document.getElementsByClassName("weatherMapImg")[i].setAttribute("src",`districtImg/distMapImg/img${i+1}.webp`)
            window.scrollTo(0,0)


            $.ajax({
                method: 'GET',
                url: 'https://api.api-ninjas.com/v1/weather?city=' + districtTextArr[i],
                headers: { 'X-Api-Key': 'tgXV2OR0Oa2Y8crs73FICEOPTKtwfJhiettdMvNM'},
                contentType: 'application/json',
                success: function(result) {
                    let a = JSON.parse(JSON.stringify(result))
                    console.log(a)
                    console.log(a.temp)
                   document.getElementsByClassName("ApiWeather")[i].innerHTML = a.temp + "°C"
                },
                error: function ajaxError(jqXHR) {
                    console.error('Error: ', jqXHR.responseText);
                }
            });


            document.getElementsByClassName("backHome")[i].addEventListener("click", ()=>{
                location.reload()
            })
            document.getElementsByClassName("backDist")[i].addEventListener("click", ()=>{
                districtCall()
                window.scrollTo(0,1300)
            })
        })
    }

}






















//experiencesCall.  page....................



async function experiencesCall(){
    let myPromise = new Promise(function(resolve){
        let req = new XMLHttpRequest();
        req.open("GET", "experiences.html");
        req.onload = function(){
            if(req.status==200){
                resolve(req.response);
            }
            else{
                resolve("Page not found")
            }
        }
        req.send()
    }) 
    document.getElementById("wholeContainer").innerHTML = await myPromise;


    // window.scrollTo(0,0)

    document.getElementById("homeBut").addEventListener("click", ()=>{          //render other pages
        location.reload()
        window.scrollTo(0,0)

    })

    // scroll to image change............

    window.addEventListener("scroll", ()=>{
        const scrolled = window.scrollY;
        if(scrolled < 700){
            document.getElementById("expMain") ? document.getElementById("expMain").style.backgroundImage = "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/mahabalipuram-1654870108_c538505993052d39e713.webp')" : null;
        }
        if(scrolled > 700){
            document.getElementById("expMain") ? document.getElementById("expMain").style.backgroundImage = "url('https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/surfing-1655117557_51bbf6a1c486810f7361.webp')" : null;
        }
        if(scrolled > 2300){
            document.getElementById("expMain") ? document.getElementById("expMain").style.backgroundImage = "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/recipes-1657874104_0bf6e33f49922c4dff87.webp')" : null;
        }
        if(scrolled > 3800){
            document.getElementById("expMain") ? document.getElementById("expMain").style.backgroundImage = "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/events-1657873245_ef3449a214d0ad06f72c.webp')" : null;
        }
        if(scrolled > 5200){
            document.getElementById("expMain") ? document.getElementById("expMain").style.backgroundImage = "url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/alagar-kovil-1656162510_8c9dad4870cf75c56674.webp')" : null;
        }
    })



    // adventure page...............

    let advenPageTextArr = ["Surfing", "Trekking","Scuba Diving","Camping","Hiking","Para Sailing"]

    document.getElementById("expAdvenBut").addEventListener("click", ()=>{
        document.getElementById("expMain").style.display="none"
        document.getElementById("expBody").style.display="none"
        document.getElementById("expAdvenPage").style.display="block";
        window.scrollTo(0,0)


        for(let i=0;i<6;i++){
            let a = document.createElement("div");
            a.setAttribute("id", `advenPageImgDiv${i}`)
            a.setAttribute("class", `advenPageImgDiv`)
            document.getElementById("advenPageBodyInner").appendChild(a);

            let b = document.createElement("img");
            b.setAttribute("src", `experiencesImg/expAdvenImg/img${i+1}.webp`)
            a.appendChild(b)
            b.setAttribute("class", "advenPageImg")

            let c = document.createElement("h1");
            c.setAttribute("class", "advenPageText")
            a.appendChild(c)
            c.innerHTML = advenPageTextArr[i]
        }

    })

        // Foods page...............

        let foodPageTextArr = ["Biriyani", "Kuzhi Paniyaram","Nattukozhi Kozhambu","Kozhukkattai","Idly","Thayir Saadham"]

        document.getElementById("expFoodBut").addEventListener("click", ()=>{
            document.getElementById("expMain").style.display="none"
            document.getElementById("expBody").style.display="none"
            document.getElementById("expFoodPage").style.display="block";
            window.scrollTo(0,0)
    
    
            for(let i=0;i<6;i++){
                let a = document.createElement("div");
                a.setAttribute("id", `foodPageImgDiv${i}`)
                a.setAttribute("class", `foodPageImgDiv`)
                document.getElementById("foodPageBodyInner").appendChild(a);
    
                let b = document.createElement("img");
                b.setAttribute("src", `experiencesImg/expFoodImg/img${i+1}.webp`)
                a.appendChild(b)
                b.setAttribute("class", "foodPageImg")
    
                let c = document.createElement("h1");
                c.setAttribute("class", "foodPageText")
                a.appendChild(c)
                c.innerHTML = foodPageTextArr[i]
            }
    
        })



                // Festival page...............

                let festPageTextArr = ["Pongal", "JalliKattu","Karthigai Deepam","Vinayaka Chathurthi","Deepavali"]

                document.getElementById("expFestBut").addEventListener("click", ()=>{
                    document.getElementById("expMain").style.display="none"
                    document.getElementById("expBody").style.display="none"
                    document.getElementById("expFestPage").style.display="block";
                    window.scrollTo(0,0)
            
            
                    for(let i=0;i<5;i++){
                        let a = document.createElement("div");
                        a.setAttribute("id", `festPageImgDiv${i}`)
                        a.setAttribute("class", `festPageImgDiv`)
                        document.getElementById("festPageBodyInner").appendChild(a);
            
                        let b = document.createElement("img");
                        b.setAttribute("src", `experiencesImg/expFestImg/img${i+1}.webp`)
                        a.appendChild(b)
                        b.setAttribute("class", "festPageImg")
            
                        let c = document.createElement("h1");
                        c.setAttribute("class", "festPageText")
                        a.appendChild(c)
                        c.innerHTML = festPageTextArr[i]
                    }
            
                })


                                // Spritual page...............

                                let spritPageTextArr = ["Peruvudaiyar Temple", "Mamallapuram Shore Temple","Meenakshi Amman Temple","St. Mary’s Cathedral","Velankanni","Thousand Lights Mosque"]

                                document.getElementById("expSpritBut").addEventListener("click", ()=>{
                                    document.getElementById("expMain").style.display="none"
                                    document.getElementById("expBody").style.display="none"
                                    document.getElementById("expSpritPage").style.display="block";
                                    window.scrollTo(0,0)
                            
                            
                                    for(let i=0;i<6;i++){
                                        let a = document.createElement("div");
                                        a.setAttribute("id", `spritPageImgDiv${i}`)
                                        a.setAttribute("class", `spritPageImgDiv`)
                                        document.getElementById("spritPageBodyInner").appendChild(a);
                            
                                        let b = document.createElement("img");
                                        b.setAttribute("src", `experiencesImg/expSpritImg/img${i+1}.webp`)
                                        a.appendChild(b)
                                        b.setAttribute("class", "spritPageImg")
                            
                                        let c = document.createElement("h1");
                                        c.setAttribute("class", "spritPageText")
                                        a.appendChild(c)
                                        c.innerHTML = spritPageTextArr[i]
                                    }
                            
                                })


                                for(let i=0;i<4;i++){
                                    document.getElementsByClassName("backHome")[i].addEventListener("click", ()=>{
                                        location.reload();
                                    })
                                
                                    document.getElementsByClassName("backDest")[i].addEventListener("click", ()=>{
                                        window.scrollTo(0,1200)
                                        experiencesCall();
                                    })
                                }
}













// gallery page...............................................


async function galleryCall(){
    let myPromise = new Promise(function(resolve){
        let req = new XMLHttpRequest();
        req.open("GET", "gallery.html");
        req.onload = function(){
            if(req.status==200){
                resolve(req.response);
            }
            else{
                resolve("Page not found")
            }
        }
        req.send()
    }) 
    document.getElementById("wholeContainer").innerHTML = await myPromise;



    document.getElementById("homeBut").addEventListener("click", ()=>{          //render other pages
        location.reload()
        window.scrollTo(0,0)

    })


    // gallery photos page

// adventure images..........
    

let adventureTextArr = ["Dharmapuri", "Kotagiri", "Covelong", "Kurangani", "Tiruvannamalai"];



    for(let i=0;i<5;i++){
        let a = document.createElement("div");
        document.getElementById("adventurePhotosDiv").appendChild(a);
        a.setAttribute("class", "galleryImgDiv");
        a.setAttribute("id", `adventureImgDiv${i}`)

        let b = document.createElement("img");
        document.getElementById(`adventureImgDiv${i}`).appendChild(b);
        b.setAttribute("class", "galleryImg")
        b.setAttribute("id", `adventureImg${i}`)
        b.setAttribute("src", `galleryImg/adventureImgs/img${i+1}.png`)

        let c = document.createElement("h1");
        document.getElementById(`adventureImgDiv${i}`).appendChild(c);
        c.setAttribute("class", "galleryImgText")
        c.setAttribute("id", `adventureText${i}`)
        document.getElementById(`adventureText${i}`).innerText = adventureTextArr[i];

    }


// Art & culture images..............

    let artCultureTextArr = ["Bharatanatyam", "Jallikattu", "Kolam", "Bronze Sculptures, Thanjavur", "Therukoothu", "Veena"]

    for(let i=0;i<6;i++){
        let a = document.createElement("div");
        document.getElementById("artCulturePhotosDiv").appendChild(a);
        a.setAttribute("class", "galleryImgDiv");
        a.setAttribute("id", `artCultureImgDiv${i}`);

        let b = document.createElement("img");
        document.getElementById(`artCultureImgDiv${i}`).appendChild(b);
        b.setAttribute("class", "galleryImg")
        b.setAttribute("id", `artCultureImg${i}`)
        b.setAttribute("src", `galleryImg/artCultureImg/img${i+1}.png`)

        let c = document.createElement("h1");
        document.getElementById(`artCultureImgDiv${i}`).appendChild(c);
        c.setAttribute("class", "galleryImgText")
        c.setAttribute("id", `artCultureText${i}`)
        document.getElementById(`artCultureText${i}`).innerText = artCultureTextArr[i];

    }


    // beach images................

    let beachTextArr = ["Marina Beach", "Dhanushkodi", "Kanniyakumari", "Pondicherry Rock Beach", "Rameswaram", "Erayumanthurai"]

    for(let i=0;i<6;i++){
        let a = document.createElement("div");
        document.getElementById("beachPhotosDiv").appendChild(a);
        a.setAttribute("class", "galleryImgDiv");
        a.setAttribute("id", `beachImgDiv${i}`);

        let b = document.createElement("img");
        document.getElementById(`beachImgDiv${i}`).appendChild(b);
        b.setAttribute("class", "galleryImg")
        b.setAttribute("id", `beachImg${i}`)
        b.setAttribute("src", `galleryImg/beachImg/img${i+1}.png`)

        let c = document.createElement("h1");
        document.getElementById(`beachImgDiv${i}`).appendChild(c);
        c.setAttribute("class", "galleryImgText")
        c.setAttribute("id", `beachText${i}`)
        document.getElementById(`beachText${i}`).innerText = beachTextArr[i];

    }


    // cuisine images..................

    let cuisineTextArr = ["Kozhukkattai", "Elumbu Roast", "Kuzhi Paniyaram","Maapilai Samba Arisi Murukku","Munthiri Kothu","Murukku","Paruthi Paal","Poondu Oorgai & Thayir Saadham","Vathakuzhambu"]

    for(let i=0;i<9;i++){
        let a = document.createElement("div");
        document.getElementById("cuisinePhotosDiv").appendChild(a);
        a.setAttribute("class", "galleryImgDiv");
        a.setAttribute("id", `cuisineImgDiv${i}`);

        let b = document.createElement("img");
        document.getElementById(`cuisineImgDiv${i}`).appendChild(b);
        b.setAttribute("class", "galleryImg")
        b.setAttribute("id", `cuisineImg${i}`)
        b.setAttribute("src", `galleryImg/cuisineImg/img${i+1}.png`)

        let c = document.createElement("h1");
        document.getElementById(`cuisineImgDiv${i}`).appendChild(c);
        c.setAttribute("class", "galleryImgText")
        c.setAttribute("id", `cuisineText${i}`)
        document.getElementById(`cuisineText${i}`).innerText = cuisineTextArr[i];

    }


    // hills images

    let hillsTextArr = ["Avalanche Hills, Ooty", "Coonoor","Karaiyar Dam","Kil Kotagiri","Kodaikanal","Maruthamalai","Pachaimalai","The Nilgiri Mountains Range","Tirusulam","Valparai","Yercaud"]

    for(let i=0;i<11;i++){
        let a = document.createElement("div");
        document.getElementById("hillsPhotosDiv").appendChild(a);
        a.setAttribute("class", "galleryImgDiv");
        a.setAttribute("id", `hillsImgDiv${i}`);

        let b = document.createElement("img");
        document.getElementById(`hillsImgDiv${i}`).appendChild(b);
        b.setAttribute("class", "galleryImg")
        b.setAttribute("id", `hillsImg${i}`)
        b.setAttribute("src", `galleryImg/hillsImg/img${i+1}.png`)

        let c = document.createElement("h1");
        document.getElementById(`hillsImgDiv${i}`).appendChild(c);
        c.setAttribute("class", "galleryImgText")
        c.setAttribute("id", `hillsText${i}`)
        document.getElementById(`hillsText${i}`).innerText = hillsTextArr[i];

    }

    // place of interst images

    let placeOfInterestTextArr = ["Adavinainar Dam","Bhavanisagar Dam","Gudalur","Karaiyar Dam","Keeriparai","Pollachi","Pamban Bridge","Rameswaram","Valparai"]

    for(let i=0;i<9;i++){
        let a = document.createElement("div");
        document.getElementById("placeOfInterestPhotosDiv").appendChild(a);
        a.setAttribute("class", "galleryImgDiv");
        a.setAttribute("id", `placeOfInterestImgDiv${i}`);

        let b = document.createElement("img");
        document.getElementById(`placeOfInterestImgDiv${i}`).appendChild(b);
        b.setAttribute("class", "galleryImg")
        b.setAttribute("id", `placeOfInterestImg${i}`)
        b.setAttribute("src", `galleryImg/placeOfInterestImg/img${i+1}.png`)

        let c = document.createElement("h1");
        document.getElementById(`placeOfInterestImgDiv${i}`).appendChild(c);
        c.setAttribute("class", "galleryImgText")
        c.setAttribute("id", `placeOfInterestText${i}`)
        document.getElementById(`placeOfInterestText${i}`).innerText = placeOfInterestTextArr[i];

    }


    // water falls images

    let waterFallsTextArr = ["Agathiyar Falls","Catherine Waterfalls","Manimuthar Falls","Peraruvi","Thirparappu Waterfalls"]

    for(let i=0;i<5;i++){
        let a = document.createElement("div");
        document.getElementById("waterFallsPhotosDiv").appendChild(a);
        a.setAttribute("class", "galleryImgDiv");
        a.setAttribute("id", `waterFallsImgDiv${i}`);

        let b = document.createElement("img");
        document.getElementById(`waterFallsImgDiv${i}`).appendChild(b);
        b.setAttribute("class", "galleryImg")
        b.setAttribute("id", `waterFallsImg${i}`)
        b.setAttribute("src", `galleryImg/waterFallsImg/img${i+1}.png`)

        let c = document.createElement("h1");
        document.getElementById(`waterFallsImgDiv${i}`).appendChild(c);
        c.setAttribute("class", "galleryImgText")
        c.setAttribute("id", `waterFallsText${i}`)
        document.getElementById(`waterFallsText${i}`).innerText = waterFallsTextArr[i];

    }


    // wild life images


    let wildlifeTextArr = ["Amirthi Zoological Park","Anaimalai Tiger Reserve","Guindy National Park","Mudumalai National Park","Pulicat Lake Birds Sanctuary","Vedanthangal Bird Sanctuary"]

    for(let i=0;i<6;i++){
        let a = document.createElement("div");
        document.getElementById("wildlifePhotosDiv").appendChild(a);
        a.setAttribute("class", "galleryImgDiv");
        a.setAttribute("id", `wildlifeImgDiv${i}`);

        let b = document.createElement("img");
        document.getElementById(`wildlifeImgDiv${i}`).appendChild(b);
        b.setAttribute("class", "galleryImg")
        b.setAttribute("id", `wildlifeImg${i}`)
        b.setAttribute("src", `galleryImg/wildlifeImg/img${i+1}.png`)

        let c = document.createElement("h1");
        document.getElementById(`wildlifeImgDiv${i}`).appendChild(c);
        c.setAttribute("class", "galleryImgText")
        c.setAttribute("id", `wildlifeText${i}`)
        document.getElementById(`wildlifeText${i}`).innerText = wildlifeTextArr[i];

    }






    for(let i=0;i<57;i++){
        document.getElementsByClassName("galleryImg")[i].addEventListener("click",(event)=>{
            document.getElementById("bigSizePhotoDiv").style.display="flex"
            console.log(event.target)
            document.getElementById("bigImg").appendChild(event.target)


            document.getElementById("closeBigImg").addEventListener("click", ()=>{
                document.getElementsByClassName("galleryImgDiv")[i].appendChild(event.target)
                document.getElementsByClassName("galleryImgDiv")[i].appendChild(document.getElementsByClassName("galleryImgText")[i])
                document.getElementById("bigSizePhotoDiv").style.display = "none";
                $("#bigImg").empty()
            })
            })


    }








    // gallery video page





    let c = document.getElementsByClassName("galleryMainVideo1")


    for(let i=0; i<6; i++){


        document.getElementsByClassName("clic")[i].addEventListener("click",()=>{
            document.getElementById("bigSizePhotoDiv").style.display="flex"
            console.log(c[i].firstChild)
            document.getElementById("bigImg").appendChild(c[i].firstChild)
            // galleryMainVideo.pause()
        })
    
        document.getElementById("closeBigImg").addEventListener("click", ()=>{
            document.getElementById("bigSizePhotoDiv").style.display = "none";
            $("#bigImg").empty()
        })
    }


 
}




    
