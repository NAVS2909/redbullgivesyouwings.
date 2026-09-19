const products=[
["ORIGINAL","RED BULL","The original Red Bull.<br>With the unique combination<br>of high-quality ingredients.","#168cff","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/ad3b2bd89c/us_ed_250ml_energy-drink_country_rgb__cold_closed_front_com_25.png/m/168x0"],
["SUGARFREE","RED BULL","The same distinctive Red Bull taste, without sugar.","#a8c5e8","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/e54b40774e/us_sf_250ml_sugarfree_country_rgb__cold_closed_front_com_25.png/m/168x0"],
["ZERO","RED BULL","A zero-sugar take on the Red Bull experience.","#85899a","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/deda1afb1a/us_zr_250ml_zero_country_rgb_packrq-1775_cold_closed_front_com_25.png/m/168x0"],
["SUMMER","SUMMER EDITION","A refreshing seasonal Edition with a bright fruity character.","#ff5147","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/f49ccb7907/us_sl_250ml_ac_the-summer-edition_country_rgb_packrq-3659_cold_closed_front_com_full.png/m/352x0"],
["APPLE","APPLE EDITION","Fuji Apple & Ginger.","#69d84e","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/0931ffd0d1/us_fai_250ml_ac_the-apple-edition_country_rgb_niti8-226_cold_closed_front_com_25.png/m/352x0"],
["ICED","ICED EDITION","Iced Vanilla Berry.","#36aaff","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/ff40331efd/us_igb_250ml_ac_the-iced-edition_country_rgb_packrq-3370_cold_closed_front_com_full.png/m/352x0"],
["PEACH","PEACH EDITION","White Peach.","#ff9e42","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/a305efe037/us_wp_250ml_ac_the-peach-edition_country_rgb_packrq-3055_cold_closed_front_com_full.png/m/352x0"],
["PINK","PINK EDITION","Wild Berries.","#ff45a6","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/b44f42cfb0/us_ff_250ml_the-pink-edition_country_rgb_packrq-2064_cold_closed_front_com_full.png/m/352x0"],
["AMBER","AMBER EDITION","Strawberry & Apricot.","#ff9a3a","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/51b3b7127e/us_as_250ml_the-amber-edition_country_rgb__cold_closed_front_com_full.png/m/352x0"],
["SEA BLUE","SEA BLUE EDITION","Juneberry.","#37c6f3","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/31141b9a15/us_jb_250ml_the-sea-blue-edition_country_rgb_do242582_cold_closed_front_com_25.png/m/352x0"],
["COCONUT","COCONUT EDITION","Coconut & Berry.","#d8e5ef","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/c076e29890/us_cc_250ml_ac_the-coconut-edition_country_rgb__cold_closed_front_com_full.png/m/352x0"],
["YELLOW","YELLOW EDITION","Tropical Fruits.","#f4c72a","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/50f9e68454/us_yl_250ml_the-yellow-edition_country_rgb__cold_closed_front_com_25.png/m/352x0"],
["RED","RED EDITION","Watermelon.","#ef3340","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/7d77a8f904/us_wm_250ml_ac_the-red-edition_country_rgb__cold_closed_front_com_25.png/m/352x0"],
["SUMMER SUGARFREE","SUMMER EDITION","Sugarfree Summer Edition.","#70aee8","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/79afbb6187/us_sf-sl_250ml_ac_the-summer-edition-sugarfree_country_rgb_packrq-3763_cold_closed_front_com_25.png/m/168x0"],
["ICED SUGARFREE","ICED EDITION","Sugarfree Iced Vanilla Berry.","#79b8ee","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/8c39bc6dc2/us_sf-igb_250ml_ac_the-iced-edition-sugarfree_country_rgb_packrq-3371_cold_closed_front_com_full.png/m/168x0"],
["PEACH SUGARFREE","PEACH EDITION","Sugarfree White Peach.","#ffc184","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/b80a915d72/us_sf-wp_250ml_ac_the-peach-edition-sugarfree_country_rgb_packrq-3056_cold_closed_front_com_full.png/m/168x0"],
["PINK SUGARFREE","PINK EDITION","Sugarfree Wild Berries.","#ff79bd","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/54293be9a2/us_sf-ff_250ml_the-pink-edition-sugarfree_country_rgb__cold_closed_front_com_25.png/m/168x0"],
["SEA BLUE SUGARFREE","SEA BLUE EDITION","Sugarfree Juneberry.","#67d8f3","https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/d52df1907a/us_sf-jb_250ml_the-sea-blue-edition-sugarfree_country_rgb_packrq-2269_cold_closed_front_com_full.png/m/168x0"]
];

let current=0;
const $=id=>document.getElementById(id);
$("total").textContent=products.length;

function setTheme(){
 const p=products[current];
 document.documentElement.style.setProperty("--accent",p[3]);
 const hex=p[3].replace("#","");
 const r=parseInt(hex.slice(0,2),16),g=parseInt(hex.slice(2,4),16),b=parseInt(hex.slice(4,6),16);
 document.documentElement.style.setProperty("--accent-rgb",`${r},${g},${b}`);
 $("hero").style.background=`radial-gradient(ellipse at 50% 43%,rgba(${r},${g},${b},.28) 0%,rgba(${r},${g},${b},.10) 25%,transparent 49%),radial-gradient(ellipse at 50% 85%,rgba(${r},${g},${b},.17),transparent 46%),#020305`;
 $("edition").textContent=p[0];
 $("title").textContent=p[1];
 $("description").innerHTML=p[2];
 $("count").textContent=current+1;
}

function buildCarousel(){
 const track=$("track");
 track.innerHTML="";
 products.forEach((p,i)=>{
  const el=document.createElement("div");
  el.className="flavor"+(i===current?" active":"");
  el.innerHTML=`<img src="${p[4]}" alt="${p[0]}"><div class="flavor-name">${p[0]}</div>`;
  el.onclick=()=>goTo(i);
  track.appendChild(el);
 });
 requestAnimationFrame(()=>{
   const active=track.children[current];
   if(active) active.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});
 });
}

function buildDots(){
 const d=$("dots"); d.innerHTML="";
 for(let i=0;i<6;i++){
   const x=document.createElement("span");
   x.className="dot"+(Math.floor(current/(products.length/6))===i?" active":"");
   d.appendChild(x);
 }
}

function goTo(n){
 n=(n+products.length)%products.length;
 if(n===current)return;
 const holder=$("canHolder");
 holder.classList.remove("enter");
 holder.classList.add("exit");
 setTimeout(()=>{
   current=n;
   $("mainCan").src=products[current][4];
   holder.classList.remove("exit");
   void holder.offsetWidth;
   holder.classList.add("enter");
   setTheme();
   buildCarousel();
   buildDots();
   setTimeout(()=>holder.classList.remove("enter"),700);
 },280);
}

function step(n){goTo(current+n)}

$("nextMain").onclick=()=>step(1);
$("nextSide").onclick=()=>step(1);
$("next").onclick=()=>step(1);
$("prev").onclick=()=>step(-1);

$("mainCan").src=products[0][4];
setTheme();
buildCarousel();
buildDots();

document.addEventListener("keydown",e=>{
 if(e.key==="ArrowRight")step(1);
 if(e.key==="ArrowLeft")step(-1);
});

let touchX=0;
document.addEventListener("touchstart",e=>touchX=e.touches[0].clientX,{passive:true});
document.addEventListener("touchend",e=>{
 const dx=e.changedTouches[0].clientX-touchX;
 if(Math.abs(dx)>55)step(dx<0?1:-1);
},{passive:true});
