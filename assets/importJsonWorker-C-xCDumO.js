(function(){"use strict";self.addEventListener("message",e=>{try{const s=new TextDecoder().decode(e.data);self.postMessage({ok:!0,value:JSON.parse(s)})}catch{self.postMessage({ok:!1})}})})();
