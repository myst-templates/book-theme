import{c as B,i as b,j as f,k as h,m as y,p as w}from"/myst_assets_folder/_shared/chunk-RMYRWJKG.js";var S=B((I,q)=>{b();f();h();w();y();q.exports=s;s.displayName="qsharp";s.aliases=["qs"];function s(i){(function(n){function o(e,t){return e.replace(/<<(\d+)>>/g,function(a,m){return"(?:"+t[+m]+")"})}function r(e,t,a){return RegExp(o(e,t),a||"")}function k(e,t){for(var a=0;a<t;a++)e=e.replace(/<<self>>/g,function(){return"(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}var u={type:"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero",other:"Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within"};function v(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var l=RegExp(v(u.type+" "+u.other)),x=/\b[A-Za-z_]\w*\b/.source,p=o(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[x]),d={keyword:l,punctuation:/[<>()?,.:[\]]/},g=/"(?:\\.|[^\\"])*"/.source;n.languages.qsharp=n.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[g]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[p]),lookbehind:!0,inside:d},{pattern:r(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[p]),lookbehind:!0,inside:d}],keyword:l,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),n.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var c=k(o(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[g]),2);n.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:r(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[c]),greedy:!0,inside:{interpolation:{pattern:r(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[c]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:n.languages.qsharp}}},string:/[\s\S]+/}}})})(i),i.languages.qs=i.languages.qsharp}});export{S as a};