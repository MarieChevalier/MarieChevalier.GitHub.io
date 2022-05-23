/* function pour créer l'animation APRèS le chargement du SVG */
gsap.registerPlugin(MorphSVGPlugin,DrawSVGPlugin);

function anim(){
    // réglages
    tl.pause();

    tl.set("#fondblanc",{
        opacity:0,
    },0)

    tl.set("#gridR",{
        opacity:0,
    },0)

    tl.set("#miniature",{
        opacity:0,
    },0)

//faire apparaitre le damier 

    tl.set("#damier>*",{
        opacity:0,
    },0)

    tl.to("#damier>*",{
         opacity:1, duration:0, stagger:0.01, 
    },0)

    tl.to("#damier>*", {
        transformOrigin: "center center",
    }, 0);

    /*tl.to("#rectangle>*",{
        rotate : 360, stagger:0.03, 
    },1)*/

// next step, 3e seconde, faire apparaitre des cercles pour retablir le fond noir

    tl.set("#cercleblanc",{
        opacity:0,
    },0)

    tl.set("#cerclenoir",{
        opacity:0,
    },0)

    tl.set("#cercleblanc2",{
        opacity:0,
    },0)

    tl.set("#cerclenoir2",{
        opacity:0,
    },0)

    tl.to("#cercleblanc",{
        opacity:1, 
        duration:0,
    },3.1)

    tl.to("#cercleblanc",{
        scale: 40,
        duration: 0.5, 
        transformOrigin: "center center", 
    },3.1)

    tl.set("#damier",{
        opacity:0,
    },3.5)

    tl.set("#cerclenoir",{
        opacity:1, 
    },3.7)

    tl.to("#cerclenoir",{
        scale: 40,
        duration: 0.5, 
        transformOrigin: "center center", 
    },3.7)

    tl.to("#cercleblanc2",{
        opacity:1, 
    },4.4)

    tl.to("#cercleblanc2",{
        scale: 40,
        duration: 0.5, 
        transformOrigin: "center center", 
    },4.4)

    tl.set("#cerclenoir2",{
        opacity:1, 
    },5.1)

    tl.to("#cerclenoir2",{
        scale: 40,
        duration: 0.5, 
        transformOrigin: "center center", 
    },5.1)

    tl.set("#cercleblanc",{
        opacity:0,
    },6)

    tl.set("#cerclenoir",{
        opacity:0,
    },6)

    tl.set("#cercleblanc2",{
        opacity:0,
    },6)

    tl.set("#cerclenoir2",{
        opacity:0,
    },6)

// 6e seconde, draw la borne d'arcade 


    tl.set("#arcade",{
        opacity:0, 
    },0)

    tl.set("#arcade",{
        opacity:1, 
    },6)
    
    tl.fromTo("#arcade>*",{drawSVG:"0 5%"},{drawSVG:"100%",duration:2},6)

//faire apparaitre texte borne d'arcade 


    tl.set("#pressstart>*",{
        opacity:0, 
    },0)

    tl.to("#pressstart>*",{
        opacity:1, stagger:0.1, duration:0,
    },8)

    tl.set("#start",{
        opacity:0, 
    },0)

    tl.set("#start",{
        opacity:1, 
    },10)

    tl.set("#start",{
        opacity:0, 
    },10.7)

    tl.set("#start",{
        opacity:1, 
    },11.4)

    tl.set("#start",{
        opacity:0, 
    },12)

    tl.set("#start",{
        opacity:1, 
    },12.7)

    tl.set("#start",{
        scale:0.8,
        duration:2,
        transformOrigin:"center center",
    },14)

    tl.to("#pressstart>*",{
        opacity:0, 
        duration:0.5,
    },15)

    tl.to("#start",{
        opacity:0, 
        duration:0.5,
    },15)


// explosion de points derriere la borne d'arcade 

    tl.set("#cercles",{
        opacity:0, 
    },0)

    tl.set("#cercles",{
        opacity:1,
        duration:0,
    },8)

    tl.to("#cercles>*",{
        y: "random(-1000,1000)",
        x: "random(-1000,1000)",
        stagger:0.001,
        duration:1, 
    },14)

    tl.to("#cercles",{
        opacity:0, 
        duration:1,
    },15)
    

// grossir la borne d'arcade 

    tl.to("#arcade",{
        transformOrigin: "center center",
        scale:1.5, duration:1,
    },15)

 //faire apapraitre la grille 3d dans la borne d'arcade 

    tl.set("#didier",{
        opacity:0, 
    },0)
    
    tl.set("#michel",{
        opacity:0, 
    },0)

    tl.set("#didier",{
        opacity:1, 
    },16)
    
    tl.set("#michel",{
        opacity:1, 
    },17)

    tl.fromTo("#michel>*",{drawSVG:"0 0%"},{drawSVG:"100%",duration:2},17)
    tl.fromTo("#didier>*",{drawSVG:"0 0%"},{drawSVG:"100%",duration:2},16)

//faire bouger des trucs sur la grille 


    tl.set("#arcade2",{
        opacity:0, 
    },0)

    tl.set("#arcade2",{
        opacity:1, 
        scale:1.5,
        duration:0,
        y:-297,
        x:-1.2,
        transformOrigin: "center center,"
    },18)

    tl.set("#boules>*",{
        opacity:0, 
    },0)

    tl.to("#boules>*",{
        opacity:1, 
        duration:0,
        stagger:0.3,
    },19)

    tl.to("#boules>*",{
        stagger:0.3,
        y: "random(200,300)",
        x: "random(-400,400)",
        scale:2.5,
        duration:2,
    },19)

    tl.set("#boules>*",{
        opacity:0, 
    },23)

//faire disparaitre la grille 3d dans la borne d'arcade  
    
    tl.fromTo("#didier>*",{drawSVG:"0 100%"},{drawSVG:"0%",duration:2},21)
    tl.fromTo("#michel>*",{drawSVG:"0 100%"},{drawSVG:"0%",duration:2},22)

//faire apparaitre la grille du soleil 

    tl.set("#lignesvert",{
        opacity:0, 
    },0)

   tl.set("#lignesvert",{
        opacity:1, 
    },23)

    tl.fromTo("#lignesvert>*",{drawSVG:"0 0%"},{drawSVG:"100%",duration:1,stagger: {from: "center",amount: 1.5}},23)


    tl.set("#ligneshorz",{
        opacity:0, 
    },0)

    tl.to("#ligneshorz",{
        opacity:1, duration:0,
    },23)
    
    tl.fromTo("#ligneshorz>*",{drawSVG:"0 0%"},{drawSVG:"100%",duration:1,stagger: {from: "center",amount: 1.5}},23)
    

 // faire apparaitre soleil pixel

    tl.set("#soleilrondpixel>*",{
        opacity:0, 
    },0)

    tl.to("#soleilrondpixel>*",{
        opacity:1, stagger:0.05, duration:0,
    },25)

// faire apparaitre soleil sans pixel en fond 

    tl.set("#soleilorange",{
        opacity:0, 
    },0)

    tl.set("#soleilorange",{
        opacity:1, duration:0,
    },29)

    tl.set("#soleilrondpixel>*",{
        opacity:0, duration:0,
    },29)

    tl.fromTo("#ligneshorz>*",{drawSVG:"0 100%"},{drawSVG:"0%",duration:1, stagger: {from: "random",amount: 1.5}},29)
    tl.fromTo("#lignesvert>*",{drawSVG:"0 100%"},{drawSVG:"0%",duration:1,stagger: {from: "center",amount: 1.5}},29)
    
    tl.set("#soleilrouge",{
        opacity:0, 
    },0)

    tl.to("#soleilrouge",{
        opacity:1, duration:2,
    },29)
    
    tl.set("#soleilorange",{
        opacity:0, duration:0,
    },31)

    tl.to("#soleilrouge",{
        opacity:1, duration:2,
    },29)

    tl.to("#soleilrouge",{
        transformOrigin:"center center",
        scale:0,
    },31)


//snake 

    tl.set("#snake>*",{
        opacity:0, 
    },0)

    /* tl.to("#snake>*",{
        opacity:1, stagger:0.1,
    },23)

    tl.to("#snake>*",{
        opacity:0, stagger:0.1,
    },24) */

    tl.set("#arcade2",{
        opacity:0, 
    },25) 


// rentrer dans l'écran de la borne d'arcade 

    tl.to("#arcade",{
        y: 700,
        scale:5,
        duration:2,
    },32)

    tl.set("#arcade",{
        opacity:0, 
    },36)

 // texte après être rentré dans l'écran de la borne d'arcade (33sec)
    

    tl.set("#cercledeg",{
        opacity:0, transformOrigin: "center center",
    },0) 

    tl.to("#cercledeg",{
        opacity:1, duration:2, 
    },32) 

    tl.to("#cercledeg",{
         rotate:360,duration:2,
    },33) 

    tl.to("#cercledeg",{
        opacity:0, duration:2, 
    },36) 


    


//rectanglish 


    tl.set("#rectanglish>*",{
    transformOrigin: "center center", 
    },0)

    tl.set("#rectanglish>*",{
    opacity:0, 
    },0)

    tl.set("#rectanglish>*",{
    opacity:1, 
    },37)

    tl.fromTo("#rectanglish>*",{scale:1},{scale:50,duration:1,stagger:0.2},37)


    

 //faire disparaitre la grille 2d au début du clip

    tl.set("#grid2d",{
        opacity:0,
    },0)

//faire apparaitre au fur et a mesure la grille 3d qui se dessine 

    tl.set("#grid3d>*",{
        opacity:0,
    },0)

    //lignes verticales

    tl.to("#grid3d #V1",{
        opacity:1, duration:0,
    },38)

    tl.to("#grid3d #V2",{
        opacity:1, duration:0,
    },38.1)

    tl.to("#grid3d #V3",{
        opacity:1, duration:0,
    },38.2)

    tl.to("#grid3d #V4",{
        opacity:1, duration:0,
    },38.3)

    tl.to("#grid3d #V5",{
        opacity:1, duration:0,
    },38.4)

    tl.to("#grid3d #V6",{
        opacity:1, duration:0,
    },38.5)

    tl.to("#grid3d #V7",{
        opacity:1, duration:0,
    },38.6)

    tl.to("#grid3d #V8",{
        opacity:1, duration:0,
    },38.7)

    tl.to("#grid3d #V9",{
        opacity:1, duration:0,
    },38.8)

    tl.to("#grid3d #V10",{
        opacity:1, duration:0,
    },38.9)

    tl.to("#grid3d #V11",{
        opacity:1, duration:0,
    },39)
    
    tl.to("#grid3d #V12",{
        opacity:1, duration:0,
    },39.1)

    tl.to("#grid3d #V13",{
        opacity:1, duration:0,
    },39.2)

    tl.to("#grid3d #V14",{
        opacity:1, duration:0,
    },39.3)

    tl.to("#grid3d #V15",{
        opacity:1, duration:0,
    },39.4)

        //lignes horizontales

    tl.to("#grid3d #H13", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 40)

    tl.to("#grid3d #H13",{
        scaleX: 2, duration: 1,
    },40)

    tl.to("#grid3d #H12", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 40.6)

    tl.to("#grid3d #H12",{
        scaleX: 2, duration: 1,
    },40.6)

    tl.to("#grid3d #H11", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 41.2)

    tl.to("#grid3d #H11",{
        scaleX: 2, duration: 1,
    },41.2)

    tl.to("#grid3d #H10", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 41.8)

    tl.to("#grid3d #H10",{
        scaleX: 2, duration: 1,
    },41.8)

    tl.to("#grid3d #H9", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 42.4)

    tl.to("#grid3d #H9",{
        scaleX: 2, duration: 1,
    },42.4)

    tl.to("#grid3d #H8", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 43)

    tl.to("#grid3d #H8",{
        scaleX: 2, duration: 1,
    },43)

    tl.to("#grid3d #H7", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 43.6)

    tl.to("#grid3d #H7",{
        scaleX: 2, duration: 1,
    },43.6)

    tl.to("#grid3d #H6", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 44.2)

    tl.to("#grid3d #H6",{
        scaleX: 2, duration: 1,
    },44.2)

    tl.to("#grid3d #H5", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 44.8)

    tl.to("#grid3d #H5",{
        scaleX: 2, duration: 1,
    },44.8)

    tl.to("#grid3d #H4", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 45.4)

    tl.to("#grid3d #H4",{
        scaleX: 2, duration: 1,
    },45.4)

    tl.to("#grid3d #H3", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 46)

    tl.to("#grid3d #H3",{
        scaleX: 2, duration: 1,
    },46)

    tl.to("#grid3d #H2", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 46.6)

    tl.to("#grid3d #H2",{
        scaleX: 2, duration: 1,
    },46.6)

    tl.to("#grid3d #H1", {
        scaleX: 0,
        duration: 0,
        opacity:1,
    }, 47.2)

    tl.to("#grid3d #H1",{
        scaleX: 2, duration: 1,
    },47.2)

    //leiso variable 

    tl.set("#leiso",{
        opacity:0, duration:0,
    },0)

    tl.set("#rectnoir",{
        opacity:0, duration:0,
    },0)

    tl.set("#brume",{
        opacity:0, duration:0,
    },0)

    tl.to("#leiso",{
        opacity:1, y:400, duration:0,
    },46)

    tl.to("#leiso",{
        y:0, duration:4,
    },48)

    tl.to("#leiso",{
        y:400, duration:4,
    },57)

    tl.to("#brume",{
        opacity:1, y:400, duration:0,
    },46)

    tl.to("#brume",{
        y:0, duration:2,
    },49)

    tl.to("#brume",{
        y:400, duration:2,
    },56)

    tl.to("#rectnoir",{
        opacity:1,
    },42)

    tl.set("#leiso",{
        opacity:0, duration:0,
    },59)

    tl.set("#rectnoir",{
        opacity:0, duration:0,
    },59)

    tl.set("#brume",{
        opacity:0, duration:0,
    },59)

    //changement de la grille 3d en grille 2d 
    
    tl.to ("#grid3d #H9", {
        y:-525,
        duration: 1.5,
    }, 59)
    
    tl.to ("#grid3d #H10", {
        y:-575,
        duration: 1.5,
    }, 59)

    tl.to ("#grid3d #H11", {
        y:-625,
        duration: 1.5,
    }, 59)

    tl.to ("#grid3d #H12", {
        y:-675,
        duration: 1.5,
    }, 59)

    tl.to ("#grid3d #H13", {
        y:-725,
        duration: 1.5,
    }, 59)

    tl.to('#grid3d #H1',{morphSVG:'#grid2d #grilleH1',duration:1.5},59);
    tl.to('#grid3d #H2',{morphSVG:'#grid2d #grilleH2',duration:1.5},59);
    tl.to('#grid3d #H3',{morphSVG:'#grid2d #grilleH3',duration:1.5},59);
    tl.to('#grid3d #H4',{morphSVG:'#grid2d #grilleH4',duration:1.5},59);
    tl.to('#grid3d #H5',{morphSVG:'#grid2d #grilleH5',duration:1.5},59);
    tl.to('#grid3d #H6',{morphSVG:'#grid2d #grilleH6',duration:1.5},59);
    tl.to('#grid3d #H7',{morphSVG:'#grid2d #grilleH7',duration:1.5},59);
    tl.to('#grid3d #H8',{morphSVG:'#grid2d #grilleH8',duration:1.5},59);
    tl.to('#grid3d #V8',{morphSVG:'#grid2d #grilleV8',duration:1.5},59);
    tl.to('#grid3d #V7',{morphSVG:'#grid2d #grilleV7',duration:1.5},59);
    tl.to('#grid3d #V6',{morphSVG:'#grid2d #grilleV6',duration:1.5},59);
    tl.to('#grid3d #V5',{morphSVG:'#grid2d #grilleV5',duration:1.5},59);
    tl.to('#grid3d #V9',{morphSVG:'#grid2d #grilleV9',duration:1.5},59);
    tl.to('#grid3d #V10',{morphSVG:'#grid2d #grilleV10',duration:1.5},59);
    tl.to('#grid3d #V11',{morphSVG:'#grid2d #grilleV11',duration:1.5},59);
    tl.to('#grid3d #V4',{morphSVG:'#grid2d #grilleV4',duration:1.5},59);
    tl.to('#grid3d #V3',{morphSVG:'#grid2d #grilleV3',duration:1.5},59);
    tl.to('#grid3d #V2',{morphSVG:'#grid2d #grilleV2',duration:1.5},59);
    tl.to('#grid3d #V1',{morphSVG:'#grid2d #grilleV2',duration:1.5},59);
    tl.to('#grid3d #V12',{morphSVG:'#grid2d #grilleV12',duration:1.5},59);
    tl.to('#grid3d #V13',{morphSVG:'#grid2d #grilleV13',duration:1.5},59);
    tl.to('#grid3d #V14',{morphSVG:'#grid2d #grilleV14',duration:1.5},59);
    tl.to('#grid3d #V15',{morphSVG:'#grid2d #grilleV14',duration:1.5},59); 

    /*tl.to ("#grid3d", {
        scale:1.5,
        duration: 2,
        transformOrigin: "center center",
    }, 50.2)*/

    tl.to("#grid3d",{
        opacity:0,
        duration:0,
    },62)

    tl.to("#gridR",{
        opacity:1, duration:0,
    },62)

    tl.to("#gridR>*",{
        transformOrigin: "center center",
        scale:0.8,
        stagger: {
            from: "center",
            amount: 1.5
          }
    },62)

    tl.to("#gridR>*",{
        transformOrigin: "center center",
        scale:0,
        stagger: {
            from: "end",
            amount: 1.5
          }
    },64)


 //ellipse

    tl.set("#ellipse>*",{
        opacity:0, transformOrigin:"center center",
    },0)

    tl.to("#ellipse>*",{
        opacity:1, stagger:0.1, duration:0,
    },65)

    tl.to("#ellipse>*",{
        scale:1.2, stagger:0.1, duration:0.5,
    },65.5)

    tl.to("#ellipse>*",{
        scale:1, stagger:0.1, duration:0.5,
    },66)

    tl.to("#ellipse>*",{
        scale:1.2, stagger:0.1, duration:0.5,
    },66.5)

    tl.to("#ellipse>*",{
        scale:1, stagger:0.1, duration:0.5,
    },66)

    tl.to("#ellipse>*",{
        scale:1.2, stagger:0.1, duration:0.5,
    },67.5)

    tl.to("#ellipse>*",{
        scale:1, stagger:0.1, duration:0.5,
    },68)

    tl.to("#ellipse>*",{
        scale:0, stagger:0.1, duration:1,
    },69)

//hill

    tl.set("#arcwave",{
        opacity:0, transformOrigin:"center center"
    },0)

    tl.set("#arcwave",{
        opacity:1, transformOrigin: "center center", 
    },68)

    tl.fromTo("#arcwave",{drawSVG:"0 5%"},{drawSVG:"100%",duration:2},68)

    tl.set("#arcwave2>*",{
        opacity:0, 
    },0)

    tl.to("#arcwave2>*",{
        opacity:1, stagger:0.3,
    },70)

    tl.to("#arcwave2>*",{
        opacity:0, stagger:0.3,
    },71)

    tl.to("#arcwave>*",{
        scale:0, stagger:0.1, duration:1,
    },72)

//marie chevalier

tl.set("#marie",{
    opacity:0, 
},0)

tl.set("#marie",{
    opacity:1, 
},74)

tl.fromTo("#marie>*",{drawSVG:"0 5%"},{drawSVG:"100%",duration:2},74)
tl.fromTo("#marie>*",{drawSVG:"0 100%"},{drawSVG:"5%",duration:2},78)


tl.set("#marie",{
    opacity:0, 
},80)

//ESAD

tl.set("#ESAD>*",{
    opacity:0, 
},0)

tl.set("#ESAD>*",{
    opacity:1, 
},80)

tl.fromTo("#ESAD>*",{drawSVG:"0 5%"},{drawSVG:"100%",duration:2},80)
tl.fromTo("#ESAD>*",{drawSVG:"0 100%"},{drawSVG:"5%",duration:2},84)


tl.set("#ESAD",{
    opacity:0, 
},86)

//music


tl.set("#music",{
    opacity:0, 
},0)

tl.set("#music",{
    opacity:1, 
},86)

tl.fromTo("#music>*",{drawSVG:"0 5%"},{drawSVG:"100%",duration:2},86)
tl.fromTo("#music>*",{drawSVG:"0 100%"},{drawSVG:"5%",duration:2},90)


tl.set("#music",{
    opacity:0, 
},82)

}

    