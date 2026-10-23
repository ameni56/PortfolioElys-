(function(){
    "use strict";
    function el(tag,props,children){
        const node=document.createElement(tag);
        //Parcourt les propriétés reçues pour les appliquer à l'élement HTML
        Object.entries(props || {}).forEach(([k,v])=>
        {
            if(k==="class") node.className=v;
            else if(k==="text") node.textContent=v;
            else node.setAttribute(k,v);
        })
   
//Parcourt les enfants reçus pour les ajouter à l'élement crée
(children||[]).forEach(c=>{
    if(c) node.appendChild(c);
}
)
return node;

 }
//Déclarer une fonction fléchée qui crée une étiquette avec un texte et un style facultatif
const tagEl=(label,dark)=>{
    el("span",{
        class:"tag"+(dark?"d":""),
        text:label
    });

//Déclarer une fonction fléchée qui crée une étiquette représentant une technologie
const techEl=t=>
    el("span",{class:"tag tech"},[
        t.logo 
        ?el("img",{
            src:"assets/icons/"+t.logo+".svg",
            alt:"",
            width:"16",
            height:"16",
            
        })
        :null,
        document.createTextNode(t.nom)
    ]);
//Déclarer une fonction qui affiche les compétences dans la page
function renderSkills(){
    const grid=document.getElementById("skills-grid");
    if(!grid || typeof SKILLS==="undefined"){
        console.error("Données des compétences introuvables");
        return;
    }
    grid.replaceChildren();
    SKILLS.forEach(s=>{
        grid.appendChild(
            el("div",{class:"card"},
                [
                    el("h3",{text:s.titre}),
                    ...s.tags.map(t=>tagEl(t,s.dark))
                ])
        );
    })
}


}

})

