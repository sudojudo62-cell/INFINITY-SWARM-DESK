const radial=document.getElementById("radial");
const run=document.getElementById("runBtn");
let running=false;

function pulse(){
  running=!running;
  run.textContent=running?"PLANNER RUNNING…":"RUN PLANNER";
  run.style.background=running?"#ff4c42":"#eee";
  run.style.color=running?"#fff":"#050505";
  radial.style.transform=running?"scale(1.035)":"scale(1)";
  radial.style.transition="transform .5s ease";
}
run.addEventListener("click",pulse);

document.querySelectorAll(".tab").forEach((b,i)=>{
  b.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    document.querySelector(".tabs span").textContent =
      `stage ${i+1} active · ${["root","offer","surface","hunt","clock"][i] || "review"} planning pass`;
  });
});

// Lightweight ALPINE-inspired planning state: graph nodes represent workflow stages.
// The UI is deliberately deterministic; connect real data sources/backends separately.
const planGraph={
  root:["offer"],
  offer:["surface"],
  surface:["hunt"],
  hunt:["clock"],
  clock:["root"]
};
window.ChatGPTBot20={version:"2.0",planGraph};
