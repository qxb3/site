import{Z as ae,a0 as re,a1 as $,$ as g,O as D,P as se,i as ne,X as z,a2 as ie,a3 as J,N as O,Q as C,a4 as y,a5 as F,_ as m,a6 as fe,a7 as le,e as K,a8 as k,a9 as P,aa as Y,ab as te,W as ue,ac as ve,ad as _e,J as ce,R as oe,H as de,ae as he,q as pe,s as Q,af as Ee,L as Ne,h as U,ag as Ae,ah as ge}from"./runtime.NMpNLV11.js";function Re(a,e){return e}function Te(a,e,r,s){for(var f=[],v=e.length,_=0;_<v;_++)te(e[_].e,f,!0);var o=v>0&&f.length===0&&r!==null;if(o){var N=r.parentNode;ue(N),N.append(r),s.clear(),x(a,e[0].prev,e[v-1].next)}ve(f,()=>{for(var h=0;h<v;h++){var c=e[h];o||(s.delete(c.k),x(a,c.prev,c.next)),_e(c.e,!o)}})}function ye(a,e,r,s,f,v=null){var _=a,o={flags:e,items:new Map,first:null},N=(e&$)!==0;if(N){var h=a;_=g?D(ce(h)):h.appendChild(ae())}g&&se();var c=null,L=!1;re(()=>{var n=r(),u=ne(n)?n:n==null?[]:z(n),t=u.length;if(L&&t===0)return;L=t===0;let T=!1;if(g){var p=_.data===ie;p!==(t===0)&&(_=J(),D(_),O(!1),T=!0)}if(g){for(var E=null,A,d=0;d<t;d++){if(C.nodeType===8&&C.data===oe){_=C,T=!0,O(!1);break}var i=u[d],l=s(i,d);A=j(C,o,E,null,i,l,d,f,e),o.items.set(l,A),E=A}t>0&&D(J())}if(!g){var H=de;Ie(u,o,_,f,e,(H.f&y)!==0,s)}v!==null&&(t===0?c?F(c):c=m(()=>v(_)):c!==null&&fe(c,()=>{c=null})),T&&O(!0),r()}),g&&(_=C)}function Ie(a,e,r,s,f,v,_){var B,V,X,b;var o=(f&he)!==0,N=(f&(k|Y))!==0,h=a.length,c=e.items,L=e.first,n=L,u,t=null,T,p=[],E=[],A,d,i,l;if(o)for(l=0;l<h;l+=1)A=a[l],d=_(A,l),i=c.get(d),i!==void 0&&((B=i.a)==null||B.measure(),(T??(T=new Set)).add(i));for(l=0;l<h;l+=1){if(A=a[l],d=_(A,l),i=c.get(d),i===void 0){var H=n?n.e.nodes_start:r;t=j(H,e,t,t===null?e.first:t.next,A,d,l,s,f),c.set(d,t),p=[],E=[],n=t.next;continue}if(N&&xe(i,A,l,f),i.e.f&y&&(F(i.e),o&&((V=i.a)==null||V.unfix(),(T??(T=new Set)).delete(i))),i!==n){if(u!==void 0&&u.has(i)){if(p.length<E.length){var R=E[0],I;t=R.prev;var q=p[0],M=p[p.length-1];for(I=0;I<p.length;I+=1)W(p[I],R,r);for(I=0;I<E.length;I+=1)u.delete(E[I]);x(e,q.prev,M.next),x(e,t,q),x(e,M,R),n=R,t=M,l-=1,p=[],E=[]}else u.delete(i),W(i,n,r),x(e,i.prev,i.next),x(e,i,t===null?e.first:t.next),x(e,t,i),t=i;continue}for(p=[],E=[];n!==null&&n.k!==d;)(v||!(n.e.f&y))&&(u??(u=new Set)).add(n),E.push(n),n=n.next;if(n===null)continue;i=n}p.push(i),t=i,n=i.next}if(n!==null||u!==void 0){for(var w=u===void 0?[]:z(u);n!==null;)(v||!(n.e.f&y))&&w.push(n),n=n.next;var S=w.length;if(S>0){var ee=f&$&&h===0?r:null;if(o){for(l=0;l<S;l+=1)(X=w[l].a)==null||X.measure();for(l=0;l<S;l+=1)(b=w[l].a)==null||b.fix()}Te(e,w,ee,c)}}o&&le(()=>{var G;if(T!==void 0)for(i of T)(G=i.a)==null||G.apply()}),K.first=e.first&&e.first.e,K.last=t&&t.e}function xe(a,e,r,s){s&k&&P(a.v,e),s&Y?P(a.i,r):a.i=r}function j(a,e,r,s,f,v,_,o,N){var h=(N&k)!==0,c=(N&Ee)===0,L=h?c?pe(f):Q(f):f,n=N&Y?Q(_):_,u={i:n,v:L,k:v,a:null,e:null,prev:r,next:s};try{return u.e=m(()=>o(a,L,n),g),u.e.prev=r&&r.e,u.e.next=s&&s.e,r===null?e.first=u:(r.next=u,r.e.next=u.e),s!==null&&(s.prev=u,s.e.prev=u.e),u}finally{}}function W(a,e,r){for(var s=a.next?a.next.e.nodes_start:r,f=e?e.e.nodes_start:r,v=a.e.nodes_start;v!==s;){var _=Ne(v);f.before(v),v=_}}function x(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function He(a,e,r,s){var f=a.__attributes??(a.__attributes={});g&&(f[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||f[e]!==(f[e]=r)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[ge]=r),r==null?a.removeAttribute(e):typeof r!="string"&&Le(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var Z=new Map;function Le(a){var e=Z.get(a.nodeName);if(e)return e;Z.set(a.nodeName,e=[]);for(var r,s=U(a),f=Element.prototype;f!==s;){r=Ae(s);for(var v in r)r[v].set&&e.push(v);s=U(s)}return e}function Me(a,e){var r=a.__className,s=we(e);g&&a.className===s?a.__className=s:(r!==s||g&&a.className!==s)&&(e==null?a.removeAttribute("class"):a.className=s,a.__className=s)}function we(a){return a??""}function Se(a,e,r){if(r){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}export{Me as a,ye as e,Re as i,He as s,Se as t};