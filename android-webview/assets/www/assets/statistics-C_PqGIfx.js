import{z as a}from"./index-CsM9_UgH.js";function i(s,r){const t=new URLSearchParams;return s&&t.set("start_date",s),r&&t.set("end_date",r),a(`/statistics${t.toString()?`?${t}`:""}`)}export{i as g};
