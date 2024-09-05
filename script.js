var playlist = [
    {
    img: "hq720.webp",
    profile: "channels4_profile.jpg",
    title: "Decoding Stackoverflow developer survey for Indian Developers",
    views: "27K views",
    timing: "5 days"
},
{
    img: "hq720.webp",
    profile: "channels4_profile.jpg",
    title: "Decoding Stackoverflow developer survey for Indian Developers",
    views: "27K views",
    timing: "5 days"
},
{
    img: "hq720.webp",
    profile: "channels4_profile.jpg",
    title: "Decoding Stackoverflow developer survey for Indian Developers",
    views: "27K views",
    timing: "5 days"
},
{
    img: "hq720.webp",
    profile: "channels4_profile.jpg",
    title: "Decoding Stackoverflow developer survey for Indian Developers",
    views: "27K views",
    timing: "5 days"
},
{
    img: "hq720.webp",
    profile: "channels4_profile.jpg",
    title: "Decoding Stackoverflow developer survey for Indian Developers",
    views: "27K views",
    timing: "5 days"
}
]

playlist.forEach(
    video => {


    var wrapper=document.createElement('div');
    wrapper.className='wrapper';


    //  const content=document.getElementById('dips');
    //  content.className="main-containt";
    //   wrapper.appendChild(content);

        var main = document.getElementbyId('div');
        main.className="main-containt-left";
        wrapper.appendChild(main);
       
        var topMain = document.createElement("div");
        topMain.className = "main-containt-left-one";
        main.appendChild(topMain);


        var boxSlide = document.createElement("div");
        boxSlide.className = "box-slide";
        topMain.appendChild(boxSlide);
     
        // box slideup img
        var boxSlideUp = document.createElement("div");
        boxSlideUp.className = "box-slide-up";
        boxSlide.appendChild(boxSlideUp);

        var img = document.createElement("img");
        img.src = video.img;
        boxSlideUp.appendChild(img);


         // low 
        var boxSlideLow = document.createElement("div");
        boxSlideLow.className = "box-slide-low";
        boxSlide.appendChild(boxSlideLow);

        var lowLeft = document.createElement("div");
        lowLeft.className = "low-left";
        boxSlideLow.appendChild(lowLeft);

        var img = document.createElement("img");
        img.src = video.img;
        lowLeft.appendChild(img);

        var lowMid = document.createElement("div");
        lowMid.className = "low-mid";
        boxSlideLow.appendChild(lowMid);


        var h4 = document.createElement("h4");
        h4.textContent = video.title;
        lowMid.appendChild(h4);

        var p = document.createElement("p");
        p.innerHTML = "Chai aur Code <br> 27K views .5 days";
        lowMid.appendChild(p);


        var lowRight = document.createElement("div");
        lowRight.className = "low-right";
        boxSlideLow.appendChild(lowRight);

        var i = document.createElement("i");
        i.className = "ri-more-2-line";
        lowRight.appendChild(i);



   
     


    }
)
