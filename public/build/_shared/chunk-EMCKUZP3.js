import{c,i as r,j as a,k as n,m as o,p as i}from"/myst_assets_folder/_shared/chunk-RMYRWJKG.js";var l=c((p,s)=>{r();a();n();i();o();s.exports=t;t.displayName="unrealscript";t.aliases=["uc","uscript"];function t(e){e.languages.unrealscript={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},category:{pattern:/(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,lookbehind:!0,greedy:!0,alias:"property"},metadata:{pattern:/(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,lookbehind:!0,greedy:!0,inside:{property:/\b\w+(?=\s*=)/,operator:/=/,punctuation:/[<>|]/}},macro:{pattern:/`\w+/,alias:"property"},"class-name":{pattern:/(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,lookbehind:!0},keyword:/\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/>>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,punctuation:/[()[\]{};,.]/},e.languages.uc=e.languages.uscript=e.languages.unrealscript}});export{l as a};