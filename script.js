function select (id){
    if (id==="venti"){
        document.getElementById("image-details").src = "./src/assets/venti-details.webp";
        document.getElementById("archon").innerHTML= "Venti";
        document.getElementById("archon-desc").innerHTML = "Venti is a playable Anemo character in Genshin Impact. He is a free-spirited, wine-loving bard in Mondstadt and the current mortal vessel of Barbatos, the Anemo Archon.";
    }
    
    else if (id==="zhongas") {
        document.getElementById("image-details").src = "./src/assets/zhongli-detaails.webp";
        document.getElementById("archon").innerHTML = "Zhongli";
        document.getElementById("archon-desc").innerHTML = "Zhongli (Chinese: 钟离 Zhōnglí) is a playable Geo character in Genshin Impact. A consultant of the Wangsheng Funeral Parlor, he is later revealed to be the current vessel of the Geo Archon, Morax, who has decided to experience the world from the perspective of a mortal.";

    }

    else if (id==="raiden"){
        document.getElementById("image-details").src = "./src/assets/shogun-details.webp";
        document.getElementById("archon").innerHTML = "Raiden Shogun";
        document.getElementById("archon-desc").innerHTML = "The Raiden Shogun (Japanese: 雷らい電でん将しょう軍ぐん Raiden Shougun) is a playable Electro character in Genshin Impact. The Raiden Shogun is unique as she is comprised of two beings in one body: Ei, the current Electro Archon of Inazuma; and the Shogun, the puppet created by Ei to act as the ruler of Inazuma in her stead, which also serves as her vessel.";
    }

    else if (id==="nahida"){
        document.getElementById("image-details").src = "./src/assets/nahida-details.webp";
        document.getElementById("archon").innerHTML = "Nahida";
        document.getElementById("archon-desc").innerHTML = "Nahida is a playable Dendro character in Genshin Impact. She is the vessel of Buer, as Lesser Lord Kusanali,[5] the current Dendro Archon. Having been freed from her extensive confinement in the Sanctuary of Surasthana, she now strives to have a stronger presence in Sumeru.";
    }
    
    else if (id==="focaloira"){
        document.getElementById("image-details").src = "./src/assets/focaloira.png";
        document.getElementById("archon").innerHTML = "Furina";
        document.getElementById("archon-desc").innerHTML = "???";
    }

    document.getElementById("image-details").classList.add("animation");
    setTimeout(() => {
    document.getElementById("image-details").classList.remove("animation");
    }, 2000)

}

function init (){
    document.getElementById("image-details").classList.add("animation");
    setTimeout(() => {
        document.getElementById("image-details").classList.remove("animation");
        }, 2000)
}

window.onload = init;
