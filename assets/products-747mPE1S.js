import{y as i,j as m,b as e}from"./main-CPe9heNK.js";const p=i("products",()=>{const n=["maladum"],t=m([]),s=window.localStorage.getItem("my-collection");if(s!=null){const o=s.split(";");t.value.push(...o)}else t.value.push("maladum");const u=e(()=>t.value.length),l=e(()=>n.length),a=e(()=>n);function c(o){return{maladum:"https://battlesystems.co.uk/product/maladum-dungeons-of-enveron-starter-set/"}[o]}function r(){window.localStorage.setItem("my-collection",t.value.join(";"))}return{active:t,inCollectionCount:u,totalCount:l,options:a,getBuyNowLink:c,save:r}});export{p as u};