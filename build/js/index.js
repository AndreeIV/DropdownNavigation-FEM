window.addEventListener("DOMContentLoaded",app);const toggleHeader=(n,e,l="0",t="0")=>{const a=document.getElementById(n),i=document.querySelector(".navigation"),s=document.getElementById("background");a.addEventListener("click",(function(){i.style.right=t,i.style.transition="all .2s linear",s.style.left=l,s.style.backgroundColor=e,s.style.transition="all .2s linear"}))},plantillaFeatures='\n\n    <ul class="container__li-created features">\n            \n        <li>\n            <img src="./images/icon-todo.svg" alt="">\n            Todo List\n        </li>\n\n        <li>\n            <img src="./images/icon-calendar.svg" alt="">\n            Calendar\n        </li>\n\n        <li>\n            <img src="./images/icon-reminders.svg" alt="">\n            Reminders\n        </li>\n        <li>\n            <img src="./images/icon-planning.svg" alt="">\n            Plannig\n        </li>\n\n    </ul>\n',plantillaCompany='\n    <ul class="container__li-created company">\n                \n        <li>\n            History\n        </li>\n\n        <li>\n            Our Team\n        </li>\n\n        <li>\n            Blog\n        </li>\n\n    </ul>\n',createFeatures=(n,e,l,t,a,i)=>{const s=document.getElementById(t),o=document.getElementById(l),r=document.getElementById(a),c=document.getElementById(i);s.addEventListener("click",(()=>{o.childNodes.length>"1"?(c.style.display="block",r.style.display="none",o.style.display="none",o.innerHTML=""):(c.style.display="none",r.style.display="block",o.style.display=n,o.innerHTML=e)}))};function app(){toggleHeader("open-burger","hsla(0, 0%, 8%, .8)"),toggleHeader("close-burger","hsla(0, 0%, 8%, 0)","-35%","-65%"),createFeatures("flex",plantillaFeatures,"appFeatures","features","arrow-up-f","arrow-down-f"),createFeatures("flex",plantillaCompany,"appCompany","company","arrow-up-c","arrow-down-c")}
//# sourceMappingURL=index.js.map
